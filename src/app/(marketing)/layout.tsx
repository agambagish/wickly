import { Header } from "@/modules/layouts/components/header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
}
