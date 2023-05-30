<template>
  Login page
  <section>
    <form @submit="handleLogin">
      Select user type
      <select>
        <option>Admin</option>
        <option>User</option>
      </select>
    </form>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import type { UserAuth } from '@/types/User'

const user = ref<UserAuth>({
  email: '',
  password: ''
})

const authStore = useAuthStore()

const handleLogin = async (): Promise<void> => {
  try {
    await authStore.login(user.value)
  } catch (error) {
    // handleError
  }
}
</script>
