<template>
  <ul class='items'>
    <li v-for='(item, index) in items' class='item'>
      <img :src='"http://lorempixel.com/400/400/abstract/" + index' />
      <div>{{ item.name }} <span class='item-price'>${{ item.price }}</span></div>
      <a href='#'>Add to Cart</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'items',
  data () {
    return {
      items: [
        { id: 4, name: 'The Ukulele Drones (LP3)', price: 25 },
        { id: 3, name: 'Tectonic Microwave (LP1)', price: 15 },
        { id: 2, name: 'Space Cardigan (LP2)', price: 15 },
        { id: 1, name: 'Give Me Milk or Give Me Death (EP)', price: 8 }
      ]
    }
  }
}
</script>

<style>
.items {
  columns: 2;
  list-style-type: none;
  padding-left: 0;
}

.item {
  margin-bottom: 1em;
}

.item-price {
  color: #999;
}

.item img {
  height: 150px;
}

.item a {
  display: block;
}
</style>
