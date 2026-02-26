"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormData {
  name: string;
  email: string;
  password: string;
  orgName: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({ name: "", email: "", password: "", orgName: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/login?registered=true");
    } else {
      const data = await res.json() as { error?: string };
      setError(data.error ?? "Registration failed");
      setLoading(false);
    }
  }

  const fields: { id: keyof FormData; label: string; type: string }[] = [
    { id: "orgName", label: "Brokerage / Business Name", type: "text" },
    { id: "name", label: "Your Full Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password (min 8 chars)", type: "password" },
  ];

  return (
    <Card className="bg-surface border-border">
      <CardHeader>
        <CardTitle className="text-text-primary">Create your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(({ id, label, type }) => (
            <div key={id}>
              <Label htmlFor={id} className="text-text-secondary">{label}</Label>
              <Input
                id={id}
                type={type}
                value={form[id]}
                onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                className="bg-surface-light border-border text-text-primary"
                required
              />
            </div>
          ))}
          {error && <p className="text-error text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-background hover:bg-accent-hover font-semibold"
          >
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>
        <p className="mt-4 text-center text-text-muted text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-accent hover:underline">Sign in</a>
        </p>
      </CardContent>
    </Card>
  );
}
