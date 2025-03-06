/**
 * Centralized asset path definitions
 * This makes it easier to manage and update image paths
 */

// Import the image directly for development
import atulImageSrc from '../assets/img/atul.jpg';

export const IMAGES = {
  // Profile images - use imported image or fallback to public path
  profile: atulImageSrc || '/images/profile/atul.jpg',

  // Project images
  projects: {
    financialDashboard: '/images/projects/project1.jpg',
    ecommerce: '/images/projects/project2.jpg',
    cms: '/images/projects/project3.jpg',
    timer: '/images/projects/project4.jpg',
  },
  
  // Icons and other assets
  icons: {
    // Add icons here if needed
  }
};

export default IMAGES;
