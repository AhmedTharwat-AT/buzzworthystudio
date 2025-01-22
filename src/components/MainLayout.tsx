function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="fixed inset-[10px] overflow-hidden font-tt_tunnels">
      {children}
    </main>
  );
}

export default MainLayout;
