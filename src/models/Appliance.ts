import { ApplianceRecord } from '@/types/Appliance'

class Appliance extends ApplianceRecord {
  
  constructor(_id: string, brand: string, type: string, store) {
    this.id = _id
    this.brand = brand
    this.type = type
    this.store = store
  }
}
