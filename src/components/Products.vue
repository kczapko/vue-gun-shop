<template>
  <ul class="products">
    <vue-custom-scrollbar class="scrollbar">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></Product>
    </vue-custom-scrollbar>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Product from "./Product.vue";
import vueCustomScrollbar from "vue-custom-scrollbar";

export default {
  methods: {
    ...mapActions(["loadProducts"]),
  },
  computed: {
    ...mapGetters(["products"]),
  },
  components: {
    Product,
    vueCustomScrollbar,
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style lang="scss" scoped>
.products {
  width: 75%;
  padding-bottom: 10px;
}

.scrollbar {
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
