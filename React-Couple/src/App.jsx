import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

function App() {
  const nomeUsuario = "Júlio César";
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header>
        <div className="container">
          <h1>Icons Bank</h1>
          <nav>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Imagens</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Maior banco de imagens da Web</h2>
          <p>encontre o que você procura aqui</p>
          <a href="#" className="btn">Ver imagens</a>
        </div>
      </section>

      <section className="modelos">
        <div className="container">
          <h2>Nossos modelos</h2>
          <StatusCard/>
        </div>
      </section>
      <footer>
        <div className="container">
            <p>&copy; 2025 AutoPrime. Todos os direitos reservados.</p>
        </div>
    </footer>
    </main>
    
  );
}

// Dados simulados para imagens couple (integrados aqui)
const imageGroups = [
  {
    id: 1,
    category: "Amigos",
    tags: ["amigos", "viagem", "diversão"],
    images: [
      { src: "", alt: "Amigo 1" },
      { src: "", alt: "Amigo 2" },
      { src: "https://via.placeholder.com/300x200?text=Amigo3", alt: "Amigo 3" },
    ],
  },
  {
    id: 2,
    category: "Namorados",
    tags: ["namorados", "romântico", "passeio"],
    images: [
      { src: "https://via.placeholder.com/300x200?text=Namorado1", alt: "Namorado 1" },
      { src: "https://via.placeholder.com/300x200?text=Namorado2", alt: "Namorado 2" },
    ],
  },
  {
    id: 3,
    category: "Família",
    tags: ["família", "reunião", "festa"],
    images: [
      { src: "https://via.placeholder.com/300x200?text=Família1", alt: "Família 1" },
      { src: "https://via.placeholder.com/300x200?text=Família2", alt: "Família 2" },
      { src: "https://via.placeholder.com/300x200?text=Família3", alt: "Família 3" },
      { src: "https://via.placeholder.com/300x200?text=Família4", alt: "Família 4" },
    ],
  },
  // Adicione mais grupos conforme necessário
];

// Componente Filter
const Filter = ({ selectedTags, onTagChange, allTags }) => {
  return (
    <div className="filter">
      <h3>Filtros por Tag</h3>
      {allTags.map(tag => (
        <label key={tag} className="filter-label">
          <input
            type="checkbox"
            checked={selectedTags.includes(tag)}
            onChange={() => onTagChange(tag)}
          />
          {tag}
        </label>
      ))}
    </div>
  );
};

// Componente ImageCard
const ImageCard = ({ group, onImageClick }) => {
  return (
    <div className="image-card">
      <h4>{group.category}</h4>
      <div className="image-grid">
        {group.images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="image-item"
            onClick={() => onImageClick(img.src)}
          />
        ))}
      </div>
      <p>Tags: {group.tags.join(', ')}</p>
    </div>
  );
};

// Componente Modal
const Modal = ({ isOpen, onClose, imageSrc }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'imagem.jpg'; // Nome padrão
    link.click();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <img src={imageSrc} alt="Expanded" className="modal-image" />
      <div className="modal-buttons">
        <button onClick={handleDownload} className="download-btn">Baixar Imagem</button>
        <button onClick={onClose} className="close-btn">Fechar</button>
      </div>
    </ReactModal>
  );
};

// Componente StatusCard adaptado para imagens couple
function StatusCard() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState(imageGroups);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extrair todas as tags únicas
  const allTags = [...new Set(imageGroups.flatMap(group => group.tags))];

  // Atualizar filtros
  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredGroups(imageGroups);
    } else {
      setFilteredGroups(
        imageGroups.filter(group =>
          selectedTags.some(tag => group.tags.includes(tag))
        )
      );
    }
  }, [selectedTags]);

  const handleTagChange = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  ReactModal.setAppElement('#root'); // Para acessibilidade

  return (
    <div>
      <Filter selectedTags={selectedTags} onTagChange={handleTagChange} allTags={allTags} />
      <div className="grid-container">
        {filteredGroups.map(group => (
          <ImageCard key={group.id} group={group} onImageClick={handleImageClick} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={modalImage} />
    </div>
  );
}

export default App;