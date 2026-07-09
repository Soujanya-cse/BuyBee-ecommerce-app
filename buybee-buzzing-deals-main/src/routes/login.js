import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { BeeMark } from "@/components/Navbar";
import { toast } from "sonner";
export const Route = createFileRoute("/login")({
    head: () => ({ meta: [{ title: "Sign in — BuyBee" }] }),
    component: Login,
});
function Login() {
    const { login } = useStore();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    return (_jsx("div", { className: "mx-auto grid min-h-[70vh] max-w-md place-items-center px-4", children: _jsxs("div", { className: "glass w-full rounded-3xl p-8 shadow-honey", children: [_jsxs("div", { className: "mb-6 flex flex-col items-center gap-2", children: [_jsx(BeeMark, {}), _jsx("h1", { className: "font-display text-2xl font-bold", children: "Welcome back" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Sign in to your BuyBee account" })] }), _jsxs("form", { onSubmit: (e) => { e.preventDefault(); login({ name: email.split("@")[0] || "Bee", email }); toast.success("Signed in"); navigate({ to: "/account" }); }, className: "space-y-3", children: [_jsx("input", { required: true, type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email", className: "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary" }), _jsx("input", { required: true, type: "password", value: pw, onChange: (e) => setPw(e.target.value), placeholder: "Password", className: "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary" }), _jsxs("div", { className: "flex justify-between text-xs", children: [_jsxs("label", { className: "flex items-center gap-1", children: [_jsx("input", { type: "checkbox", className: "accent-primary" }), " Remember me"] }), _jsx(Link, { to: "/forgot-password", className: "font-semibold text-honey-deep", children: "Forgot password?" })] }), _jsx("button", { className: "w-full rounded-full gradient-honey px-4 py-2.5 text-sm font-bold text-ink shadow-honey", children: "Sign in" })] }), _jsxs("div", { className: "mt-4 text-center text-xs text-muted-foreground", children: ["New to BuyBee? ", _jsx(Link, { to: "/register", className: "font-semibold text-honey-deep", children: "Create an account" })] })] }) }));
}
