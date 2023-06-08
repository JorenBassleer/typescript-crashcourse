<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="flex flex-col">
      <h1 class="text-xl text-gray-600 font-semibold">Not foundddd</h1>
      <BaseButton
        class="rounded-full bg-white border-2 border-white text-gray-700 font-semibold px-4 py-2"
        @click="$router.push({ path: '/' })"
        >
        Time to go home
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>