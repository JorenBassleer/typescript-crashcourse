<template>
  <article v-if="!isLoading">
  </article>
  <section v-else>
    Is loading appliance....
  </section>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue';
import type { ApplianceRecord } from '@/types/Appliance';

interface Props {
  appliance?: ApplianceRecord | null;
}
const props = withDefaults(defineProps<Props>(), {
  appliance: null,
});

const isLoading = computed<Boolean>(() => {
  return props.appliance === null;
});

</script>