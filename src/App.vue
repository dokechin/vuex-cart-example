<template>
  <div id='app'>
    <cart />
    <div class='hr'></div>
    <h1>Infinite Mannequin</h1>
    <h2>Merchandise</h2>
    <items />
  </div>
</template>

<script>
import Items from './components/Items.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: { Items, Cart },
}
</script>

<style>
@import './styles/pure.css';

body {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 1em;
}

.hr {
  margin-top: 1em;
  background-color: #ccc;
  height: 1px;
}
</style>
