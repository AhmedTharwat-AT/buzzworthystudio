import Logo from "./Logo";

function Header() {
  return (
    <header className="flex justify-between font-tt_tunnels items-center h-12 p-4">
      <Logo />

      {/* <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
