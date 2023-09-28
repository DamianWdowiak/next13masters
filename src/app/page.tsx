import Link from "next/link";
import NextImage from "next/image";

import { getCollectionList } from "@/api/collections";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

const PER_PAGE = 4;

export default async function Home() {
	const { data: productListItems } = await getProductsList({ perPage: PER_PAGE });
	const { data: collectionList } = await getCollectionList();

	return (
		<section className="flex flex-col items-center">
			<div className="w-full bg-gray-600 px-36 py-8 capitalize text-white">
				<h1>Home Page</h1>
			</div>
			<div className="flex flex-row gap-6 py-6">
				{collectionList.map((collection) => {
					const imageUrl = collection.attributes?.image?.data?.attributes?.url;
					const image = `${process.env.IMAGE_URL}${imageUrl}`;

					return (
						<Link key={collection.id} href={`/collections/${collection.attributes?.slug}`}>
							<NextImage
								src={image}
								alt={collection.attributes?.name || ""}
								width={320}
								height={320}
							/>
							<h2 className="font-bold">{collection.attributes?.name}</h2>
						</Link>
					);
				})}
			</div>
			<ProductList productItems={productListItems} />
		</section>
	);
}
