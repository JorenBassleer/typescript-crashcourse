<template>
  <el-form
    class="p-6 w-full flex flex-col gap-2 px-10"
    @submit.prevent="handleRegister"
  >
    <div class="flex flex-col">
      <label>Email</label>
      <BaseInput
        v-model="newUser.email"
        type="text"
        placeholder="Enter email"
        sub-text="e.g. user@email.com"
      />
    </div>
    <div class="flex flex-col">
      <label>Password</label>
      <BaseInput
        v-model="newUser.password"
        type="password"
        placeholder="*******"
      />
    </div>
    <div class="flex justify-end items-center gap-6">
      <el-button @click="handleRegister">
        Register
      </el-button>
      <el-button>Register with Google</el-button>
    </div>
  </el-form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { UserAuth } from '@/types/User';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const newUser = ref<UserAuth>({
  email: '',
  password: ''
});
const handleRegister = async (): Promise<void> => {
  try {
    createUserWithEmailAndPassword(getAuth(), newUser.value.email, newUser.value.password);
    router.push({ name: 'dashboard' });
  } catch (error) {
    //
  }
};
</script>
