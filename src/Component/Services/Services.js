function Services() {
    return (
      <div >
        
        <section id="featured-services" className="featured-services">
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up">
        <div className="icon flex-shrink-0"><i class="fa-solid fa-laptop-code"></i></div>
        <div>
          <h4 className="title">Software</h4>
          <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
        <div className="icon flex-shrink-0"><i class="fa-solid fa-gears"></i></div>
        <div>
          <h4 className="title">Hardware</h4>
          <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
        <div className="icon flex-shrink-0"><i class="fa-solid fa-wrench-simple"></i></div>
        <div>
          <h4 className="title">Maintainance</h4>
          <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    );
  }
  export default Services;