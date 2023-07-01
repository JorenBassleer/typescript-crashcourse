<template>
  <aside class="backdrop-blur-3xl h-full">
    <section class="flex h-full flex-col gap-4 bg-secondary p-8 text-gray-900">
      <NavItem
        v-for="item in navItems"
        :key="item.name"
        class="drop-shadow-2xl border-2 border-r-2 border-primary hover:border-secondary p-2 py-4 rounded-lg w-full text-center cursor-pointer hover:drop-shadow-md transition-all duration-300 font-semibold"
        :router-text="item.name"
        :router-to="item.routerTo"
        router-class="text-gray-700"
      />
    </section>
    <!-- Add cart or my current reservation somehwere -->
  </aside>
</template>
<script setup lang="ts">
import NavItem from './NavItem.vue';
// Get nav items from external file
// ++ create type nav item
const navItems = [
  { name: 'Dashboard', routerTo: { name: 'dashboard' } },
  { name: 'Appliances', routerTo: { name: 'index-appliances' } },
  { name: 'idk nog iets', routerTo: { path: '/idk' } }
];
</script>
