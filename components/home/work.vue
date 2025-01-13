<template>
    <div class="flex flex-col items-center justify-center h-auto w-full relative py-8 mt-10 z-50">
        <div class="relative" id="work">
            <h3 class="text-4xl">نمونه کار های من</h3>
            <div class="w-full">
                <h3 class="text-5xl text-green opacity-60 absolute top-5 -left-0 w-48 -z-10 en-title">My projects</h3>
            </div>
        </div>
        <div class="w-full pt-10 p-8">

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 my-10 gap-5">
                <WorkBox title="کانسپت از دیجی‌کالا" :thumbnail="'p1.jpg'" :items="[
                    '../assets/image/project/p1.jpg',
                    '../assets/image/project/p2.jpg',
                ]" />
                <div class="box p-32 ">

                </div>
                <div class="box p-32 ">

                </div>
                <div class="box p-32 ">

                </div>
                <div class="box p-32 ">

                </div>
                <div class="box p-32 ">

                </div>
                <div class="box p-32 ">

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
    border-radius: 20px;
}
</style>
