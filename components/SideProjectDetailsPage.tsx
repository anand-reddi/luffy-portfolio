import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { SIDE_PROJECTS } from "../constants";
import { CallToAction } from "./CallToAction";
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "./icons";
import { PlayStoreMetrics } from "./PlayStoreMetrics";

export const SideProjectDetailsPage: React.FC<{
  setCurrentPage: (pageId: string, projectId?: string) => void;
  email: string;
}> = ({ setCurrentPage, email }) => {
  const { sideProjectId } = useParams<{ sideProjectId: string }>();

  // Back-compat if we ever rename routes
  if (!sideProjectId) {
    return <Navigate to="/products" replace />;
  }

  const sideProject = SIDE_PROJECTS.find((p) => p.id === sideProjectId);

  if (!sideProject) {
    return (
      <div className="text-center py-10 animated-item anim-fadeInUp">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
          The product you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => setCurrentPage("products")}
          className="px-4 py-2 bg-button-primary-bg text-button-primary-text rounded-lg hover:bg-button-primary-hover"
        >
          View All Products
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <div className="animated-item anim-fadeInUp">
        <button
          onClick={() => setCurrentPage("products")}
          className="inline-flex items-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </button>
      </div>

      <div className="text-center animated-item anim-fadeInUp anim-delay-100">
        <div className="flex justify-center mb-6">
          {sideProject.cardImageUrl ? (
            <img
              src={sideProject.cardImageUrl}
              alt={`${sideProject.name} logo`}
              className="w-16 h-16 rounded-full object-cover border-4 border-card dark:border-dark-card shadow-lg bg-white"
            />
          ) : (
            <div
              className={`p-3 rounded-full ${
                sideProject.iconBgColor || "bg-gray-600"
              }`}
            />
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {sideProject.tag && (
            <span className="px-3 py-1 bg-card dark:bg-dark-card text-text-secondary dark:text-dark-text-secondary rounded-full text-sm">
              {sideProject.tag}
            </span>
          )}
          {sideProject.year && (
            <span className="px-3 py-1 bg-card dark:bg-dark-card text-text-secondary dark:text-dark-text-secondary rounded-full text-sm">
              {sideProject.year}
            </span>
          )}
          {sideProject.projectType && (
            <span className="px-3 py-1 bg-card dark:bg-dark-card text-text-secondary dark:text-dark-text-secondary rounded-full text-sm">
              {sideProject.projectType}
            </span>
          )}
        </div>

        <h1 className="text-4xl font-bold mb-4">{sideProject.name}</h1>
        {sideProject.tagline && (
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-6 max-w-3xl mx-auto">
            {sideProject.tagline}
          </p>
        )}

        {sideProject.playStoreStats && (
          <PlayStoreMetrics
            downloads={sideProject.playStoreStats.downloads}
            rating={sideProject.playStoreStats.rating}
            variant="featured"
            className="mb-8"
          />
        )}

        {(sideProject.link || sideProject.description) && (
          <div className="max-w-3xl mx-auto space-y-6">
            {sideProject.description && (
              <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {sideProject.description}
              </p>
            )}

            {sideProject.link && (
              <a
                href={sideProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-green/80 transition-colors group"
              >
                {sideProject.linkText || "Open"}
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
        )}
      </div>

      {sideProject.technologies && sideProject.technologies.length > 0 && (
        <div className="space-y-4 animated-item anim-fadeInUp anim-delay-200">
          <h2 className="text-2xl font-bold text-center">Tech</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sideProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-card dark:bg-dark-card text-text-secondary dark:text-dark-text-secondary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {sideProject.overview && (
        <div className="space-y-4 animated-item anim-fadeInUp anim-delay-300">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {sideProject.overview}
          </p>
        </div>
      )}

      {sideProject.keyFeatures && sideProject.keyFeatures.length > 0 && (
        <div className="space-y-4 animated-item anim-fadeInUp anim-delay-350">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {sideProject.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {sideProject.images && sideProject.images.length > 0 && (
        <div className="space-y-6 animated-item anim-fadeInUp anim-delay-400">
          <h2 className="text-2xl font-bold text-center">Screenshots</h2>
          <div className="grid gap-6">
            {sideProject.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`${sideProject.name} screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="animated-item anim-fadeInUp anim-delay-500">
        <CallToAction email={email} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

