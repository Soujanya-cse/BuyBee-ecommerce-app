import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CATEGORIES, byCategory } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { ChevronRight } from "lucide-react";
export const Route = createFileRoute("/category/$slug")({
    loader: ({ params }) => {
        const cat = CATEGORIES.find(c => c.slug === params.slug);
        if (!cat)
            throw notFound();
        return { cat, products: byCategory(params.slug) };
    },
    head: ({ loaderData }) => ({
        meta: [
            { title: loaderData ? `${loaderData.cat.name} — BuyBee` : "Category — BuyBee" },
            { name: "description", content: loaderData ? `Shop ${loaderData.cat.name.toLowerCase()} on BuyBee.` : "" },
        ],
    }),
    component: CategoryPage,
    notFoundComponent: () => _jsx("div", { className: "p-10 text-center", children: "Category not found" }),
});
function CategoryPage() {
    const { cat, products } = Route.useLoaderData();
    return (_jsxs("div", { className: "mx-auto max-w-7xl px-4 py-8 md:px-6", children: [_jsxs("nav", { className: "mb-4 flex items-center gap-1 text-xs text-muted-foreground", children: [_jsx(Link, { to: "/", className: "hover:text-ink", children: "Home" }), _jsx(ChevronRight, { className: "h-3 w-3" }), _jsx(Link, { to: "/shop", className: "hover:text-ink", children: "Shop" }), _jsx(ChevronRight, { className: "h-3 w-3" }), _jsx("span", { className: "text-ink", children: cat.name })] }), _jsxs("div", { className: "glass mb-8 overflow-hidden rounded-3xl p-8 shadow-honey", children: [_jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-honey-deep", children: "Category" }), _jsx("h1", { className: "font-display text-4xl font-bold md:text-5xl", children: cat.name }), _jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [products.length, " honey-picked products"] })] }), _jsx(ProductGrid, { products: products })] }));
}
