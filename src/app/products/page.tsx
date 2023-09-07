import { ProductList } from "@/ui/organisms/ProductList";

const productListItems = [
	{
		id: "1",
		name: "Product 1",
		category: "Category 1",
		price: 100,
		coverImage: {
			src: "https://picsum.photos/seed/1/300/300",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Product 2",
		category: "Category 2",
		price: 200,
		coverImage: {
			src: "https://picsum.photos/seed/2/300/300",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		name: "Product 3",
		category: "Category 3",
		price: 300,
		coverImage: {
			src: "https://picsum.photos/seed/3/300/300",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		name: "Product 4",
		category: "Category 4",
		price: 400,
		coverImage: {
			src: "https://picsum.photos/seed/4/300/300",
			alt: "Product 4",
		},
	},
];

export default function ProductsPage() {
	return (
		<div>
			<h1>Products Page</h1>
			<ProductList productItems={productListItems} />
		</div>
	);
}
