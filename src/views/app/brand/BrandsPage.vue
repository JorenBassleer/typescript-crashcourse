<template>
  <section>
    <article
      v-for="brand in brands"
      :key="brand._id"
    >
      {{ brand.name }}
    </article>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useBrandStore } from '@/stores/brand';
import { storeToRefs } from 'pinia';

const brandStore = useBrandStore();

const { brands } = storeToRefs(brandStore);

onMounted(async () => {
  if (brands.value.length === 0) await brandStore.setBrands();
});
</script>
