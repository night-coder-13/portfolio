<template>
    <NuxtLayout name="sas">
        <div class="m-8 flex">
            <div class="relative">
                <span class="text-center -mr-2 text-lg text-red-400">
                    <i class="fa-solid fa-ban"></i>
                </span>
                <ClientOnly>
                    <Cane :height="heightCane" />
                </ClientOnly>
                <div class="absolute flex right-9 -bottom-2 gap-2">
                   
                    <NuxtLink class="text-xs w-24 btn-success">
                        <i class="fa-solid fa-check-double ml-1"></i>
                        <span>تکمیل شده</span>
                    </NuxtLink>
                    <NuxtLink class="text-xs w-24 btn-info">
                        <i class="fa-solid fa-paper-plane ml-1"></i>
                        <span>ارسال نظر</span>
                    </NuxtLink>
                    <NuxtLink class="text-xs w-16 btn-error">
                        <i class="fa-solid fa-ban ml-1"></i>
                        <span>لغو</span>
                    </NuxtLink>
                    <NuxtLink class="text-xs w-16 btn-warning">
                        <i class="fa-solid fa-ban ml-1"></i>
                        <span>لغو</span>
                    </NuxtLink>

                </div>
            </div>
            <div class="p-2 pt-6 pb-4 pr-0 -mr-2">
                <p class="text-sm text-gray-200" ref="myParagraph"> برای به دست آوردن ارتفاع یک پاراگراف (مثلاً یک المان p یا هر المان HTML دیگر) با جاوااسکریپت،
                    می‌توانید
                    از
                    ویژگی‌های DOM استفبرای به دست آوردن ارتفاع یک پاراگراف (مثلاً یک المان p یا هر المان HTML دیگر) با جاوااسکریپت،
                    می‌توانید
                    از
                    ویژگی‌های DOM استفبرای به دست آوردن ارتفاع یک پاراگراف (مثلاً یک المان p یا هر المان HTML دیگر) با جاوااسکریپت،
                    می‌توانید
                    از
                    ویژگی‌های DOM استفاده کنید. معمولاً دو روش محبوب برای این کار وجود دارد:</p>
            </div>
        </div>           
        
    </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'


const myParagraph = ref([])
const heightCane = ref(30)

onMounted(() => {
    if (myParagraph.value) {
        // heights.value = paragraphsRef.value.map(el => el.offsetHeight + 10)

        let num = myParagraph.value.offsetHeight + 25
        heightCane.value = num;
        // console.log('offsetHeight:', myParagraph.value.offsetHeight)
        // console.log('BoundingRect Height:', myParagraph.value.getBoundingClientRect().height)
    } else {
        console.log('پارگراف هنوز mount نشده!')
    }
})

</script>