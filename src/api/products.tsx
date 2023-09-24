import { type ProductListItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	category: string;
	price: number;
	image: string;
	description: string;
};

export const getProductsList = async ({
	per_page = 4,
	offset = 0,
}: {
	per_page?: number;
	offset?: number;
}) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${per_page}&offset=${offset}`,
	);
	const productsResponse = (await response.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductListItemType);

	return products;
};

export const getProductsCount = async () => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const productsResponse = (await response.json()) as ProductResponseItem[];

	return productsResponse.length;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await response.json()) as ProductResponseItem;

	return productResponseItemToProductListItemType(productResponse);
};

const productResponseItemToProductListItemType = (
	product: ProductResponseItem,
): ProductListItemType => ({
	id: product.id,
	name: product.title,
	category: product.category,
	price: product.price,
	description: product.description,
	coverImage: {
		src: product.image,
		alt: product.title,
	},
});
