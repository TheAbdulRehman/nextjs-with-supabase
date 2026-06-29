import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Welcome to MindDock
      </h1>
      <p className="text-muted-foreground max-w-md text-lg">
        Your fresh starting point. Build something great from here.
      </p>
      <div className="flex gap-4 mt-8">
        <Link href="/auth/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/auth/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </main>
  );
}
