const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <nav className="nav-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>
    );
  };

export default Header;