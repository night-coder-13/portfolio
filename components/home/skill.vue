<template>
    <div id="skill" class="flex flex-col items-center justify-center h-auto w-full relative py-8 mt-3">
        <div class="relative">
            <h3 class="text-4xl">مهارت های من</h3>
            <div class="w-full">
                <h3 class="text-5xl text-green opacity-60 absolute top-5 -left-10 w-48 -z-10 en-title">My skills</h3>
            </div>
        </div>
        <div class="w-full pt-10 p-8 mb-8">
            <h3 class="text-3xl text-gray-100 my-3">مجموعه‌ای از مهارت‌ها برای هر چالشی !</h3>
            <div class="px-8 py-4 mt-2">
                <h3 class="text-xl text-gray-100 mb-8 flex items-center">
                    <span class="text-green mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-code">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 8l-4 4l4 4" />
                            <path d="M17 8l4 4l-4 4" />
                            <path d="M14 4l-4 16" />
                        </svg>
                    </span>
                    زبان ها و فریمورک های برنامه نویسی
                </h3>
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
                        <CircularProgress :progress="90" />
                        <h5 class="text-2xl my-2">BOOTSTRAP 5 <br>
                            TAILWIND CSS</h5>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="px-8 py-4 mt-2">
                <h3 class="text-xl text-gray-100 mb-8 flex items-center">
                    <span class="text-green mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-database">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                        </svg>
                    </span>
                    دیتابیس ها
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="75" />
                        <h5 class="text-2xl mt-2">MY SQL</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="40" />
                        <h5 class="text-2xl my-2">MONGO DB</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="40" />
                        <h5 class="text-2xl my-2">REDIS</h5>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="px-8 py-4 mt-2">
                <h3 class="text-xl text-gray-100 mb-8 flex items-center">
                    <span class="text-green mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-flame">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
                        </svg>
                    </span>
                    مهارت های نرم‌افزاری
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="40" />
                        <h5 class="text-2xl my-2">UI / UX</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="70" />
                        <h5 class="text-2xl my-2">Adobe Photoshop</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="50" />
                        <h5 class="text-2xl my-2">GSAP</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="70" />
                        <h5 class="text-2xl mt-2">Adobe XD</h5>
                    </div>
                    <div class="grid justify-items-center">
                        <CircularProgress :progress="65" />
                        <h5 class="text-2xl mt-2">Postman</h5>
                        <h5 class="text-xl ">Hoppecotch.io</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { gsap } from 'gsap';


onMounted(() => {
    

});
</script>
