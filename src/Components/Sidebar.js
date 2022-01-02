import React, { useState } from 'react'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';


const Sidebar = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function ModalToggle() {
        setIsOpen(!modalIsOpen);
    }
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="https://brandcolors.net/assets/img/logo.png" alt="logo" />
                <h2><span>Brand</span>Colors</h2>
            </div>
            <p>
                The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
            </p>
            <nav>
                <a href="https://github.com/brandcolors/feedback" target="_blank">Suggest a Brand</a>
                <a onClick={ModalToggle}>About BrandColors</a>
            </nav>
            <div className="sidebarlink">
                <p>Brand<span>Colors</span> + DesignBombs</p>
                <a>Learn how to make a website - we have put together an in-depth guide that will help you build your first website with WordPress.</a>
            </div>
            <Modal
                isOpen={modalIsOpen}
                className="Modal"
                onRequestClose={ModalToggle}
            >
                <GrClose onClick={ModalToggle} className="modal-close" />
                <div className="Overlay">
                    <h3>About BrandColors</h3>
                    <p>BrandColors was created by <span>DesignBombs</span>. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
                    <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <span> 2 million pageviews</span>. There are now over <span>600 </span> brands with <span>1600</span> colors and the collection is always growing.</p>
                </div>
            </Modal>

        </div >

    )
}

export default Sidebar
