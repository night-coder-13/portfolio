<template>
    <div id="contact" class="flex flex-col items-center justify-center h-[100vh] w-full relative py-8 mt-3 z-50">
        <div class="relative">
            <h3 class="text-4xl">تماس با من</h3>
            <div class="w-full">
                <h3 class="text-5xl text-green opacity-60 absolute top-5 -left-10 w-48 -z-10 en-title">Contact me</h3>
            </div>
        </div>
        <div class="w-full pt-10 p-8">
            <div class="flex py-8 px-4">
                <div class="w-2/4 p-4">
                    <h5 class="text-2xl">فرم تماس با من</h5>
                    <p class="text-base mt-2 mr-1 text-gray-400">اطلاعات خودرا در این قسمت وارد کنید در کم ترین زمان
                        ممکن با شما تماس خواهم گرفت.</p>
                    <form action="" class="m-4 ml-8 mr-1">
                        <UInput color="white" variant="outline" class="p-2" placeholder="نام و نام‌خانوادگی" />
                        <UInput color="white" variant="outline" class="p-2" placeholder="شماره تماس" />
                        <UInput color="white" variant="outline" class="p-2" placeholder="موضوع درخواست" />
                        <UTextarea color="white" variant="outline" class="p-2" placeholder="توضیحات" />
                        <UButton color="gray" variant="solid" size="sm"
                            class="mt-4 mr-6 border-2 hover:border-gray-700 border-green-500">ثبت درخواست</UButton>
                    </form>
                </div>
                <div class="w-2/4 grid h-full content-center gap-2 justify-items-center">
                    <h5 class="text-center text-2xl my-4 text-gray-200 mt-28">در شبکه های مجازی با من درارتباط باشد</h5>
                    <ul class="text-center grid grid-cols-4 w-2/4 m-auto content-center gap-3 justify-items-center">
                        <li class="text-gray-300 hover:text-emerald-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                <path d="M16.5 7.5v.01" />
                            </svg>
                        </li>
                        <li class="text-gray-300 hover:text-emerald-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                            </svg>
                        </li>
                        <li class="text-gray-300 hover:text-emerald-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path
                                    d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                            </svg>
                        </li>
                        <li class="text-gray-300 hover:text-emerald-400 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 11v5" />
                                <path d="M8 8v.01" />
                                <path d="M12 16v-5" />
                                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                            </svg>
                        </li>
                    </ul>
                    <h5 class="text-center text-2xl ext-gray-200 mt-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-phone mx-2 text-green">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        شماره تماس
                    </h5>
                    <p class="text-center text-lg text-green font-bold mt-2">0993-179-9332 | 0990-277-4517</p>
                </div>
            </div>
        </div>
        <hr class="w-full">
        <p class="text-center Iran-yekan text-sm">{ بهترین سرمایه انسان، دانش اوست }</p>
    </div>
</template>
<script setup>
import { gsap } from 'gsap';


onMounted(() => {
   

});
</script>
