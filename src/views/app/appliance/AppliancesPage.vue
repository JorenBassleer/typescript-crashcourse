<template>
  <section class="flex flex-col gap-10">
    <h1 class="text-3xl text-gray-700 text-center">All appliances</h1>
    <ApplianceList />
  </section>
</template>
<script setup lang="ts">
import ApplianceList from '@components/appliance/ApplianceList.vue';
</script>
