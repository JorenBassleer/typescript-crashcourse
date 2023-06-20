<template>
  <section v-if="currentAppliance?._id" class="w-full h-full flex justify-center rounded-xl">
    <div
      class="bg-secondary rounded-xl w-1/2 shadow-2xl hover:shadow-md transition-shadow duration-300 text-gray-700 p-8"
    >
      <div class="w-full flex justify-between">
        <h1>Current Appliance: {{ currentAppliance.name }}</h1>
        <div class="flex justify-end">
          <BaseButton>Add to reservation</BaseButton>
        </div>
      </div>
    </div>
  </section>
  <section v-else>We could not find the appliance you're looking for</section>
</template>
<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useApplianceStore } from '@/stores/appliance'
import { storeToRefs } from 'pinia'
import type { ApplianceRecord } from '@/types/Appliance'

const applianceStore = useApplianceStore()

const { appliances } = storeToRefs(applianceStore)

const route = useRoute()

const currentAppliance = computed<ApplianceRecord | null>(() => {
  const foundAppliance = appliances.value.find((appliance) => appliance._id === route.params.id)
  if (!foundAppliance) return null
  return foundAppliance
})

onBeforeMount(() => {
  if (appliances.value.length === 0) applianceStore.setAppliances()
})
</script>
