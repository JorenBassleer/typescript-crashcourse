<template>
  <nav>
    <section class="max-screen-xl flex flex-wrap items-center justify-between max-auto p-4">
      <div class="flex items-center">
        <div class="bg-white text-gray-700 px-6 py-4 rounded">Logo hier</div>
      </div>
      <div class="hidden w-full md:block md:w-auto">
        <ul class="font-medium flex flex-col p-6 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 items-center">
          <NavItem
            :router-text="'About'"
            :router-to="{ name: 'about'}"
          />
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white rounded">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white rounded">Links</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white rounded">Idk nog een pagina?</a>
        </li>
        <li class="rounded-full bg-white border-2 border-white text-gray-700 font-semibold px-4 py-2">
          <a href="#" class="">Enter app</a>
        </li>
      </ul>
      </div>
    </section>
  </nav>  
</template>
<script setup lang="ts">
import NavItem from './NavItem.vue';

</script>