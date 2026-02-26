import { requireAuth } from "@/lib/auth/rbac";

export default async function DashboardPage() {
  const user = await requireAuth();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">
          Welcome back, {user.name.split(" ")[0]}
        </h1>
        <p className="text-text-muted mt-1">
          Your AI-powered real estate operating system is ready.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          {
            title: "Ask AI Advisor",
            desc: "Get expert guidance on any real estate topic",
            href: "/advisor",
          },
          {
            title: "New Transaction",
            desc: "Start tracking a listing or buyer deal",
            href: "/transactions/new",
          },
          {
            title: "Log Income",
            desc: "Record a closing or commission",
            href: "/financials/income/new",
          },
        ].map(({ title, desc, href }) => (
          <a
            key={href}
            href={href}
            className="block p-4 bg-surface border border-border rounded-lg hover:border-accent/50 transition-colors group"
          >
            <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-text-muted text-sm mt-1">{desc}</p>
          </a>
        ))}
      </div>

      {/* AI Intelligence Layer */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h2 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
          <span className="text-accent">◆</span> AI Intelligence Layer
        </h2>
        <p className="text-text-secondary text-sm">
          26 real estate skills loaded and ready. Your AI advisor has deep expertise in
          commission strategy, buyer representation, listing services, transaction
          management, financial performance, compliance, and more.
        </p>
        <a href="/advisor" className="inline-block mt-4 text-accent text-sm hover:underline">
          Start a conversation →
        </a>
      </div>
    </div>
  );
}
