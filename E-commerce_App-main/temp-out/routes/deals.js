import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { byTag } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
export const Route = createFileRoute("/deals")({
    head: () => ({ meta: [{ title: "Flash deals — BuyBee" }, { name: "description", content: "Honey-sweet flash deals across every BuyBee category." }] }),
    component: () => {
        const flash = byTag("flash");
        return (_jsxs("div", { className: "mx-auto max-w-7xl px-4 py-8 md:px-6", children: [_jsxs("div", { className: "glass mb-8 overflow-hidden rounded-3xl p-8 shadow-honey", children: [_jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-secondary", children: "Flash deals" }), _jsx("h1", { className: "font-display text-4xl font-bold md:text-5xl", children: "Sweet savings, sold fast" }), _jsx("p", { className: "mt-2 max-w-lg text-muted-foreground", children: "Every hour we drop new deals. Grab them before they buzz away." })] }), _jsx(ProductGrid, { products: flash })] }));
    },
});
