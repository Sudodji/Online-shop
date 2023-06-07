<template>
  <div>
    <AppHeader :currentView="currentView"/>
    <component :is="currentView" />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import MainView from './MainView/MainView';
import ProductDetails from './Product/ProductDetails';
import ProductFavorites from './Product/ProductFavorites';

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    MainView,
    AppFooter,
    ProductFavorites,
    ProductDetails
  },
  computed: {
    currentView() {
      switch (this.$route.name) {
        case 'Main':
          return 'MainView';
        case 'Favorites':
          return 'ProductFavorites';
        case 'Details':
          return 'ProductDetails';
        default:
          return 'MainView';
      }
    },
  },
}
</script>

<style>
.wrapper {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
