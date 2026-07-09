import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { BeeMark } from "@/components/Navbar";
import { toast } from "sonner";
export const Route = createFileRoute("/register")({
    head: () => ({ meta: [{ title: "Create account — BuyBee" }] }),
    component: Register,
});
function Register() {
    const { login } = useStore();
    const navigate = useNavigate();
    const [f, setF] = useState({ name: "", email: "", pw: "" });
    return (_jsx("div", { className: "mx-auto grid min-h-[70vh] max-w-md place-items-center px-4", children: _jsxs("div", { className: "glass w-full rounded-3xl p-8 shadow-honey", children: [_jsxs("div", { className: "mb-6 flex flex-col items-center gap-2", children: [_jsx(BeeMark, {}), _jsx("h1", { className: "font-display text-2xl font-bold", children: "Join the hive" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Create your BuyBee account" })] }), _jsxs("form", { onSubmit: (e) => { e.preventDefault(); login({ name: f.name, email: f.email }); toast.success("Welcome to BuyBee 🐝"); navigate({ to: "/account" }); }, className: "space-y-3", children: [_jsx("input", { required: true, placeholder: "Full name", value: f.name, onChange: (e) => setF({ ...f, name: e.target.value }), className: "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary" }), _jsx("input", { required: true, type: "email", placeholder: "Email", value: f.email, onChange: (e) => setF({ ...f, email: e.target.value }), className: "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary" }), _jsx("input", { required: true, type: "password", placeholder: "Password", value: f.pw, onChange: (e) => setF({ ...f, pw: e.target.value }), className: "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary" }), _jsx("button", { className: "w-full rounded-full gradient-honey px-4 py-2.5 text-sm font-bold text-ink shadow-honey", children: "Create account" })] }), _jsxs("div", { className: "mt-4 text-center text-xs text-muted-foreground", children: ["Already have an account? ", _jsx(Link, { to: "/login", className: "font-semibold text-honey-deep", children: "Sign in" })] })] }) }));
}
