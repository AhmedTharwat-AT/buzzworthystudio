function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="fixed inset-[10px] overflow-clip rounded-[20px] font-tt_tunnels">
      {children}
    </main>
  );
}

export default MainLayout;
