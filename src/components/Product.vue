<template>
  <li
    class="product"
    :data-new="product.new"
    :data-in_cart="product.in_cart"
    :data-owned="product.owned"
    :data-too_expensive="product.too_expensive"
    @click="addToCart(product.id)"
  >
    <div class="product-name">{{ product.name }}</div>
    <div class="product-image">
      <img :src="imageURL" :alt="product.name" />
    </div>
    <div class="product-bottom">
      <div class="product-price">
        <span class="money">{{ product.price | money }}</span>
      </div>
      <div class="product-in-cart">In cart</div>
      <div class="product-owned">Owned</div>
    </div>
    <div class="product-new">New</div>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],
  computed: {
    imageURL() {
      return require(`../assets/${this.product.image}`);
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 23%;
  margin: 0 1% 20px;
  background: #2b2b2b;
  position: relative;
  box-shadow: 0 0 0 rgba(0, 0, 0, 1);
  transition: all 0.2s;
}
.product:hover {
  box-shadow: 5px 5px 10px rgba(50, 50, 50, 0.75);
  cursor: pointer;
  transition: all 0.5s;
}
.product-name {
  text-align: center;
  color: #fff;
  font-size: 14rem;
  line-height: 20rem;
  height: 20rem;
  overflow: hidden;
  margin: 5px;
}
.product-image {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.product-image img {
  max-width: 100%;
}
.product-bottom {
  height: 40rem;
  line-height: 40rem;
  text-align: center;
  font-size: 18rem;
  position: relative;
  overflow: hidden;
}
.product-bottom div {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.5s;
}
.product-price {
  background: #757575;
  color: #fff;
}
.product-in-cart {
  background: #f90;
  color: #fff;
  transform: translate(0, 100%);
}
.product-owned {
  background: #fff;
  color: #000;
  transform: translate(0, 100%);
}
.product-new {
  background: #fc0;
  color: #000;
  position: absolute;
  top: 15%;
  font-size: 12px;
  padding: 5px 10px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.5s;
}
.product[data-new="true"] .product-new {
  opacity: 1;
}
.product[data-in_cart="true"] .product-in-cart {
  transform: translate(0, 0);
}
.product[data-in_cart="true"] .product-price {
  transform: translate(0, 100%);
}
.product[data-owned="true"] .product-owned {
  transform: translate(0, 0);
}
.product[data-owned="true"] .product-price {
  transform: translate(0, 100%);
}
.product[data-too_expensive="true"] .product-price {
  background: #f30;
}
.product[data-in_cart="true"]:hover,
.product[data-owned="true"]:hover,
.product[data-too_expensive="true"]:hover {
  cursor: not-allowed;
  box-shadow: none;
}
</style>
