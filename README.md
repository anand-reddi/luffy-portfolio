# Developer Portfolio

A personal portfolio website for a web developer, Anand Krishna, showcasing projects, skills, and providing a way to get in touch. Built with React, TypeScript, and Tailwind CSS.

## Live Demo

**(Placeholder: Add your live demo link here once deployed)**
[https://your-portfolio-url.com](https://your-portfolio-url.com)

## Features

*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Dark/Light Theme:** User-selectable theme preference with persistence via localStorage.
*   **Multiple Pages:**
    *   **Home:** Hero section with animated circular text around profile image, featured projects, side projects, call to action.
    *   **About:** Detailed information about the developer, skills, and side projects. Includes a GitHub contributions graph.
    *   **Projects:** A comprehensive list of all projects.
    *   **Project Details:** In-depth view of individual projects, including overview, problem/solution statements, and links.
    *   **Products:** A page dedicated to showcasing side projects/products.
    *   **Hire Me:** A contact form for project inquiries.
*   **Smooth Page Transitions & Animations:** Engaging animations for page loads and item appearances.
*   **Interactive Header Navigation:** With an active state indicator pill.
*   **Project Showcase:** Dedicated sections for main projects and side projects.
*   **GitHub Contributions Graph:** Dynamically fetches and displays the user's GitHub contribution graph on the About page.
*   **Contact Form ("Hire Me" Page):**
    *   Client-side validation for name, email, and message fields.
    *   Integrated with [Web3Forms](https://web3forms.com/) to send emails without a backend.
    *   **Requires setup:** You must add your personal Web3Forms Access Key to enable submissions.
*   **Social Media Links:** Easy access to social profiles in the footer.
*   **Accessibility:** ARIA attributes used for better accessibility.

## Tech Stack

*   **Frontend:**
    *   React 19
    *   TypeScript
*   **Styling:**
    *   Tailwind CSS (configured directly in `index.html`)
    *   Custom CSS for global styles, transitions, and animations
*   **Icons:**
    *   `react-icons` (specifically Feather Icons)
*   **Module Loading:**
    *   ESM via `importmap` in `index.html` (fetching React, ReactDOM, react-icons from esm.sh)
*   **External Services:**
    *   `ghchart.rshah.org` for embedding the GitHub contributions graph.
    *   `web3forms.com` for handling contact form submissions.

## File Structure

```
.
├── components/                 # Reusable React components
│   ├── icons/                  # Icon definitions (index.ts)
│   ├── AboutPage.tsx
│   ├── CallToAction.tsx
│   ├── CircularText.tsx        # New component for animated text around image
│   ├── Footer.tsx
│   ├── GitHubContributionsGraph.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HireMePage.tsx
│   ├── ProductsPage.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectDetailsPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ProjectsSection.tsx
│   ├── SectionTitle.tsx
│   ├── SideProjectCard.tsx
│   └── SideProjectsSection.tsx
├── App.tsx                     # Main application component with routing logic
├── constants.ts                # Data for personal info, projects, social links, etc.
├── index.html                  # Main HTML entry point, Tailwind CSS config, global styles
├── index.tsx                   # React application bootstrap
├── metadata.json               # Project metadata (name, description)
├── README.md                   # This file
└── types.ts                    # TypeScript type definitions
```

## Getting Started

### Prerequisites

*   A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
*   A code editor if you plan to modify the code (e.g., VS Code).
*   (Optional) A simple HTTP server or a browser extension for live reloading during development (e.g., Live Server for VS Code).

### Setup

1.  **Clone the repository (or download the files):**
    If this were a Git repository:
    ```bash
    git clone <repository-url>
    cd developer-portfolio
    ```
    Otherwise, ensure you have all the project files in a local directory.

2.  **API Key for Gemini (Future Integration):**
    While the current version does not use the Gemini API, if you plan to integrate it (e.g., for a chatbot, content generation):
    *   Obtain an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    *   The application's Gemini SDK integration (if added) will expect the API key to be available as an environment variable named `process.env.API_KEY`.
    *   **Important:** For this client-side application, directly embedding `process.env.API_KEY` is not secure for production. If you were to use Gemini, you would typically have a backend service that uses the API key, and the frontend would make requests to your backend. For local development or a controlled environment where the app is not publicly hosted with the key, you might simulate `process.env` or hardcode it temporarily *for testing only*. **Never commit your API key to a public repository.**

### Running Locally

1.  **Directly in the Browser:**
    Navigate to the project directory and open the `index.html` file in your web browser.
    *Example:* `file:///path/to/your/project/index.html`

2.  **Using a Live Server (Recommended for Development):**
    If you have a live server extension in your code editor (like "Live Server" in VS Code):
    *   Right-click on `index.html` in your editor.
    *   Select "Open with Live Server" (or a similar option).
    This will typically open the application at `http://localhost:5500` (or another port) and provide auto-reloading when you save changes.

    Alternatively, you can use a simple command-line HTTP server if you have Node.js installed:
    ```bash
    npx serve .
    ```
    Then open the provided URL (usually `http://localhost:3000`) in your browser.

## Customization

### 1. Personal Information & Content

All personal details, project descriptions, social media links, and other textual content are primarily managed in the `constants.ts` file.

*   **`PERSONAL_INFO`:** Update your name, title, bio, image URLs, email, about me sections, GitHub username, etc.
*   **`NAV_ITEMS_MAIN`:** Modify navigation links for the header.
*   **`PROJECTS`:** Add, remove, or edit your main projects. Each project object has fields for ID, name, description, technologies, images, links, client info, problem/solution statements, etc.
    *   **Project Icons:** Use `iconComponent` with an imported icon from `./components/icons`. `iconBgColor` can be a Tailwind CSS background color class.
*   **`SIDE_PROJECTS`:** Manage your side projects similarly.
*   **`SOCIAL_LINKS`:** Update your social media profile URLs and choose appropriate icons.

### 2. Theme and Styling

*   **Colors:**
    The color palette for both light and dark themes is defined within the `<script>` tag in `index.html` under `tailwind.config`.
    ```javascript
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            // Light theme colors
            'background': '#FFFFFF',
            // ... other light theme colors

            // Dark theme colors
            'dark-background': '#1C1C1E',
            // ... other dark theme colors
          }
        }
      }
    }
    ```
    Modify these hexadecimal values to change the application's appearance. Tailwind CSS utility classes are used throughout the components for styling.
*   **Global Styles & Animations:**
    Custom global styles, CSS animations (`fadeInUp`, `fadeIn`, `spin-slow`), and transition utilities are defined in the `<style>` tag or `tailwind.config` in `index.html`.

### 3. Icons

Icons are sourced from `react-icons/fi` (Feather Icons) and re-exported from `components/icons/index.ts`.
To change or add icons:
1.  Find the desired icon from the [Feather Icons set](https://feathericons.com/) available in `react-icons`.
2.  Import it in `components/icons/index.ts` and export it with a convenient name:
    ```typescript
    // Example: adding a new icon
    export { FiNewIcon as NewCustomIcon } from 'react-icons/fi';
    ```
3.  Use the `NewCustomIcon` in your components.

### 4. Configure the "Hire Me" Form

The contact form will not work until you configure it with your own Web3Forms Access Key.

1.  **Get your Access Key:** Go to [web3forms.com](https://web3forms.com), enter your email address, and you will receive an Access Key for free.
2.  **Update the `constants.ts` file:** Open the `constants.ts` file in the project.
3.  **Replace the placeholder key:** Find the following line at the top of the file and replace `"YOUR_WEB3FORMS_ACCESS_KEY_HERE"` with the key you received via email.
    ```typescript
    // In constants.ts
    export const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    ```

Once you have updated the key, the "Hire Me" form will be fully functional and will send submissions to the email address you registered with Web3Forms.

## Project Structure Deep Dive

*   **`index.html`**: The main entry point. It includes:
    *   Initial theme setup script (reads from `localStorage`).
    *   Tailwind CSS CDN and configuration (including custom animations like `spin-slow`).
    *   Global CSS styles and animations.
    *   `importmap` for managing JavaScript module imports (React, ReactDOM, react-icons from esm.sh).
    *   The root `<div>` where the React app is mounted.
*   **`index.tsx`**: Initializes and mounts the React application into the `#root` div defined in `index.html`.
*   **`App.tsx`**:
    *   Manages the current page state (`currentPage`, `selectedProjectId`).
    *   Handles theme state (`theme`) and toggling (`toggleTheme`), synchronizing with `localStorage` and the `<html>` element's class.
    *   Implements page transition logic (`isTransitioning`).
    *   Contains the main routing logic (`renderPageContent`) to display different page components based on `currentPage`.
    *   Renders the `Header`, main content area, and `Footer`.
*   **`components/`**:
    *   Each `.tsx` file typically represents a distinct UI component (e.g., `Header.tsx`, `ProjectCard.tsx`).
    *   `CircularText.tsx` is a new component for rendering animated text in a circle, used in `Hero.tsx`.
    *   Components are designed to be reusable and often receive data via props.
    *   `components/icons/index.ts` centralizes icon exports for consistency.
*   **`constants.ts`**:
    *   Acts as a mock database or content source.
    *   Defines structured data for personal information, projects, side projects, navigation items, and social links.
    *   This is the primary file to edit when updating portfolio content.
*   **`types.ts`**:
    *   Contains TypeScript interfaces for all major data structures (e.g., `Project`, `PersonalInfo`, `NavItem`) and component prop types.
    *   Ensures type safety and improves code readability.
*   **`metadata.json`**:
    *   Basic metadata about the application, like its name and description.
    *   `requestFramePermissions` can be used to request browser permissions (e.g., camera, microphone) if needed in the future.

## Acknowledgements

This portfolio design is inspired by the "Subtle Folio" Framer template by Nur Praditya / MorvaLabs.
The footer reflects this inspiration.

---

This README should help you and others understand and work with your Developer Portfolio project.
Remember to replace placeholders like the live demo URL once you deploy the site.
