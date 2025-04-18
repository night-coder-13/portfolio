<!-- <template>
    <NuxtLayout name="sas">
        <div class="m-8 flex" v-for="(todo ,i) in todos" :key="i">
            <div class="relative">
                <span class="text-center -mr-2 text-lg text-red-400">
                    <i class="fa-solid fa-ban"></i>
                </span>
                <ClientOnly>
                    <Cane :height="heightCane" />
                </ClientOnly>
                <div class="absolute flex right-9 -bottom-2 gap-2">
                   
                    <NuxtLink class="text-xs w-24 btn--success">
                        <i class="fa-solid fa-check-double ml-1"></i>
                        <span>تکمیل شده</span>
                    </NuxtLink>
                    <NuxtLink class="text-xs w-24 btn--info">
                        <i class="fa-solid fa-paper-plane ml-1"></i>
                        <span>ارسال نظر</span>
                    </NuxtLink>
                    <NuxtLink class="text-xs w-16 btn--error">
                        <i class="fa-solid fa-ban ml-1"></i>
                        <span>لغو</span>
                    </NuxtLink>
                    <NuxtLink class="text-xs w-16 btn--warning">
                        <i class="fa-solid fa-ban ml-1"></i>
                        <span>لغو</span>
                    </NuxtLink>

                </div>
            </div>
            <div class="p-2 pt-6 pb-4 pr-0 -mr-2">
                <p class="text-sm text-gray-200" ref="myParagraph" v-text="todo.text"></p>
            </div>
        </div>           
        
    </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const todos = ref([
    {
        id : 1,
        status : 1,
        text : 'اگر خواستی روی ارتفاع هر پاراگراف عملی انجام بدهی (مثلاً تغییرش بدهی یا جمعشان را بگیری)، فقط کافی است مقدار مورد نظرت را از این آرایه بخوانی یا مجموع بگیری.',
    },
    {
        id : 1,
        status : 1,
        text : 'تأکید!: متغیر ref باید دقیقا با ref="myParagraph" ست شود و در اسکریپت با همین نام تعریف شود.اجرای لاجیک باید داخل onMounted باشد نه زودتر.این کد را دقیقاً در یکی از صفحات (pages/)، یا کامپوننت‌هایت بگذار، نه در فایل لایه‌بندی کلی یا فایل‌هایی مثل middleware و …در جاهایی که SSR (رندر سمت سرور) فعاله، مراقب باش که توی سرور DOM وجود نداره. همیشه کد DOM-only رو داخل onMounted یا process.client بذار:',
    },
])

const myParagraph = ref([])
const heightCane = ref(30)

onMounted(() => {
    if (myParagraph.value) {
        // heights.value = paragraphsRef.value.map(el => el.offsetHeight + 10)

        let num = myParagraph.value.offsetHeight + 25
        heightCane.value = num;
    } else {
        console.log('پارگراف هنوز mount نشده!')
    }
})

</script> -->

<template>
    <NuxtLayout name="sas">
        <div>
            <div class="mr-4 my-2">
                <UBadge color="gray" variant="outline">
                    <span> راهنما : 
                        <i class="fa-solid fa-check-double text-green-400"></i>
                        تکمیل شده ، <i class="fa-solid fa-check text-blue-400"></i>
                        درحال انجام ، <i class="fa-solid fa-ban text-red-400"></i>
                        لغو شده</span>
                </UBadge>

            </div>
            <SasTodoBox :todos="todos" />
        </div>
    </NuxtLayout>
</template>

<script setup>
const todos = ref([
    {
        id: 1,
        status: 1,
        text: 'متن اول برای محاسبه ارتفاع.',
    },
    {
        id: 2,
        status: 2,
        text: 'تأکید!: متغیر ref باید دقیقا با ref="myParagraph" ست شود و در اسکریپت با همین نام تعریف شود.اجرای لاجیک باید داخل onMounted باشد نه زودتر.این کد را دقیقاً در یکی از صفحات (pages/)، یا کامپوننت‌هایت بگذار، نه در فایل لایه‌بندی کلی یا فایل‌هایی مثل middleware و …در جاهایی که SSR (رندر سمت سرور) فعاله، مراقب باش که توی سرور DOM وجود نداره. همیشه کد DOM-only رو داخل onMounted یا process.client بذار:',
    },
    {
        id: 3,
        status: 0,
        text: 'تأکید!: متغیر ref باید دقیقا با ref="myParagraph" ست شود و در اسکریپت با همین نام تعریف شود.اجرای لاجیک باید داخل onMounted باشد نه زودتر.این کد را دقیقاً در یکی از صفحات (pages/)، یا کامپوننت‌هایت بگذار، نه در فایل لایه‌بندی کلی یا فایل‌هایی مثل middleware و …در جاهایی که SSR (رندر سمت سرور) فعاله، مراقب باش که توی سرور DOM وجود نداره. همیشه کد DOM-only رو داخل onMounted یا process.client بذار:',
    },
])
</script>
