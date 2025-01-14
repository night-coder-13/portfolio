<template>
  <NuxtLayout>
    <div v-observe-visibility="handleVisibility('header')">
      <HomeHeader />
    </div>
    <div v-observe-visibility="handleVisibility('about')">
      <HomeAbout />
    </div>
    <div v-observe-visibility="handleVisibility('skill')">
      <HomeSkill />
    </div>
    <div v-observe-visibility="handleVisibility('work')">
      <HomeWork />
    </div>
    <div v-observe-visibility="handleVisibility('contact')">
      <HomeContact />
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  title: 'Mehdi - Personal Portfolio | مهدی عباسیان',
  name: 'Home',

})
const activeIndex = useState('activeIndex');

const handleVisibility = (section) => (isVisible) => {
  if (isVisible) {
    switch (section) {
      case 'header':
        activeIndex.value = 0;
        break;
      case 'about':
        activeIndex.value = 1;
        break;
      case 'skill':
        activeIndex.value = 2;
        break;
      case 'work':
        activeIndex.value = 3;
        break;
      case 'contact':
        activeIndex.value = 4;
        break;
    }
  }
};
</script>