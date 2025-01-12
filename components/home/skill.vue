<template>
    <div id="skill" class="flex flex-col items-center justify-center h-full w-full relative py-8 mt-3">
        <div class="relative">
            <h3 class="text-4xl">مهارت های من</h3>
            <div class="w-full">
                <h3 class="text-5xl text-green opacity-30 absolute top-5 -left-10 w-48 -z-10">My skills</h3>
            </div>
        </div>
        <div class="w-full pt-10 p-8">
            <h3 class="text-3xl text-gray-100">تمام مهارت هایی که در آن زمینه فعالیت دارم ذکر شده است.</h3>
            <div class="p-8 mt-4">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="85" />
                        <h5 class="text-2xl my-2">PHP (OOP & MVC)</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="70" />
                        <h5 class="text-2xl my-2">LARAVEL</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="75" />
                        <h5 class="text-2xl my-2">JAVASCRIPT</h5>
                        <span>jquery & alpine</span>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="70" />
                        <h5 class="text-2xl my-2">VUE.JS</h5>
                        <span>vueuse</span>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="80" />
                        <h5 class="text-2xl my-2">NUXT.JS</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="40" />
                        <h5 class="text-2xl my-2">UI / UX</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="90" />
                        <h5 class="text-2xl my-2">BOOTSTRAP 5 <br>
                            TAILWIND CSS</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="75" />
                        <h5 class="text-2xl mt-2">MY SQL</h5>
                        <h5 class="text-2xl ">MONGO DB</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="35" />
                        <h5 class="text-2xl my-2">NODE JS</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="70" />
                        <h5 class="text-2xl my-2">GSAP</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="70" />
                        <h5 class="text-2xl mt-2">Adobe XD</h5>
                        <h5 class="text-2xl ">Adobe Photoshop</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="70" />
                        <h5 class="text-2xl mt-2">Postman</h5>
                        <h5 class="text-2xl ">Hoppecotch.io</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { gsap } from 'gsap';

const iconScroll = ref()

onMounted(() => {
    // انیمیشن حلقه‌ای برای حرکت به سمت بالا و پایین
    gsap.to(iconScroll.value, {
        y: -10, // حرکت به سمت بالا
        duration: 1, // مدت زمان انیمیشن
        ease: "power1.inOut", // نوع انیمیشن
        yoyo: true, // حرکت معکوس
        repeat: -1 // تکرار بی‌نهایت
    });

    gsap.set('.list-menu-item', {
        x: 100,
        opacity: 0
    })
    gsap.to('.list-menu-item', {
        x: 0, // به موقعیت اصلی برگردد
        opacity: 1, // شفافیت به حالت عادی برگردد
        duration: 0.5, // مدت زمان انیمیشن
        stagger: 0.2, // فاصله بین انیمیشن هر آیتم
        delay: 0.2
    })
    gsap.set('#avatar', {
        x: 100,
        opacity: 0
    })
    gsap.to('#avatar', {
        x: 0, // به موقعیت اصلی برگردد
        opacity: 1, // شفافیت به حالت عادی برگردد
        duration: 0.5, // مدت زمان انیمیشن
    })
    gsap.set('.items-header', {
        y: 50,
        opacity: 0
    })
    gsap.to('.items-header', {
        y: 0, // به موقعیت اصلی برگردد
        opacity: 1, // شفافیت به حالت عادی برگردد
        duration: 0.7, // مدت زمان انیمیشن
        stagger: 0.3, // فاصله بین انیمیشن هر آیتم

    })

});
</script>
