<template>
    <div class="box p-3 relative mb-4 rounded-2xl">
        <img :src="prop.thumbnail" class="w-full rounded-lg" alt="">
        <div class="text-center absolute -bottom-6 left-0 w-full flex justify-center">
            <WaveButton class="opacity-80 hover:opacity-95" @click="isOpen = true" />
        </div>
    </div>
    <UModal v-model="isOpen" fullscreen dir="rtl">
        <UCard :ui="{
            base: 'h-full flex flex-col',
            rounded: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            body: {
                base: 'grow'
            }
        }">
            <template #header>

                <div class="flex items-center justify-between">
                    <div class="flex">
                        <h3 class="text-sm sm:text-base Iran-yekan font-semibold text-gray-900 dark:text-white">
                            {{ prop.title }}
                        </h3>
                        <a v-if="prop.link" :href="prop.link" target="_blank"
                            class="text-green text-sm sm:text-base Iran-yekan underline underline-offset-2 flex mx-2">
                            <span class="mx-1">مشاهده آنلاین</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-eye-code">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path
                                    d="M11.11 17.958c-3.209 -.307 -5.91 -2.293 -8.11 -5.958c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.21 .352 -.427 .688 -.647 1.008" />
                                <path d="M20 21l2 -2l-2 -2" />
                                <path d="M17 17l-2 2l2 2" />
                            </svg>
                        </a>
                    </div>
                    <span class="w-7 h-7 bg-green text-blue rounded flex items-center justify-center cursor-pointer" @click="isOpen = false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-x">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                            <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                            <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                            <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                            <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                            <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                            <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                            <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                            <path d="M14 14l-4 -4" />
                            <path d="M10 14l4 -4" />
                        </svg>
                    </span>
                    <!-- <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" value="بستن" class="-my-1" -->
                    <!-- @click="isOpen = false" /> -->
                </div>
            </template>

            <Placeholder class="h-full" />
            <div class="overscroll-auto overflow-auto scrollable-div ">
                <div>
                    <img :src="prop.img" class="m-auto max-h-[500px] rounded-lg" alt="">
                </div>
                <!-- <UCarousel v-slot="{ item }" :items="prop.items" :ui="{ item: 'basis-full' }"
                    class="rounded-lg overflow-hidden w-10/12 m-auto mt-8" arrows>
                    <img :src="item" class="m-auto max-h-[500px] rounded-lg" draggable="false">
                </UCarousel> -->
                <div class="w-10/12 m-auto p-4 mt-8">
                    <div v-html="prop.desc"></div>
                </div>
            </div>
        </UCard>
    </UModal>
</template>

<script setup>
const { public: { BaseUrl } } = useRuntimeConfig()
const isOpen = ref(false)
const prop = defineProps({
    title: {},
    link: {},
    thumbnail: {},
    img: {},
    desc: {}
})
const getImagePath = (item) => {
    return require(`~/assets/image/project/${item}`);
};
</script>
