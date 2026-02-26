"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  DollarSign,
  FileText,
  Users,
  TrendingUp,
  Settings,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/advisor", label: "AI Advisor", icon: MessageSquare },
  { href: "/transactions", label: "Transactions", icon: FileText },
  { href: "/contacts", label: "Contacts", icon: Users },
  { href: "/financials", label: "Financials", icon: DollarSign },
  { href: "/market", label: "Market", icon: TrendingUp },
  { href: "/settings", label: "Settings", icon: Settings },
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-surface border-r border-border flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
            <span className="text-background font-bold text-sm">B</span>
          </div>
          <div>
            <p className="text-text-primary font-semibold text-sm leading-tight">BainbridgeAI</p>
            <p className="text-text-muted text-xs">Real Estate OS</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                active
                  ? "bg-accent/10 text-accent font-medium"
                  : "text-text-secondary hover:bg-surface-light hover:text-text-primary"
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
              {active && <ChevronRight className="w-3 h-3 ml-auto" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-text-muted text-xs text-center">◆ AI-powered</p>
      </div>
    </aside>
  );
}
