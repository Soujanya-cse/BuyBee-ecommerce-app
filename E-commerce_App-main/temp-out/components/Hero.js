import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Truck, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
export function Hero() {
    return (_jsx("section", { className: "relative overflow-hidden pt-6", children: _jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-2 md:px-6 md:py-16", children: [_jsxs("div", { className: "relative z-10 flex flex-col justify-center", children: [_jsxs("div", { className: "mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-honey-deep", children: [_jsx(Sparkles, { className: "h-3.5 w-3.5" }), " Buzzing new arrivals daily"] }), _jsxs("h1", { className: "font-display text-5xl font-bold leading-[0.95] text-ink md:text-7xl", children: ["Shop the ", _jsx("span", { className: "text-gradient-honey", children: "sweet" }), " stuff."] }), _jsx("p", { className: "mt-5 max-w-lg text-lg text-muted-foreground", children: "BuyBee is a honey-glazed marketplace of everyday essentials and small-batch finds \u2014 curated by humans, delivered with warmth." }), _jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [_jsxs(Link, { to: "/shop", className: "group inline-flex items-center gap-2 rounded-full gradient-honey px-6 py-3 text-sm font-bold text-ink shadow-glow-honey transition hover:-translate-y-0.5", children: ["Start shopping ", _jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })] }), _jsx(Link, { to: "/deals", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-ink shadow-honey transition hover:-translate-y-0.5", children: "Today's flash deals" })] }), _jsxs("div", { className: "mt-10 grid gap-4 sm:grid-cols-3", children: [_jsx(Perk, { icon: _jsx(Truck, { className: "h-4 w-4" }), label: "Free shipping", sub: "Orders over $49" }), _jsx(Perk, { icon: _jsx(ShieldCheck, { className: "h-4 w-4" }), label: "365-day returns", sub: "No sting, no fuss" }), _jsx(Counter, {})] })] }), _jsx(HeroArt, {})] }) }));
}
function Perk({ icon, label, sub }) {
    return (_jsxs("div", { className: "glass flex items-center gap-3 rounded-2xl p-3", children: [_jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/20 text-honey-deep", children: icon }), _jsxs("div", { className: "min-w-0", children: [_jsx("div", { className: "text-sm font-semibold", children: label }), _jsx("div", { className: "truncate text-xs text-muted-foreground", children: sub })] })] }));
}
function Counter() {
    const [n, setN] = useState(0);
    useEffect(() => {
        let raf = 0;
        const start = performance.now();
        const target = 128432;
        const tick = (t) => {
            const p = Math.min(1, (t - start) / 1400);
            setN(Math.floor(p * target));
            if (p < 1)
                raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);
    return (_jsxs("div", { className: "glass flex items-center gap-3 rounded-2xl p-3", children: [_jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/20 text-honey-deep font-bold", children: "\uD83D\uDC1D" }), _jsxs("div", { className: "min-w-0", children: [_jsx("div", { className: "text-sm font-semibold", children: n.toLocaleString() }), _jsx("div", { className: "text-xs text-muted-foreground", children: "Happy shoppers" })] })] }));
}
function HeroArt() {
    return (_jsxs("div", { className: "relative h-[420px] md:h-[560px]", children: [_jsx("div", { className: "absolute inset-0 rounded-[3rem] gradient-honey opacity-90 shadow-glow-honey" }), _jsx("div", { className: "honeycomb-bg absolute inset-0 rounded-[3rem] opacity-40" }), _jsx(FloatingTile, { className: "left-6 top-8 h-40 w-40 rotate-[-6deg]", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" }), _jsx(FloatingTile, { className: "right-4 top-16 h-48 w-48 rotate-[8deg]", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=400&q=80", delay: "1s" }), _jsx(FloatingTile, { className: "bottom-10 left-16 h-44 w-44 rotate-[4deg]", img: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=400&q=80", delay: "2s" }), _jsx(FloatingTile, { className: "bottom-6 right-10 h-36 w-36 rotate-[-9deg]", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80", delay: "0.5s" }), _jsxs("svg", { viewBox: "0 0 60 60", className: "animate-bee absolute right-1/3 top-1/3 h-12 w-12 drop-shadow", "aria-hidden": true, children: [_jsx("ellipse", { cx: "30", cy: "34", rx: "14", ry: "16", fill: "oklch(0.99 0.02 90)" }), _jsx("path", { d: "M16 30h28M16 36h28M16 42h28", stroke: "oklch(0.25 0.03 60)", strokeWidth: "3" }), _jsx("ellipse", { cx: "22", cy: "20", rx: "8", ry: "5", fill: "white", opacity: "0.9" }), _jsx("ellipse", { cx: "38", cy: "20", rx: "8", ry: "5", fill: "white", opacity: "0.9" })] }), _jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-card px-4 py-2 text-xs font-bold shadow-honey", children: "\uD83C\uDF6F Save up to 45% on Flash Deals" })] }));
}
function FloatingTile({ className, img, delay }) {
    return (_jsx("div", { className: `animate-float absolute overflow-hidden rounded-3xl border-4 border-white shadow-honey ${className}`, style: { animationDelay: delay }, children: _jsx("img", { src: img, alt: "", className: "h-full w-full object-cover" }) }));
}
