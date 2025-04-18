<template>
  <!-- <div class="w-1/4 m-auto">
    <Datepicker v-model="selectedDate" format="jYYYY-jMM-jDD" />
    <Datepicker :modal="true" type="time" />
    <Datepicker color="green" :auto-submit="false" />
    <ShamsiCalendar :year="shamsiYear" :month="shamsiMonth" :day="shamsiDay" />
  </div> -->
  <UModal
    title="Modal with description"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  >
    <UButton label="Open" color="green" variant="subtle" />

    <template #body>
      <Placeholder class="h-48" />
    </template>
  </UModal>

</template>

<script setup>
import { ref } from 'vue'
const selectedDate = ref(null)

import jalaali from 'jalaali-js'

const today = new Date()
const { jy, jm, jd } = jalaali.toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate())
const shamsiYear = ref(jy)
const shamsiMonth = ref(jm)
const shamsiDay = ref(jd)

</script>
