import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

function App() {
  const nomeUsuario = "Júlio César";
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header>
        <div className="container">
          <h1 className="titulo">Iconify</h1>
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
          <h2>Icons alinhados para perfis que se conectam</h2>
          <p>Novas combinações todos os dias</p>
          <a className="explorar" href="#explorar">Explorar</a>
        </div>
      </section>

      <section className="modelos" id = "explorar">
        <div className="container">
          <StatusCard/>
        </div>
      </section>
      <footer>
        <div className="container">
            <p>&copy; 2025 Iconify. Todos os direitos reservados.</p>
        </div>
    </footer>
    </main>
    
  );
}

// Dados simulados para imagens couple (integrados aqui)
const imageGroups = [
  {
    id: 1,
    category: "Jujutsu",
    tags: ["amigos", "Cartoon"],
    images: [
      { src: "public/img/JJK2.jpeg", alt: "Amigo 1" },
      { src: "public/img/JJK1.jpeg", alt: "Amigo 2" },
    ],
  },
  {
    id: 2,
    category: "Namorados",
    tags: ["namorados", "Anime"],
    images: [
      { src: "public/img/Meliodas.jpeg", alt: "Namorado 1" },
      { src: "public/img/Meliodas2.jpeg", alt: "Namorado 2" },
    ],
  },
  {
    id: 3,
    category: "Anime",
    tags: ["Anime", "Amigos" ],
    images: [
      { src: "public/img/Blue.jpeg", alt: "Anime 1" },
      { src: "public/img/Blue2.jpeg", alt: "Anime 2" },
    ],
  
  },
   {
    id: 4,
    category: "Angel",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/Angel.jpeg", alt: "Anime 1" },
      { src: "public/img/Angel2.jpeg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 5,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/Black1.jpeg", alt: "Anime 1" },
      { src: "public/img/Black.jpeg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 6,
    category: "Cute",
    tags: ["Anime", "Namorados"],
    images: [
      { src: "public/img/Cute.jpeg", alt: "Anime 1" },
      { src: "public/img/Cute1.jpeg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 7,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/Red.jpeg", alt: "Anime 1" },
      { src: "public/img/Red1.jpeg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 8,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/Cat1.jpeg", alt: "Anime 1" },
      { src: "public/img/Cat.jpeg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 9,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/HAHA1.jpeg", alt: "Anime 1" },
      { src: "public/img/HAHA.jpeg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 10,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/Bonny1.jpeg", alt: "Anime 1" },
      { src: "public/img/Bonny.jpeg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 11,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/8-2.jpg", alt: "Anime 1" },
      { src: "public/img/8-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 12,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/ai-2.jpg", alt: "Anime 1" },
      { src: "public/img/ai-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 13,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/DazaiC-2.jpg", alt: "Anime 1" },
      { src: "public/img/DazaiC-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 14,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/downlo-4.jpg", alt: "Anime 1" },
      { src: "public/img/downlo-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 15,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/downlo-3.jpg", alt: "Anime 1" },
      { src: "public/img/downlo-2.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 16,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/GirlBo-2.jpg", alt: "Anime 1" },
      { src: "public/img/GirlBo-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 17,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/img-2.jpg", alt: "Anime 1" },
      { src: "public/img/img-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 18,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/img1-2.jpg", alt: "Anime 1" },
      { src: "public/img/img1-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 19,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/img2-2.jpg", alt: "Anime 1" },
      { src: "public/img/img2-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 20,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/img3-2.jpg", alt: "Anime 1" },
      { src: "public/img/img3-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 21,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/Kylean-2.jpg", alt: "Anime 1" },
      { src: "public/img/Kylean-1.jpg", alt: "Anime 2" },
    ],
  
  },
  {
    id: 22,
    category: "Anime",
    tags: ["Anime", "Amigos"],
    images: [
      { src: "public/img/Matchi-4.jpg", alt: "Anime 1" },
      { src: "public/img/Matchi-1.jpg", alt: "Anime 2" },
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
        <label key={tag} className="checkbox">
          <input
            type="checkbox"
            checked={selectedTags.includes(tag)}
            onChange={() => onTagChange(tag)}
          />

          <span className="checkmark"></span>
          <span className="label-text">{tag}</span>
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
      <p2>Tags: {group.tags.join(', ')}</p2>
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