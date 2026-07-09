import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BeeMark } from "@/components/Navbar";
import { useState } from "react";
import { toast } from "sonner";
export const Route = createFileRoute("/forgot-password")({
    head: () => ({ meta: [{ title: "Reset password — BuyBee" }] }),
    component: Forgot,
});
function Forgot() {
    const [email, setEmail] = useState("");
    return (_jsx("div", { className: "mx-auto grid min-h-[70vh] max-w-md place-items-center px-4", children: _jsxs("div", { className: "glass w-full rounded-3xl p-8 shadow-honey", children: [_jsxs("div", { className: "mb-6 flex flex-col items-center gap-2", children: [_jsx(BeeMark, {}), _jsx("h1", { className: "font-display text-2xl font-bold", children: "Reset password" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "We'll email you a link to reset." })] }), _jsxs("form", { onSubmit: (e) => { e.preventDefault(); toast.success("Check your inbox 📬"); }, className: "space-y-3", children: [_jsx("input", { required: true, type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email", className: "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary" }), _jsx("button", { className: "w-full rounded-full gradient-honey px-4 py-2.5 text-sm font-bold text-ink shadow-honey", children: "Send reset link" })] }), _jsx("div", { className: "mt-4 text-center text-xs", children: _jsx(Link, { to: "/login", className: "font-semibold text-honey-deep", children: "Back to sign in" }) })] }) }));
}
