import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/about")({
    head: () => ({ meta: [{ title: "About — BuyBee" }, { name: "description", content: "BuyBee is a honey-glazed marketplace curated by humans, delivered with warmth." }] }),
    component: About,
});
function About() {
    return (_jsxs("div", { className: "mx-auto max-w-4xl px-4 py-16 md:px-6", children: [_jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-honey-deep", children: "About BuyBee" }), _jsx("h1", { className: "mt-2 font-display text-5xl font-bold", children: "A marketplace with a little more warmth." }), _jsx("p", { className: "mt-4 max-w-2xl text-lg text-muted-foreground", children: "We started BuyBee because online shopping had lost its soul. Endless scroll, cold checkouts, and packaging that felt like a warehouse. We wanted something that felt like a friend put it together \u2014 honey-glazed, sun-warm, and a little bit playful." }), _jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
                    ["Curated with care", "Every product is hand-picked by our tiny team of shopping obsessives."],
                    ["Small-batch first", "We champion independent makers and household favorites, side by side."],
                    ["Carbon-neutral shipping", "Every order ships in recycled packaging and is offset at checkout."],
                ].map(([t, d]) => (_jsxs("div", { className: "glass rounded-3xl p-6 shadow-honey", children: [_jsx("div", { className: "text-2xl", children: "\uD83C\uDF6F" }), _jsx("div", { className: "mt-2 font-display text-lg font-bold", children: t }), _jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: d })] }, t))) })] }));
}
