<template>
  <header></header>
  <main
    :class="{ 'flex w-full h-screen': !user }"
  >
    <TheNavBar :class="{ 'w-1/6 rounded': !user }" />
    <section :class="{'w-5/6 p-8': !user}">
      <RouterView />
    </section>
  </main>
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
