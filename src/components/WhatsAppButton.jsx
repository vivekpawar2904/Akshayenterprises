import React from 'react';

import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons
import './WhatsAppButton.css'; // Import the CSS file for styling (if applicable)


const WhatsAppButton = () => {
  const phoneNumber = '+917021834376'; // Replace with your phone number in international format

  const handleClick = () => {
    const message = 'Hello! I would like to chat.'; // Optional message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Open WhatsApp in a new tab
  };

  return (
    <div>
      <button className="whatsapp-button" onClick={handleClick}>
        <FaWhatsapp size={24} color="#fff" />
        Chat with us on WhatsApp
      </button>
      <span>Another element</span>
    </div>
  );
};

const styles = {
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25D366', // WhatsApp green
    padding: 10,
    borderRadius: 5,
    position: 'absolute', // Fixed position
    bottom: 20,
    right: 20,
    zIndex: 1000,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
  },
};

export default WhatsAppButton;