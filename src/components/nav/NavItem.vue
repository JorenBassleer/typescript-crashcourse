<template>
  <section>
    <div>
      <router-link :to="routerTo">
        {{ routerText }}
      </router-link>
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  routerTo: {
    type: string | Object,
    required: true,
  },
  routerText: {
    type: string,
    required: true,
  },
}
defineProps<Props>();
</script>