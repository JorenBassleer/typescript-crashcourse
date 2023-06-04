<template>
  <button
    class="rounded-full shadow-md bg-white text-gray-800 font-semibold"
    :class="{
      'bg-green-800 hover:bg-green-300': type === 'success',
      'bg-red-800': type === 'danger',
      'bg-orange-800': type === 'warning',
      'bg-cool-gray-700': type === 'primary',
      's': size === 'mini',
      'd': size === 'small',
      'px-4 py-2': size === 'base',
      'ds': size === 'large',
    }"
    :type="actionType"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

interface ButtonProps {
  type: 'primary' | 'success' | 'danger' | 'warning'
  size: 'mini' | 'small' | 'base' | 'large'
  disabled?: boolean
  actionType?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'base',
  actionType: 'submit',
})
const emit = defineEmits(['@click'])

const isAnimatingButton = ref(false)

const handleAnimationButton = (): void => {
  isAnimatingButton.value = true
  setTimeout(() => {
    isAnimatingButton.value = false
  }, 3000)
}
const handleClick = (): void => {
  if (!props.disabled) {
    handleAnimationButton()
    emit('@click')
  }
}
</script>
