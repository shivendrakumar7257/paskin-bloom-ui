import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function DashboardLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/dashboard") return "Overview";
    if (path === "/dashboard/cart") return "My Cart";
    if (path === "/dashboard/orders") return "Order History";
    if (path === "/dashboard/address") return "Addresses";
    return "Dashboard";
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 h-screen sticky top-0 flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile Header & Sidebar */}
      <div className="lg:hidden">
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-border z-40 flex items-center px-4 justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72">
                <Sidebar onClose={() => setIsMobileOpen(false)} />
              </SheetContent>
            </Sheet>
            <h2 className="font-bold text-lg">{getPageTitle()}</h2>
          </div>
          <div className="w-10" /> {/* Spacer */}
        </header>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full pt-24 lg:pt-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

