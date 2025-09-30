export type Tags = {
  key: string;
  label: string;
};
export type Variant = {
  name: string;
  photoURL: string;
};

export type Product = {
  id: string;
  date?: string;
  productName: string;
  price: number;
  tags: Tags[];
  description?: string;
  photoURL: string;
  variant?: Variant[];
};
export type AppUser = {
  uid: string;
  cartCount?: number;
  cartItems?: Product[];
  displayName: string;
  photoURL?: string;
  email: string;
  providerId?: string;
};
