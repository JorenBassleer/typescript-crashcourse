<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import type Entry from './types/Entry';
import { provide, reactive, ref, type InjectionKey, inject } from 'vue';
import EntryCard from './components/EntryCard.vue';
import type User from './types/User';
import { userInjectionKey } from './injectionKeys';
// let price: number;
// price++;
// console.log(price);

// let canBeAnything: any = true;
// canBeAnything = 'test';

// const books: string[] = ['book 1', 'book 2', 'book 3', 'book 4'];
// books.push('book 5');

// const sum = ({x, y} : {x: number, y: number}) : void => {
//   return x + y;
// };

// console.log(sum({ x: 2, y: 5}));
// const greet = (name? : string | number) => {
//   if (name) console.log('name', name);
//   else console.log('hey');
// }
// greet('naam');

// let booleanOrString : string | number = 'name'; 
// booleanOrString = true;
// let pi: 3.14 = 3.14;
// type Sizes = 'small' | 'medium' | 'large'
// ;
// interface InventoryItem {
//   name: string,
//   price: number,
// };
// interface Product extends InventoryItem {
//   color?: string,
// };
// interface Service extends InventoryItem {
//   startTime: Date,
//   endTime: Date,
// };
// const tshirt : Product = {
//   name: 'T-shirt',
//   price: 20,
// };
// const consulting : Service = {
//   name: 'Teaching',
//   startTime: new Date('April 18, 2023 11:00:00'),
//   endTime: new Date('April 18, 2023 15:00:00'),
// }

// const purchaseItem = (item: InventoryItem) : InventoryItem => {
//   console.log(item.price);
//   return item;
// };

// purchaseItem(tshirt);

// enum ClothingSizes {
//   small = 'small',
//   medium = 'medium',
//   large = 'large',
// };
// const setProductSize = (size: ClothingSizes) => {
//   //...
// };
// setProductSize(ClothingSizes.large);

// class StockProduct {
//   name: string
//   price: number

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
//   buy() : this {
//     console.log('buy special producr', this.price);
//     return this;
//   }
// }
// class SpecialProduct extends StockProduct {
//   color: string = 'gray'
//   size: ClothingSizes | undefined
// }
// class SpecialService extends StockProduct implements Emailable {
//   startTime: Date
//   endTime: Date

//   constructor(name: string, price: number, startTime: Date, endTime: Date) {
//     super(name, price);
//     this.startTime = startTime;
//     this.endTime = endTime;
//   }
//   emailBody() : string {
//     return `Thank you for purchasing ${this.name}. It starts at ${this.startTime}`;
//   }
//   emailSubject(): string {
//     return `Appointment`;
//   }
// }
// const sendEmail = (emailable: Emailable, to: string) => {
//   emailable.emailBody();
//   emailable.emailSubject();
// }

// const pants = new SpecialProduct('Special pants', 55);
// pants.size = ClothingSizes.small;
// pants.color = 'white';
// pants.buy();

// const delivery = new SpecialService(
//   'takeaway',
//   55,
//   new Date('April 18, 2023 11:00:00'),
//   new Date('April 18, 2023 15:00:00')
// );
// delivery.buy();

// interface Emailable {
//   emailBody(): string,
//   emailSubject(): string,
// };

// const theCanvas = document.getElementById('theCanvas') as HTMLCanvasElement;
// const getNetPrice = (price: number, discount: number, format: boolean) : unknown => {
//   const netPrice = price * (1 - discount);
//   return format ? `${netPrice}` : netPrice;
// };
// const netPrice = getNetPrice(20, 10, true) as string;
// // const netPrice2 = <string>getNetPrice(20, 10, true);
// const netPrice2 = getNetPrice(20, 10, true) as string;

// interface Person {
//   name: string,
//   age: number,
// };

// const me: Person = {
//   name: 'Joren',
//   age: 25,
// };

// const clone = <T>(value: T): T => {
//   return JSON.parse(JSON.stringify(value));
// };
// const myClone = clone(me);
// const books2: string[] = ['book1', 'book2', 'book3', 'book4'];
// const books2Copy = clone<string[]>(books2);
// books2Copy.push('book1');

// const reverse = (value: string | string[]) => {
//   if (typeof value == 'string') {
//     return value.split('').reverse().join('');
//   } else {
//     return [...value].reverse();
//   }
// }

// class Employee {
//   firstName: string
//   lastName: string
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// class Company {
//   name: string
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const nameCalling = (entity: Employee | Company) => {
//   if (entity instanceof Employee) {
//     return `Hello ${entity.firstName} ${entity.lastName}`;
//   } else {
//     return `Hello ${entity.name}`;
//   }
// }
const user: User = reactive({
  id: 1,
  username: 'Joren B',
  settings: [],
});
provide(userInjectionKey, user);

const entries = ref<Entry[]>([]);
const handleCreateEntry = (entry: Entry) => {
  entries.value.unshift(entry);
};
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld
        msg="You did it!"
        @@create="handleCreateEntry"
      />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div
        v-for="entry in entries"
        :key="entry._id"
      >
      <EntryCard
        :entry="entry"
      />
      </div>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
