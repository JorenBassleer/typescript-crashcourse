<template>
  <nav>
      <component
        :is="currentNavBar" 
      />
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import WebsiteNav from './WebsiteNav.vue';
import AppNav from './AppNav.vue';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const currentNavBar = computed(() => {
  if (!user.value) return WebsiteNav;
  return AppNav;
});
</script>
