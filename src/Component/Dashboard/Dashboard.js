function Dashboard() {
    return (
      <div >
        <section id="hero" className="hero d-flex align-items-center">
  <div className="container">
    <div className="row gy-4 d-flex justify-content-between">
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
        <h2 data-aos="fade-up" className="aos-init aos-animate">Transforming ideas into reality.</h2>
        <p data-aos="fade-up" data-aos-delay={100} className="aos-init aos-animate">
        The Dr. Anwarul Abedin Institute of Innovation is an R&D institute dedicated to driving innovation and progress through cutting-edge research and development.
        </p>
        {/* <form action="#" className="form-search d-flex align-items-stretch mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
          <input type="text" className="form-control" placeholder="ZIP code or CitY" />
          <button type="submit" className="btn btn-primary">Search</button>
        </form> */}
        <div className="row gy-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay={400}>
          <div className="col-lg-3 col-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={0} className="purecounter">232</span>
              <p>Clients</p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={0} className="purecounter">521</span>
              <p>Projects</p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={0} className="purecounter">1453</span>
              <p>Support</p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={0} className="purecounter">32</span>
              <p>Contributor</p>
            </div>
          </div>{/* End Stats Item */}
        </div>
      </div>
      <div className="col-lg-5 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-out">
        <img src="assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt />
      </div>
    </div>
  </div>
</section>

  
      </div>
    );
  }
  export default Dashboard;