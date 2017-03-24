<template>
  <ul class='items'>
    <li v-for='(item, index) in items' class='item'>
      <img class='item-image' :src='"http://lorempixel.com/400/400/abstract/" + index' />
      <div>{{ item.name }} <span class='item-price'>${{ item.price }}</span></div>
      <a class='item-add' href='#' @click.prevent='addToCart(item)'>Add to Cart</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'items',
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    addToCart (item) {
      this.$store.commit('addItem', item)
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

.item-image {
  height: 150px;
}

.item-add {
  display: block;
}
</style>
