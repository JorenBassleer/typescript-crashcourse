<template>
  Login page
  <section>
    <form @submit="handleLogin">
      Select user type
    </form>

  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const user = ref();
const handleLogin = async (): Promise<void> => {

}
</script>