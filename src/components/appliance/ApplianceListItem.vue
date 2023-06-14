<template>
  <article v-if="!isLoading">
  </article>
  <section v-else>
    Is loading appliance....
  </section>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, ref, watch } from 'vue';
import type { ApplianceRecord } from '@/types/Appliance';

interface Props {
  appliance?: ApplianceRecord | null;
}
const props = withDefaults(defineProps<Props>(), {
  appliance: null,
});

const isLoading = ref<Boolean>(true);

watch(() => props.appliance, (newVal) => {
  if (newVal !== null) {
    isLoading.value = false;
  } else {
    isLoading.value = true;
  };
});
</script>