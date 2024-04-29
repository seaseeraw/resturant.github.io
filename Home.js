// import React from "react";
// import './Home.css';
// import PracticeThemeContext from '../../components/practisetheme';
// const Home = () =>{
//     return(
//         <>
//         <div className="row">
//           <PracticeThemeContext/>
//   <div className="column side">
//     <h2>Our value</h2>
//     <p>A most renown Neplease Resturant in  town</p>
//   </div>
  
//   <div className="column side">
//     <h2>Our vision</h2>
//     <p> We server our customer in the very friendly way and try to be part of them in their daily life.</p>
//   </div>
  
//   <div className="column middle">
//     <h2>Our history</h2>
//     <p>We started our small bussiness in 1990 in small toen of nepal and with the advancement in the field of technology we are now in our 30 years of experience in serving our customer</p>
//   </div>
//           </div>
//        </>
//     )
// }

// export default Home;

// HomePage.js

import React from 'react';
import './Home.css'; // Import your CSS file for styling
import PracticeThemeContext from '../../components/practisetheme';
function Home() {
  return (
    <div className="home-page">
      <PracticeThemeContext/>
      <header className="header">
        <h1>Welcome to Fancy Website</h1>
        <p>Your one-stop destination for all things fancy!</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Fancy Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
