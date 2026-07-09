import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@/context/StoreContext";
import { finalPrice } from "@/data/products";
import { Minus, Plus, Trash2, Tag, ArrowRight, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
export const Route = createFileRoute("/cart")({
    head: () => ({ meta: [{ title: "Cart — BuyBee" }, { name: "description", content: "Review the items in your BuyBee cart." }] }),
    component: CartPage,
});
function CartPage() {
    const { cartProducts, updateQty, removeFromCart, subtotal } = useStore();
    const [coupon, setCoupon] = useState("");
    const [applied, setApplied] = useState(0);
    const shipping = subtotal > 49 || subtotal === 0 ? 0 : 6.99;
    const tax = +(subtotal * 0.08).toFixed(2);
    const total = +(subtotal - applied + shipping + tax).toFixed(2);
    const apply = () => {
        if (coupon.toUpperCase() === "BEE10") {
            setApplied(+(subtotal * 0.1).toFixed(2));
            toast.success("Coupon applied — 10% off!");
        }
        else
            toast.error("Invalid coupon. Try BEE10.");
    };
    if (cartProducts.length === 0) {
        return (_jsxs("div", { className: "mx-auto max-w-3xl px-4 py-24 text-center", children: [_jsx("div", { className: "mb-4 text-6xl", children: "\uD83E\uDDFA" }), _jsx("h1", { className: "font-display text-3xl font-bold", children: "Your basket is empty" }), _jsx("p", { className: "mt-2 text-muted-foreground", children: "Fill it up with something sweet." }), _jsxs(Link, { to: "/shop", className: "mt-6 inline-flex items-center gap-2 rounded-full gradient-honey px-5 py-3 text-sm font-bold text-ink shadow-honey", children: [_jsx(ShoppingBag, { className: "h-4 w-4" }), " Start shopping"] })] }));
    }
    return (_jsxs("div", { className: "mx-auto max-w-7xl px-4 py-8 md:px-6", children: [_jsx("h1", { className: "font-display text-4xl font-bold", children: "Your cart" }), _jsxs("div", { className: "mt-8 grid gap-8 lg:grid-cols-[1fr_380px]", children: [_jsx("div", { className: "space-y-4", children: cartProducts.map(({ product, item }) => (_jsxs("div", { className: "glass flex gap-4 rounded-3xl p-4 shadow-honey", children: [_jsx("img", { src: product.images[0], alt: "", className: "h-28 w-28 shrink-0 rounded-2xl object-cover" }), _jsxs("div", { className: "min-w-0 flex-1", children: [_jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-honey-deep", children: product.brand }), _jsx(Link, { to: "/product/$id", params: { id: product.id }, className: "font-semibold hover:text-honey-deep", children: product.name }), _jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [item.color && _jsxs(_Fragment, { children: ["Color: ", item.color] }), item.color && item.size && " · ", item.size && _jsxs(_Fragment, { children: ["Size: ", item.size] })] }), _jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-3", children: [_jsxs("div", { className: "flex items-center gap-1 rounded-full border border-border bg-card p-1", children: [_jsx("button", { onClick: () => updateQty(product.id, item.qty - 1), className: "grid h-8 w-8 place-items-center rounded-full hover:bg-amber-soft", children: _jsx(Minus, { className: "h-3 w-3" }) }), _jsx("div", { className: "w-6 text-center text-sm font-semibold", children: item.qty }), _jsx("button", { onClick: () => updateQty(product.id, item.qty + 1), className: "grid h-8 w-8 place-items-center rounded-full hover:bg-amber-soft", children: _jsx(Plus, { className: "h-3 w-3" }) })] }), _jsxs("button", { onClick: () => removeFromCart(product.id), className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive", children: [_jsx(Trash2, { className: "h-3.5 w-3.5" }), " Remove"] })] })] }), _jsxs("div", { className: "text-right font-bold", children: ["$", (finalPrice(product) * item.qty).toFixed(2)] })] }, product.id + (item.color ?? "") + (item.size ?? "")))) }), _jsxs("aside", { className: "glass h-fit rounded-3xl p-6 shadow-honey", children: [_jsx("div", { className: "font-display text-xl font-bold", children: "Order summary" }), _jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [_jsx(Row, { label: "Subtotal", val: `$${subtotal.toFixed(2)}` }), applied > 0 && _jsx(Row, { label: "Discount", val: `-$${applied.toFixed(2)}`, accent: true }), _jsx(Row, { label: "Shipping", val: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` }), _jsx(Row, { label: "Tax (8%)", val: `$${tax.toFixed(2)}` }), _jsx("div", { className: "my-3 h-px bg-border" }), _jsx(Row, { label: "Total", val: `$${total.toFixed(2)}`, big: true })] }), _jsxs("div", { className: "mt-5 flex gap-2", children: [_jsxs("div", { className: "flex flex-1 items-center gap-2 rounded-full border border-border bg-card px-3", children: [_jsx(Tag, { className: "h-3.5 w-3.5 text-muted-foreground" }), _jsx("input", { value: coupon, onChange: (e) => setCoupon(e.target.value), placeholder: "Coupon (BEE10)", className: "w-full bg-transparent py-2 text-sm outline-none" })] }), _jsx("button", { onClick: apply, className: "rounded-full border border-border bg-card px-4 text-sm font-semibold", children: "Apply" })] }), _jsxs(Link, { to: "/checkout", className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-honey px-5 py-3 text-sm font-bold text-ink shadow-glow-honey transition hover:-translate-y-0.5", children: ["Checkout ", _jsx(ArrowRight, { className: "h-4 w-4" })] })] })] })] }));
}
function Row({ label, val, accent, big }) {
    return (_jsxs("div", { className: `flex items-center justify-between ${big ? "text-lg font-bold" : ""} ${accent ? "text-honey-deep" : ""}`, children: [_jsx("span", { className: big ? "" : "text-muted-foreground", children: label }), _jsx("span", { children: val })] }));
}
