import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '../components/AppLayout';
import ProductDetails from '../components/Product/ProductDetails';
import ProductFavorites from '../components/Product/ProductFavorites';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: AppLayout,
	},
	{
		path: '/products/:id',
		name: 'Details',
		component: ProductDetails,
	},
	{
		path: '/favorites',
		name: 'Favorites',
		component: ProductFavorites,
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
