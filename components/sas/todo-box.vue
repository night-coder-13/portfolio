<template>
    <div v-if="todos.length != 0" class="m-8 flex" v-for="(todo, i) in todos" :key="i">
        <div class="relative">
            <span class="text-center -mr-2 text-lg">
                <i v-if="todo.status == 0" class="fa-solid fa-ban text-red-400"></i>
                <i v-if="todo.status == 1" class="fa-solid fa-check-double text-green-400"></i>
                <i v-if="todo.status == 2" class="fa-solid fa-check text-blue-400"></i>
            </span>
            <ClientOnly>
                <Cane :height="heights[i] > 50 ? heights[i] : 60" />
            </ClientOnly>
            <div class="absolute flex right-9 -bottom-2 gap-2">
                <NuxtLink v-if="todo.status != 1 && todo.status != 0" class="text-xs w-24 btn--success">
                    <i class="fa-solid fa-check-double ml-1"></i>
                    <span>تکمیل شده</span>
                </NuxtLink>
                <NuxtLink v-if="todo.status != 0" class="text-xs w-24 btn--info">
                    <i class="fa-solid fa-paper-plane ml-1"></i>
                    <span>ارسال نظر</span>
                </NuxtLink>
                <NuxtLink v-if="todo.status != 0" class="text-xs w-16 btn--error">
                    <i class="fa-solid fa-ban ml-1"></i>
                    <span>لغو</span>
                </NuxtLink>
                <NuxtLink class="text-xs w-24 btn--warning">
                    <i class="fa-solid fa-tag ml-1"></i>
                    <span>برچسب ها</span>
                </NuxtLink>
            </div>
        </div>
        <div class="p-2 pt-6 pb-4 pr-0 -mr-2">
            <p class="text-sm text-gray-300" v-text="todo.text" ref="paragraphsRef"></p>
        </div>
    </div>
    <div v-else class="w-full flext justify-center">
        <div class="m-auto w-1/4  p-6 border-green-700 border-2 rounded-lg mt-8">
            <div class="w-full text-center flex flex-col justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="86" height="86" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512"
                    xml:space="preserve" class="m-auto">
                    <g>
                        <path
                            d="m60.94 42.66-9-25A.992.992 0 0 0 51 17h-9.46c.3-.95.46-1.96.46-3 0-5.51-4.49-10-10-10S22 8.49 22 14c0 1.04.16 2.05.46 3H13c-.42 0-.8.26-.94.66l-9 25c-.04.11-.06.22-.06.34v16c0 .55.45 1 1 1h56c.55 0 1-.45 1-1V43c0-.12-.02-.23-.06-.34zM12 33.83 9.06 42H5.43l6.58-18.27v10.1zM13.7 35h36.59l2.52 7H39.77c-.92 0-1.72.62-1.94 1.52l-.43 1.73c-.11.45-.51.76-.97.76h-8.88c-.46 0-.86-.31-.97-.76l-.43-1.73A2 2 0 0 0 24.21 42H11.17l2.52-7zm41.24 7L52 33.83v-10.1L58.58 42h-3.63zM32 6c4.41 0 8 3.59 8 8 0 3.7-2.51 6.9-6.11 7.78-.29.07-.53.26-.66.52l-1.24 2.47-1.24-2.47a.994.994 0 0 0-.66-.52A7.982 7.982 0 0 1 23.98 14c0-4.41 3.59-8 8-8zm-2.82 17.6 1.93 3.85c.17.34.51.55.89.55s.72-.21.89-.55l1.93-3.85a9.968 9.968 0 0 0 5.84-4.6H50v14H14V19h9.34a9.938 9.938 0 0 0 5.84 4.6zM5 58V44h19.22l.43 1.73A2.986 2.986 0 0 0 27.56 48h8.88c1.38 0 2.58-.93 2.91-2.27l.43-1.73H59v14zm22.76-41.17L30.59 14l-2.83-2.83a.996.996 0 1 1 1.41-1.41L32 12.59l2.83-2.83a.996.996 0 1 1 1.41 1.41L33.41 14l2.83 2.83a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29l-2.83-2.83-2.83 2.83c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41z"
                            fill="#e9e9e9" opacity="1" data-original="#000000" class=""></path>
                    </g>
                </svg>
                <p class="text-gray-200 mt-4">موردی یافت نشد !</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
const props = defineProps({
    todos: { type: Array, default: [] }
})

const paragraphsRef = ref([])
const heights = ref([])

onMounted(() => {
    // اطمینان از این که DOM کامل شده است
    nextTick(() => {
        heights.value = paragraphsRef.value.map(el => el.offsetHeight + 25)
        console.log(heights.value)
    })
})
</script>