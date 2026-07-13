import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES, finalPrice } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { z } from "zod";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
const search = z.object({
    q: z.string().optional(),
    cat: z.string().optional(),
    sort: z.enum(["popular", "price-asc", "price-desc", "rating", "newest"]).optional(),
    min: z.coerce.number().optional(),
    max: z.coerce.number().optional(),
});
export const Route = createFileRoute("/shop")({
    validateSearch: search,
    head: () => ({
        meta: [
            { title: "Shop all — BuyBee" },
            { name: "description", content: "Browse 100+ products across every BuyBee category with smart filters and sort." },
        ],
    }),
    component: Shop,
});
function Shop() {
    const sp = Route.useSearch();
    const [q, setQ] = useState(sp.q ?? "");
    const [cat, setCat] = useState(sp.cat ?? "all");
    const [sort, setSort] = useState(sp.sort ?? "popular");
    const [range, setRange] = useState([sp.min ?? 0, sp.max ?? 1000]);
    const [rating, setRating] = useState(0);
    const [brands, setBrands] = useState([]);
    const [inStockOnly, setInStock] = useState(false);
    const allBrands = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.brand))).sort(), []);
    const filtered = useMemo(() => {
        let list = PRODUCTS.slice();
        if (q)
            list = list.filter(p => (p.name + " " + p.brand + " " + p.category).toLowerCase().includes(q.toLowerCase()));
        if (cat !== "all")
            list = list.filter(p => p.category === cat);
        list = list.filter(p => { const f = finalPrice(p); return f >= range[0] && f <= range[1]; });
        if (rating > 0)
            list = list.filter(p => p.rating >= rating);
        if (brands.length > 0)
            list = list.filter(p => brands.includes(p.brand));
        if (inStockOnly)
            list = list.filter(p => p.stock > 0);
        switch (sort) {
            case "price-asc":
                list.sort((a, b) => finalPrice(a) - finalPrice(b));
                break;
            case "price-desc":
                list.sort((a, b) => finalPrice(b) - finalPrice(a));
                break;
            case "rating":
                list.sort((a, b) => b.rating - a.rating);
                break;
            case "newest":
                list.reverse();
                break;
        }
        return list;
    }, [q, cat, sort, range, rating, brands, inStockOnly]);
    return (_jsxs("div", { className: "mx-auto max-w-7xl px-4 py-8 md:px-6", children: [_jsxs("nav", { className: "mb-4 flex items-center gap-1 text-xs text-muted-foreground", children: [_jsx(Link, { to: "/", className: "hover:text-ink", children: "Home" }), _jsx(ChevronRight, { className: "h-3 w-3" }), _jsx("span", { className: "text-ink", children: "Shop" })] }), _jsxs("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h1", { className: "font-display text-4xl font-bold", children: "Shop the hive" }), _jsxs("p", { className: "text-sm text-muted-foreground", children: [filtered.length, " products"] })] }), _jsx("div", { className: "flex items-center gap-2", children: _jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "rounded-full border border-border bg-card px-4 py-2 text-sm", children: [_jsx("option", { value: "popular", children: "Popularity" }), _jsx("option", { value: "newest", children: "Newest" }), _jsx("option", { value: "price-asc", children: "Price: Low to High" }), _jsx("option", { value: "price-desc", children: "Price: High to Low" }), _jsx("option", { value: "rating", children: "Rating" })] }) })] }), _jsxs("div", { className: "grid gap-6 lg:grid-cols-[280px_1fr]", children: [_jsxs("aside", { className: "glass h-fit rounded-3xl p-5 shadow-honey", children: [_jsxs("div", { className: "mb-4 flex items-center gap-2 text-sm font-bold", children: [_jsx(SlidersHorizontal, { className: "h-4 w-4" }), " Filters"] }), _jsx(FilterGroup, { label: "Search", children: _jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search...", className: "w-full rounded-full border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary" }) }), _jsx(FilterGroup, { label: "Category", children: _jsxs("select", { value: cat, onChange: (e) => setCat(e.target.value), className: "w-full rounded-full border border-border bg-card px-3 py-2 text-sm", children: [_jsx("option", { value: "all", children: "All categories" }), CATEGORIES.map(c => _jsx("option", { value: c.slug, children: c.name }, c.slug))] }) }), _jsx(FilterGroup, { label: `Price: $${range[0]} — $${range[1]}`, children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { type: "range", min: 0, max: 1000, value: range[0], onChange: (e) => setRange([+e.target.value, range[1]]), className: "w-full accent-primary" }), _jsx("input", { type: "range", min: 0, max: 1000, value: range[1], onChange: (e) => setRange([range[0], +e.target.value]), className: "w-full accent-primary" })] }) }), _jsx(FilterGroup, { label: "Minimum rating", children: _jsx("div", { className: "flex gap-1", children: [0, 3, 3.5, 4, 4.5].map(r => (_jsx("button", { onClick: () => setRating(r), className: `rounded-full border px-3 py-1 text-xs ${rating === r ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`, children: r === 0 ? "Any" : `${r}+` }, r))) }) }), _jsx(FilterGroup, { label: "Brand", children: _jsx("div", { className: "max-h-40 space-y-1 overflow-auto text-sm", children: allBrands.slice(0, 20).map(b => (_jsxs("label", { className: "flex items-center gap-2", children: [_jsx("input", { type: "checkbox", checked: brands.includes(b), onChange: (e) => setBrands(e.target.checked ? [...brands, b] : brands.filter(x => x !== b)), className: "accent-primary" }), _jsx("span", { children: b })] }, b))) }) }), _jsx(FilterGroup, { label: "Availability", children: _jsxs("label", { className: "flex items-center gap-2 text-sm", children: [_jsx("input", { type: "checkbox", checked: inStockOnly, onChange: (e) => setInStock(e.target.checked), className: "accent-primary" }), "In stock only"] }) })] }), _jsx("div", { children: _jsx(ProductGrid, { products: filtered }) })] })] }));
}
function FilterGroup({ label, children }) {
    return (_jsxs("div", { className: "mb-5 border-b border-border/60 pb-4 last:border-b-0", children: [_jsx("div", { className: "mb-2 text-xs font-bold uppercase tracking-wider text-honey-deep", children: label }), children] }));
}
