import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryCard";
import { ProductGrid, Section } from "@/components/ProductGrid";
import { PRODUCTS, byTag } from "@/data/products";
import { Star, ArrowRight, Timer } from "lucide-react";
import { useEffect, useState } from "react";
export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "BuyBee — Buzzing with the best deals" },
            { name: "description", content: "Discover 100+ curated products with honey-sweet prices, free shipping over $49, and 365-day returns." },
        ],
    }),
    component: Home,
});
function Home() {
    const trending = byTag("trending").slice(0, 8);
    const newArr = byTag("new").slice(0, 8);
    const best = byTag("best").slice(0, 8);
    const flash = byTag("flash").slice(0, 8);
    const recs = PRODUCTS.slice(20, 28);
    return (_jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(Section, { title: "Shop by category", subtitle: "16 categories, one honey-glazed hive.", children: _jsx(CategoryGrid, {}) }), _jsx(FlashDeals, { products: flash }), _jsx(Section, { title: "Trending this week", subtitle: "What the swarm is loving right now.", action: _jsxs(Link, { to: "/shop", className: "inline-flex items-center gap-1 text-sm font-semibold text-honey-deep", children: ["Shop all ", _jsx(ArrowRight, { className: "h-4 w-4" })] }), children: _jsx(ProductGrid, { products: trending }) }), _jsx(SeasonalBanner, {}), _jsx(Section, { title: "New arrivals", subtitle: "Fresh from the workshop.", children: _jsx(ProductGrid, { products: newArr }) }), _jsx(Section, { title: "Best sellers", subtitle: "Tried, tested, and adored.", children: _jsx(ProductGrid, { products: best }) }), _jsx(Section, { title: "Just for you", subtitle: "Personalized picks based on the hive's taste.", children: _jsx(ProductGrid, { products: recs }) }), _jsx(Reviews, {}), _jsx(Brands, {}), _jsx(Newsletter, {})] }));
}
function FlashDeals({ products }) {
    const [t, setT] = useState({ h: 5, m: 42, s: 18 });
    useEffect(() => {
        const id = setInterval(() => {
            setT(prev => {
                let { h, m, s } = prev;
                s--;
                if (s < 0) {
                    s = 59;
                    m--;
                }
                if (m < 0) {
                    m = 59;
                    h--;
                }
                if (h < 0) {
                    h = 23;
                }
                return { h, m, s };
            });
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return (_jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12 md:px-6", children: [_jsxs("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "mb-2 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary", children: [_jsx(Timer, { className: "h-3.5 w-3.5" }), " Flash deals"] }), _jsx("h2", { className: "font-display text-3xl font-bold md:text-4xl", children: "Sweet savings, sold fast" })] }), _jsx("div", { className: "flex items-center gap-2", children: ["h", "m", "s"].map((k, i) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "rounded-xl gradient-honey px-3 py-2 font-mono text-lg font-bold text-ink shadow-honey", children: String(t[k]).padStart(2, "0") }), i < 2 && _jsx("span", { className: "text-lg font-bold text-honey-deep", children: ":" })] }, k))) })] }), _jsx(ProductGrid, { products: products })] }));
}
function SeasonalBanner() {
    return (_jsx("section", { className: "mx-auto max-w-7xl px-4 md:px-6", children: _jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] gradient-honey p-8 shadow-glow-honey md:p-14", children: [_jsx("div", { className: "honeycomb-bg absolute inset-0 opacity-30" }), _jsxs("div", { className: "relative grid gap-6 md:grid-cols-2 md:items-center", children: [_jsxs("div", { children: [_jsx("div", { className: "mb-2 text-xs font-bold uppercase tracking-widest text-ink/70", children: "Seasonal drop" }), _jsx("h3", { className: "font-display text-4xl font-bold text-ink md:text-5xl", children: "Golden Hour Sale" }), _jsx("p", { className: "mt-3 max-w-md text-ink/80", children: "Cozy up with warm neutrals, small-batch home goods, and honey-glazed savings up to 40% off." }), _jsxs(Link, { to: "/shop", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow transition hover:-translate-y-0.5", children: ["Shop the drop ", _jsx(ArrowRight, { className: "h-4 w-4" })] })] }), _jsx("div", { className: "grid grid-cols-3 gap-3", children: ["photo-1555041469-a586c61ea9bc", "photo-1556909114-f6e7ad7d3136", "photo-1520975916090-3105956dac38"].map((p, i) => (_jsx("img", { src: `https://images.unsplash.com/${p}?auto=format&fit=crop&w=400&q=80`, alt: "", className: `h-40 w-full rounded-2xl border-4 border-white object-cover shadow-honey ${i === 1 ? "mt-6" : ""}` }, i))) })] })] }) }));
}
function Reviews() {
    const items = [
        { name: "Amelia R.", role: "Verified buyer", text: "The unboxing feels like a gift from a friend. Everything I've ordered has been top-tier.", avatar: "https://i.pravatar.cc/80?img=47" },
        { name: "Rohan S.", role: "Verified buyer", text: "I stopped scrolling five apps. BuyBee's picks just fit my taste — and the deals are legit.", avatar: "https://i.pravatar.cc/80?img=12" },
        { name: "Mika T.", role: "Verified buyer", text: "Warm, warm, warm. From the packaging to the site — it feels human.", avatar: "https://i.pravatar.cc/80?img=32" },
    ];
    return (_jsx(Section, { title: "Loved by the swarm", subtitle: "Real words from real BuyBee members.", children: _jsx("div", { className: "grid gap-5 md:grid-cols-3", children: items.map((r, i) => (_jsxs("div", { className: "glass rounded-3xl p-6 shadow-honey", children: [_jsx("div", { className: "mb-3 flex items-center gap-1 text-primary", children: Array.from({ length: 5 }).map((_, k) => _jsx(Star, { className: "h-4 w-4 fill-current" }, k)) }), _jsxs("p", { className: "text-sm leading-relaxed text-ink", children: ["\"", r.text, "\""] }), _jsxs("div", { className: "mt-5 flex items-center gap-3", children: [_jsx("img", { src: r.avatar, alt: "", className: "h-10 w-10 rounded-full" }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-semibold", children: r.name }), _jsx("div", { className: "text-xs text-muted-foreground", children: r.role })] })] })] }, i))) }) }));
}
function Brands() {
    const brands = ["Sonique", "Loomly", "StrideCo", "Chronova", "Bloomé", "Hearthly", "Peakforge", "Nexora"];
    return (_jsx(Section, { title: "Brands in the hive", subtitle: "Small-batch makers and household favorites.", children: _jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8", children: brands.map(b => (_jsx("div", { className: "glass grid h-20 place-items-center rounded-2xl font-display text-lg font-bold text-honey-deep shadow-honey", children: b }, b))) }) }));
}
function Newsletter() {
    return (_jsx("section", { className: "mx-auto max-w-7xl px-4 py-16 md:px-6", children: _jsx("div", { className: "glass overflow-hidden rounded-[2.5rem] p-8 shadow-honey md:p-14", children: _jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [_jsx("div", { className: "mb-3 text-3xl", children: "\uD83C\uDF6F" }), _jsx("h3", { className: "font-display text-3xl font-bold md:text-4xl", children: "Join the hive newsletter" }), _jsx("p", { className: "mt-2 text-muted-foreground", children: "Weekly finds, member-only deals, and zero spam. Ever." }), _jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mx-auto mt-6 flex max-w-md gap-2", children: [_jsx("input", { type: "email", required: true, placeholder: "you@buybee.co", className: "w-full rounded-full border border-border bg-card px-5 py-3 text-sm outline-none focus:border-primary" }), _jsx("button", { className: "rounded-full gradient-honey px-5 py-3 text-sm font-bold text-ink shadow-honey", children: "Subscribe" })] })] }) }) }));
}
