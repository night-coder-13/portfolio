<template>
    <div>
      <p ref="myParagraph">متن پاراگراف تستی شما</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const myParagraph = ref(null)
  
  onMounted(() => {
    if (myParagraph.value) {
      console.log('offsetHeight:', myParagraph.value.offsetHeight)
      console.log('BoundingRect Height:', myParagraph.value.getBoundingClientRect().height)
    } else {
      console.log('پارگراف هنوز mount نشده!')
    }
  })
  </script>
  