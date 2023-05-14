<script setup lang="ts">
defineProps<{
  msg: string
}>()
import { ref, computed, defineEmits, onMounted, inject } from 'vue';
import { userInjectionKey } from '@/injectionKeys';

const injectedUser = inject(userInjectionKey);
// defineEmits(['@create']);
const emit = defineEmits<{
  (e: '@create', entry: Entry): void;
}>();
const body = ref('idk')
const emoji = ref<Emoji | null>(null)
const charCount = computed(() => body.value.length);
const maxChars = 280;
const handleTextInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (input.value.length < maxChars) {
    body.value = input.value
  } else {
    body.value = input.value = input.value.substring(0, maxChars);
  }
}
const handleFormSubmit = () => {
  emit('@create', {
    body: body.value,
    emoji: emoji.value,
    createdAt: new Date(),
    userId: 1,
    _id: Math.random(),
  });
  body.value = '';
  emoji.value = null;
};
const input = ref<HTMLInputElement | null>(null);
onMounted(() => input.value?.focus());
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with {{ injectedUser?.username || 'anon' }}
      <form
        @submit.prevent="handleFormSubmit">
      <input 
        ref="input"
        type="text"
        :value="body"
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
