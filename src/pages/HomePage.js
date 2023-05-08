import { useState } from "react"
import { Link } from "react-router-dom";

import ImageDisplay from "../components/ImageDisplay";
import Modal from "../components/Modal"


const HomePage = () => {
//useState to be able to change the state - open and close the modal
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <div className="container">
      <div className="home-container">
        <h1 className="title">Welcome to</h1>
        <h2 className="title-name">React Assignment 2</h2>
        <ImageDisplay />
        <h3 className="home-text">Hello hello! This is the landing page of this website. This website was created
        for assignment 2 and doesn't contain much content yet.</h3>
          <Link to={"/about"}><button className="button">About</button></Link>
      </div>
      <div className="modal-container">
        {/* Button with onClick to chang the state to true for opening the modal */}
        <button className="modal-button" onClick={() => {setOpenModal(true)}}>Submit a request!</button>
        {/* When openModal is true the modal shows with the messages, and a clickHandler which sets to false to be able to close the modal */}
        {openModal && <Modal closeModal={setOpenModal} clickHandler={() => {setOpenModal(false)}} message={"Submit a message to reach me at giveon.k@gmail.com!"} closeMessage={"X"}/>}
      </div>
    </div>
    </>
  );
};

export default HomePage;