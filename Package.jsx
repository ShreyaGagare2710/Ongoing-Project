import React from 'react';

const packages = [
  {id: 1,location: 'Manali',caption: 'Explore the beauty of Manali',image: 'manali.avif',},
  {id: 2,location: 'Goa',caption: 'Relax on the beaches of Goa',image: '/goa.jpg',},
  {id: 3,location: 'Kerala', caption: 'Backwaters and greenery', image: 'kerla.jpg', },
  {id: 4,location: 'Rajasthan',caption: 'Heritage and forts',image: 'Rajasthan.jpg',},
  {id: 5,location: 'Sikkim',caption: 'Mountains and monasteries',image: 'sikkim.jpg',},
  {id: 6,location: 'Kashmir',caption: 'Heaven on Earth',image: 'kashmir.jpg',},

];
const packages2 = [
  {id: 7,location: 'Rishikesh, Uttarakhand',caption: 'Yoga capital and river rafting',image: '/rishikesh.jpg',},
  {id: 8,location: 'Andaman Islands',caption: 'Crystal-clear beaches & scuba diving', image: '/andaman.jpg',},
  {id: 9,location: 'Agra, Uttar Pradesh', caption: 'Home to the iconic Taj Mahal', image: '/Aagra.jpg',},
  {id: 10, location: 'Udaipur, Rajasthan',caption: 'City of lakes & romantic vibes',image: '/Udaipur.webp',},
  {id: 11,location: 'Ladakh',caption: 'High-altitude passes and monasteries',image: '/ladakh.jpg', },
  { id: 12, location: 'Ooty, Tamil Nadu', caption: 'Hill station with botanical charm', image: '/ooty.jpg',},
]

export default function Package() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 p-2"
       style={{ backgroundImage: "linear-gradient(to right,rgb(192, 24, 226),rgb(21, 211, 199))",fontFamily: 'time new roman ',fontWeight: 'bold', color: 'white' }}>
        2N / 3D Custom Tour Packages</h2>

      <div className="row">
        <h1 className="container mb-4" style={{fontFamily:'fantasy'}}>“Uncover Hidden Gems Across <span style={{ color: 'tomato' }}>INDIA</span> with Personalized <br/> <span style={{ color: 'tomato'}}>CUSTOM</span> Tour Packages...!”</h1>
        <h5 className='container mb-4'style={{fontFamily:'inherit'}}>“Plan Less.Travel More.Build Your Perfect Local Getaway Today -<span style={{background: 'linear-gradient(to right, rgb(73, 3, 87), rgb(232, 13, 13))'
        ,WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>Your Dates, Your Destinations, Your Way."</span></h5>
        {packages.map((pkg) => (
          <div key={pkg.id1} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img src={pkg.image} alt={pkg.location} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body bg-dark text-white text-center">
                <p className="mb-1 fw-semibold">{pkg.caption}</p>
              </div>
              <div className="card-footer text-center bg-light">
                <button className="btn btn-outline-primary btn-sm m-auto">More Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* second para */}
        
      <div className="row">
        <h1 className="container mb-4 mt-4 text-center" style={{fontFamily:'initial', fontWeight:'bold'}}>“Discover Your Own Country Like Never Before <br/> <h2 style={{ fontFamily:'revert',color: 'purple'}}> With a Custom Tour Made Just for You”</h2></h1>
        <h5 className='container mb-4 text-center'style={{background: 'linear-gradient(to right,  rgb(29, 3, 30),rgb(23, 77, 2), rgb(236, 10, 10))'
        ,WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent', fontFamily:'inherit'}}>“Experience the beauty of your homeland with flexible 2N3D tour packages built around you.”
        </h5>
        {packages2.map((pkg) => (
          <div key={pkg.id} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img src={pkg.image} alt={pkg.location} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body bg-dark text-white text-center">
                <p className="mb-1 fw-semibold">{pkg.caption}</p>
              </div>
              <div className="card-footer text-center bg-light">
                <button className="btn btn-outline-primary btn-sm m-auto">More Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
