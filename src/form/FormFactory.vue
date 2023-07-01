<template>
  <form action="" @submit.prevent="submit">
    <div v-for="(field, index) in fields" :key="field.name">
      <label :for="field.name" class="label">
        {{ field.label }}
      </label>
      <component
        :is="field.component"
        :id="field.name"
        :type="field.type"
        v-bind="{ ...field.props, ...field.attrs }"
        :model-value="field.props?.value"
        @update:model-value="onChangeHandler($event, field.name, index)"
      />
      <div v-if="errors[field.name]" class="error">
        {{ errors[field.name] }}
      </div>
    </div>
    <button type="submit" :disabled="!submitable">Submit</button>
    <br />
    <br />
    <pre>{{ values }}</pre>
  </form>
</template>
<script setup lang="ts">
import { defineProps, reactive, computed, onMounted } from 'vue';
import { ZodError } from 'zod';
import type { PropType } from 'vue';
import type { Field, ObjectGeneric } from './FormBuilder';

interface ValidationResult {
  valid: boolean;
  message?: string;
}

interface DataStructure {
  values: ObjectGeneric;
  errors: ObjectGeneric;
}

const props = defineProps({
  id: {
    type: [String, Number],
    default: null
  },
  fields: {
    type: Array as PropType<Field[]>,
    default: () => []
  }
});

const data = reactive<DataStructure>({
  errors: {},
  values: {}
});

function validate(value: string, validator: any): ValidationResult {
  try {
    validator.parse(value);
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        valid: false,
        message: error.issues[0].message
      };
    }
  }
  return {
    valid: true
  };
}

function throwErrors(fieldName: string, valid: boolean, message: string | undefined) {
  if (!valid) {
    data.errors = {
      ...data.errors,
      [fieldName]: message
    };
  } else {
    data.errors = {
      ...data.errors,
      [fieldName]: undefined
    };
  }
}

function onChangeHandler(payload: any, fieldName: string, fieldNumber: number) {
  const validator = props.fields[fieldNumber].validation;
  const { valid, message } = validate(payload, validator);
  throwErrors(fieldName, valid, message);
  data.values[fieldName] = payload;
}

function submit() {
  for (const { name, validation } of props.fields) {
    const { valid, message } = validate(data.values[name], validation);
    throwErrors(name, valid, message);
  }
  if (submitable.value) {
    console.log('submit!!!');
  }
}

const submitable = computed(() => {
  const errors: number = Object.keys(data.errors).filter((i) => data.errors[i] != undefined).length;
  return errors === 0;
});

onMounted(() => {
  const values: any = {};
  props.fields.forEach(({ name, props }) => {
    if (props?.value !== undefined) {
      values[name] = props.value;
    }
  });
  data.values = values;
});
</script>
