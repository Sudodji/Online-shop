<template>
	<div class="product-item">
		<router-link :to="`/products/${id}`" class="custom-link">
			<div class="product-item__content">
				<div class="product-item__button-container">
					<button v-if="this.$route.path === '/favorites'" class="product-item__button" @click.stop="handleRemoveFromFavorites">
						<img  src="../../assets/remove-from-favorites.svg" alt="button"/>
					</button>
					<button v-else class="product-item__button" @click.stop="handleAddToFavorites">
						<img v-if="favorite" src="../../assets/favorites.svg" alt="button"/>
						<img v-else src="../../assets/add-to-favorites.svg" alt="button"/>
					</button>
				</div>
				<div class="product-item__image">
					<img :src="image" alt="product" width="320" height="336" />
				</div>
				<div class="product-item__info">
					<span class="product-item__title">{{ title }}</span>
					<span class="product-item__price">{{ price }}</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'ProductItem',
	props: {
		id: {
			type: Number,
			required: true,
		},
		title: String,
		price: Number,
		image: String,
	},
	computed: {
    ...mapGetters(['getFavoriteById']),
    favorite() {
      const favoriteId = this.id;
      return this.getFavoriteById(favoriteId);
    }
  },
	methods: {
		...mapActions(['addToFavorites', 'removeFromFavorites']),
		handleAddToFavorites(event) {
			event.preventDefault()
			this.addToFavorites(this.id);
		},
		handleRemoveFromFavorites(event) {
			event.preventDefault()
			this.removeFromFavorites(this.id);
		},
	},
};
</script>

<style>
.product-item__content {
	width: 290px;
	padding: 30px 30px 16px 30px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}

.product-item__content::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
	opacity: 0;
	transition: opacity 0.3s;
}

.custom-link {
  text-decoration: none;
}

.product-item__content:hover::after {
	opacity: 1;
}

.product-item__image {
	position: relative;
}

.product-item__image img {
	object-fit: contain;
}

.product-item__info {
	display: flex;
	text-align: center;
	flex-direction: column;
	margin-top: 16px;
}

.product-item__title {
  color: #0A1E32;
	font-size: 12px;
	line-height: 18px;
	margin-bottom: 8px;
}

.product-item__price {  
	color: #464c58;
	font-weight: 700;
	line-height: 24px;
}

.product-item__button-container {
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 1;
}

.product-item__button {
	cursor: pointer;
	border: none;
	background: none;
	padding: 0;
}
</style>
