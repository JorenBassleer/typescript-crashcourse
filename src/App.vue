<template>
  <section>
    <header></header>
    <main :class="{ 'flex w-full h-screen': !user }">
      <TheNavBar :class="{ 'lg:w-1/6 rounded md:w-2/6 sm:w-3/5': !user }" />
      <section :class="{ 'w-5/6 p-8': !user }">
        <RouterView />
      </section>
    </main>
  </section>
</template>
<script setup lang="ts">
import TheNavBar from './components/nav/TheNavBar.vue';
import { onMounted } from 'vue';
import { useApplianceStore } from './stores/appliance';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';

const applianceStore = useApplianceStore();
const authStore = useAuthStore();

const { user } = storeToRefs(authStore);
let auth;
onMounted(async () => {
  auth = getAuth();
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
