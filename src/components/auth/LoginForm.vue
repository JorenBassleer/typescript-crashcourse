<template>
  <FormLayout
    class="flex flex-col rounded-xl p-8 shadow-xl text-white border-2 hover:shadow-2xl transition-all duration-300 w-1/3"
    title="Login"
  >
    <form class="p-6 w-full flex flex-col gap-2 px-10" @submit.prevent="handleLogin">
      <div class="flex gap-2">
        Select user type
        <select placeholder="Select">
          <option>Admin</option>
          <option>User</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label>Email</label>
        <BaseInput v-model="userLogin.email" type="text" placeholder="Enter username" subText="e.g. user@email.com" />
      </div>
      <div class="flex flex-col">
        <label>Password</label>
        <BaseInput v-model="userLogin.password" type="password" placeholder="********" />
      </div>
      <div class="flex justify-end">
        <BaseButton class="my-2" @click="handleLogin"> Login </BaseButton>
      </div>
    </form>
  </FormLayout>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import type { UserAuth } from '@/types/User';
import FormLayout from '@/components/form/FormLayout.vue';

const userLogin = ref<UserAuth>({
  email: '',
  password: ''
});

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const router = useRouter();

const handleLogin = async (): Promise<void> => {
  try {
    // await authStore.login(userLogin.value)
    router.push({ name: 'dashboard' });
  } catch (error) {
    // handleError
  }
};

onMounted(() => {
  if (user.value) router.push({ name: 'dashboard' });
});
</script>
