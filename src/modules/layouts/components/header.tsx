"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import {
  AlignRightIcon,
  LayoutDashboardIcon,
  Loader2Icon,
  ShieldIcon,
  TicketIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Dashboard", href: "/dashboard", authRequired: true },
  { name: "Markets", href: "/markets", authRequired: true },
  { name: "Wallet", href: "/wallet", authRequired: true },
  { name: "How It Works", href: "/how-it-works", authRequired: false },
  { name: "About", href: "/about", authRequired: false },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isSignedIn } = useSession();
  const pathname = usePathname();

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function isActive(path: string) {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  }

  const filteredNavLinks = navLinks.filter(
    (link) => !link.authRequired || (link.authRequired && isSignedIn)
  );

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 py-8">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <TicketIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Wickly</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {filteredNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "hover:text-primary text-sm font-medium transition-colors",
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <ClerkLoaded>
            <SignedIn>
              <Button size="icon" variant="secondary">
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Link
                      label="Dashboard"
                      href="/dashboard"
                      labelIcon={<LayoutDashboardIcon className="size-4" />}
                    />
                    <UserButton.Link
                      label="Profile"
                      href="/profile"
                      labelIcon={<UserIcon className="size-4" />}
                    />
                    <UserButton.Link
                      label="Wallet"
                      href="/wallet"
                      labelIcon={<WalletIcon className="size-4" />}
                    />
                    <UserButton.Link
                      label="Admin"
                      href="/admin"
                      labelIcon={<ShieldIcon className="size-4" />}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              </Button>
            </SignedIn>
            <SignedOut>
              <div className="hidden gap-4 md:flex">
                <Button size="sm" asChild>
                  <Link href="/sign-in">Log in</Link>
                </Button>
              </div>
            </SignedOut>
          </ClerkLoaded>
          <ClerkLoading>
            <Button size="icon" variant="secondary">
              <Loader2Icon className="text-muted-foreground animate-spin" />
            </Button>
          </ClerkLoading>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <AlignRightIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <SheetTitle className="hidden" />
              <div className="px-7">
                <Link
                  href="/"
                  className="mt-4 mb-10 flex items-center gap-2"
                  onClick={() => toggleMobileMenu()}
                >
                  <TicketIcon className="h-6 w-6" />
                  <span className="text-xl font-bold">Wickly</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-4 px-7">
                {filteredNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "hover:text-primary py-2 text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => toggleMobileMenu()}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              {!isSignedIn && (
                <div className="mt-8 flex flex-col gap-4 px-7">
                  <Button asChild>
                    <Link href="/sign-in" onClick={() => toggleMobileMenu()}>
                      Log in
                    </Link>
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
