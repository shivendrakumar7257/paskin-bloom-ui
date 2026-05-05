import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartProvider } from "@/hooks/use-cart";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-medium text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Back home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PASKIN — Pure Herbal Wellness & Ayurvedic Care" },
      { name: "description", content: "Discover PASKIN: 100% organic Ayurvedic skincare, herbal medicines and wellness products crafted from nature's finest botanicals." },
      { name: "author", content: "PASKIN" },
      { property: "og:title", content: "PASKIN — Pure Herbal Wellness & Ayurvedic Care" },
      { property: "og:description", content: "Discover PASKIN: 100% organic Ayurvedic skincare, herbal medicines and wellness products crafted from nature's finest botanicals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PASKIN — Pure Herbal Wellness & Ayurvedic Care" },
      { name: "twitter:description", content: "Discover PASKIN: 100% organic Ayurvedic skincare, herbal medicines and wellness products crafted from nature's finest botanicals." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/62c66982-7c6a-4c59-89c7-f3fcea8b1428/id-preview-92f36f54--cc8182f3-46bc-4b74-a740-b1f8e8972411.lovable.app-1777706847858.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/62c66982-7c6a-4c59-89c7-f3fcea8b1428/id-preview-92f36f54--cc8182f3-46bc-4b74-a740-b1f8e8972411.lovable.app-1777706847858.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/src/assets/logo.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
