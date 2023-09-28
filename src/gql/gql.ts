/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ProductListItem on ProductEntity {\n  id\n  attributes {\n    ...ProductListItemAttributes\n  }\n}": types.ProductListItemFragmentDoc,
    "fragment ProductListItemAttributes on Product {\n  name\n  description\n  price\n  images {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n  categories {\n    data {\n      id\n      attributes {\n        name\n        slug\n      }\n    }\n  }\n  slug\n}": types.ProductListItemAttributesFragmentDoc,
    "query CollectionGetList {\n  collections {\n    data {\n      id\n      attributes {\n        name\n        slug\n        image {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CollectionGetListDocument,
    "query CollectionGetProductsList($slug: String!) {\n  collections(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        name\n        description\n        slug\n        products {\n          data {\n            ...ProductListItem\n          }\n        }\n      }\n    }\n  }\n}": types.CollectionGetProductsListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($pageSize: Int = 4, $page: Int = 1) {\n  products(pagination: {pageSize: $pageSize, page: $page}) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategorySlug($pageSize: Int = 4, $page: Int = 1, $categorySlug: String!) {\n  products(\n    pagination: {pageSize: $pageSize, page: $page}\n    filters: {categories: {slug: {eq: $categorySlug}}}\n  ) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}": types.ProductsGetListByCategorySlugDocument,
    "query ProductsGetListByName($name: String) {\n  products(filters: {name: {containsi: $name}}) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}": types.ProductsGetListByNameDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on ProductEntity {\n  id\n  attributes {\n    ...ProductListItemAttributes\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemAttributes on Product {\n  name\n  description\n  price\n  images {\n    data {\n      attributes {\n        url\n        alternativeText\n      }\n    }\n  }\n  categories {\n    data {\n      id\n      attributes {\n        name\n        slug\n      }\n    }\n  }\n  slug\n}"): typeof import('./graphql').ProductListItemAttributesFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList {\n  collections {\n    data {\n      id\n      attributes {\n        name\n        slug\n        image {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetProductsList($slug: String!) {\n  collections(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        name\n        description\n        slug\n        products {\n          data {\n            ...ProductListItem\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetProductsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($pageSize: Int = 4, $page: Int = 1) {\n  products(pagination: {pageSize: $pageSize, page: $page}) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategorySlug($pageSize: Int = 4, $page: Int = 1, $categorySlug: String!) {\n  products(\n    pagination: {pageSize: $pageSize, page: $page}\n    filters: {categories: {slug: {eq: $categorySlug}}}\n  ) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByName($name: String) {\n  products(filters: {name: {containsi: $name}}) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByNameDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
