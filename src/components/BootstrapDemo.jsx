import React from 'react'

const BootstrapDemo = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <a className="navbar-brand fw-semibold" href="#">
            NatureView
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <main className="container py-5 flex-grow-1">
        <section className="row align-items-center">
          <div className="col-md-7">
            <h1 className="display-6 fw-semibold mb-3">
              Breathe with Nature 
            </h1>

            <p className="lead text-muted mb-4">
              Calm and refreshing greenery,
              fresh air, and simplicity.
            </p>

            <button className="btn btn-success me-2">Explore Nature</button>
            <button className="btn btn-outline-success">View Gallery</button>
          </div>

          <div className="col-md-5 mt-4 mt-md-0">
            <div className="p-4 rounded-4 border bg-white shadow-sm">
              <h5 className="mb-2">Today&apos;s Mood</h5>
              <p className="mb-0 text-muted">
                Quiet breeze… soft sunlight… green surroundings.  
                Stay peaceful 
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Wave Footer */}
      <footer className="mt-4">
        <div className="bg-success text-white text-center py-4">
          <h5 className="fw-light mb-0">
            © 2025 NatureView — Stay Close to Nature 
          </h5>
        </div>
      </footer>
    </div>
  )
}

export default BootstrapDemo