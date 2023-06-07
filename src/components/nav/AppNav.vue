<template>
  <aside class="h-full bg-secondary p-8">
    <section class="flex flex-col gap-4 text-gray-900">
      <NavItem
        v-for="item in navItems"
        :key="item.name"
        class="drop-shadow-2xl border-2 border-r-2 p-2 py-4 rounded-lg w-full text-center cursor-pointer hover:drop-shadow-md transition-all duration-300 font-semibold"
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
  { name: 'Dashboard', routerTo:{ path: '/dashboard'}  },
  { name: 'Appliances', routerTo:{ path: '/appliances'} },
  { name: 'idk nog iets', routerTo:{ path: '/idk'}  },
];
</script>
