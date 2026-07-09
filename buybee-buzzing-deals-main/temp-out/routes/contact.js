import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
export const Route = createFileRoute("/contact")({
    head: () => ({ meta: [{ title: "Contact — BuyBee" }] }),
    component: Contact,
});
function Contact() {
    return (_jsxs("div", { className: "mx-auto max-w-5xl px-4 py-16 md:px-6", children: [_jsx("h1", { className: "font-display text-5xl font-bold", children: "Say hello \uD83D\uDC1D" }), _jsx("p", { className: "mt-2 text-muted-foreground", children: "We answer every message within one working day." }), _jsxs("div", { className: "mt-10 grid gap-8 md:grid-cols-[1fr_320px]", children: [_jsxs("form", { onSubmit: (e) => { e.preventDefault(); toast.success("Message sent — the hive will reply soon."); }, className: "glass space-y-3 rounded-3xl p-6 shadow-honey", children: [_jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [_jsx(Input, { label: "Name" }), _jsx(Input, { label: "Email", type: "email" })] }), _jsx(Input, { label: "Subject" }), _jsxs("label", { className: "block", children: [_jsx("div", { className: "mb-1 text-xs font-bold uppercase tracking-wider text-honey-deep", children: "Message" }), _jsx("textarea", { rows: 5, required: true, className: "w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary" })] }), _jsx("button", { className: "rounded-full gradient-honey px-5 py-2.5 text-sm font-bold text-ink shadow-honey", children: "Send message" })] }), _jsxs("aside", { className: "glass h-fit space-y-4 rounded-3xl p-6 shadow-honey text-sm", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Mail, { className: "h-4 w-4 text-honey-deep" }), " hello@buybee.co"] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Phone, { className: "h-4 w-4 text-honey-deep" }), " +1 (503) 555-BEES"] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(MapPin, { className: "h-4 w-4 text-honey-deep" }), " 123 Honeycomb Lane, Portland, OR"] })] })] })] }));
}
function Input({ label, type = "text" }) {
    return (_jsxs("label", { className: "block", children: [_jsx("div", { className: "mb-1 text-xs font-bold uppercase tracking-wider text-honey-deep", children: label }), _jsx("input", { required: true, type: type, className: "w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary" })] }));
}
