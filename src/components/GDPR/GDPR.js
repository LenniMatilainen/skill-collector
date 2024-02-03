import React, { useState, useEffect } from "react";
import "./popup.css";

function Popup(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 250);
  }, []);

function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

function handleAcceptClick() {
    if (isChecked) {
      setShowPopup(false);
    } else {
      alert("Please check the box to accept.");
    }
  }


  return showPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="accept-wrapper">
          <input
            type="checkbox"
            id="accept-checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="accept-checkbox"></label>
        </div>
        <button className="close-btn" onClick={handleAcceptClick}>
          Accept
        </button>
        {props.children}
      </div>
    </div>
      ) : null;
    }

function App() {
  return (
    <div className="app">
      <Popup>
        <p>
        <h1>GDPR Information</h1>
            We take your privacy very seriously and are committed to complying with the General Data Protection Regulation (GDPR).
            <br></br>
            This privacy policy explains how we collect, use, and protect your personal data when you participate in our survey.
        </p>
        <h2>Data Collection</h2>
        <p>
            We collect only the minimum amount of data necessary to conduct our survey, we use Plausible, a privacy-friendly analytics tool, to collect non-personally identifiable information about your interactions with our website.
            <br></br>
            Plausible collects data such as the pages you visit, the date and time of your visit, the type of device and browser you use, and your approximate location (based on your IP address).
            <br></br>
            We also use Doorbell.io, a customer feedback and support platform, to collect feedback from our users. 
            <br></br>
            Doorbell.io may collect your name and email address when you submit feedback, but we do not use this information for any other purposes.
        </p>
        <h2>Data Storage</h2>
        <p>
            We do not store any data collected by Plausible or Doorbell.io in our database. 
            <br></br>
            The data collected by these services is stored securely by Plausible and Doorbell.io.
        </p>
        <h2>Data Usage</h2>
        <p>
            We use the information we collect from you solely for the purpose of conducting our survey, analyzing the results, <br></br> and improving our website and services. 
            <br></br>
            We do not use your data for any other purposes, and we do not share your data with third parties.
        </p>
        <h2>Your Rights</h2>
        <p>
            Under GDPR, you have the right to access, correct, and delete your personal information. 
            <br></br>
            You also have the right to object to our processing of your personal data and to withdraw your consent at any time. 
            <br></br>
            To exercise any of these rights, please contact us through our feedback form.
            <br></br>
            By participating in our survey and submitting feedback through Doorbell.io, you agree to our collection and use of your data as described in this privacy policy.
            If you have any questions or concerns about our privacy practices, please contact us through our feedback form.
        </p>
      </Popup>
    </div>
  );
}

export default App;