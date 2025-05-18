export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex h-[100vh] items-center justify-center">
      {children}
    </main>
  );
}
