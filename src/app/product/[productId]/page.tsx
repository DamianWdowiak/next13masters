import { type Metadata } from "next";

import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { SingleProductDescription } from "@/ui/atoms/SingleProductDescription";
import { RelatedProducts } from "@/ui/organisms/RelatedProducts";
import { LoadingCircle } from "@/ui/atoms/LoadingCircle";

export async function generateMetadata({
	params: { productId },
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(productId);

	return {
		title: product.attributes?.name,
		description: product.attributes?.description,
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product.attributes) {
		return null;
	}

	const coverImage = product.attributes.images.data[0]?.attributes;
	const coverImageSrc = `${process.env.IMAGE_URL}${coverImage?.url}`;
	const categorySlug = product.attributes?.categories?.data[0]?.attributes?.slug || "";

	return (
		<section className="mx-auto flex flex-col items-center justify-between gap-6">
			<div className="flex">
				{coverImage && (
					<ProductListItemCoverImage src={coverImageSrc} alt={coverImage.alternativeText} />
				)}
				<SingleProductDescription
					name={product.attributes.name}
					price={product.attributes.price}
					description={product.attributes.description}
				/>
			</div>

			<Suspense fallback={<LoadingCircle />}>
				<RelatedProducts categorySlug={categorySlug} />
			</Suspense>
		</section>
	);
}
