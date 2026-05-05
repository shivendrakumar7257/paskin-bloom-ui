import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartProvider } from "@/hooks/use-cart";

// Pages
import Index from "./routes/index";
import AboutPage from "./routes/about";
import AboutUsPage from "./routes/about-us";
import BlogPage from "./routes/blog";
import CheckoutPage from "./routes/checkout";
import ContactPage from "./routes/contact";
import LoginPage from "./routes/login";
import PartnerPage from "./routes/partner";
import SignupPage from "./routes/signup";
import ProductsLayout from "./routes/products";
import ProductsPage from "./routes/products.index";
import ProductDetailsPage from "./routes/products.$id";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
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

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            <Route path="/products" element={<ProductsLayout />}>
              <Route index element={<ProductsPage />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
