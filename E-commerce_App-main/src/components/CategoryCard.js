import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { cn } from "@/lib/utils";
export function CategoryCard({ slug, name, icon, index = 0 }) {
    const I = Icons[icon] ?? Icons.Package;
    return (_jsxs(Link, { to: "/category/$slug", params: { slug }, className: cn("group relative flex flex-col items-center gap-3 rounded-3xl border border-border/60 bg-card p-5 text-center shadow-honey transition duration-300 hover:-translate-y-1 hover:shadow-glow-honey"), style: { animationDelay: `${index * 40}ms` }, children: [_jsx("div", { className: "relative grid h-14 w-14 place-items-center rounded-2xl gradient-honey text-ink shadow-honey transition group-hover:scale-110", children: _jsx(I, { className: "h-6 w-6" }) }), _jsx("div", { className: "text-sm font-semibold", children: name })] }));
}
export function CategoryGrid() {
    return (_jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8", children: CATEGORIES.map((c, i) => (_jsx(CategoryCard, { ...c, index: i }, c.slug))) }));
}
