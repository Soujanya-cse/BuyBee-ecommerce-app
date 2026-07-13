import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
export const Route = createFileRoute("/wishlist")({
    head: () => ({ meta: [{ title: "Wishlist — BuyBee" }, { name: "description", content: "Your saved-for-later favorites." }] }),
    component: WishlistPage,
});
function WishlistPage() {
    const { state } = useStore();
    const items = PRODUCTS.filter(p => state.wishlist.includes(p.id));
    return (_jsxs("div", { className: "mx-auto max-w-7xl px-4 py-8 md:px-6", children: [_jsx("h1", { className: "font-display text-4xl font-bold", children: "Wishlist" }), _jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [items.length, " saved item", items.length === 1 ? "" : "s"] }), _jsx("div", { className: "mt-8", children: items.length === 0 ? (_jsxs("div", { className: "rounded-3xl border border-dashed border-border p-12 text-center", children: [_jsx("div", { className: "mb-2 text-4xl", children: "\uD83D\uDC9B" }), _jsx("div", { className: "font-display text-lg font-semibold", children: "Nothing saved yet" }), _jsx(Link, { to: "/shop", className: "mt-4 inline-flex rounded-full gradient-honey px-4 py-2 text-sm font-bold text-ink shadow-honey", children: "Find something sweet" })] })) : _jsx(ProductGrid, { products: items }) })] }));
}
