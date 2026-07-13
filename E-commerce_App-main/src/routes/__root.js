import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, } from "@tanstack/react-router";
import { useEffect } from "react";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StoreProvider } from "@/context/StoreContext";
function NotFoundComponent() {
    return (_jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: _jsxs("div", { className: "max-w-md text-center", children: [_jsx("div", { className: "mb-4 text-6xl", children: "\uD83D\uDC1D" }), _jsx("h1", { className: "font-display text-6xl font-bold text-ink", children: "404" }), _jsx("h2", { className: "mt-4 text-xl font-semibold", children: "This page flew away" }), _jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for isn't in the hive. Let's get you back." }), _jsx("div", { className: "mt-6", children: _jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-full gradient-honey px-5 py-2.5 text-sm font-bold text-ink shadow-honey", children: "Back to BuyBee" }) })] }) }));
}
function ErrorComponent({ error, reset }) {
    console.error(error);
    const router = useRouter();
    useEffect(() => {
        reportLovableError(error, { boundary: "tanstack_root_error_component" });
    }, [error]);
    return (_jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: _jsxs("div", { className: "max-w-md text-center", children: [_jsx("h1", { className: "font-display text-2xl font-bold", children: "Something got stuck in the honey" }), _jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try again or head home." }), _jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [_jsx("button", { onClick: () => { router.invalidate(); reset(); }, className: "rounded-full gradient-honey px-4 py-2 text-sm font-bold text-ink shadow-honey", children: "Try again" }), _jsx("a", { href: "/", className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-bold", children: "Go home" })] })] }) }));
}
export const Route = createRootRouteWithContext()({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: "BuyBee — Buzzing with the best deals" },
            { name: "description", content: "BuyBee is a honey-glazed marketplace of everyday essentials and small-batch finds across electronics, fashion, home, beauty and more." },
            { name: "author", content: "BuyBee" },
            { property: "og:title", content: "BuyBee — Buzzing with the best deals" },
            { property: "og:description", content: "A curated marketplace with 100+ products across 16 categories." },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [
            { rel: "stylesheet", href: appCss },
            { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
        ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
});
function RootShell({ children }) {
    return (_jsxs("html", { lang: "en", children: [_jsx("head", { children: _jsx(HeadContent, {}) }), _jsxs("body", { children: [children, _jsx(Scripts, {})] })] }));
}
function RootComponent() {
    const { queryClient } = Route.useRouteContext();
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsxs(StoreProvider, { children: [_jsxs("div", { className: "flex min-h-screen flex-col", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex-1", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }), _jsx(Toaster, { position: "top-center", toastOptions: { style: { borderRadius: 16 } } })] }) }));
}
