<template>
  <article
    v-if="!isLoading"
    class="flex flex-col w-full h-full p-8 border-2 border-primary hover:border-secondary bg-accent rounded-xl transition-all duration-200 text-gray-700"
  >
    <h2 class="w-full text-center text-2xl">
      {{ appliance?.name }}
    </h2>
    <summary>
      {{ appliance?.details }}
    </summary>
  </article>
  <section v-else>
    Is loading appliance....
  </section>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue';
import type { ApplianceRecord } from '@/types/Appliance';
import type { BrandRecord } from '@/types/Brand';
import type { TypeOfApplianceRecord } from '@/types/TypeOfAppliance';

interface Props {
  appliance?: ApplianceRecord | null;
  brands: BrandRecord[];
  typesOfAppliance: TypeOfApplianceRecord[]
}
const props = withDefaults(defineProps<Props>(), {
  appliance: null,
});

const isLoading = computed<Boolean>(() => {
  return props.appliance === null;
});

</script>