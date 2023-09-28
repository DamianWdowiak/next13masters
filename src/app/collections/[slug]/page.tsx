import { type Metadata } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionBySlug } from "@/api/collections";

export async function generateMetadata({
	params: { slug },
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { name } = await getCollectionBySlug({
		slug: slug,
	});
	return {
		title: name,
	};
}

export default async function ProductsByCollectionPage({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const { name, description, products } = await getCollectionBySlug({
		slug: slug,
	});

	return (
		<div className="flex w-full flex-col items-center">
			<div className="w-full bg-gray-600 px-36 py-8 text-white">
				<h1 className="font-bold">{name}</h1>
				<h2>{description}</h2>
			</div>
			<ProductList productItems={products?.data || []} />
		</div>
	);
}
