<template>
    <div class="py-14 ">
        <div class="mt-8">
            <img id="avatar" src="../../assets/image/profile.png" class="w-2/4 m-auto" alt="">
        </div>
        <div>
            <ul class="overflow-hidden">
                <li v-for="(item, index) in items" :key="index"
                    :class="['list-menu-item', { active: activeIndex === index }]" @click="activeIndex = index">
                    <ScrollButton :class="'btn btn-success'" :id="item.id" :title="item.title" />
                </li>
                <li id="sas">
                    <NuxtLink to="/sas" class="list-menu-item">خدمات و پشتیبانی</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
const activeIndex = useState('activeIndex' , ()=> 0)
const items = ref([
    { title: 'خانه' , id : 'home' },
    { title: 'درباره من' , id : 'about' },
    { title: 'مهارت ها' , id : 'skill' },
    { title: 'نمونه کار ها' , id : 'work' },
    { title: 'تماس بامن' , id : 'contact' },
])
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

onMounted(() => {
    
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

});
</script>
<style scoped>
ul {
    padding: 5px 15px;
    margin-top: 15px;
}

li {
    margin: 5px;
}

li.active {
    color: #04c97f;
}
#sas {
    margin-top: 5px;
}
#sas a {
    padding-top: 5px;
    border-top: 1px solid #0add8c;
}
#sas a:hover {
    color: #0add8c;
}
</style>