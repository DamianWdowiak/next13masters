import { notFound } from "next/navigation";
import {
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductsGetListByCategorySlugDocument,
	ProductsGetListByNameDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getProductsList = async ({
	page = 1,
	perPage = 4,
}: {
	perPage?: number;
	page?: number;
}) => {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		pageSize: perPage,
		page: page,
	});

	if (!products) {
		notFound();
	}

	return products;
};

export const getProductsListByCategorySlug = async ({
	page = 1,
	perPage = 4,
	categorySlug,
}: {
	perPage?: number;
	page?: number;
	categorySlug: string;
}) => {
	const { products } = await executeGraphql(ProductsGetListByCategorySlugDocument, {
		pageSize: perPage,
		page: page,
		categorySlug: categorySlug,
	});

	if (!products) {
		notFound();
	}

	return products;
};

export const getProductsListByName = async ({ name }: { name: string | null }) => {
	const { products } = await executeGraphql(ProductsGetListByNameDocument, {
		name: name,
	});

	if (!products) {
		notFound();
	}

	return products;
};

export const getProductById = async (id: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: id });

	if (!product?.data) {
		notFound();
	}

	return product.data;
};
