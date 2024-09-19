"use client";
import Image from "next/image";
import { useState } from "react";

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
    {
      id: 2,
      title: "Spectacle 2",
      date: "25 Septembre 2024",
      location: "Salle ABC",
      imageUrl: "/img/Unknown-2.jpg",
      description: "Un spectacle captivant avec une performance incroyable.",
    },
    {
      id: 2,
      title: "Spectacle 2",
      date: "25 Septembre 2024",
      location: "Salle ABC",
      imageUrl: "/img/Unknown-2.jpg",
      description: "Un spectacle captivant avec une performance incroyable.",
    },
    {
      id: 2,
      title: "Spectacle 2",
      date: "25 Septembre 2024",
      location: "Salle ABC",
      imageUrl: "/img/Unknown-2.jpg",
      description: "Un spectacle captivant avec une performance incroyable.",
    },
    {
      id: 2,
      title: "Spectacle 2",
      date: "25 Septembre 2024",
      location: "Salle ABC",
      imageUrl: "/img/Unknown-2.jpg",
      description: "Un spectacle captivant avec une performance incroyable.",
    },
  ];

  const videoData: VideoType[] = [
    { id: 1, title: "Vidéo 1", url: "https://www.youtube.com/embed/wrFsapf0Enk" },
    { id: 2, title: "Spectacle 2", url: "https://www.youtube.com/embed/K1_LQEuw0L4" },
    { id: 3, title: "Spectacle 3", url: "https://www.youtube.com/embed/K1_LQEuw0L4" },
  ];

  return (
    <div className="min-h-screen bg-zinc-600 text-white p-4">
      {/* Header */}
      <header className="bg-zinc-800 text-white py-8 text-center rounded-lg mb-8">
        <h1 className="text-6xl font-bold">INDÉSCIE</h1>
        <p className="mt-4 text-xl">
          Promouvoir la culture à travers spectacles, photos, vidéos et événements
        </p>
      </header>

      {/* Section des Spectacles */}
      <section className="py-12 px-8 bg-zinc-800 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Prochains Spectacles</h2>
        <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
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
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">{spectacle.title}</h3>
              <p className="mt-2 text-white">Date: {spectacle.date}</p>
              <p className="mt-1 text-white">Lieu: {spectacle.location}</p>
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

      {/* Galerie de Photos */}
      <section className="py-12 px-8 bg-zinc-800 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Galerie Photos</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4">
          <Image
            src="/img/Unknown-2.jpg"
            alt="Photo 1"
            width={400}
            height={300}
            className="rounded-lg shadow-md flex-shrink-0 w-[400px]"
          />
          <Image
            src="/img/Unknown-2.jpg"
            alt="Photo 2"
            width={400}
            height={300}
            className="rounded-lg shadow-md flex-shrink-0 w-[400px]"
          />
          <Image
            src="/img/Unknown-2.jpg"
            alt="Photo 2"
            width={400}
            height={300}
            className="rounded-lg shadow-md flex-shrink-0 w-[400px]"
          />
          <Image
            src="/img/Unknown-2.jpg"
            alt="Photo 2"
            width={400}
            height={300}
            className="rounded-lg shadow-md flex-shrink-0 w-[400px]"
          />
          {/* Ajoute plus de photos ici */}
        </div>
      </section>

      {/* Section Vidéos avec le composant VideoList */}
      <section className="py-10 px-8 bg-zinc-800 rounded-lg mb-8">
        <VideoList videos={videoData} emptyHeading="Aucune vidéo disponible pour le moment." />
      </section>

      {/* Footer */}
      <footer className="bg-zinc-600 text-white py-8 text-center rounded-lg">
        <p>© 2024 Indéscie. Tous droits réservés.</p>
        <p className="mt-2">Suivez-nous sur les réseaux sociaux</p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}
