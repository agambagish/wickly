import { Header } from "@/modules/layouts/components/header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main>
      <Header />
      <div className="container mx-auto max-w-7xl px-4 py-8">{children}</div>
    </main>
  );
}
