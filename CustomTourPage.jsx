import React from 'react';
import '../Stylesheet/CustomTourPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomTourPage() {

    const services = [
  { img: "/coustom.jpg"},
  {
    title: "Adventure Tours",
    img: "/adventure.webp",
    link: "/adventure-tours",
    description: <><h1>Embark on the Adventure of a Lifetime</h1><p>
       Unleash your inner explorer with our exhilarating adventure tours that take you beyond the ordinary. Traverse rugged terrains, navigate through lush forests, and conquer thrilling challenges that await at every turn. Whether you're scaling majestic peaks, rafting down roaring rivers, or camping under a canopy of stars, each moment is crafted to ignite your spirit of adventure.</p>
        <h3>Join us for an unforgettable journey where every step is a story, and every destination, a discovery...!</h3>
        </>,
  },
   {
    title: "Family Tours",
    img: "/Family.jpg",
    link: "/family-tours",
    description:<p><h2>Discover the joy of traveling with your loved ones on our specially crafted <strong>Family Tour Packages</strong>.</h2> Enjoy safe, comfortable, and hassle-free journeys with kid-friendly activities, family-sized accommodations, and flexible itineraries. Explore popular attractions, cultural experiences, amusement parks, and scenic destinations with guided support and personalized touches. 
    <br/><h3>Entertained—from kids to grandparents.</h3></p>
    }

        ]    
        return (
            <>
            
                <div className="container border mt-4 p-4  ">
                    <div>
                        
                        
                    </div>
                    <div className="mb-3">
                        
                    </div>
                    {/* <div className="row w-25 ">  */}
                        {/* LEFT: Day-wise plan */}
                        <h4 className="mb-3 text-center p-2" style={{background: 'linear-gradient(to right,  rgb(90, 223, 161),rgb(142, 223, 48), rgb(236, 10, 10))'}}>
                            2N-3D</h4>
                        <div className='flex-container'>
                        <div className="col-md-7 custom-tour-page left-panel">
                            
                            <p><strong>2N/3D:</strong><br />Description — Explore beautiful destinations with exciting activities each day. Enjoy sightseeing, cultural experiences, and relaxing moments.</p>
                            <p><strong>Day 1:</strong></p>
                            <ul>
                                <li><strong>City Palace</strong> — Heritage Tour</li>
                                <li><strong>Lake Pichola</strong> — Boat Ride</li>
                            </ul>
                            <p><strong>Day 2:</strong></p>
                            <ul>
                                <li><strong>Sajjangarh Fort</strong> — Viewpoint Trek</li>
                                <li><strong>Shilpgram</strong> — Local Handicrafts</li>
                            </ul>
                            <p><strong>Day 3:</strong></p>
                            <ul>
                                <li><strong>Jag Mandir</strong> — Photography</li>
                                <li><strong>Local Market</strong> — Shopping</li>
                            </ul>
                            <p><strong>Co-Founder Message:</strong> Thank you for choosing us for your travel journey!</p>
                        </div>
                    {/* </div> */}

                        {/* RIGHT: Images with staggered layout */}
                    <div className="container zigzag-services w-50 .right-panel">
                        {services.map((service, index) => (
                        <div className={`zigzag-row ${index % 2 === 0 ? "normal" : "reverse"}`} key={index}>
                            <div className="zigzag-image">
                                <img style={{width:'250px'}} src={service.img}  alt={service.title} />
                            </div>
                        </div>
                        ))}
                    </div> {/* End of .container.zigzag-services */}
                </div> {/* End of .row */}
            </div>
    </>
  );
}

export default CustomTourPage;
