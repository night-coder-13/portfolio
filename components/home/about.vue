<template>
    <div id="about" class="flex flex-col items-center justify-center h-auto w-full relative py-8 mt-3">
        <div class="relative">
            <h3 class="text-4xl">درباره من</h3>
            <div class="w-full">
                <h3 class="text-5xl text-green opacity-60 absolute top-5 -left-12 w-48 -z-10 en-title">ABOUT ME</h3>
            </div>
        </div>
        <div class="w-full pt-10 md:p-8">
            <h3 class="text-2xl sm:text-3xl text-gray-100">برنامه نویس و توسعه دهنده فول‌استک</h3>
            <h4 class="text-2xl text-green">Full-stack developer</h4>
            <p class="text-sm sm:text-base text-gray-300 font-bold mt-3 mr-4 leading-7">
                سلام مهدی هستم ،برنامه نویس و طراح وبسایت با تجربه در زمینه <span class="text-green mx-1">PHP</span> و
                <span class="text-green mx-1">JAVASCRIPT</span> و
                همچنین با مجموعه ای از ابزار ها و فریمورک ها مثل <span class="text-green mx-1">NUXT.JS , LARAVEL ,
                    VUE.JS</span> کار کرده
                .ام
                <br>
                من به عنوان یک برنامه‌نویس فول‌استک، با فرانت‌اند و بک‌اند آشنا هستم و در طراحی و توسعه پروژه‌های
                متنوع شرکت داشتم. طراحی <span class="text-green mx-1">UI/UX</span> هم خیلی برام جذابه و سعی کردم در کنار
                برنامه‌نویسی، توی
                این زمینه هم تجربه کسب کنم.
                <br>
                من، به تکنولوژی‌های جدید علاقه دارم و می‌خواهم توی دنیای برنامه‌نویسی جایی
                داشته باشم که به من این امکان رو بده که خلاقیت‌م رو به نمایش بذارم.
            </p>
            <ul class="mt-4 mr-4 text-gray-400 text-sm sm:text-base">
                <li class="flex mt-2">
                    <span class="w-28 block">نظام وظیفه</span> :
                    <span class="mx-2 font-bold">کارت پایان خدمت</span>
                </li>
                <li class="flex mt-2">
                    <span class="w-28 block">متولد</span> :
                    <span class="mx-2 font-bold">27 مرداد 1379</span>
                </li>
                <li class="flex mt-2">
                    <span class="w-28 block">شماره تماس</span> :
                    <span class="mx-2 font-bold">0990-277-4517</span>
                </li>
                <li class="flex mt-2">
                    <span class="w-28 block">آدرس</span> :
                    <span class="mx-2 font-bold">اصفهان</span>
                </li>
            </ul>
            <div>
                <a class="m-5 text-green text-lg Iran-yekan underline underline-offset-2 flex" href="https://codemars.ir/mehdiAbasian.pdf" download>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 11l5 5l5 -5" />
                        <path d="M12 4l0 12" />
                    </svg>
                    <span class="mx-2">دانلود رزومه</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { gsap } from 'gsap';


onMounted(() => {

});
</script>
