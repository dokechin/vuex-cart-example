<template>
  <div class='cart'>
    <span class='cart-label'>Cart:</span>
    <ul class='cart-items'>
      <li v-for='item in cartItems'>
        {{ item.name }} <span class='cart-quantity'>(x{{ item.quantity }})</span> <span class='cart-sep'>&middot;</span>
      </li>
    </ul>
    <span class='cart-total'>Total: ${{ cartTotal }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'cart',
  // mapGetters() takes a list of getter names and proxies them as values directly on the component.
  computed: mapGetters(['cartTotal']),
  computed: { cartItems: this.$state.cartItems}
  
}
</script>

<style>
.cart-label {
  color: black;
}

.cart-items {
  display: inline;
  list-style-type: none;
  padding-left: 0;
}

.cart-items li {
  display: inline;
}

.cart-quantity {
  color: #999;
}

.cart-sep {
  color: #ccc;
}

.cart-total {
  color: black;
  font-weight: bold;
}
</style>
