<template>
  <main>
    <div class="wrapper">
      <h1 class="favorites-title">Избранное</h1>
      <div v-if="favoriteList.length > 0" class="favorites-list">
        <ProductItem
          v-for="favorite in favoriteList"
          :key="favorite.id"
          :id="favorite.id"
          :title="favorite.title"
          :price="favorite.price"
          :image="favorite.image"
        />
      </div>
      <p v-else class="favorites-empty">Список избранного пуст</p>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductFavorites',
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(['favorites']),
    favoriteList() {
      return this.favorites;
    }
  },
};
</script>

<style>
.favorites-title {
  margin: 16px 0 0 0;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
}

.favorites-list {
  margin: 32px 0 164px 0;
  display: flex;
  flex-wrap: wrap;
}

.favorites-empty {
  font-weight: 500;
  font-size: 32px;
  color: #464C58;
  margin: 123px 0 0 0;
  text-align: center;
  height: calc(100vh - 412px);
}
</style>
