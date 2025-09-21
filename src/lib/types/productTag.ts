export const ProductTag = ["All", "Clothing", "Electronics", "Home", "Beauty", "Sports", "Books", "Toys", "Accessories"] as const;

export type Tags = (typeof ProductTag)[number];
