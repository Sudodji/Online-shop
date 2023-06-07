import axios from 'axios';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
	state: {
		loading: false,
		products: [],
		errors: [],
		favorites: [],
	},
	mutations: {
		SET_LOADING(state, loading) {
			state.loading = loading;
		},
		SET_PRODUCTS(state, products) {
			state.products = products;
		},
		SET_ERRORS(state, errors) {
			state.errors = errors;
		},
		ADD_TO_FAVORITES(state, product) {
			state.favorites.push(product);
		},
		REMOVE_FROM_FAVORITES(state, productId) {
			state.favorites = state.favorites.filter(
				product => product.id !== productId
			);
		},
	},
	actions: {
		fetchProducts({ commit, state }) {
			if (state.products.length > 0) {
				return Promise.resolve();
			}
			commit('SET_LOADING', true);
			commit('SET_ERRORS', []);

			axios
				.get('https://fakestoreapi.com/products')
				.then(response => {
					commit('SET_PRODUCTS', response.data);
					commit('SET_LOADING', false);
				})
				.catch(error => {
					commit('SET_ERRORS', [error]);
					commit('SET_LOADING', false);
				});
		},
		addToFavorites({ commit, state }, productId) {
			const isProductInFavorites = state.favorites.some(
				product => product.id === productId
			);
			if (!isProductInFavorites) {
				const product = state.products.find(
					product => product.id === productId
				);
				if (product) {
					commit('ADD_TO_FAVORITES', product);
				}
			}
		},
		removeFromFavorites({ commit }, productId) {
			commit('REMOVE_FROM_FAVORITES', productId);
		},
	},
	getters: {
		isLoading: state => state.loading,
		products: state => state.products,
		errors: state => state.errors,
		favorites: state => state.favorites,
		getFavoriteById: state => id => {
			return state.favorites.find(favorite => favorite.id === Number(id));
		},
		getProductById: state => id => {
			return state.products.find(product => product.id === Number(id));
		},
	},
	plugins: [createPersistedState()],
});

export default store;
