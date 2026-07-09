import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { PRODUCTS, finalPrice } from "@/data/products";
const initial = { cart: [], wishlist: [], recent: [], user: null };
function reducer(s, a) {
    switch (a.type) {
        case "hydrate": return { ...s, ...a.payload };
        case "add": {
            const existing = s.cart.find(c => c.id === a.item.id && c.color === a.item.color && c.size === a.item.size);
            if (existing)
                return { ...s, cart: s.cart.map(c => c === existing ? { ...c, qty: c.qty + a.item.qty } : c) };
            return { ...s, cart: [...s.cart, a.item] };
        }
        case "remove": return { ...s, cart: s.cart.filter(c => c.id !== a.id) };
        case "qty": return { ...s, cart: s.cart.map(c => c.id === a.id ? { ...c, qty: Math.max(1, a.qty) } : c) };
        case "clearCart": return { ...s, cart: [] };
        case "wish": return { ...s, wishlist: s.wishlist.includes(a.id) ? s.wishlist.filter(i => i !== a.id) : [...s.wishlist, a.id] };
        case "recent": return { ...s, recent: [a.id, ...s.recent.filter(i => i !== a.id)].slice(0, 8) };
        case "login": return { ...s, user: a.user };
        case "logout": return { ...s, user: null };
    }
}
const StoreCtx = createContext(null);
const KEY = "buybee:store";
export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initial);
    useEffect(() => {
        try {
            const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
            if (raw)
                dispatch({ type: "hydrate", payload: JSON.parse(raw) });
        }
        catch { }
    }, []);
    useEffect(() => {
        try {
            localStorage.setItem(KEY, JSON.stringify(state));
        }
        catch { }
    }, [state]);
    const cartProducts = useMemo(() => state.cart.map(item => ({ item, product: PRODUCTS.find(p => p.id === item.id) })).filter(x => x.product), [state.cart]);
    const subtotal = useMemo(() => cartProducts.reduce((sum, { product, item }) => sum + finalPrice(product) * item.qty, 0), [cartProducts]);
    const itemCount = state.cart.reduce((n, c) => n + c.qty, 0);
    const value = {
        state,
        addToCart: (id, qty = 1, color, size) => dispatch({ type: "add", item: { id, qty, color, size } }),
        removeFromCart: (id) => dispatch({ type: "remove", id }),
        updateQty: (id, qty) => dispatch({ type: "qty", id, qty }),
        clearCart: () => dispatch({ type: "clearCart" }),
        toggleWish: (id) => dispatch({ type: "wish", id }),
        trackRecent: (id) => dispatch({ type: "recent", id }),
        login: (u) => dispatch({ type: "login", user: u }),
        logout: () => dispatch({ type: "logout" }),
        cartProducts, subtotal, itemCount,
    };
    return _jsx(StoreCtx.Provider, { value: value, children: children });
}
export function useStore() {
    const c = useContext(StoreCtx);
    if (!c)
        throw new Error("useStore outside provider");
    return c;
}
