<template>
  <div class="cart-wrapper">
    <div class="funds">
      <p class="funds-text">Available funds</p>
      <div class="funds-money">
        <span class="money">{{ funds | money }}</span>
      </div>
    </div>
    <div class="cart">
      <div class="cart-items-count">{{ productsCountText }}</div>
      <ul class="cart-items">
        <li class="cart-item" v-for="product in cartProducts" :key="product.id">
          <div class="cart-item-top">
            <div class="cart-item-name">{{ product.name }}</div>
            <div class="cart-item-price">{{ product.price | money }}</div>
          </div>
          <div class="cart-item-image">
            <img :src="imageURL(product.image)" alt="" />
          </div>
          <div
            class="cart-item-delete"
            @click="removeFromCart(product.id)"
          ></div>
        </li>
      </ul>
      <div v-if="productsCount > 0" @click="buy" class="buy-button">
        Buy for <span class="money">{{ sum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["funds", "cartProducts"]),
    productsCount() {
      return this.cartProducts.length;
    },
    productsCountText() {
      return this.productsCount === 1
        ? `1 item in cart`
        : `${this.productsCount} items in cart`;
    },
    sum() {
      return this.cartProducts.reduce((total, product) => {
        return (total += product.price);
      }, 0);
    },
  },
  methods: {
    ...mapActions(["removeFromCart", "buy"]),
    imageURL(image) {
      return require(`../assets/${image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-wrapper {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.funds-text {
  text-align: right;
  font-size: 14px;
  margin-bottom: 10px;
}
.funds-money {
  font-size: 22em;
  text-align: right;
  margin-right: 20px;
}
.funds-money .money:after {
  width: 16px;
  right: -20px;
}

.cart {
  background: #545454;
  margin-top: 30px;
  padding: 10px;
  flex-grow: 1;
  position: relative;
  padding-bottom: 70px;
  overflow: hidden;
}
.cart-items-count {
  color: #fff;
  font-size: 14rem;
  font-weight: bold;
  padding-bottom: 10px;
}
.cart-items {
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  overflow: auto;
  max-height: 100%;
}
.cart-item {
  padding: 20px 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  position: relative;
}
.cart-item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.cart-item-name {
  font-size: 12rem;
}
.cart-item-price {
  font-size: 16rem;
}
.cart-item-price .money:after {
  display: none;
}
.cart-item-image {
  margin-top: 30px;
}
.cart-item-image img {
  width: 40%;
}
.cart-item-delete {
  width: 20px;
  height: 20px;
  background: #f00;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 20px;
}
.cart-item-delete:before {
  content: "";
  display: block;
  height: 2px;
  width: 13px;
  background: #fff;
  position: absolute;
  top: 9px;
  left: 3px;
  transform: rotate(0deg);
  transition: transform 0.3s;
}
.cart-item-delete:after {
  content: "";
  display: block;
  height: 2px;
  width: 13px;
  background: #fff;
  position: absolute;
  top: 9px;
  left: 3px;
  transform: rotate(0deg);
  transition: transform 0.3s;
}
.cart-item-delete:hover {
  cursor: pointer;
}
.cart-item-delete:hover:before {
  transform: rotate(45deg);
}
.cart-item-delete:hover:after {
  transform: rotate(-45deg);
}

.buy-button {
  background: #6c3;
  font-size: 18em;
  font-weight: bold;
  color: #fff;
  text-align: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 40px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.buy-button:hover {
  background: #5b2;
}
.buy-button.hide {
  display: none;
}
</style>
