import React, { useState } from 'react';
import Modal from 'react-modal';
import "../styles/ServicePage.css";
import CloseIcon from "../../src/assets/svg/icons8-close.svg"

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
        { title: "JANITORIAL SERVICE", content: "Information about house cleaning services." },
        { title: "COMMERCIAL CLEANING", content: "Information about post-construction and move cleaning services." },
        { title: "DOMESTIC CLEANING", content: "Details about service three." },
        { title: "INTEGRATED PEST MANAGEMENT", content: "Details about service four." },
        { title: "DEEP CLEANING", content: "Details about service five." },
        { title: "SOFA & RUG LAUNDRY", content: "Details about service six." },
        { title: "EVENT CLEANING", content: "Details about service seven." },

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
                <div className="services-clause-text">
                    <p>*we also offer Trainings and Consultation*</p>
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
                        <div>
                            <button
                                className="modal-close-button"
                                onClick={closeModal}>
                                <img src={CloseIcon} alt={CloseIcon}/>
                            </button>
                        </div>
                        <div>
                            <h2>{services[activeBubble].title}</h2>
                            <p>{services[activeBubble].content}</p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ServicePage;
