<template>
  <article
    class="flex flex-col w-full h-full p-8 border-2 border-primary hover:border-secondary bg-accent rounded-xl transition-all duration-200 text-gray-700"
    @click="$router.push({ name: 'single-appliance', params: { id: appliance._id } })"
  >
    >
    <h2 class="w-full text-center text-2xl">
      {{ appliance?.name }}
    </h2>
    <section class="w-full flex flex-row items-center">
      <div class="w-1/2">
        {{ foundBrand?.name || 'No brand found' }}
      </div>
      <div class="w-1/2">
        {{ foundTypeOfAppliance?.name || 'No type found' }}
      </div>
    </section>
    <summary>
      {{ appliance?.details }}
    </summary>
  </article>
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { ApplianceRecord } from '@/types/Appliance'
import type { BrandRecord } from '@/types/Brand'
import type { TypeOfApplianceRecord } from '@/types/TypeOfAppliance'

interface Props {
  appliance: ApplianceRecord
  brands: BrandRecord[]
  typesOfAppliance: TypeOfApplianceRecord[]
}
const props = defineProps<Props>()

const foundBrand = computed(() => props.brands.find((brand) => brand._id === props.appliance.brand))
const foundTypeOfAppliance = computed(() =>
  props.typesOfAppliance.find((type) => type._id === props.appliance.type)
)
</script>
