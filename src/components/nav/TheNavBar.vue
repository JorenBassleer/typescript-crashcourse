<template>
  <nav>
    <component :is="currentNavBar" />
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { getAuth } from 'firebase/auth';
import WebsiteNav from './WebsiteNav.vue';
import AppNav from './AppNav.vue';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const currentNavBar = computed<typeof WebsiteNav | typeof AppNav>(() => {
  if (!getAuth().currentUser) return WebsiteNav;
  return AppNav;
});
</script>
