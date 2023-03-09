import { TCartProduct, TProduct, TProductVariant } from "./types";

export const getCategories = (products: Array<TProduct>): Array<string> => {
  const categories = products.map((product: TProduct) => product.category);
  categories.unshift('Все')
  return Array.from(new Set(categories))
}

export const isProductInCart = (product: TProduct | undefined, cart: Array<TCartProduct>, variant: TProductVariant | undefined): boolean => {
  if (!product || !cart) return false 

  let flag = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      if (variant) {
        if (cart[i].variant?.variant === variant.variant) flag = true
      } else {
        flag = true
      }
    };
  }
  return flag
}