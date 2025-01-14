<template>
    <div class="flex flex-col items-center justify-center h-auto w-full relative py-8 mt-10 z-30">
        <div class="relative" id="work">
            <h3 class="text-4xl">نمونه کار های من</h3>
            <div class="w-full">
                <h3 class="text-5xl text-green opacity-60 absolute top-5 -left-0 w-48 -z-10 en-title">My projects</h3>
            </div>
        </div>
        <div class="w-full pt-10 p-8">

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 my-10 gap-5">
                <WorkBox title="کانسپت از دیجی‌کالا" :link="'https://nuxt-digi.liara.run'"
                    :thumbnail="'https://codemars.ir/image/digikala-thumb.jpg'"
                    :img="'https://codemars.ir/image/digikala.jpg'" />
                <WorkBox title="از فروشگاه صباح" :link="'https://laravel-fapp.liara.run'"
                    :thumbnail="'https://codemars.ir/image/sabah-thumb.jpg'"
                    :img="'https://codemars.ir/image/sabah.jpg'" />
                <WorkBox title="پیاده سازی وب‌سایت AFAM Build" :link="'https://afambuild.com'"
                    :thumbnail="'https://codemars.ir/image/afam-thumb.jpg'"
                    :img="'https://codemars.ir/image/afam.jpg'" />
                <WorkBox title="طراحی وبسایت باغدشت" :thumbnail="'https://codemars.ir/image/bagh-thumb.jpg'"
                    :img="'https://codemars.ir/image/bagh.jpg'" />
                <WorkBox title="طراحی وبسایت مربی تک" :thumbnail="'https://codemars.ir/image/gym-thumb.jpg'"
                    :img="'https://codemars.ir/image/gym.jpg'" />


                <div class="flex justify-center items-center">
                    <div class="circel rounded-full w-48 h-48 grid justify-items-center content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="48" height="48" x="0" y="0" viewBox="0 0 424 424"
                            style="enable-background:new 0 0 512 512" xml:space="preserve" class="mb-2">
                            <g>
                                <path
                                    d="M167.29 272.133a6.972 6.972 0 0 1-4.532-1.672l-45.297-38.57a7 7 0 0 1 0-10.66l45.297-38.57a7 7 0 0 1 9.867.788c2.504 2.946 2.152 7.363-.793 9.867l-39.035 33.243 39.035 33.242a7 7 0 0 1-4.543 12.332zM256.71 272.133c-1.98 0-3.948-.836-5.331-2.465a7 7 0 0 1 .789-9.867l39.035-33.242-39.035-33.243a7 7 0 0 1 9.074-10.656l45.297 38.57a7 7 0 0 1 0 10.66l-45.297 38.57a6.972 6.972 0 0 1-4.531 1.673zM195.965 301.063a7.002 7.002 0 0 1-6.86-8.445l28.23-134.036a7 7 0 0 1 13.7 2.887l-28.23 134.035a7.001 7.001 0 0 1-6.84 5.559zm0 0"
                                    fill="#fefefe" opacity="1" data-original="#000000" class=""></path>
                                <path
                                    d="M377 374.086H47c-25.914 0-47-21.082-47-47V47C0 21.086 21.086 0 47 0h330c25.914 0 47 21.086 47 47v280.086c0 25.918-21.086 47-47 47zM47 14c-18.195 0-33 14.805-33 33v280.086c0 18.195 14.805 33 33 33h330c18.195 0 33-14.805 33-33V47c0-18.195-14.805-33-33-33zm0 0"
                                    fill="#fefefe" opacity="1" data-original="#000000" class=""></path>
                                <path
                                    d="M417 112.09H7a7.001 7.001 0 0 1 0-14h410a7.001 7.001 0 0 1 0 14zM119.602 78.594c-12.211 0-22.153-9.942-22.153-22.153 0-12.214 9.942-22.152 22.153-22.152 12.214 0 22.152 9.938 22.152 22.152 0 12.211-9.938 22.153-22.152 22.153zm0-30.305c-4.493 0-8.153 3.656-8.153 8.152s3.66 8.153 8.153 8.153c4.496 0 8.152-3.656 8.152-8.153s-3.656-8.152-8.152-8.152zM51.54 78.379c-12.216 0-22.153-9.938-22.153-22.152 0-12.215 9.937-22.153 22.152-22.153 12.215 0 22.152 9.938 22.152 22.153 0 12.214-9.937 22.152-22.152 22.152zm0-30.305c-4.493 0-8.153 3.66-8.153 8.153 0 4.496 3.66 8.152 8.152 8.152 4.496 0 8.152-3.656 8.152-8.152 0-4.493-3.656-8.153-8.152-8.153zM187.664 78.805c-12.21 0-22.148-9.938-22.148-22.153 0-12.21 9.937-22.148 22.148-22.148 12.215 0 22.152 9.937 22.152 22.148 0 12.215-9.937 22.153-22.152 22.153zm0-30.305c-4.492 0-8.148 3.656-8.148 8.152s3.656 8.153 8.148 8.153c4.496 0 8.152-3.657 8.152-8.153s-3.656-8.152-8.152-8.152zm0 0"
                                    fill="#fefefe" opacity="1" data-original="#000000" class=""></path>
                            </g>
                        </svg>
                        <span>جای پروژه شما خالیه</span>
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

<style>
.box {
    background: #070E1B;
    background: radial-gradient(at left bottom, #05ca7e6a 0%, #070E1B 60%);
    border: 1px solid #0baa6d;
}

.circel {
    background: #070E1B;
    background: radial-gradient(at left bottom, #05ca7e6a 0%, #070E1B 60%);
    border: 1px solid #0baa6d;
}
</style>
