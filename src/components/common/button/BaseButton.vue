<template>
  <button
  :class="{
      'bg-green-500': type === 'success',
      'bg-red-500': type === 'danger',
      'bg-orange-500': type === 'warning',
      'bg-slate-600': type === 'primary',
    }"
    @click="handleClick"
    >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  type: {
    type: String as () => 'primary' | 'success' | 'danger' | 'warning',
    default: 'primary',
  },
  size: {
    type: String as () => 'mini' | 'small' | 'base' | 'large',
    default: 'base',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['@click']);

const handleClick = () : void => {
  emit('@click');
}
</script>