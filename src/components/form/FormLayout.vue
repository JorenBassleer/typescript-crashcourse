<template>
  <section
    class="flex flex-col rounded-xl p-8 shadow-xl text-white border-2 hover:shadow-2xl transition-all duration-300 w-full xl:w-1/3"
  >
    <h2 class="font-semibold text-xl">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  title?: string;
}
defineProps<Props>();
</script>
