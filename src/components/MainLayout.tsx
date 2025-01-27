function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="fixed inset-[10px] overflow-clip font-tt_tunnels">
      {children}
    </main>
  );
}

export default MainLayout;
