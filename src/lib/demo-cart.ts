export type DemoCartItem = {
  productId: number;
  name: string;
  category: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
};

const CART_KEY = "demo_cart_items";

export const getDemoCartItems = (): DemoCartItem[] => {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem(CART_KEY);
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

export const getDemoCartCount = (): number => {
  return getDemoCartItems().reduce((total, item) => total + item.quantity, 0);
};

export const addDemoCartItem = (item: DemoCartItem) => {
  const cartItems = getDemoCartItems();

  const existingIndex = cartItems.findIndex(
    (cartItem) =>
      cartItem.productId === item.productId &&
      (cartItem.size || "") === (item.size || "")
  );

  if (existingIndex !== -1) {
    cartItems[existingIndex].quantity += item.quantity;
  } else {
    cartItems.push(item);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  window.dispatchEvent(new Event("cartUpdated"));
};