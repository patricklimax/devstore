"use client";

import { ProductWithTotalPrice } from '@/helpers/product';
import { ReactNode, createContext, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  subtotal: number;
  total: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  subtotal: 0,
  total: 0,
  totalDiscount: 0,
  addProductToCart: () => { },
  decreaseProductQuantity: () => { },
  increaseProductQuantity: () => { },
  removeProductFromCart: () => { },
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity ;
    }, 0);
  }, [products])

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.quantity;
    }, 0);
  }, [products])

  const totalDiscount = subtotal - total
  
  // adicionando produtos ao carrinho
  const addProductToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some(
      cartProduct => cartProduct.id === product.id);

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          }
          return cartProduct;
        })
      )
      return;
    }
    setProducts(prev => [...prev, product]);
  }

  // diminuindo a quantidade de produtos do carrinho
  const decreaseProductQuantity = (productId: string) => {
    setProducts(prev => prev
      .map(cartProduct => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          }
        }
        return cartProduct;
      })
      .filter((cartProduct) => cartProduct.quantity > 0)
    )
  }

  // aumentando a quantidade de produtos do carrinho
  const increaseProductQuantity = (productId: string) => {
    setProducts(prev => prev
      .map(cartProduct => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          }
        }
        return cartProduct;
      })
    )
  }

  // removendo produtos do carrinho
  const removeProductFromCart = (productId: string) => {
    setProducts(prev =>
      prev.
        filter(cartProduct => cartProduct.id !== productId
        ));
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        subtotal,
        total,
        totalDiscount,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
