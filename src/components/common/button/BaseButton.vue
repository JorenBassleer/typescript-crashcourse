<template>
  <div>
    
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  type: {
    type: String as () => 'primary' | 'success' | 'danger' | 'warning',
    required: true,
  },
})
</script>