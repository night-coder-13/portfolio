<template>
    <div class="bg-gradient-green p-4 rounded-lg m-3 mb-4">
        <ShamsiCalendar :year="shamsiYear" :month="shamsiMonth" :day="shamsiDay" />
    </div>
</template>

<script setup>

import jalaali from 'jalaali-js'

const today = new Date()
const { jy, jm, jd } = jalaali.toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate())
const shamsiYear = ref(jy)
const shamsiMonth = ref(jm)
const shamsiDay = ref(jd)
</script>
<style>
.bg-gradient-green {
    background: #0a925e;
    background: linear-gradient(237deg, rgb(7 176 113) 0%, rgb(12 118 78) 100%);
}
</style>