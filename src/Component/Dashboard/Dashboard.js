function Dashboard() {
  return (
    <div >
      <section id="hero" className="hero d-flex align-items-center">

        <div class="hero__overlay"></div>


        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" class="hero__video">
          <source src="assets/img/video.mp4" type="video/mp4" />
        </video>

        <div className="container">

          <div className="row gy-4 d-flex justify-content-between">
            <div className=" order-2 order-lg-1 d-flex flex-column justify-content-center">

              <h2 data-aos="fade-up" class="" className="">Transforming ideas into reality.</h2>
              <p data-aos="fade-up" data-aos-delay={100} className="" style={{ color: "white" }}>
                The Dr. Anwarul Abedin Institute of Innovation is an Research & Develpment institute dedicated to driving innovation and progress through cutting-edge research and development.
              </p>
              {/* <form action="#" className="form-search d-flex align-items-stretch mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
          <input type="text" className="form-control" placeholder="ZIP code or CitY" />
          <button type="submit" className="btn btn-primary">Search</button>
        </form> */}
              <div class="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 row gy-4 " data-aos="fade-up" data-aos-delay={400}>
                  <div className="col-lg-3 col-6">
                    <div className="stats-item text-center w-100 h-100">
                      <span style={{ color: "white" }} data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={0} className="purecounter">232</span>
                      <p style={{ color: "white", fontSize:"20px" }}>Clients</p>
                    </div>
                  </div>{/* End Stats Item */}
                  <div className="col-lg-3 col-6">
                    <div className="stats-item text-center w-100 h-100">
                      <span style={{ color: "white" }} data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={0} className="purecounter">521</span>
                      <p style={{ color: "white", fontSize:"20px" }}>Projects</p>
                    </div>
                  </div>{/* End Stats Item */}
                  <div className="col-lg-3 col-6">
                    <div className="stats-item text-center w-100 h-100">
                      <span style={{ color: "white" }} data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={0} className="purecounter">1453</span>
                      <p style={{ color: "white", fontSize:"20px" }}>Support</p>
                    </div>
                  </div>{/* End Stats Item */}
                  <div className="col-lg-3 col-6">
                    <div className="stats-item text-center w-100 h-100">
                      <span style={{ color: "white" }} data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={0} className="purecounter">32</span>
                      <p style={{ color: "white" , fontSize:"20px"}}>Contributor</p>
                    </div>
                  </div>{/* End Stats Item */}
                </div>

                <div className="col-lg-3"></div>

              </div>

            </div>
            {/* <div className="col-lg-5 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-out">
              <img src="assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt />
            </div> */}
          </div>



        </div>
      </section>


    </div>
  );
}
export default Dashboard;