<template>
    <button @click="scrollToTarget" :class="prop.class" ref="button">{{ prop.title }}</button>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const prop = defineProps({
    'title':{},
    'class':{},
    'id':{},
})
const button = ref(null);

const scrollToTarget = () => {
    gsap.to('#wapper-body', {
        duration: 1, // مدت زمان اسکرول (به ثانیه)
        scrollTo: '#'+prop.id , // موقعیت اسکرول هدف (به پیکسل)
        ease: 'power3.inOut', // انیمیشن اسکرول
    });
};


onMounted(() => {
    
});

</script>

<style scoped></style>