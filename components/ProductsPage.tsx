import React from 'react';
import { ProductsPageProps } from '../types';
import { SectionTitle } from './SectionTitle';
import { SideProjectsSection } from './SideProjectsSection';
import { CallToAction } from './CallToAction';

export const ProductsPage: React.FC<ProductsPageProps> = ({ sideProjects, personalInfo, setCurrentPage }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <section id="my-products-section">
        <SectionTitle 
          title="My Products" 
          subtitle={personalInfo.productsPageIntro || "Explore a collection of my digital products and side projects."}
        />
        {/* Re-using SideProjectsSection as it's designed to list SideProject items */}
        {/* Pass title="" to suppress SideProjectsSection's own title */}
        <SideProjectsSection 
          sideProjects={sideProjects}
          title="" 
        />
      </section>
      
      <CallToAction email={personalInfo.email} setCurrentPage={setCurrentPage} />
    </div>
  );
};