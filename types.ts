import React from "react";

export interface IconProps {
  className?: string;
}

export interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<IconProps>;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  email: string;
  /** Text spinning around the profile image on the home hero. Falls back to name if omitted. */
  circularText?: string;
  /** Letter spacing for the circular text (CSS value, e.g. "0.9em", "4px"). */
  circularTextLetterSpacing?: string;
  /** English word that swaps with Japanese on home / about title / footer */
  animatedNameEnglish?: string;
  /** Japanese (or alt) text shown in the name swap animation */
  animatedNameJapanese?: string;
  /** First letter shown in the opening intro animation */
  introLetter1?: string;
  /** Second letter shown in the opening intro animation */
  introLetter2?: string;
  /** Tagline shown at the bottom of the opening intro animation */
  introTagline?: string;
  aboutMeIntro: string;
  aboutMeDetailed: string[];
  aboutPageImageUrl: string;
  projectsPageIntro: string;
  sideProjectsPageIntro: string;
  productsPageIntro?: string; // Optional: Intro for the new Products page
  hireMePageTitle: string; // For Hire Me page
  hireMePageSubtitle: string; // For Hire Me page
  githubUsername?: string; // Added for GitHub contributions
}

export interface ProjectStatement {
  title?: string;
  description: string;
  images?: string[];
}

export interface Project {
  id: string;
  iconChar?: string;
  iconBgColor?: string;
  iconComponent?: React.ComponentType<IconProps>;
  name: string;
  description: string; // Short description for card
  technologies: string[];
  longDescription?: string; // Could be deprecated or merged into overview
  images?: string[]; // Main project images for carousel/gallery
  liveLink?: string;
  repoLink?: string;
  cardImageUrl?: string; // New field for card image
  logoImageUrl?: string; // New field for logo image

  // New fields for Project Details Page
  client?: string;
  company?: string;
  projectType?: string;
  year?: string;
  tagline?: string; // Engaging sentence under the main title on detail page
  overview?: string; // Main introductory paragraph on detail page
  problemStatement?: ProjectStatement;
  solutionStatement?: ProjectStatement;
}

export interface SideProject {
  id: string;
  iconChar?: string;
  iconBgColor?: string;
  iconComponent?: React.ComponentType<IconProps>;
  name: string;
  tag: string;
  link?: string;
  linkText?: string;
  description?: string;
  keyFeatures?: string[];
  cardImageUrl?: string; // New field for card image

  // Optional fields for a details page (like main projects)
  year?: string;
  projectType?: string;
  tagline?: string;
  overview?: string;
  technologies?: string[];
  images?: string[];
  playStoreStats?: {
    downloads: string;
    rating: string;
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<IconProps>;
}

export interface Skill {
  name: string;
  backgroundColor: string; // e.g., 'bg-blue-500'
  textColor: string; // e.g., 'text-white'
  icon?: React.ComponentType<IconProps>;
}

export interface HeroProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  email: string;
  instagramUrl: string;
  circularText?: string;
  circularTextLetterSpacing?: string;
  animatedNameEnglish?: string;
  animatedNameJapanese?: string;
  setCurrentPage: (pageId: string, projectId?: string) => void;
}

export interface CallToActionProps {
  email: string;
  setCurrentPage: (pageId: string, projectId?: string) => void;
}

export interface AboutPageProps {
  personalInfo: PersonalInfo;
  sideProjects: SideProject[];
  email: string;
  setCurrentPage: (pageId: string, projectId?: string) => void;
  theme: "light" | "dark"; // Updated theme prop type
  skills: Skill[]; // Added skills prop
}

export interface ProjectsPageProps {
  projects: Project[];
  sideProjects: SideProject[];
  email: string;
  setCurrentPage: (pageId: string, projectId?: string) => void;
}

export interface ProductsPageProps {
  // New Props for Products Page
  sideProjects: SideProject[];
  personalInfo: Pick<PersonalInfo, "email" | "productsPageIntro">; // Only need email and intro
  setCurrentPage: (pageId: string, projectId?: string) => void;
}

export interface HireMePageProps {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  setCurrentPage: (pageId: string) => void; // Added setCurrentPage
}

export interface ProjectsSectionProps {
  projects: Project[];
  onViewAllClick?: () => void;
  setCurrentPage: (pageId: string, projectId?: string) => void; // Added for project selection
  title?: string; // Optional title for reusability
  maxItems?: number; // Optional max items to display
}

export interface SideProjectsSectionProps {
  sideProjects: SideProject[];
  title?: string;
  subtitle?: string;
  onViewAllClick?: () => void; // Added for "View All" functionality
  viewAllText?: string; // Added for custom "View All" text
}

export interface ProjectDetailsPageProps {
  project: Project;
  otherProjects: Project[];
  setCurrentPage: (pageId: string, projectId?: string) => void;
  email: string; // For CTA
}
