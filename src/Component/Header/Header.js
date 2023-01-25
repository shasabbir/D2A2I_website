function Header() {
    return (
      <div >
        <header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
    <a href="index.html" className="logo d-flex align-items-center">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1>DA2I2</h1>
    </a>
    <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    <nav id="navbar" className="navbar">
      <ul>
        <li><a href="index.html" className="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li>
        <li><a href="contact.html">Contact</a></li>
        <li><a className="get-a-quote" href="#">Call</a></li>
      </ul>
    </nav>{/* .navbar */}
  </div>
</header>
  
      </div>
    );
  }
  export default Header;