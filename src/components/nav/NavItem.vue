<template>
  <section>
    <div>
      <router-link
        :to="routerTo"
        class="text-white"
      >
        {{ routerText }}
      </router-link>
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

interface Props {
  routerTo: RouteLocationRaw;
  routerText: string;
}
defineProps<Props>()
</script>
