<template>
    <div class="flex justify-center items-center w-full h-[95vh]">
        <form @submit.prevent="Login"
            class="flex flex-col justify-center items-center lg:w-3/12 md:w-5/12 sm:w-7/12 w-10/12 p-3 h-80 bg-[#0e1932] rounded-lg shadow-lg border-gray-700 border-[1px]">
            <span>
                <i class="fa-solid fa-right-to-bracket text-5xl text-white"></i>
            </span>
            <span class="mt-4 text-center text-base text-gray-100">خوش آمدید</span>
            <span class="mt-1 mb-3 text-center text-sm text-gray-300">لطفا نام کاربری و گذرواژه خود را وارد کنید</span>
            <!-- <span class="text-red-500 " v-text="Error_username"></span> -->
            <input v-model="username" type="text" placeholder="نام کاربری" :class="Error_username"
                class="relative block w-10/12 mt-4 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                style="background: none;">
            <!-- <span class="text-red-500 mt-1" v-text="Error_password"></span> -->
            <input v-model="password" type="password" placeholder="گذرواژه" :class="Error_password"
                class="relative block w-10/12 mt-4 disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                style="background: none;">
            <button @click="Login()" :disabled="loader"
                class="text-center p-1 text-sm w-5/12 mt-4 bg-green-600 hover:bg-green-500 cursor-pointer text-white rounded-lg"
                name="" id="">
                <i v-if="!loader" class="fa-solid fa-door-open"></i>
                {{ loader ? 'منتظر بمانید ...' : 'ورود به کارتابل' }}
            </button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';

const { $log } = useNuxtApp();

const { public: { BaseUrl } } = useRuntimeConfig();
const loader = ref(false);
const username = ref('');
const password = ref(null);
const Error_username = ref('border-0');
const Error_password = ref('border-0');
const Login = async () => {
    try {
        loader.value = true
        const response = await axios.post(`${BaseUrl}/admin/login`,
            {
                username: username.value,
                password: password.value,
                // crfToken : crf.value
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        loader.value = false
        document.cookie = "token = "+response.data['token']
        Swal.fire({
                title: 'ورود موفق',
                icon: 'success',
                confirmButtonText: 'ورود به پنل',
                confirmButtonColor: '#09925f',  // سبز
            }).then((result) => {
                if (result.isConfirmed) {
                    return navigateTo("/sas")
                } else if (result.isDismissed) {
                    console.log("کاربر پاپ‌آپ را لغو کرد.");
                }
            });
    } catch (err) {
        if (err.response.data['message']) {
            let text = err.response.data['message']
            Swal.fire({
                title: "لطفا در وارد نمودن اطلاعات خود دقت فرمایید .",
                text: text,
                icon: "info",
                confirmButtonText: `
                    <i class="fa fa-thumbs-up"></i> حله!
                `,
            });
        }

        console.log(err.response)
        loader.value = false
        Error_password.value = err.response.data.password ? 'border-red-500' : 'border-0'
        Error_username.value = err.response.data.username ? 'border-red-500' : 'border-0'
        // $log( err.response.data , 0) ;
    }
};
</script>