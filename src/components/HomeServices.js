

export default function HomeServices() {
  return (
    <section className="container my-5">
        <h3 className="my-5 text-center">Services</h3>
            <div className="row text-center">
                <div className="col-4">
                    <div class="card" style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
                    <img src="banners/banner3.jpg" className="img-thumbnail"/>
                        <div class="card-body">
                        <h5 class="card-title">Room Typs</h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
                    <img src="banners/banner2.jpg" className="img-thumbnail"/>
                        <div class="card-body">
                        <h5 class="card-title">Events</h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
                    <img src="banners/banner1.jpg" className="img-thumbnail"/>
                        <div class="card-body">
                        <h5 class="card-title">Booking</h5>
                    </div>
                    </div>
                </div>
            </div>
    </section>
  );
}
