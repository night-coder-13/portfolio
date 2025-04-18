<template>
    <div class="calendar">
      <div class="calendar-header">
        <span dir="rtl" class="">{{ day }} / {{ persianMonths[month - 1] }} / {{ year }}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="(d, idx) in weekDays" :key="idx" class="text-gray-100">{{ d }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIdx) in weeks" :key="rowIdx">
            <td v-for="(cell, cellIdx) in row" :key="cellIdx">
              <span v-if="cell" class="text-gray-200" :class="cell == day ? 'today':''">{{ cell }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import jalaali from 'jalaali-js'
  import { ref, computed } from 'vue'
  
  const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
  const persianMonths = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
]
  // پارامترهای ورودی (props)
  const props = defineProps({
    year: { type: Number, default: 1403 },
    month: { type: Number, default: 1 }, // 1 تا 12
    day: { type: Number, default: 1 }, // 1 تا 30
  })
  
  // تابع تولید آرایه روزهای تقویم
  function getCalendar(year, month) {
    const firstDay = new Date(jalaali.toGregorian(year, month, 1).gy, jalaali.toGregorian(year, month, 1).gm - 1, 1)
    let weekDay = firstDay.getDay()
    weekDay = (weekDay + 1) % 7 // تطبیق با شروع هفته شمسی
    const daysInMonth = jalaali.jalaaliMonthLength(year, month)
    const days = []
    for (let i = 0; i < weekDay; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    // تبدیل به هفته‌ها
    const weeks = []
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7))
    }
    return weeks
  }
  
  const weeks = computed(() => getCalendar(props.year, props.month))
  </script>
  
  <style scoped>
  .calendar {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
    /* border: 1px solid #ddd; */
    overflow: hidden;
    font-family: Vazirmatn, Tahoma, sans-serif;
    direction: rtl;
}
.calendar-header {
    border-radius: 8px;
    background: #f3f3f3;
    color: #555;
    padding: .5rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: iransans;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    direction: rtl;
  }
  th, td {
    width: 14%;
    padding: 0.5rem 0;
    text-align: center;
    font-family: iransans;
    /* border: 1px solid #eee; */
  }
  tbody tr td span {
    display: inline-block;
    width: 100%;
    font-family: iransans;
    /* height: 28px; */
  }
  tbody tr td span.today {
    border: 2px solid #ddd;
    border-radius: 5px;
  }
  </style>
  