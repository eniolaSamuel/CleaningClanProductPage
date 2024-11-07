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
        { title: "RESIDENTIAL CLEANING", content: "Offers tailored cleaning services to keep your home spotless and welcoming. Options include: " +
                "one-time deep clean, or regular weekly, bi-weekly and monthly plans." },
        { title: "COMMERCIAL CLEANING", content: "Provision of thorough, regular cleaning services for office spaces, retail spaces, restaurants and schools" },
        { title: "SPECIAL EVENT CLEANING", content: "Ensure venue is spotless for parties, weddings and conferences" },
        { title: "INTEGRATED PEST MANAGEMENT", content: "Inspection and prevention, targeted treatments, and ongoing monitoring." },
        { title: "DEEP CLEANING and SANITIZING", content: "Targeting dust mites, hard stains, grime from hard-to-reach areas and disinfecting high-touch surfaces." },
        { title: "MOVE-IN/MOVE-OUT CLEANING", content: "provision of a thorough, top-to-bottom clean to ensure your new home is move-in ready or leave your old space spotless for the next occupants." },
        { title: "EVENT CLEANING", content: "Pre-event setup, during-event maintenance and post-event cleanup" },

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
