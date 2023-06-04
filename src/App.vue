<script setup lang="ts">
import TheNavBar from './components/nav/TheNavBar.vue'
import { onMounted } from 'vue'
import { useApplianceStore } from './stores/appliance'

const applianceStore = useApplianceStore()

onMounted(async () => {
  await applianceStore.setAppliances()
})
</script>

<template>
  <header>
    <the-nav-bar />
  </header>
  <router-view style="height: 100dvh" />
</template>
<style scoped></style>
