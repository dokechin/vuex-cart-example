<template>
  <div class='cart'>
    <span class='cart-label'>Cart:</span>
    <ul class='cart-items'>
      <li v-for='item in cart'>
        {{ item.name }} <span class='cart-quantity'>(x{{ item.quantity }})</span> <span class='cart-sep'>&middot;</span>
      </li>
    </ul>
    <span class='cart-total'>Total: ${{ totalPrice }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: [
        { id: 3, name: 'Space Cardigan (LP2)', price: 15, quantity: 2 },
        { id: 2, name: 'Tectonic Microwave (LP1)', price: 15, quantity: 1 }
      ]
    }
  },
  computed: {
    totalPrice () {
      return this.cart.map(i => i.price * i.quantity).reduce((i, a) => i + a)
    }
  }
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
