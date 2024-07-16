import React, { useState } from 'react';
import Modal from 'react-modal';
import "../styles/ServicePage.css";

Modal.setAppElement('#root'); // Ensure accessibility

const ServicePage = () => {
    const [activeBubble, setActiveBubble] = useState(null);

    const handleBubbleClick = (index) => {
        setActiveBubble(index);
    };

    const closeModal = () => {
        setActiveBubble(null);
    };

    const services = [
        { title: "HOUSE CLEANING", content: "Information about house cleaning services." },
        { title: "POST CONSTRUCTION & MOVE CLEANING", content: "Information about post-construction and move cleaning services." },
        { title: "DUSTING & VACUUMING", content: "Details about service three." },
        { title: "DISINFECTION", content: "Details about service four." },
        { title: "GENERAL SANITATION", content: "Details about service five." },
        { title: "POWER WASH ", content: "Details about service six." },
        { title: "Seven - Some additional information", content: "Details about service seven." }
    ];

    return (
        <div className="service-page-container">
            <div className="service-container">
                <div className="services-text">
                    <h1>OUR SERVICES</h1>
                    <p>*click on bubble to reveal our exciting services*</p>
                </div>
                <div className="bubble-container">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`individual-bubble ${activeBubble !== null && activeBubble !== index ? 'blurred' : ''}`}
                            onClick={() => handleBubbleClick(index)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={activeBubble !== null}
                onRequestClose={closeModal}
                contentLabel="Service Information"
                className="service-modal"
                overlayClassName="service-modal-overlay"
            >
                {activeBubble !== null && (
                    <div>
                        <h2>{services[activeBubble].title}</h2>
                        <p>{services[activeBubble].content}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ServicePage;
