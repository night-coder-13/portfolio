<template>
    <NuxtLoadingIndicator color="linear-gradient(225deg, #5e0a1f, #d22c4e)" />
    <div class="flex h-[95vh] p-2 sm:p-4">
        <div class=" lg:hidden block z-40">
            <button id="btn-mobile-menu" class="fixed top-4 right-6 bg-green text-blue p-2 rounded-md z-20 text-center"
                @click="toggel">
                <svg id="svg-mobile-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </button>
            <div id="mobile-menu" class="fixed top-0 right-0 w-48 bg-blue z-40 h-full translate-x-48">
                <div class="p-4 w-full">
                    <HeaderMenu />
                </div>
            </div>
        </div>
        <div class="w-2/12 hidden lg:flex">
            <HeaderMenu />
            <span class="bg-[#04c97f] block h-[0vh] w-[5px] m-auto " ref="lineMenu"></span>
        </div>
        <div id="wapper-body" class="w-full lg:w-10/12 p-1 sm:p-4 overscroll-auto overflow-auto scrollable-div">
            <slot></slot>
        </div>
        <Particles class="z-10" />
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
const isOpen = ref(false)

const lineMenu = ref()
onMounted(() => {
    gsap.to(lineMenu.value, {
        height: '80vh',
        duration: 2,
    });

})

const toggel = () => {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
        gsap.to('#mobile-menu', {
            x: 0,
            duration: 1,
            delay: .3
        });
        gsap.fromTo('#svg-mobile-menu', {
            x: -35,
            duration: 2,
        }, {
            x: 0,
            duration: 1,
            ease: 'elastic.out(1,0.3)'
        });

        gsap.fromTo('#btn-mobile-menu', {
            width: 150,
            duration : 1,
        }, {
            x: -190,
            duration: .6,
            width: 40,
            delay:.02
        });
    } else {
        gsap.to('#mobile-menu', {
            x: 200,
            duration: 1,
        });
        gsap.fromTo('#btn-mobile-menu', {
            rotateZ : -180
        }, {
            x: 0,
            duration: 1,
            rotateZ : 180,
            delay: .3
        });
    }

}
</script>
<style>
/* استایل نوار اسکرول برای Chrome و Safari */
.scrollable-div::-webkit-scrollbar {
    width: 5px;
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
    scrollbar-color: #07ac6d #070d1b !important;
}
</style>