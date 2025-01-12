<template>
    <NuxtLoadingIndicator color="linear-gradient(225deg, #5e0a1f, #d22c4e)" />
    <div class="flex h-[95vh] p-4">
        <div class="w-2/12 flex ">
            <HeaderMenu />
            <span class="bg-[#04c97f] block h-[0vh] w-[5px] m-auto" ref="lineMenu"></span>
        </div>
        <div id="wapper-body" class="w-10/12 p-4 overscroll-auto	overflow-auto scrollable-div">
            <slot></slot>
        </div>
        <Particles class="z-10" />
    </div>
</template>

<script setup>
import { gsap } from 'gsap';

const lineMenu = ref()
onMounted(() => {
    gsap.to(lineMenu.value, {
        height: '80vh',
        duration: 2,
    });
})
</script>
<style>


/* استایل نوار اسکرول برای Chrome و Safari */
.scrollable-div::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
}

.scrollable-div::-webkit-scrollbar-track {
    background: #070d1b;
}

.scrollable-div::-webkit-scrollbar-thumb {
    background: #070d1b;
    border-radius: 10px;
}

.scrollable-div::-webkit-scrollbar-thumb:hover {
    background: #07ac6d;
    border-radius: 10px;
}

/* استایل نوار اسکرول برای Firefox */
.scrollable-div {
    border-radius: 10px;
    scrollbar-width: thin;
    scrollbar-color: #07ac6d #070d1b  !important;
}
</style>