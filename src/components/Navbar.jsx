import { FiMoon, FiSun } from 'react-icons/fi'

function Navbar({ navItems, mobileMenuOpen, setMobileMenuOpen, theme, toggleTheme }) {
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
          {mobileMenuOpen ? '\u2715' : '\u2630'}
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
          <button
            className="nav-icon-btn"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
