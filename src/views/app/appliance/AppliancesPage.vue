<template>
  <section class="flex flex-col gap-10">
    <h1 class="text-3xl text-gray-700 text-center">All appliances</h1>
    <ApplianceList />
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useApplianceStore } from '@/stores/appliance'
import ApplianceList from '@components/appliance/ApplianceList.vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'

const applianceStore = useApplianceStore()

const { appliances } = storeToRefs(applianceStore)
const showForm = ref<Boolean>(false)
onMounted(async () => {
  if (appliances.value.length === 0) await applianceStore.setAppliances()
})
</script>
