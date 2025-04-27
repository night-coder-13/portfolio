<template>
    <form action="" class="px-4 py-2">
        <UInput v-model="title" color="white" variant="outline" style="background: none;" class="p-2 bg-transparent dark:bg-transparent" :class="Error_title" placeholder="عنوان"  />
        <UTextarea v-model="text" color="white" variant="outline" style="background: none;" class="p-2 bg-transparent dark:bg-transparent" :class="Error_text" placeholder="توضیحات"  />
        <UButton @click="Add" color="gray" variant="solid" size="sm"  style="background: none;"
        class="mt-4 mr-6 border-2 hover:border-gray-700 border-green-500 text-white">{{ !loader ? 'ثبت کار' : 'درحال ارسال' }}</UButton>
    </form>
</template>
<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
const { public: { BaseUrl } } = useRuntimeConfig();

const title = ref('');
const text = ref('');
const Error_title = ref('border-red-500');
const Error_text = ref('border-red-500');
const loader = ref(false);
const Add = async () => {
    try {
        let token = useCookie('token');
        loader.value = true
        const response = await axios.post(`${BaseUrl}/works`,
            {
                title: title.value,
                text: text.value,
                // crfToken : crf.value
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token.value
                }
            }
        );
        loader.value = false
        Swal.fire({
                title: 'عملیات موفق',
                icon: 'success',
                confirmButtonText: `
                    <i class="fa fa-thumbs-up"></i> حله!
                `,
                confirmButtonColor: '#09925f',  // سبز
            });
    } catch (err) {
        if (err.response.data['message']) {
            let text = err.response?.data?.errors?.title || err.response?.data?.errors?.text || '';
            Swal.fire({
                title: "لطفا در وارد نمودن اطلاعات خود دقت فرمایید .",
                text: text,
                icon: "info",
                confirmButtonText: `
                    <i class="fa fa-thumbs-up"></i> حله!
                `,
            });
        }

        loader.value = false
        Error_title.value = err.response.data.title ? 'border-red-500' : 'border-0'
        Error_text.value = err.response.data.text ? 'border-red-500' : 'border-0'
        // $log( err.response.data , 0) ;
    }
};
</script>