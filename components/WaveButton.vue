<template>
    <div class="button-container" >
        <button class="wave-button text-xs text-white bg-green">مشاهده</button>
        <div class="wave" ref="wave1"></div>
        <div class="wave" ref="wave2"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    mounted() {
        this.startAnimation();
    },
    methods: {
        startAnimation() {
            gsap.to(this.$refs.wave1, {
                scale: 1.2,
                opacity: 0.7,
                duration: 1,
                ease: "power2.out",
                repeat: -1,
                yoyo: true,
            });
        },
        stopAnimation() {
            const timeline = gsap.timeline();

            // انیمیشن کاهش opacity
            timeline.to([this.$refs.wave1, this.$refs.wave2], {
                opacity: 0,
                duration: 0.5, // مدت زمان کاهش opacity
                ease: "power2.out",
            })

        },
    },
};
</script>

<style scoped>
.button-container {
    position: relative;
    display: inline-block;
}

.wave-button {
    position: relative;
    z-index: 1;
    padding: 22px 10px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    /* جلوگیری از نمایش موج خارج از دکمه */
}

.wave {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 234, 74, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    pointer-events: none;
    border-radius: 50%;
}
</style>