<template>
  <section>
    <div>
      <router-link :to="routerTo" :class="routerClass">
        {{ routerText }}
      </router-link>
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  routerTo: RouteLocationRaw
  routerText: string
  routerClass?: string
}
withDefaults(defineProps<Props>(), {
  routerClass: 'text-white'
});
</script>
