import { Link, useLocation, Outlet } from "react-router-dom";
import { Home, NotepadText, BadgeCheck, Menu, Search, CircleUser } from "lucide-react";

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
import UserStore from "../../store/UserStore";

const locationName: Record<string, string> = {
  "/": "Dashboard",
  "/excemption-form": "Excemption-Form",
  "/form-status": "Your Froms",
};

export function MainLayout() {
  const { email, name } = UserStore((state: any) => ({ email: state.email, name: state.name }));

  const location = useLocation();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <span className="">BIT</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                to="/excemption-form"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <NotepadText className="h-4 w-4" />
                Excemption-Form
              </Link>
              <Link
                to="/form-status"
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <BadgeCheck className="h-4 w-4" />
                Form-Status
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 justify-between items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6  md:flex-row-reverse">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="/"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  to="/excemption-form"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <NotepadText className="h-4 w-4" />
                  Excemption-Form
                </Link>
                <Link
                  to="/form-status"
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary `}
                >
                  <BadgeCheck className="h-4 w-4" />
                  Form-Status
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <span>{name}</span>
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
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">{locationName[location.pathname]}</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
