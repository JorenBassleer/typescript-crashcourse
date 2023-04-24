<script setup lang="ts">
defineProps<{
  msg: string
}>()
import { reactive, ref, computed, defineEmits } from 'vue';
import type User from '../types/User';
import type Emoji from '../types/Emoji';

const user: User = reactive({
  id: 1,
  username: 'Joren B',
  settings: [],
});

defineEmits(['@create']);
const text = ref('idk')
const emoji = ref<Emoji | null>(null)
const charCount = computed(() => text.value.length);
const maxChars = 280;
const handleTextInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (input.value.length < maxChars) {
    text.value = input.value
  } else {
    text.value = input.value = input.value.substring(0, maxChars);
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <form @submit.prevent="$emit('@create', { text })">
      <input type="text"
        :value="text"
        @keyup="handleTextInput"
      >
    </form>
      <span> {{ charCount }} / {{ maxChars }}</span>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
