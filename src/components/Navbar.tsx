import Logo from "/narrative_favicon.png";

export default function Navbar() {
  return (
    <nav className="bg-[#434656] flex items-center justify-between py-4 pl-4 pr-10 text-3xl text-white">
      <div className="flex items-center gap-4">
        <img className="w-16" src={Logo} alt="Narrative logo" />
        <span>The Narrative</span>
      </div>
      <span className="flex gap-4">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Home
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          About
        </a>
      </span>
    </nav>
  );
}
