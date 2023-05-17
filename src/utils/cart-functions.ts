import { COOKIE_CART_NAME } from "./constants";
import { getCookie, isCookie, setCookie } from "./cookies";
import { TCartProduct, TProduct, TProductVariant } from "./types";

type TCookieProduct = {
  id: number,
  count: number, 
  variant: TProductVariant,
  price: number,
  cartID: number
}

export const updateCookieCart = (products: Array<TCartProduct>) => {
  const cart = products.map(product => ({
    id: product.id,
    count: product.count,
    variant: product.variant,
    cartID: product.cartID
  }))
  setCookie(COOKIE_CART_NAME, JSON.stringify(cart))
}

const getProductById = (id: number, products: Array<TProduct>) => {
  return products.filter(product => product.id === id)[0]
}

export const getCookieCart = (products: Array<TProduct>) => {
  if (!products.length) return

  const cartString = getCookie(COOKIE_CART_NAME)
  if (cartString) {
    const items = JSON.parse(cartString)
    return items.map((item: TCookieProduct) => ({ 
      ...getProductById(item.id, products),
      count: item.count,
      variant: item.variant,
      price: item.price,
      cartID: item.cartID
    }))
  };
}

export const isCookieCart = () => {
  return isCookie(COOKIE_CART_NAME);
}