<template>
  <div class="wrapper">
    <div v-if="loading">
      <ProductLoader />
    </div>
    <div v-else-if="errors.length > 0">
      Ошибка: {{ errors[0] }}
    </div>
    <div v-else class="product-list">
      <ProductItem
        v-for="product in productList"
        :id="product.id"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProductItem from './ProductItem.vue';
import ProductLoader from './ProductLoader.vue';

export default {
  name: 'ProductCatalog',
  components: {
    ProductItem,
    ProductLoader
  },
  computed: {
    ...mapState(['loading', 'products', 'errors']),
    productList() {
      return this.products;
    }
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(['fetchProducts']),
  }
}
</script>

<style>
.product-list {
	display: flex;
  margin: 112px 0;
  flex-wrap: wrap;
}
</style>