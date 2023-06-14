<template>
  <section>
    <ApplianceListItem
      v-for="appliance in appliances"
      :key="appliance._id"
      :appliance="appliance"
    />
  </section>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import ApplianceListItem from './ApplianceListItem.vue';
import type { ApplianceRecord } from '@/types/Appliance';

// Write logic to fetch appliances
interface Props {
  appliances: ApplianceRecord[]
}
defineProps<Props>();
</script>