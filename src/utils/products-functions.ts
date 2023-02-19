import { TCartProduct, TProduct } from "./types";

export const getCategories = (products: Array<TProduct>): Array<string> => {
  const categories = products.map((product: TProduct) => product.category);
  categories.unshift('Все')
  return Array.from(new Set(categories))
}

export const isProductInCart = (product: TProduct | undefined, cart: Array<TCartProduct>): boolean => {
  if (!product || !cart) return false 

  let flag = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) flag = true;
  }
  return flag
}