export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-text-primary">
            BainbridgeAI
          </h1>
          <p className="text-text-muted text-sm mt-1">Real Estate OS</p>
        </div>
        {children}
      </div>
    </div>
  );
}
