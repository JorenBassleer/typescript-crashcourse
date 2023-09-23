<template>
  <section>
    <header></header>
    <main :class="{ 'flex w-full h-screen': auth.currentUser }">
      <TheNavBar :class="{ 'lg:w-1/6 rounded md:w-2/6 sm:w-3/5': auth.currentUser }" />
      <section :class="{ 'w-5/6 p-8': auth.currentUser }">
        <RouterView />
      </section>
    </main>
  </section>
</template>
<script setup lang="ts">
import TheNavBar from './components/nav/TheNavBar.vue';
import { onMounted } from 'vue';
import { useApplianceStore } from './stores/appliance';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const applianceStore = useApplianceStore();

const auth = getAuth();;
onMounted(async () => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
      // Set user
    } else {
      // User not logged in
    }

  });
  await applianceStore.setAppliances();
});
</script>
<style scoped></style>
