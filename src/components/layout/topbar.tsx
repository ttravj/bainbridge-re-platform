import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { Bell, User } from "lucide-react";

export async function Topbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="h-14 bg-surface border-b border-border flex items-center justify-between px-6">
      <div />
      <div className="flex items-center gap-4">
        <button className="text-text-secondary hover:text-text-primary transition-colors" type="button">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-7 h-7 bg-accent/20 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-accent" />
          </div>
          <span className="text-text-secondary">{session?.user?.name ?? "Agent"}</span>
        </div>
      </div>
    </header>
  );
}
