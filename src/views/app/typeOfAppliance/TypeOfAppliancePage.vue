<template>
  <section>
    <div v-for="typeOfAppliance in typesOfAppliance" :key="typeOfAppliance._id">
      {{ typeOfAppliance.name }}
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTypeOfApplianceStore } from '@/stores/typeOfAppliance'
import { storeToRefs } from 'pinia'

const typeOfApplianceStore = useTypeOfApplianceStore()

const { typesOfAppliance } = storeToRefs(typeOfApplianceStore)

onMounted(async () => {
  if (typesOfAppliance.value.length === 0) await typeOfApplianceStore.setTypeOfAppliance()
})
</script>
