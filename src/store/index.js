import Vuex from 'vuex'
import Vue from 'vue'

// Install Vuex plugin globally.
// Will cascade the $store property for each component.
Vue.use(Vuex)

export default new Vuex.Store({
  // The global root state.
  state: {
    // Shopping cart.
    cart: {},
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
    // All cart items, as a list.
    cartItems (state) {
      return Object.keys(state.cart).map(k => state.cart[k])
    },
    // The total amount of dollars in the cart.
    cartTotal (state, getters) {
      if (!getters.cartItems.length) {
        return 0
      }

      // Sum of price*quantity for all items.
      return getters.cartItems.map(i => i.price * i.quantity).reduce((acc, val) => acc + val)
    }
  },

  // The public interface to modify state.
  mutations: {
    // Adds an item to the cart.
    addItem (state, item) {
      if (state.cart[item.id]) {
        // Update quantity.
        state.cart[item.id].quantity++
      } else {
        // Set initial value.
        //
        // NOTE: Vue.set() is needed since we're defining new keys (IDs) that the Vue
        // reactivity engine is not yet aware of. Otherwise simple array access, like above,
        // would work.
        Vue.set(state.cart, item.id, {
          id: item.id,
          quantity: 1,
          price: item.price,
          name: item.name
        })
      }
    }
  }
})
