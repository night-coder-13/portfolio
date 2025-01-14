<template>
    <div class="typewriter">
        <span>{{ displayedText }}</span>
        <span class="cursor" v-if="isCursorVisible">_</span>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        typingSpeed: {
            type: Number,
            default: 120 // سرعت تایپ به میلی‌ثانیه
        }
    },
    data() {
        return {
            displayedText: '',
            index: 0,
            isCursorVisible: true,
            cursorInterval: null
        };
    },
    mounted() {
        this.type();
        this.blinkCursor();
    },
    beforeDestroy() {
        clearInterval(this.cursorInterval); // پاک کردن تایمر در صورت نابود شدن کامپوننت
    },
    methods: {
        type() {
            if (this.index < this.text.length) {
                this.displayedText += this.text.charAt(this.index);
                this.index++;
                setTimeout(this.type, this.typingSpeed);
            } else {
                this.isCursorVisible = false;
                clearInterval(this.cursorInterval);
            }
        },
        blinkCursor() {
            this.cursorInterval = setInterval(() => {
                this.isCursorVisible = !this.isCursorVisible;
            }, 500); // چشمک‌زن بودن خط زیرین هر 500 میلی‌ثانیه
        }
    }
};
</script>

<style scoped>
.typewriter {
    display: inline-block;
    /* برای چیدمان صحیح */
    position: relative;
    /* برای موقعیت‌دهی خط زیرین */
}

.cursor {
    display: inline-block;
    /* برای چیدمان صحیح */
    animation: blink 0.5s step-end infinite;
    /* انیمیشن چشمک‌زن */
}

@keyframes blink {
    50% {
        opacity: 0;
        /* در نیمه انیمیشن، خط زیرین ناپدید می‌شود */
    }
}
</style>