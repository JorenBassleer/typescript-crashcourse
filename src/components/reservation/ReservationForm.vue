<template>
  <form></form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { BaseReservation } from '@/types/Reservation';

const newReservation = ref<BaseReservation>({
  name: '',
  details: '',
  appliances: [],
  amounts: [],
  start: null,
  end: null,
  user: '' // Get user from state
});
</script>
