class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.7);
          border-bottom: 1px solid #E6F1EE;
          transition: all 0.3s ease;
        }

        header {
          padding: 1rem 0;
        }

        .container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .logo-circle {
          position: relative;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: linear-gradient(to bottom right, #0F2C3D, #22C55E);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-icon {
          color: white;
          width: 1.5rem;
          height: 1.5rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(to right, #0F2C3D, #22C55E);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-links {
          display: none;
          gap: 1.75rem;
        }

        .nav-links a {
          font-weight: 500;
          color: #0F172A;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #2563EB;
        }

        .nav-links a.active {
          color: #22C55E;
          font-weight: 600;
        }

        .cta {
          background: linear-gradient(to right, #22C55E, #19A84B);
          color: white;
          border: none;
          padding: 0.6rem 1.5rem;
          border-radius: 9999px;
          font-weight: 500;
          box-shadow: 0 4px 10px rgba(34, 197, 94, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .cta:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(34, 197, 94, 0.4);
        }

        /* Mobile menu */
        .menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #0F172A;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          text-align: center;
          gap: 1rem;
          background: white;
          border-top: 1px solid #E6F1EE;
          padding: 1rem 0;
          margin-top: 0.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .mobile-menu.show {
          display: flex;
        }

        .mobile-menu a {
          color: #0F172A;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .mobile-menu a:hover {
          color: #2563EB;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
          .menu-toggle {
            display: none;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      </style>

      <header>
        <div class="container">
          <!-- Logo -->
          <div class="logo">
            <div class="logo-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>
            <h1 class="logo-text">BlueCred</h1>
          </div>

          <!-- Nav Links -->
          <nav>
            <div class="nav-links">
              <a href="index.html">Home</a>
              <a href="dashboard.html">Dashboard</a>
              <a href="registry.html">Registry</a>
              <a href="cni.html">CNI</a>
            </div>
            <button class="menu-toggle" aria-label="Toggle Menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <a href="#get-started" class="cta">Get Started</a>
          </nav>

          <!-- Mobile Menu -->
          <div class="mobile-menu">
            <a href="index.html">Home</a>
            <a href="dashboard.html">Dashboard</a>
            <a href="registry.html">Registry</a>
            <a href="cni.html">CNI</a>
          </div>
        </div>
      </header>
    `;

    // JS Interactivity (menu toggle + active highlight)
    const mobileMenu = this.shadowRoot.querySelector(".mobile-menu");
    const toggleBtn = this.shadowRoot.querySelector(".menu-toggle");
    const navLinks = this.shadowRoot.querySelectorAll(".nav-links a, .mobile-menu a");

    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });

    // Highlight current page
    const current = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
