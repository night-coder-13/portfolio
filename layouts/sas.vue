<template>

    <div class="flex justify-between items-center px-8 py-4">
        <div class="lg:w-1/6 w-2/6">
            <div class=" flex items-center">
                <span class="w-1/3">
                    <img id="avatar" src="../assets/image/profile.png" class="w-3/4 m-auto cursor-pointer" alt="">
                </span>
                <span class="w-2/3 mr-1 cursor-pointer font-bold text-lg hover:text-green-500">مهدی عباسیان</span>
            </div>
        </div>
        <div class="flex w-4/6 justify-end ml-4">
            <div class="flex gap-5 justify-between">
                <span class="cursor-pointer hover:text-green-500">
                    <UChip color="yellow">
                        <i class="fa-solid fa-bell ml-1"></i>
                    </UChip>
                    اطلاعیه ها
                </span>
                <span class="cursor-pointer hover:text-green-500">
                    <i class="fa-solid fa-wrench ml-1"></i>
                    ابزارک ها
                </span>
            </div>
        </div>
    </div>
    <div class="flex px-4">
        <div class="w-9/12 p-4">
            <slot></slot>
        </div>
        <div class="w-3/12 p-4">
            <ToolsDate />
            <ToolsLoginDate />
        </div>
    </div>
    <div @click="showModal = true"
        class="py-2 px-3 rounded-lg bg-green-600 hover:bg-green-700 fixed bottom-10 right-8 opacity-70 hover:opacity-100 shadow cursor-pointer">
        <i class="fa-solid fa-plus text-base mt-1"></i>
    </div>

    <GsapModal v-model="showModal">
        <SasAddWork />
    </GsapModal>
</template>

<script setup>
const showModal = ref(false)

</script>

<style>
.bg-info-500 {
    background-color: #00a6f4;
}

.bg-info-400 {
    background-color: #1cb6fd;
}
</style>