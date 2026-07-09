import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
export const Route = createFileRoute("/faq")({
    head: () => ({ meta: [{ title: "FAQ — BuyBee" }] }),
    component: FAQ,
});
const QAS = [
    ["How fast is shipping?", "Standard orders arrive in 3–5 business days. Express (1–2 days) is available at checkout. Shipping is free over $49."],
    ["What's your return policy?", "You have 365 days from delivery to return anything, for any reason. No stinging fees."],
    ["Do you ship internationally?", "Yes — we currently ship to 40+ countries. Duties are calculated at checkout."],
    ["How do I track my order?", "Every order gets a tracking link in your inbox and inside your BuyBee account under Orders."],
    ["Where do BuyBee products come from?", "A mix of small-batch makers and trusted household brands, all hand-picked by our curators."],
    ["How do I use a coupon?", "Enter your coupon at checkout in the Coupon field. Try BEE10 for 10% off your first order."],
];
function FAQ() {
    const [open, setOpen] = useState(0);
    return (_jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16 md:px-6", children: [_jsx("h1", { className: "font-display text-5xl font-bold", children: "FAQ" }), _jsx("p", { className: "mt-2 text-muted-foreground", children: "Everything you might want to know before you buzz off." }), _jsx("div", { className: "mt-8 space-y-3", children: QAS.map(([q, a], i) => (_jsxs("div", { className: "glass overflow-hidden rounded-3xl shadow-honey", children: [_jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "flex w-full items-center justify-between p-5 text-left", children: [_jsx("span", { className: "font-display text-lg font-bold", children: q }), _jsx(ChevronDown, { className: cn("h-5 w-5 transition", open === i && "rotate-180") })] }), open === i && _jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground", children: a })] }, q))) })] }));
}
