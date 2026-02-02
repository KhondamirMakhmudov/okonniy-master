import Header from "@/components/header"
import ContactUsModal from "@/components/modal"
import { useState } from "react"

const Wrapper = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return <>
        <Header isModalOpen={modalIsOpen} setIsModalOpen={setModalIsOpen}/> 
        <ContactUsModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}/>
        {children}
    </>
}

export default Wrapper