import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2Icon } from "lucide-react";

import { Header } from "@/modules/layouts/components/header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main>
      <Header />
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <ClerkLoading>
          <Loader2Icon className="text-muted-foreground size-8 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>{children}</ClerkLoaded>
      </div>
    </main>
  );
}
