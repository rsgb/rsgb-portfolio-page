function Navbar({ navItems, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#home">
          Rui Braga
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen((value) => !value)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? 'main-nav-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="nav-icon-btn" aria-label="Toggle theme">
            *
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
