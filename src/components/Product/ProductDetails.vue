<template>
	<main>
		<div class="wrapper">
			<div v-if="product" class="product__details">
				<div class="product__details__image">
					<img :src="product.image" width="480" height="515" alt="product" />
				</div>
				<div class="product__details__info">
					<h1 class="product__details__title">{{ product.title }}</h1>
					<p class="product__details__description">{{ product.description }}</p>
					<span class="product__details__price">{{ product.price }}</span>
					<button
						class="product__details__button"
						:class="{ 'button-disabled': favorite }"
						:disabled="favorite"
						@click="addToFavorites(product.id)"
					>
						ИЗБРАННОЕ
					</button>
				</div>
			</div>
			<h3 v-else>Не удалось загрузить информацию</h3>
		</div>
	</main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'ProductDetails',
	computed: {
		...mapGetters(['getProductById', 'getFavoriteById']),
		productId() {
			return this.$route.params.id;
		},
		product() {
			const productId = this.productId;
			return this.getProductById(productId);
		},
		favorite() {
			const favoriteId = this.productId;
			return this.getFavoriteById(favoriteId);
		},
	},
	methods: {
		...mapActions(['addToFavorites']),
		addToFavorites(productId) {
			this.$store.dispatch('addToFavorites', productId);
		},
	},
};
</script>

<style>
.product__details {
	display: flex;
	margin: 32px 0 112px 0;
}

.product__details__image {
	border: 1px solid #e5e5e5;
	padding: 35px;
}

.product__details__image img {
	object-fit: contain;
}

.product__details__info {
	margin-left: 40px;
}

.product__details__title {
	font-size: 40px;
	font-weight: 500;
	line-height: 48px;
	margin: 0;
}

.product__details__description {
	margin: 24px 0 0 0;
	line-height: 24px;
	color: #464c58;
}

.product__details__price {
	display: inline-block;
	font-size: 32px;
	margin-top: 24px;
	font-weight: 700;
}

.product__details__button {
	cursor: pointer;
	display: block;
	margin-top: 24px;
	width: 200px;
	height: 48px;
	background-color: #fff;
	border-radius: 4px;
	border: 1px solid #0a1e32;
	padding: 8px 34px 8px 65px;
	font-weight: 700;
	background-image: url('../../assets/favorites-button.svg');
	background-repeat: no-repeat;
	background-position: center left 25%;
}

.product__details__button:not(.button-disabled):hover {
	background-image: url('../../assets/favorites.svg');
}

.button-disabled {
	cursor: auto;
	color: #464C58;
	opacity: 0.5;
}
</style>
