import { ref } from 'vue';
import { defineStore } from 'pinia';
import { login as loginAPI } from '@/api/auth';
import type { UserAuth, UserRecord } from '@/types/User';
import type { AxiosResponse } from 'axios';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserRecord | undefined>();

  const login = async (userLogin: UserAuth): Promise<UserRecord | AxiosResponse> => {
    try {
      user.value = await loginAPI(userLogin);
      return user.value;
    } catch (error) {
      console.error(error);
      return <AxiosResponse>error;
    }
  };
  return {
    user,
    login
  };
});
