import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

function App() {
  const nomeUsuario = "Júlio César";
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header>
        <div className="container">
          <h1 className="titulo">Portfólio Fotográfico</h1>
          <nav>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Galeria</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Portfólios de fotógrafos — projetos e paisagens</h2>
          <p>Trabalhos selecionados por autor</p>
          <a className="explorar" href="#explorar">Ver Galeria</a>
        </div>
      </section>

      <section className="modelos" id = "explorar">
        <div className="container">
          <StatusCard/>
        </div>
      </section>
      <footer>
        <div className="container">
            <p>&copy; 2026 Portfólio Fotográfico. Todos os direitos reservados.</p>
        </div>
    </footer>
    </main>
    
  );
}

// Dados simulados para imagens couple (integrados aqui)
let imgCounter = 1;
// Total de imagens disponíveis na pasta public/img
const TOTAL_IMAGES = 84;
// Gera caminhos reutilizando as imagens existentes (evita 404 quando muitas imagens são solicitadas)
const nextImg = () => {
  const idx = ((imgCounter - 1) % TOTAL_IMAGES) + 1;
  imgCounter++;
  return `/img/img${idx}.jpg`;
};

// helper: cria array de imagens com alts temáticos
const makeImages = (count, author, tags) => {
  return Array.from({ length: count }).map((_, i) => ({
    src: nextImg(),
    alt: `${author} — ${tags.join(' / ')} — Foto ${i + 1}`,
  }));
};

// Dados simulados para imagens couple (integrados aqui)
const imageGroups = [
  {
    id: 1,
    category: "Lucas Silva",
    tags: ["Paisagem", "Pôr do Sol"],
    images: makeImages(2, "Lucas Silva", ["Paisagem", "Pôr do Sol"]),
  },
  {
    id: 2,
    category: "Mariana Costa",
    tags: ["Praia", "Retrato"],
    images: makeImages(3, "Mariana Costa", ["Praia", "Retrato"]),
  },
  {
    id: 3,
    category: "Pedro Almeida",
    tags: ["Montanha", "Paisagem" ],
    images: makeImages(4, "Pedro Almeida", ["Montanha", "Paisagem"]),
  
  },
   {
    id: 4,
    category: "Ana Moura",
    tags: ["Urbano", "Noite"],
    images: makeImages(2, "Ana Moura", ["Urbano", "Noite"]),
  
  },
  {
    id: 5,
    category: "Carlos Souza",
    tags: ["Macro", "Retrato"],
    images: makeImages(3, "Carlos Souza", ["Macro", "Retrato"]),
  
  },
  {
    id: 6,
    category: "Beatriz Lima",
    tags: ["Praia", "Pôr do Sol"],
    images: makeImages(4, "Beatriz Lima", ["Praia", "Pôr do Sol"]),
  
  },
  {
    id: 7,
    category: "Rafaela Nunes",
    tags: ["Montanha", "Paisagem"],
    images: makeImages(2, "Rafaela Nunes", ["Montanha", "Paisagem"]),
  
  },
  {
    id: 8,
    category: "João Pereira",
    tags: ["Urbano", "Retrato"],
    images: makeImages(3, "João Pereira", ["Urbano", "Retrato"]),
  
  },
  {
    id: 9,
    category: "Marcos Pinto",
    tags: ["Noite", "Urbano"],
    images: makeImages(4, "Marcos Pinto", ["Noite", "Urbano"]),
  
  },
  {
    id: 10,
    category: "Sofia Rocha",
    tags: ["Paisagem", "Macro"],
    images: makeImages(2, "Sofia Rocha", ["Paisagem", "Macro"]),
  
  },
  {
    id: 11,
    category: "Luiz Carvalho",
    tags: ["Praia", "Paisagem"],
    images: makeImages(3, "Luiz Carvalho", ["Praia", "Paisagem"]),
  
  },
  {
    id: 12,
    category: "Camila Dias",
    tags: ["Montanha", "Retrato"],
    images: makeImages(4, "Camila Dias", ["Montanha", "Retrato"]),
  
  },
  {
    id: 13,
    category: "Eduardo Reis",
    tags: ["Noite", "Macro"],
    images: makeImages(2, "Eduardo Reis", ["Noite", "Macro"]),
  
  },
  {
    id: 14,
    category: "Fernanda Alves",
    tags: ["Praia", "Pôr do Sol"],
    images: makeImages(3, "Fernanda Alves", ["Praia", "Pôr do Sol"]),
  
  },
  {
    id: 15,
    category: "Ricardo Melo",
    tags: ["Montanha", "Paisagem"],
    images: makeImages(4, "Ricardo Melo", ["Montanha", "Paisagem"]),
  
  },
  {
    id: 16,
    category: "Juliana Freitas",
    tags: ["Retrato", "Paisagem"],
    images: makeImages(2, "Juliana Freitas", ["Retrato", "Paisagem"]),
  
  },
  {
    id: 17,
    category: "Thiago Moreira",
    tags: ["Urbano", "Noite"],
    images: makeImages(3, "Thiago Moreira", ["Urbano", "Noite"]),
  
  },
  {
    id: 18,
    category: "Paula Gomes",
    tags: ["Macro", "Retrato"],
    images: makeImages(4, "Paula Gomes", ["Macro", "Retrato"]),
  
  },
  {
    id: 19,
    category: "André Oliveira",
    tags: ["Praia", "Paisagem"],
    images: makeImages(2, "André Oliveira", ["Praia", "Paisagem"]),
  
  },
  {
    id: 20,
    category: "Natália Castro",
    tags: ["Montanha", "Retrato"],
    images: makeImages(3, "Natália Castro", ["Montanha", "Retrato"]),
  
  },
  {
    id: 21,
    category: "Diego Santana",
    tags: ["Noite", "Urbano"],
    images: makeImages(4, "Diego Santana", ["Noite", "Urbano"]),
  
  },
  {
    id: 22,
    category: "Helena Martins",
    tags: ["Macro", "Paisagem"],
    images: makeImages(2, "Helena Martins", ["Macro", "Paisagem"]),
  
  },
  {
    id: 23,
    category: "Larissa Prado",
    tags: ["Praia", "Paisagem"],
    images: makeImages(2, "Larissa Prado", ["Praia", "Paisagem"]),
  },
  {
    id: 24,
    category: "Mateus Rocha",
    tags: ["Noite", "Urbano"],
    images: makeImages(3, "Mateus Rocha", ["Noite", "Urbano"]),
  },
  {
    id: 25,
    category: "Bianca Torres",
    tags: ["Macro", "Retrato"],
    images: makeImages(4, "Bianca Torres", ["Macro", "Retrato"]),
  },
  {
    id: 26,
    category: "Felipe Barros",
    tags: ["Montanha", "Paisagem"],
    images: makeImages(2, "Felipe Barros", ["Montanha", "Paisagem"]),
  },
  {
    id: 27,
    category: "Monica Ribeiro",
    tags: ["Praia", "Pôr do Sol"],
    images: makeImages(3, "Monica Ribeiro", ["Praia", "Pôr do Sol"]),
  },
  {
    id: 28,
    category: "Andressa Pinto",
    tags: ["Urbano", "Retrato"],
    images: makeImages(4, "Andressa Pinto", ["Urbano", "Retrato"]),
  },
  {
    id: 29,
    category: "Gustavo Lima",
    tags: ["Noite", "Paisagem"],
    images: makeImages(2, "Gustavo Lima", ["Noite", "Paisagem"]),
  },
  {
    id: 30,
    category: "Vanessa Cardoso",
    tags: ["Macro", "Praia"],
    images: makeImages(3, "Vanessa Cardoso", ["Macro", "Praia"]),
  },
  {
    id: 31,
    category: "Rafael Santos",
    tags: ["Montanha", "Pôr do Sol"],
    images: makeImages(4, "Rafael Santos", ["Montanha", "Pôr do Sol"]),
  },
  {
    id: 32,
    category: "Marina Lopes",
    tags: ["Retrato", "Urbano"],
    images: makeImages(2, "Marina Lopes", ["Retrato", "Urbano"]),
  },
  {
    id: 33,
    category: "Sérgio Farias",
    tags: ["Paisagem", "Montanha"],
    images: makeImages(3, "Sérgio Farias", ["Paisagem", "Montanha"]),
  },
  {
    id: 34,
    category: "Isabela Neves",
    tags: ["Praia", "Retrato"],
    images: makeImages(4, "Isabela Neves", ["Praia", "Retrato"]),
  },
  {
    id: 35,
    category: "Bruno Costa",
    tags: ["Noite", "Macro"],
    images: makeImages(2, "Bruno Costa", ["Noite", "Macro"]),
  },
  {
    id: 36,
    category: "Patrícia Azevedo",
    tags: ["Paisagem", "Pôr do Sol"],
    images: makeImages(3, "Patrícia Azevedo", ["Paisagem", "Pôr do Sol"]),
  },
  {
    id: 37,
    category: "Leandro Gomes",
    tags: ["Urbano", "Montanha"],
    images: makeImages(4, "Leandro Gomes", ["Urbano", "Montanha"]),
  },
  {
    id: 38,
    category: "Carla Furtado",
    tags: ["Retrato", "Macro"],
    images: makeImages(2, "Carla Furtado", ["Retrato", "Macro"]),
  },
  {
    id: 39,
    category: "Vinicius Moraes",
    tags: ["Praia", "Noite"],
    images: makeImages(3, "Vinicius Moraes", ["Praia", "Noite"]),
  },
  {
    id: 40,
    category: "Jéssica Moreira",
    tags: ["Montanha", "Paisagem"],
    images: makeImages(4, "Jéssica Moreira", ["Montanha", "Paisagem"]),
  },
  {
    id: 41,
    category: "Hugo Almeida",
    tags: ["Urbano", "Pôr do Sol"],
    images: makeImages(2, "Hugo Almeida", ["Urbano", "Pôr do Sol"]),
  },
  {
    id: 42,
    category: "Lívia Santana",
    tags: ["Macro", "Praia"],
    images: makeImages(3, "Lívia Santana", ["Macro", "Praia"]),
  },
  {
    id: 43,
    category: "Otávio Ribeiro",
    tags: ["Noite", "Retrato"],
    images: makeImages(4, "Otávio Ribeiro", ["Noite", "Retrato"]),
  },
  {
    id: 44,
    category: "Raquel Vieira",
    tags: ["Paisagem", "Montanha"],
    images: makeImages(2, "Raquel Vieira", ["Paisagem", "Montanha"]),
  },
  {
    id: 45,
    category: "Igor Mello",
    tags: ["Praia", "Pôr do Sol"],
    images: makeImages(3, "Igor Mello", ["Praia", "Pôr do Sol"]),
  },
  {
    id: 46,
    category: "Natasha Ribeiro",
    tags: ["Urbano", "Macro"],
    images: makeImages(4, "Natasha Ribeiro", ["Urbano", "Macro"]),
  },
  {
    id: 47,
    category: "Cauê Fernandes",
    tags: ["Montanha", "Noite"],
    images: makeImages(2, "Cauê Fernandes", ["Montanha", "Noite"]),
  },
  {
    id: 48,
    category: "Daniela Braga",
    tags: ["Retrato", "Praia"],
    images: makeImages(3, "Daniela Braga", ["Retrato", "Praia"]),
  },
  {
    id: 49,
    category: "Pablo Tavares",
    tags: ["Paisagem", "Macro"],
    images: makeImages(4, "Pablo Tavares", ["Paisagem", "Macro"]),
  },
  {
    id: 50,
    category: "Renata Pinto",
    tags: ["Pôr do Sol", "Praia"],
    images: makeImages(2, "Renata Pinto", ["Pôr do Sol", "Praia"]),
  },
  {
    id: 51,
    category: "Alexandre Reis",
    tags: ["Urbano", "Retrato"],
    images: makeImages(3, "Alexandre Reis", ["Urbano", "Retrato"]),
  },
  {
    id: 52,
    category: "Gisele Fonseca",
    tags: ["Montanha", "Macro"],
    images: makeImages(4, "Gisele Fonseca", ["Montanha", "Macro"]),
  },
  {
    id: 53,
    category: "Mauro Henrique",
    tags: ["Noite", "Paisagem"],
    images: makeImages(2, "Mauro Henrique", ["Noite", "Paisagem"]),
  },
  {
    id: 54,
    category: "Verônica Sousa",
    tags: ["Praia", "Retrato"],
    images: makeImages(3, "Verônica Sousa", ["Praia", "Retrato"]),
  },
  {
    id: 55,
    category: "Fábio Lima",
    tags: ["Pôr do Sol", "Montanha"],
    images: makeImages(4, "Fábio Lima", ["Pôr do Sol", "Montanha"]),
  },
  {
    id: 56,
    category: "Marta Oliveira",
    tags: ["Macro", "Urbano"],
    images: makeImages(2, "Marta Oliveira", ["Macro", "Urbano"]),
  },
  {
    id: 57,
    category: "Eduarda Pinto",
    tags: ["Paisagem", "Praia"],
    images: makeImages(3, "Eduarda Pinto", ["Paisagem", "Praia"]),
  },
  {
    id: 58,
    category: "Ronaldo Duarte",
    tags: ["Noite", "Retrato"],
    images: makeImages(4, "Ronaldo Duarte", ["Noite", "Retrato"]),
  },
  {
    id: 59,
    category: "Silvana Freire",
    tags: ["Montanha", "Praia"],
    images: makeImages(2, "Silvana Freire", ["Montanha", "Praia"]),
  },
  {
    id: 60,
    category: "Ignes Costa",
    tags: ["Pôr do Sol", "Macro"],
    images: makeImages(3, "Ignes Costa", ["Pôr do Sol", "Macro"]),
  },
  {
    id: 61,
    category: "Tereza Moura",
    tags: ["Urbano", "Paisagem"],
    images: makeImages(4, "Tereza Moura", ["Urbano", "Paisagem"]),
  },
  {
    id: 62,
    category: "Matea Sérgio",
    tags: ["Retrato", "Montanha"],
    images: makeImages(2, "Matea Sérgio", ["Retrato", "Montanha"]),
  },
  {
    id: 63,
    category: "Norberto Lima",
    tags: ["Praia", "Noite"],
    images: makeImages(3, "Norberto Lima", ["Praia", "Noite"]),
  },
  {
    id: 64,
    category: "Clarice Goulart",
    tags: ["Macro", "Pôr do Sol"],
    images: makeImages(4, "Clarice Goulart", ["Macro", "Pôr do Sol"]),
  },
  {
    id: 65,
    category: "Vitor Menezes",
    tags: ["Praia", "Retrato"],
    images: makeImages(2, "Vitor Menezes", ["Praia", "Retrato"]),
  },
  {
    id: 66,
    category: "Luna Ferreira",
    tags: ["Paisagem", "Pôr do Sol"],
    images: makeImages(3, "Luna Ferreira", ["Paisagem", "Pôr do Sol"]),
  },
  {
    id: 67,
    category: "Cássio Teixeira",
    tags: ["Noite", "Macro"],
    images: makeImages(4, "Cássio Teixeira", ["Noite", "Macro"]),
  },
  {
    id: 68,
    category: "Paloma Nascimento",
    tags: ["Montanha", "Paisagem"],
    images: makeImages(2, "Paloma Nascimento", ["Montanha", "Paisagem"]),
  },
  {
    id: 69,
    category: "Renan Cardoso",
    tags: ["Urbano", "Retrato"],
    images: makeImages(3, "Renan Cardoso", ["Urbano", "Retrato"]),
  },
  {
    id: 70,
    category: "Sílvia Ramos",
    tags: ["Macro", "Praia"],
    images: makeImages(4, "Sílvia Ramos", ["Macro", "Praia"]),
  },
  {
    id: 71,
    category: "Otto Varela",
    tags: ["Pôr do Sol", "Montanha"],
    images: makeImages(2, "Otto Varela", ["Pôr do Sol", "Montanha"]),
  },
  {
    id: 72,
    category: "Aline Freitas",
    tags: ["Paisagem", "Macro"],
    images: makeImages(3, "Aline Freitas", ["Paisagem", "Macro"]),
  },
  {
    id: 73,
    category: "Geraldo Pinto",
    tags: ["Noite", "Urbano"],
    images: makeImages(4, "Geraldo Pinto", ["Noite", "Urbano"]),
  },
  {
    id: 74,
    category: "Emanuelle Braga",
    tags: ["Praia", "Pôr do Sol"],
    images: makeImages(2, "Emanuelle Braga", ["Praia", "Pôr do Sol"]),
  },
  {
    id: 75,
    category: "Ciro Albuquerque",
    tags: ["Montanha", "Retrato"],
    images: makeImages(3, "Ciro Albuquerque", ["Montanha", "Retrato"]),
  },
  {
    id: 76,
    category: "Helga Duarte",
    tags: ["Macro", "Paisagem"],
    images: makeImages(4, "Helga Duarte", ["Macro", "Paisagem"]),
  },
  {
    id: 77,
    category: "Igor Santos",
    tags: ["Urbano", "Noite"],
    images: makeImages(2, "Igor Santos", ["Urbano", "Noite"]),
  },
  {
    id: 78,
    category: "Larissa Braga",
    tags: ["Retrato", "Praia"],
    images: makeImages(3, "Larissa Braga", ["Retrato", "Praia"]),
  },
  {
    id: 79,
    category: "Diego Falcão",
    tags: ["Paisagem", "Montanha"],
    images: makeImages(4, "Diego Falcão", ["Paisagem", "Montanha"]),
  },
  {
    id: 80,
    category: "Natália Ribeiro",
    tags: ["Pôr do Sol", "Macro"],
    images: makeImages(2, "Natália Ribeiro", ["Pôr do Sol", "Macro"]),
  },
  {
    id: 81,
    category: "Pietro Lima",
    tags: ["Noite", "Retrato"],
    images: makeImages(3, "Pietro Lima", ["Noite", "Retrato"]),
  },
  {
    id: 82,
    category: "Sabrina Costa",
    tags: ["Praia", "Paisagem"],
    images: makeImages(4, "Sabrina Costa", ["Praia", "Paisagem"]),
  },
  {
    id: 83,
    category: "Vânia Moretti",
    tags: ["Urbano", "Macro"],
    images: makeImages(2, "Vânia Moretti", ["Urbano", "Macro"]),
  },
  {
    id: 84,
    category: "Ruan Menezes",
    tags: ["Montanha", "Pôr do Sol"],
    images: makeImages(3, "Ruan Menezes", ["Montanha", "Pôr do Sol"]),
  },
  // Grupos adicionados (ids 23–84)
];


// Componente Filter
const Filter = ({ selectedTags, onTagChange, allTags }) => {
  return (
    <div className="filter">
      <h3>Filtrar por Tema</h3>

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
  const countClass = `images-${group.images.length}`;
  const main = group.images[0];
  return (
    <div className={`polaroid ${countClass}`}>
      <div className="pin" aria-hidden="true">📌</div>
      <div className="photo" onClick={() => onImageClick(main.src)}>
        <img
          src={main.src}
          alt={main.alt}
          className="photo-img"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/img/img1.jpg'; }}
        />
        <div className="dust" aria-hidden="true"></div>
        <div className="scratches" aria-hidden="true"></div>
      </div>
      <div className="caption">{group.category} — {group.tags.join(', ')}</div>
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