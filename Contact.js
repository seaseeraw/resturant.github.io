import React, { useState } from "react";
import './Contact.css';
const Contact = () => {
  // Define state variables for full name, email, and comments
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  // Event handler to update the full name state
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  // Event handler to update the email state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler to update the comments state
  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now access the stored values in fullName, email, and comments
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Comments:", comments);

    // Perform any further actions (e.g., sending data to a server) here
  };

  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">FirstName:</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            required
            value={firstName}
            onChange={handleFirstNameChange}
          /><br/>
           <label htmlFor="last-name">LastName:</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            required
            value={lastName}
            onChange={handleLastNameChange}/><br/>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
          /><br/>
          <label htmlFor="comments">Comments :</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            maxLength="100"
            required
            value={comments}
            onChange={handleCommentsChange}
          ></textarea><br/>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;