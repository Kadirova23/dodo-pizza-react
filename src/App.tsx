import { useState } from "react";
import "./App.css";
import "react-international-phone/style.css";
import { Modal, ProductCard } from "./components";
import pizzas from "./constants/modal.data";
import { ModalContext } from "./context";
import { Pizza } from "./interfaces";
// import { LoginModal } from "./components/LoginModal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Pizza | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {isModalOpen && selectedProduct && <Modal data={selectedProduct} />}

      <div className="pizza__container">
        {pizzas.map((item) => (
          <ProductCard
            key={item.id}
            data={item}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>
    </ModalContext.Provider>
    // <LoginModal />
  );
};

export default App;
