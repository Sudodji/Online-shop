<template>
  <main>
    <BagView />
    <ProductCatalog />
  </main>
</template>

<script>
import ProductCatalog from '../Product/ProductCatalog.vue';
import BagView from './BagView.vue';
export default {
  name: 'MainView',
  components: {
    BagView,
    ProductCatalog
  }
}
</script>