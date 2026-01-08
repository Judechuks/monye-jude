import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Attachment, Github, ChevronLeft, ChevronRight, CloseIcon } from "../assets/icons/svgIcons";
import { useGlobalContext } from "../context/globalContext";
import { urlFor } from "../client";
// import { projects } from "../constants";

const ProjectInfo = () => {
  const { id } = useParams();

  const { projects } = useGlobalContext();
  const [selectedProject, setSelectedProject] = useState({});

  useEffect(() => {
    setSelectedProject(projects.find((project) => project.id === parseInt(id)));
  }, [projects, id]);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = (e) => {
    e?.stopPropagation(); // Prevent closing if bubbling
    setCurrentImageIndex((prev) =>
      prev === (selectedProject?.photoGallery?.length || 0) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? (selectedProject?.photoGallery?.length || 0) - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, selectedProject]);

  return (
    <section className="pt-20 pb-10 max-w-sm sm:max-w-2xl mx-auto">
      <h1 className="section-title">{selectedProject?.title}</h1>
      <div className="section-underline"></div>
      {/* Project Links */}
      <div className="flex justify-center gap-2 font-semibold">
        <a
          href={selectedProject?.link}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 border rounded-md p-2 hover:bg-stone-500"
        >
          <div className="size-6">{<Attachment />}</div>
          <p>View Live</p>
        </a>
        <a
          href={selectedProject?.githubLink}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 border rounded-md p-2 hover:bg-stone-500"
        >
          <div className="size-6">{<Github />}</div>
          <p>Github</p>
        </a>
      </div>

      {/* Skills */}
      <div className="flex my-6 gap-3 flex-wrap capitalize">
        {selectedProject?.skills?.map((skill, index) => (
          <p
            className="flex gap-2 items-center text-center px-2 py-1 border border-slate-gray rounded-lg hover:bg-slate-gray"
            key={index}
          >
            <img
              src={urlFor(selectedProject?.skillIcons[index])}
              alt={skill}
              className="w-5"
            />
            {skill}
          </p>
        ))}
      </div>

      {/* Photo Gallery */}
      <div className="photo-gallery mx-auto grid gap-3 grid-cols-1 sm:grid-cols-2">
        {selectedProject?.photoGallery?.slice(0, 4).map((photo, index) => {
          const remainingImages = (selectedProject?.photoGallery?.length || 0) - 4;
          const isLastItem = index === 3 && remainingImages > 0;

          return (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group aspect-video"
              onClick={() => openLightbox(index)}
            >
              <img
                src={urlFor(photo)}
                alt={`project thumbnail ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {isLastItem && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-colors group-hover:bg-black/50">
                  <span className="text-white text-3xl font-bold">
                    +{remainingImages}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Overlay */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-50 w-10 h-10"
            onClick={closeLightbox}
          >
            <CloseIcon />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
            onClick={prevImage}
          >
            <ChevronLeft />
          </button>

          {/* Main Image */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject?.photoGallery && (
              <img
                src={urlFor(selectedProject.photoGallery[currentImageIndex])}
                alt={`project gallery ${currentImageIndex + 1}`}
                className="max-h-full max-w-full object-contain rounded-md shadow-2xl user-select-none"
              />
            )}
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
            onClick={nextImage}
          >
            <ChevronRight />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {selectedProject?.photoGallery?.length}
          </div>
        </div>
      )}

      {/* Project Description */}
      <div className="project-description mt-6">
        <h2 className="font-semibold text-xl mb-3">Description</h2>
        <ReactMarkdown>{selectedProject?.description}</ReactMarkdown>
      </div>
      <Link
        to="/#projects"
        className="block w-fit mt-5 px-4 py-2 font-semibold border-2 border-blue-800 rounded bg-blue-800 text-white hover:bg-transparent hover:text-slate-gray dark:hover:text-white duration-300"
      >
        Go Back
      </Link>
    </section>
  );
};
export default ProjectInfo;
