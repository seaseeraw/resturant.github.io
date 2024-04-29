
// import React, { useState } from "react";
// import './Menu.css';

// const Menu = () => {
//   const [cart, setCart] = useState([]); 
//   const [itemCounts, setItemCounts] = useState({}); 
//   const [totalPrice, setTotalPrice] = useState(0); 

//   const addItemToCart = (itemName, price) => {
//     setCart([...cart, itemName]);
//     setItemCounts({
//       ...itemCounts,
//       [itemName]: (itemCounts[itemName] || 0) + 1,
//     });
//     setTotalPrice(totalPrice + price);
//   };

  
//   const removeItemFromCart = (itemName, price) => {
//     const updatedCart = cart.filter((cartItem) => cartItem !== itemName);
//     setCart(updatedCart);
//     setItemCounts({
//       ...itemCounts,
//       [itemName]: Math.max((itemCounts[itemName] || 0) - 1, 0),
//     });
//     setTotalPrice(totalPrice - price);
//   };

//   return (
//     <div className='menu'>
//       <main>
//         <h1>Our  Menu</h1>
//         <div className="cart">
         
//           <span>Total: ${totalPrice.toFixed(2)} AUD</span>
//         </div>

//           <div className="menu-item">
//           <img src="1.jpg" alt="Northern Lights" width="400"/>
//           <h2>Desserts</h2>
//           <p>Our famous dessert made of carmel homemade cream and extra toppings</p>
//           <p className="price">Price: $25 AUD</p>
//           <div className="item-counter">
//             <button onClick={() => addItemToCart("Desserts", 25)}>+</button>
//             <span>{itemCounts["Desserts"] || 0}</span>
//             <button
//               onClick={() => removeItemFromCart("Desserts", 25)}
//               disabled={!itemCounts["Desserts"]}
//             >
//               -
//             </button>
//           </div> 
//          </div>

        

//         <div className="menu-item">
          
//           <img src="3.jpg" alt="Cinque Terre" width="300px" />
//           <h2>Soft Drinks</h2>
//           <p>Our Soft Drinks are Refreshing</p>
//           <p className="price">Price: $5 AUD</p>
//           <div className="item-counter">
//             <button onClick={() => addItemToCart("Soft Drinks", 5)}>+</button>
//             <span>{itemCounts["Soft Drinks"] || 0}</span>
//             <button
//               onClick={() => removeItemFromCart("Soft Drinks", 5)}
//               disabled={!itemCounts["Soft Drinks"]}
//             >
//               -
//             </button>
//           </div>
//         </div> 

//         <div className="menu-item">
     
//           <img src="2.jpg" alt="Mountains"/>
//           <h2>sea food</h2>
//           <p>“For almost three decades we have been serving fresh and tasty seafood daily</p>
//           <p className="price">Price: $20 AUD</p>
//           <div className="item-counter">
//             <button onClick={() => addItemToCart("Sea Food", 20)}>+</button>
//             <span>{itemCounts["Sea Food"] || 0}</span>
//             <button
//               onClick={() => removeItemFromCart("Sea Food", 20)}
//               disabled={!itemCounts["Sea Food"]}
//             >
//               -
//             </button>
//           </div> 
//          </div> 
//       </main>
//     </div>
//   );
// };

// export default Menu;

import React, { useState } from "react";
import "./Menu.css"; // Import your CSS file for styling

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [itemCounts, setItemCounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (itemName, price) => {
    setCart([...cart, itemName]);
    setItemCounts({
      ...itemCounts,
      [itemName]: (itemCounts[itemName] || 0) + 1,
    });
    setTotalPrice(totalPrice + price);
  };

  const removeItemFromCart = (itemName, price) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== itemName);
    setCart(updatedCart);
    setItemCounts({
      ...itemCounts,
      [itemName]: Math.max((itemCounts[itemName] || 0) - 1, 0),
    });
    setTotalPrice(totalPrice - price);
  };

  const handleCheckout = () => {
    // Add logic for handling checkout (e.g., sending order to server)
    alert("Checkout successful!");
    setCart([]);
    setItemCounts({});
    setTotalPrice(0);
  };

  return (
    <div className="menu">
      <main>
        <h1>Our Menu</h1>
        <div className="cart">
          <span>Total: ${totalPrice.toFixed(2)} AUD</span>
          <button onClick={handleCheckout}>Checkout</button>
        </div>

        <div className="menu-item">
          <img src="1.jpg" alt="Northern Lights" width="400" />
          <h2>Desserts</h2>
          <p>Our famous dessert made of caramel homemade cream and extra toppings</p>
          <p className="price">Price: $25 AUD</p>
          <div className="item-counter">
            <button onClick={() => addItemToCart("Desserts", 25)}>+</button>
            <span>{itemCounts["Desserts"] || 0}</span>
            <button
              onClick={() => removeItemFromCart("Desserts", 25)}
              disabled={!itemCounts["Desserts"]}
            >
              -
            </button>
          </div>
        </div>

        <div className="menu-item">
          <img src="3.jpg" alt="Cinque Terre" width="300px" />
          <h2>Soft Drinks</h2>
          <p>Our Soft Drinks are Refreshing</p>
          <p className="price">Price: $5 AUD</p>
          <div className="item-counter">
            <button onClick={() => addItemToCart("Soft Drinks", 5)}>+</button>
            <span>{itemCounts["Soft Drinks"] || 0}</span>
            <button
              onClick={() => removeItemFromCart("Soft Drinks", 5)}
              disabled={!itemCounts["Soft Drinks"]}
            >
              -
            </button>
          </div>
        </div>

        <div className="menu-item">
          <img src="2.jpg" alt="Mountains" />
          <h2>Seafood</h2>
          <p>For almost three decades we have been serving fresh and tasty seafood daily</p>
          <p className="price">Price: $20 AUD</p>
          <div className="item-counter">
            <button onClick={() => addItemToCart("Seafood", 20)}>+</button>
            <span>{itemCounts["Seafood"] || 0}</span>
            <button
              onClick={() => removeItemFromCart("Seafood", 20)}
              disabled={!itemCounts["Seafood"]}
            >
              -
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
