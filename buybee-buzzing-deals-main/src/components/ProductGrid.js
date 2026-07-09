import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProductCard } from "./ProductCard";
export function ProductGrid({ products }) {
    if (products.length === 0) {
        return (_jsxs("div", { className: "rounded-3xl border border-dashed border-border p-12 text-center", children: [_jsx("div", { className: "mb-2 text-4xl", children: "\uD83D\uDC1D" }), _jsx("div", { className: "font-display text-lg font-semibold", children: "Nothing in the hive yet" }), _jsx("div", { className: "text-sm text-muted-foreground", children: "Try a different filter or category." })] }));
    }
    return (_jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: products.map(p => _jsx(ProductCard, { product: p }, p.id)) }));
}
export function Section({ title, subtitle, children, action }) {
    return (_jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16", children: [_jsxs("div", { className: "mb-6 flex items-end justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h2", { className: "font-display text-3xl font-bold text-ink md:text-4xl", children: title }), subtitle && _jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: subtitle })] }), action] }), children] }));
}
