<template>
  <button
    class="rounded-full shadow-md text-gray-800 font-semibold hover:shadow-xl transition-all duration-300"
    :class="{
      'bg-green-800 hover:bg-green-300': type === 'success',
      'bg-red-300 text-red-800': type === 'danger',
      'bg-orange-800': type === 'warning',
      'bg-cool-gray-700': type === 'primary',
      'bg-white': type === 'default',
      '': size === 'mini',
      '': size === 'small',
      'px-4 py-2': size === 'base',
      '': size === 'large',
    }"
    :type="actionType"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

interface ButtonProps {
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'default';
  size?: 'mini' | 'small' | 'base' | 'large';
  disabled?: boolean;
  actionType?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'base',
  actionType: 'submit',
});
const emit = defineEmits(['@click']);

const isAnimatingButton = ref(false);

const handleAnimationButton = (): void => {
  isAnimatingButton.value = true;
  setTimeout(() => {
    isAnimatingButton.value = false;
  }, 3000);
};
const handleClick = (): void => {
  if (!props.disabled) {
    handleAnimationButton();
    emit('@click');
  }
};
</script>
