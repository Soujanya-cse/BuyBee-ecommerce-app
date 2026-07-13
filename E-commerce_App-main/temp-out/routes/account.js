import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS } from "@/data/products";
import { LogOut, MapPin, Package, Heart, Settings, User } from "lucide-react";
import { useState } from "react";
export const Route = createFileRoute("/account")({
    head: () => ({ meta: [{ title: "Account — BuyBee" }] }),
    component: Account,
});
function Account() {
    const { state, logout } = useStore();
    const navigate = useNavigate();
    const [tab, setTab] = useState("profile");
    if (!state.user) {
        return (_jsxs("div", { className: "mx-auto max-w-md px-4 py-20 text-center", children: [_jsx("h1", { className: "font-display text-2xl font-bold", children: "Please sign in" }), _jsx(Link, { to: "/login", className: "mt-4 inline-flex rounded-full gradient-honey px-5 py-2.5 text-sm font-bold text-ink shadow-honey", children: "Sign in" })] }));
    }
    const mockOrders = [
        { id: "BB-483920", date: "Oct 12, 2026", total: 128.5, status: "Delivered", items: 3 },
        { id: "BB-471203", date: "Sep 24, 2026", total: 42.0, status: "Shipped", items: 1 },
        { id: "BB-459831", date: "Sep 09, 2026", total: 316.25, status: "Processing", items: 5 },
    ];
    const wish = PRODUCTS.filter(p => state.wishlist.includes(p.id));
    const tabs = [
        { key: "profile", label: "Profile", icon: User },
        { key: "orders", label: "Orders", icon: Package },
        { key: "address", label: "Addresses", icon: MapPin },
        { key: "wishlist", label: "Wishlist", icon: Heart },
        { key: "settings", label: "Settings", icon: Settings },
    ];
    return (_jsxs("div", { className: "mx-auto max-w-7xl px-4 py-8 md:px-6", children: [_jsxs("div", { className: "glass mb-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl p-6 shadow-honey", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "grid h-14 w-14 place-items-center rounded-2xl gradient-honey font-display text-xl font-bold text-ink shadow-honey", children: state.user.name.charAt(0).toUpperCase() }), _jsxs("div", { children: [_jsxs("div", { className: "font-display text-2xl font-bold", children: ["Hi, ", state.user.name, " \uD83D\uDC1D"] }), _jsx("div", { className: "text-sm text-muted-foreground", children: state.user.email })] })] }), _jsxs("button", { onClick: () => { logout(); navigate({ to: "/" }); }, className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold", children: [_jsx(LogOut, { className: "h-4 w-4" }), " Sign out"] })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-[220px_1fr]", children: [_jsx("aside", { className: "glass h-fit rounded-3xl p-3 shadow-honey", children: tabs.map(t => (_jsxs("button", { onClick: () => setTab(t.key), className: `flex w-full items-center gap-2 rounded-2xl px-4 py-2.5 text-left text-sm font-semibold ${tab === t.key ? "gradient-honey text-ink" : "hover:bg-amber-soft"}`, children: [_jsx(t.icon, { className: "h-4 w-4" }), " ", t.label] }, t.key))) }), _jsxs("div", { className: "glass rounded-3xl p-6 shadow-honey", children: [tab === "profile" && (_jsxs("div", { children: [_jsx("h2", { className: "mb-4 font-display text-xl font-bold", children: "Profile details" }), _jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [_jsx(Info, { label: "Name", val: state.user.name }), _jsx(Info, { label: "Email", val: state.user.email }), _jsx(Info, { label: "Member since", val: "Oct 2026" }), _jsx(Info, { label: "Loyalty tier", val: "Golden Bee \uD83C\uDF6F" })] })] })), tab === "orders" && (_jsxs("div", { children: [_jsx("h2", { className: "mb-4 font-display text-xl font-bold", children: "Order history" }), _jsx("div", { className: "space-y-3", children: mockOrders.map(o => (_jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4", children: [_jsxs("div", { children: [_jsx("div", { className: "font-mono text-sm font-bold", children: o.id }), _jsxs("div", { className: "text-xs text-muted-foreground", children: [o.date, " \u00B7 ", o.items, " items"] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: `rounded-full px-3 py-1 text-xs font-semibold ${o.status === "Delivered" ? "bg-primary/20 text-honey-deep" : o.status === "Shipped" ? "bg-secondary/20 text-secondary" : "bg-muted"}`, children: o.status }), _jsxs("span", { className: "font-bold", children: ["$", o.total.toFixed(2)] }), _jsx("button", { className: "text-xs font-semibold text-honey-deep", children: "View invoice" })] })] }, o.id))) })] })), tab === "address" && (_jsxs("div", { children: [_jsx("h2", { className: "mb-4 font-display text-xl font-bold", children: "Address book" }), _jsxs("div", { className: "rounded-2xl border border-border bg-card p-4 text-sm", children: [_jsx("div", { className: "font-semibold", children: "Home" }), _jsx("div", { className: "text-muted-foreground", children: "123 Honeycomb Lane, Portland, OR 97201, United States" })] }), _jsx("button", { className: "mt-3 rounded-full gradient-honey px-4 py-2 text-sm font-bold text-ink shadow-honey", children: "Add address" })] })), tab === "wishlist" && (_jsxs("div", { children: [_jsx("h2", { className: "mb-4 font-display text-xl font-bold", children: "Saved items" }), _jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [wish.map(p => (_jsxs(Link, { to: "/product/$id", params: { id: p.id }, className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-3", children: [_jsx("img", { src: p.images[0], alt: "", className: "h-14 w-14 rounded-xl object-cover" }), _jsxs("div", { className: "min-w-0", children: [_jsx("div", { className: "truncate font-semibold", children: p.name }), _jsx("div", { className: "text-xs text-muted-foreground", children: p.brand })] })] }, p.id))), wish.length === 0 && _jsx("div", { className: "text-sm text-muted-foreground", children: "Nothing saved yet." })] })] })), tab === "settings" && (_jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "font-display text-xl font-bold", children: "Settings" }), _jsx(Toggle, { label: "Order updates", defaultChecked: true }), _jsx(Toggle, { label: "Weekly newsletter", defaultChecked: true }), _jsx(Toggle, { label: "Personalized recommendations", defaultChecked: true }), _jsx(Toggle, { label: "SMS notifications" })] }))] })] })] }));
}
function Info({ label, val }) {
    return (_jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [_jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-honey-deep", children: label }), _jsx("div", { className: "font-semibold", children: val })] }));
}
function Toggle({ label, defaultChecked }) {
    const [on, setOn] = useState(!!defaultChecked);
    return (_jsxs("label", { className: "flex cursor-pointer items-center justify-between rounded-2xl border border-border bg-card p-4", children: [_jsx("span", { className: "text-sm font-semibold", children: label }), _jsx("button", { type: "button", onClick: () => setOn(!on), className: `h-6 w-11 rounded-full p-1 transition ${on ? "gradient-honey" : "bg-muted"}`, children: _jsx("span", { className: `block h-4 w-4 rounded-full bg-white shadow transition ${on ? "translate-x-5" : ""}` }) })] }));
}
