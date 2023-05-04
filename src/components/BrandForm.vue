<template>
  <h2>
    Brand Form
  </h2>
  
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type Brand from '@/types/Brand';

const newBrand = ref<Brand | null>(null);
</script>