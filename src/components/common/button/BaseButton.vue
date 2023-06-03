<template>
  <button
  class="rounded shadow-md "
  :class="{
      'bg-green-800 hover:bg-green-300': type === 'success',
      'bg-red-800': type === 'danger',
      'bg-orange-800': type === 'warning',
      'bg-cool-gray-700': type === 'primary',
    }"
    @click="handleClick"
    >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

interface ButtonProps {
  type: 'primary' | 'success' | 'danger' | 'warning';
  size: 'mini' | 'small' | 'base' | 'large';
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'base',
});
const emit = defineEmits(['@click']);

const isAnimatingButton = ref(false);

const handleAnimationButton = () : void => {
  isAnimatingButton.value = true;
  setTimeout(() =>{
    isAnimatingButton.value = false;
  }, 3000);
}
const handleClick = () : void => {
  if (!props.disabled) {
    handleAnimationButton();
    emit('@click');
  }
}
</script>