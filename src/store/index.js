import Vuex from 'vuex'
import Vue from 'vue'

// Install Vuex plugin globally.
// Will cascade the $store property for each component.
Vue.use(Vuex)

export default new Vuex.Store({
  // The global root state.
  state: {
    // Shopping cart.
    cartItems: [],
    // Items available to purchase.
    items: [
      { id: 4, name: 'The Ukulele Drones (LP3)', price: 25 },
      { id: 3, name: 'Tectonic Microwave (LP1)', price: 15 },
      { id: 2, name: 'Space Cardigan (LP2)', price: 15 },
      { id: 1, name: 'Give Me Milk or Give Me Death (EP)', price: 8 }
    ]
  },

  // Calculated, reactive views into the state.
  getters: {
    // The total amount of dollars in the cart.
    cartTotal (state, getters) {
      return state.cartItems.map(i => i.item.price * i.item.quantity).reduce((acc, val) => acc + val)
    }
  },

  // The public interface to modify state.
  mutations: {
    // Adds an item to the cart.
    addItem (state, item) {
      var storedItem = state.cartItems.filter(cartItem => cartItem.id === item.id)
      if (storedItem !== null) {
        // Update quantity.
        storedItem.quantity++
      } else {
        this.state.cartItems.push({quantity: 1, item: item})
      }
    }
  }
})
