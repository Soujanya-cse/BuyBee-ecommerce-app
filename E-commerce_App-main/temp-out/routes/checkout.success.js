import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/checkout/success")({
    head: () => ({ meta: [{ title: "Order placed — BuyBee" }] }),
    component: Success,
});
function Success() {
    const orderId = "BB-" + Math.floor(Math.random() * 900000 + 100000);
    return (_jsx("div", { className: "mx-auto max-w-2xl px-4 py-20 text-center", children: _jsxs("div", { className: "glass mx-auto rounded-3xl p-10 shadow-glow-honey", children: [_jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-full gradient-honey shadow-glow-honey", children: _jsx(CheckCircle2, { className: "h-8 w-8 text-ink" }) }), _jsx("h1", { className: "mt-6 font-display text-4xl font-bold", children: "Sweet \u2014 order placed!" }), _jsxs("p", { className: "mt-2 text-muted-foreground", children: ["A confirmation is on its way. Your order number is ", _jsx("span", { className: "font-mono font-bold text-ink", children: orderId }), "."] }), _jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [_jsx(Link, { to: "/account", className: "rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold", children: "Track order" }), _jsx(Link, { to: "/shop", className: "rounded-full gradient-honey px-5 py-2.5 text-sm font-bold text-ink shadow-honey", children: "Keep shopping" })] })] }) }));
}
