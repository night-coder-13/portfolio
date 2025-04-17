<!-- چوب دستی ، عصا -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  height: { type: Number, default: 170 }
})

// طول پیش‌فرض عصا = 170, مقدار دلخواه را height قرار می‌دهیم
const caneHeadHeight = 132.926 // تا قبل قوس (فرق مقدار رو می‌بینی نسبت به 170!)
const extraLength = computed(() => props.height - (caneHeadHeight + 37.356)) // 37.356 طول قوس

// Y شروع دسته قوس، همواره بعد از امتداد بدنه صاف است
const handleStartY = computed(() => caneHeadHeight + extraLength.value)

const d = computed(() =>
  // بدنه: صاف به پایین
  `M25.389,1
   V${handleStartY.value}
   s1.5,19.727-4.285,27.759
   c-2.418,3.358-6.119,6.484-9.853,7.177
   a36.241,36.241,0,0,1-10.113,0`
  // توجه: مقادیر s، c و a تغییری نمی‌کنند!
)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="26.584"
    :height="height"
    :viewBox="`0 0 26.584 ${height}`"
  >
    <path
      :d="d"
      fill="none"
      stroke="#959595"
      stroke-linecap="round"
      stroke-width="2"
    />
  </svg>
</template>
