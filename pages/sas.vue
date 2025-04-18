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
