import { TCartProduct, TProduct, TProductVariant } from "./types";

export const isProductInCart = (product: TProduct | undefined, cart: Array<TCartProduct>, variant: TProductVariant | undefined): boolean => {
  if (!product || !cart) return false 

  let flag = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      if (variant) {
        if (cart[i].variant?.title === variant.title) flag = true
      } else {
        flag = true
      }
    };
  }
  return flag
}