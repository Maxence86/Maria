"use client";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Désactiver l'ajout automatique du CSS par FontAwesome
config.autoAddCss = false;

// Définir un type pour les vidéos
type VideoType = {
  id: number;
  title: string;
  url: string;
};

// Définir un type pour les spectacles
type SpectacleType = {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
};

// Définir un type pour les membres de la troupe
type TroupeMemberType = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
};

// Composant Video pour afficher chaque vidéo individuellement
function Video({ video }: { video: VideoType }) {
  return (
    <div className="w-[300px] flex-shrink-0">
      <iframe
        src={video.url}
        title={video.title}
        className="w-full h-[200px] rounded-lg shadow-lg"
        allowFullScreen
      ></iframe>
      <h3 className="mt-2 text-lg font-semibold text-white text-center">
        {video.title}
      </h3>
    </div>
  );
}

// Composant VideoList pour afficher la liste des vidéos
function VideoList({
  videos,
  emptyHeading,
}: {
  videos: VideoType[];
  emptyHeading: string;
}) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "Vidéos" : "Vidéo";
    heading = count + " " + noun;
  }
  return (
    <section>
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">
        {heading}
      </h2>
      {count > 0 ? (
        <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
          {videos.map((video) => (
            <Video key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300">{emptyHeading}</p>
      )}
    </section>
  );
}

// Composant pour afficher le détail d'un spectacle
function SpectacleDetail({ spectacle, onClose }: { spectacle: SpectacleType; onClose: () => void }) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div className="bg-zinc-600 p-6 rounded-lg shadow-lg w-[90%] sm:w-[600px] md:w-[700px] lg:w-[800px] relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          X
        </button>
        <div className="relative w-full h-0 pb-[56.25%] mb-4"> {/* 16:9 aspect ratio */}
          <Image
            src={spectacle.imageUrl}
            alt={spectacle.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">{spectacle.title}</h3>
        <p className="text-white mb-4">{spectacle.description}</p>
        <p className="text-white">Date : {spectacle.date}</p>
        <p className="text-white">Lieu : {spectacle.location}</p>
      </div>
    </div>
  );
}

// Composant pour afficher les membres de la troupe
function TroupeMember({ member }: { member: TroupeMemberType }) {
  return (
    <div className="flex-shrink-0 w-[300px] border rounded-lg shadow-lg bg-zinc-600 p-6">
      <Image
        src={member.imageUrl}
        alt={member.name}
        width={400}
        height={250}
        className="rounded-lg"
      />
      <h3 className="mt-4 text-2xl font-semibold text-gray-800">{member.name}</h3>
      <p className="mt-2 text-white">{member.description}</p>
    </div>
  );
}

// Page d'accueil avec les sections mises à jour
export default function Home() {
  const [selectedSpectacle, setSelectedSpectacle] = useState<SpectacleType | null>(null);

  const spectacles: SpectacleType[] = [
    {
      id: 1,
      title: "Spectacle 1",
      date: "20 Septembre 2024",
      location: "Théâtre XYZ",
      imageUrl: "/img/Unknown-2.jpg",
      description: "Un magnifique spectacle mettant en vedette de célèbres acteurs.",
    },
  ];

  const troupeMembers: TroupeMemberType[] = [
    {
      id: 1,
      name: "Artiste 1",
      imageUrl: "/img/llama1.jpg",
      description: "Un artiste talentueux avec de nombreuses années d'expérience.",
    },
    {
      id: 2,
      name: "Artiste 2",
      imageUrl: "/img/llama2.jpg",
      description: "Un artiste renommé dans le monde du spectacle.",
    },
    {
      id: 2,
      name: "Artiste 3",
      imageUrl: "/img/llama.jpg",
      description: "Un artiste renommé dans le monde du spectacle.",
    },
    {
      id: 2,
      name: "Artiste 4",
      imageUrl: "/img/llama3.jpg",
      description: "Un artiste renommé dans le monde du spectacle.",
    },
    {
      id: 2,
      name: "Artiste 5",
      imageUrl: "/img/llama4.jpg",
      description: "Un artiste renommé dans le monde du spectacle.",
    },
    {
      id: 2,
      name: "Artiste 6",
      imageUrl: "/img/artiste2.jpg",
      description: "Un artiste renommé dans le monde du spectacle.",
    },

   //ajoute des artistes ici suis le schema des autres et oublie pas les virgules

  ];

   //pour les liens youtube le schema "https://www.youtube.com/embed/" ne dois pas changer
   //regarde l'url de la video que tu veux mettre et copie/colle ce qui suis après "watch?v=" 
   //suis le schema comme ci dessous sans oublier les virgules 

  const videoData: VideoType[] = [
    { id: 1, title: "Vidéo 1", url: "https://www.youtube.com/embed/wrFsapf0Enk" },
    { id: 2, title: "Spectacle 2", url: "https://www.youtube.com/embed/JHib5QvAADc" },
    { id: 3, title: "Spectacle 3", url: "https://www.youtube.com/embed/K1_LQEuw0L4" },
  ];

  return (
    <div className="min-h-screen bg-zinc-600 text-white p-4">
      {/* Header */}
      <header className="bg-zinc-800 text-white py-8 text-center rounded-lg mb-8">
        {/* <h1 className="text-6xl font-bold">INDÉSCIE</h1> */}
        <Image
          src="/img/indecis.png"
          alt="Photo 1"
          width={400}
          height={300}
          className="rounded-lg shadow-md mx-auto"
        />
      </header>

      {/* Section des Spectacles */}
      <section className="py-12 px-8 bg-zinc-800 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Créations</h2>
        <div className="flex justify-center gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
          {spectacles.map((spectacle) => (
            <div
              key={spectacle.id}
              className="flex-shrink-0 w-[300px] border rounded-lg shadow-lg bg-zinc-600 p-6"
            >
              <Image
                src={spectacle.imageUrl}
                alt={spectacle.title}
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold text-gray-800 text-center">{spectacle.title}</h3> {/* Centrage du texte */}
              <p className="mt-2 text-white text-center">Date: {spectacle.date}</p>
              <p className="mt-1 text-white text-center">Lieu: {spectacle.location}</p>
              <button
                onClick={() => setSelectedSpectacle(spectacle)}
                className="mt-4 inline-block text-white hover:underline"
              >
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Afficher le détail du spectacle si sélectionné */}
      {selectedSpectacle && (
        <SpectacleDetail spectacle={selectedSpectacle} onClose={() => setSelectedSpectacle(null)} />
      )}

      {/* Section Troupe */}
      <section className="py-12 px-8 bg-zinc-800 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Troupe</h2>
        <div className="flex justify-center gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
          {troupeMembers.map((member) => (
            <TroupeMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Section des vidéos */}
      <section className="py-12 px-8 bg-zinc-800 rounded-lg mb-8">
        <VideoList videos={videoData} emptyHeading="Aucune vidéo disponible" />
      </section>

      {/* Section des icônes réseaux sociaux/footer */}
      <footer className="bg-zinc-800 text-white py-4 text-center rounded-lg mt-6">
      <p className="mt-1 text-white text-center mb-6">Suivez nous sur les reseaux</p>

        <div className="flex justify-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </footer>
    </div>
  );
}
