<template>
    <div v-if="isOpen" class="modal-backdrop" @click.self="close">
        <div ref="modalBox" class="rounded-lg bg-gray-800  w-2/4 h-48 rounded-lg z-40 overflow-hidden">
            <div id="modal-header" class="p-3 pb-1 bg-gray-600">
                <div class="flex justify-between">
                    <h3 class="mr-4">افزودن آیتم</h3>
                    <span @click="close" class="px-2 py-1 cursor-pointer rounded-md hover:bg-green-700"><i
                            class="fa-solid fa-close"></i></span>
                </div>
            </div>
            <div id="modal-body" class="p-2">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
    modelValue: { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)
const modalBox = ref(null)

watch(() => props.modelValue, async (value) => {
    isOpen.value = value
    if (value) {
        await nextTick()
        gsap.fromTo(
            modalBox.value,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' }
        )
    }
})

function close() {
    gsap.to(modalBox.value, {
        opacity: 0,
        scale: 0.8,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => {
            emit('update:modelValue', false)
        }
    })
}
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-box {
    background: #fff;
    border-radius: 12px;
    padding: 32px 24px;
    min-width: 320px;
    max-width: 90vw;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
    position: relative;
}

.close-btn {
    position: absolute;
    top: 12px;
    left: 12px;
    background: #f66;
    color: #fff;
    border: none;
    border-radius: 100px;
    padding: 6px 16px;
    font-size: 1rem;
    cursor: pointer;
}
</style>