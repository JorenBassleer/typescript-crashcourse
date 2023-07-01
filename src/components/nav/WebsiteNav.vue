<template>
  <section class="max-screen-xl flex flex-wrap items-center justify-between max-auto p-6">
    <router-link :to="{ path: '/' }" class="flex items-center">
      <div class="bg-white text-gray-700 px-6 py-4 rounded">Logo hier</div>
    </router-link>
    <div>
      <ul
        class="font-medium flex flex-col p-6 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 items-center"
      >
        <NavItem :router-text="'About'" :router-to="{ name: 'about' }" />
        <NavItem :router-text="'Links'" :router-to="{ name: 'links' }" />
        <NavItem :router-text="'Idk nog iets'" :router-to="{ name: 'about' }" />
        <BaseButton
          class="rounded-full bg-white border-2 border-white text-gray-700 font-semibold px-4 py-2"
          @click="$router.push({ name: 'login' })"
        >
          Enter app
        </BaseButton>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import NavItem from './NavItem.vue';
</script>
