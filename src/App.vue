<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
let price: number;
price++;
console.log(price);

let canBeAnything: any = true;
canBeAnything = 'test';

const books: string[] = ['book 1', 'book 2', 'book 3', 'book 4'];
books.push('book 5');

const sum = ({x, y} : {x: number, y: number}) : void => {
  return x + y;
};

console.log(sum({ x: 2, y: 5}));
const greet = (name? : string | number) => {
  if (name) console.log('name', name);
  else console.log('hey');
}
greet('naam');

let booleanOrString : string | number = 'name'; 
booleanOrString = true;
let pi: 3.14 = 3.14;
const setProductSize = (size: 'small' | 'medium' | 'large') => {
  //...
};
setProductSize('very large');
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
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
