import { Link, NavLink, Outlet } from "react-router-dom";
import { Home, Menu, CircleUser, ShoppingBasket, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchBar from "@/components/SearchBar";

export function MainLayout() {
  return (
    <div>
      <div className="flex flex-col w-full">
        <header className="flex h-14 justify-between items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="hidden md:block">
            <div className="flex gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link to="/" className="flex items-center gap-2 font-semibold">
                  <span className="">Compras</span>
                </Link>
              </div>
              <div className="flex-1">
                <nav className="flex items-center h-full px-2 text-sm font-medium lg:px-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`
                    }
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </NavLink>
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`
                    }
                  >
                    <ShoppingBasket className="h-4 w-4" />
                    Cart
                  </NavLink>
                  <NavLink
                    to="/form-status"
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`
                    }
                  >
                    <Package className="h-4 w-4" />
                    orders
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  <Home className="h-4 w-4" />
                  Home
                </NavLink>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  <ShoppingBasket className="h-4 w-4" />
                  Cart
                </NavLink>
                <NavLink
                  to="/form-status"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  <Package className="h-4 w-4" />
                  orders
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 flex-row-reverse items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SearchBar />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full">
          <div x-chunk="dashboard-02-chunk-1">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
