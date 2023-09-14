import { type Metadata } from "next";

import { getProductById } from "@/api/products";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { SingleProductDescription } from "@/ui/atoms/SingleProductDescription";

export async function generateMetadata({
	params: { productId },
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(productId);

	return {
		title: product.name,
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<section className="flex items-center justify-between">
			<ProductListItemCoverImage {...product.coverImage} />
			<SingleProductDescription {...product} />
		</section>
	);
}
