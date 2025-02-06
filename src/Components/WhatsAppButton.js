import React, { useState, useEffect } from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "8957652758"; // Replace with owner's WhatsApp number
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 5000); // Hide popup after 5 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    return (
        <div className="whatsapp-container">
            {showPopup && (
                <div className="whatsapp-popup">
                    <p>Need help? Contact us now!</p>
                </div>
            )}
            <div className="whatsapp-icon" onClick={handleClick}>
                <FaWhatsapp size={50} color="#25D366" />
            </div>
        </div>
    );
};

export default WhatsAppButton;
