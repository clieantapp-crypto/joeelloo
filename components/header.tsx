"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-serif text-2xl md:text-3xl tracking-tight">
          <img src="/logo.png" alt="logo" width={90} />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-6 mt-8">
              <a
                href="#welcome"
                className="text-lg hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="#locations"
                className="text-lg hover:text-accent transition-colors"
              >
                Locations
              </a>
              <a
                href="#contact"
                className="text-lg hover:text-accent transition-colors"
              >
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#welcome"
            className="text-sm hover:text-accent transition-colors"
          >
            About
          </a>
          <a
            href="#locations"
            className="text-sm hover:text-accent transition-colors"
          >
            Locations
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-accent transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
