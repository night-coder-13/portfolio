<template>
    <div class="py-14">
        <div class="mt-8">
            <img id="avatar" src="../../assets/image/profile.png" class="w-2/4 m-auto" alt="">
        </div>
        <div>
            <!-- <ul class="overflow-hidden">
                <li class="list-menu-item active">
                    <ScrollButton :class="'btn btn-success'" :id="'#hi'" :title="'hi fucker'" />
                </li>
                <li class="list-menu-item">
                    <ScrollButton :class="'btn btn-success'" :id="'#hi'" :title="'hi fucker'" />
                </li>
                <li class="list-menu-item">
                    <ScrollButton :class="'btn btn-success'" :id="'#hi'" :title="'hi fucker'" />
                </li>

            </ul> -->
            <ul class="overflow-hidden">
                <li v-for="(item, index) in items" :key="index"
                    :class="['list-menu-item', { active: activeIndex === index }]" @click="activeIndex = index">
                    <ScrollButton :class="'btn btn-success'" :id="item.id" :title="item.title" />
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
</style>