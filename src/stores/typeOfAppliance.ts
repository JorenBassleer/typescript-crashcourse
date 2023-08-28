import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getTypes, createType } from '@/api/typeOfAppliance';
import type { TypeOfAppliance, BaseTypeOfAppliance } from '@/types/TypeOfAppliance';

export const useTypeOfApplianceStore = defineStore('typeOfAppliance', () => {
  const typesOfAppliance = ref<TypeOfAppliance[]>([]);

  const setTypesOfAppliance = async (): Promise<void> => {
    try {
      typesOfAppliance.value = await getTypes();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };
  const createTypeOfAppliance = async (type: BaseTypeOfAppliance): Promise<void> => {
    try {
      await createType(type);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };
  const searchTypeOfApplianceById = (typeId: string): TypeOfAppliance | null => {
    const foundType = typesOfAppliance.value.find((entry) => entry._id === typeId);
    return foundType ? foundType : null;
  };
  return {
    setTypesOfAppliance,
    createTypeOfAppliance,
    searchTypeOfApplianceById,
    typesOfAppliance
  };
});
