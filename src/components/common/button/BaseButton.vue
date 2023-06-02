<template>
  <div
  :class="{
      'bg-green-500': type === 'success',
      'bg-red-500': type === 'danger',
      'bg-orange-500': type === 'warning',
      'bg-slate-600': type === 'primary',
    }">
    <slot></slot>
  </div>
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
})
</script>