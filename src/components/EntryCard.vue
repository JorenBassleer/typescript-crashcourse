<script setup lang="ts">
import { defineProps, inject } from 'vue';
import type Entry from '@/types/Entry';
import { userInjectionKey } from '@/injectionKeys';

const injectedUser = inject(userInjectionKey);
defineProps<{
  entry: Entry;
}>();
</script>
<template>
  <div>
    {{ entry.body }} {{ entry.createdAt }} {{ entry.emoji }} {{ injectedUser?.username || 'anon' }}
  </div>
</template>