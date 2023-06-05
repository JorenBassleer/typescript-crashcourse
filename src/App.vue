<template>
  <header></header>
  <section :class="{ flex: !user }">
    <the-nav-bar :class="{ 'w-1/6 rounded': !user }" />
    <router-view :class="{ 'w-5/6': !user }" style="height: 100dvh" />
  </section>
</template>
<script setup lang="ts">
import TheNavBar from './components/nav/TheNavBar.vue'
import { onMounted } from 'vue'
import { useApplianceStore } from './stores/appliance'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const applianceStore = useApplianceStore()
const authStore = useAuthStore()

const { user } = storeToRefs(authStore)

onMounted(async () => {
  await applianceStore.setAppliances()
})
</script>
<style scoped></style>
