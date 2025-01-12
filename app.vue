<template>
  <div dir="rtl">
    <Loader v-if="!loader" />
    <NuxtPage v-else />
  </div>


</template>

<script setup>

const loader = ref(false)
onNuxtReady(async () => {
  loader.value = true
})
</script>