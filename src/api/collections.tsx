import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { CollectionGetListDocument, CollectionGetProductsListDocument } from "@/gql/graphql";

export const getCollectionBySlug = async ({ slug }: { slug: string }) => {
	const { collections } = await executeGraphql(CollectionGetProductsListDocument, {
		slug: slug,
	});

	if (!collections) {
		notFound();
	}

	const collection = collections.data[0].attributes;

	if (!collection) {
		notFound();
	}

	return collection;
};

export const getCollectionList = async () => {
	const { collections } = await executeGraphql(CollectionGetListDocument);

	if (!collections) {
		notFound();
	}

	return collections;
};
