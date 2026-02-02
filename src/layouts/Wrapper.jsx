import Header from "@/components/header";
import ContactUsModal from "@/components/modal";
import { useState } from "react";

const Wrapper = ({ children, modalIsOpen, setModalIsOpen }) => {
  return (
    <div className="container mx-auto">
      <Header isModalOpen={modalIsOpen} setIsModalOpen={setModalIsOpen} />
      <ContactUsModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
      {children}
    </div>
  );
};

export default Wrapper;
