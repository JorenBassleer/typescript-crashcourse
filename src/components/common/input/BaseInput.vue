<template>
  <div class="flex flex-col">
    <input
      v-model="internalValue"
      :value="internalValue"
      :placeholder="placeholder"
      :type="type"
      class="rounded-xl text-gray-700 p-2"
      @input="handleInput"
    />
    <span class="text-sm italic font-semibold">{{ subText }}</span>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, ref } from 'vue';

interface InputProps {
  modelValue: string;
  size: 'mini' | 'small' | 'base' | 'large';
  type?: string;
  subText?: string;
  disabled?: boolean;
  placeholder: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'base',
  subText: '',
  disabled: false
});
const emit = defineEmits(['update:modelValue']);

const internalValue = ref(props.modelValue);

const handleInput = (): void => {
  emit('update:modelValue', internalValue.value);
};
</script>
