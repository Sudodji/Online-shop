<template>
  <header>
    <div class="wrapper header">
      <img class="header__logo" src="../assets/logo.svg" alt="logo" />
      <router-link to="/favorites" class="header__favorites__button">
        <div v-if="favoriteList.length > 0" class="header__favorites__count">
          <span class="header__favorites__number">{{ favoriteList.length }}</span>
        </div>
        <img class="header__favorites__icon" src="../assets/favorites.svg" alt="favorites"/>
      </router-link>
    </div>
    <div v-if="currentView !== 'MainView'">
      <hr class="header__border">
      <div class="wrapper">
        <nav class="header__nav">
          <router-link class="header__nav__item" to="/">Главная</router-link>
          <span class="header__nav__arrow">›</span>
          <span v-if="currentView === 'ProductFavorites'" class="header__nav__item">Избранное</span>
          <span v-else class="header__nav__item">{{ product.category }}</span>
        </nav>
      </div>
    </div>
  </header>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  props: {
    isMainView: Boolean,
    currentView: String
  },
  computed: {
    ...mapGetters(['getProductById', 'favorites']),
    product() {
      const productId = this.$route.params.id;
      return this.getProductById(productId);
    },
    favoriteList() {
      return this.favorites;
    }
  },
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
}

.header__logo {
  padding: 11px 0 24px 0;
}

.header__favorites__button {
  position: relative;
}

.header__favorites__count {
  width: 16px;
  height: 16px;
  background: #EB4C47;
  border-radius: 50%;
  position: absolute;
  top: 29%;
  left: 58%;
}

.header__favorites__number {
  color: #fff;
  font-weight: 700;
  font-size: 8px;
  display: inline-block;
  position: absolute;
  top: 22%;
  right: 34%;
}

.header__favorites__icon {
  padding: 24px 0 33px 0;
}

.header__border {
  margin: 0;
  border: none;
  height: 1px;
  background-color: #0A1E32;
}

.header__nav {
  margin-top: 32px;
  display: flex;
  align-items: center;
}

.header__nav__item {
  color: #464C58;
  font-size: 12px;
  line-height: 18px;
}

.header__nav__arrow {
  margin: 0 6px;
  color: #464C58;
}
</style>