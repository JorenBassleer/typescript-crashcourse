<template>
  <section class="w-full h-full flex items-center justify-center">
    <div class="flex flex-col bg-slate-700 rounded-xl p-4 shadow-2xl">
      <h2 class="text-xl font-semibold text-gray-500">Login</h2>
      <form @submit.prevent="handleLogin">
        Select user type
        <select>
          <option>Admin</option>
          <option>User</option>
        </select>
        <div class="flex flex-col">
          <label>Email</label>
          <input
            v-model="user.email"
            class="rounded border-1 p-1 shadow-lg"
            type="text"
            placeholer="Email"
          />
        </div>
        <div class="flex flex-col">
          <label>Password</label>
          <input v-model="user.password" type="password" />
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-white text-gray-700 hover:border-1 shadow-md hover:shadow-sm p-1 rounded-md my-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
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
