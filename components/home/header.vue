<template>
    <div id="home" class="flex flex-col items-center justify-center h-[85vh] w-full relative">
        <div class="text-center w-3/4">
            <h1 class="text-5xl items-header">سلام ،من مهدی عباسیان هستم</h1>
            <p class="text-base mt-5 items-header">من متولد 1379 هستم و از کودکی به بازی های رایانه ای علاقه داشتم و
                وارد
                دنیای برنامه نویسی شدم و عاشق حل مسئله و چالش‌های پیش روی آن هستم.</p>
            <!-- <Typewriter text="من متولد 1379 هستم و از کودکی به بازی های رایانه ای علاقه داشتم و وارد دنیای برنامه نویسی شدم و عاشق حل مسئله و چالش‌های پیش روی آن هستم." :typingSpeed="100" /> -->
        </div>
        <div class="flex gap-4 w-5/12 mt-8 items-header">
            <ScrollButton
                :class="'duration-300 btn border-[#04c97f] border bg-[#04c97f] text-[#070d1b] hover:bg-[#070d1b] hover:text-[#04c97f] py-3 px-4 rounded-lg w-2/4 z-20 font-bold'"
                :title="'دانلود رزومه'" />
            <ScrollButton
                :class="'duration-300 btn border-2 border-[#04c97f] text-[#04c97f] hover:bg-[#04c97f] hover:text-[#070d1b] py-3 px-4 rounded-lg w-2/4 z-20 font-bold'"
                :title="'نمونه کار های من'" :id="'#work'" />
        </div>
        <div @click="scrollDown()" class="absolute bottom-0 text-green grid justify-items-center cursor-pointer">
            <Typewriter class="text-sm " text="با من بیشتر آشنا شو" />
            <div class="mt-3">
                <svg ref="iconScroll" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-to-arc">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3v12" />
                    <path d="M16 11l-4 4l-4 -4" />
                    <path d="M3 12a9 9 0 0 0 18 0" />
                </svg>
            </div>
        </div>
    </div>
</template>
<script setup>
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const iconScroll = ref()
const scrollDown = () => {
    gsap.to('#wapper-body', {
        duration: 1, // مدت زمان اسکرول (به ثانیه)
        scrollTo: '#about', // موقعیت اسکرول هدف (به پیکسل)
        ease: 'power3.inOut', // انیمیشن اسکرول
    });
};
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
