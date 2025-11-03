// Import project images
import credcoreImg1 from "figma:asset/134c3db483b4b26b18d1476639bb29eed1406f6e.png";
import credcoreImg2 from "figma:asset/9f9d823d9cb3790fd8d4d58478235c3f7a1e4355.png";
import credcoreImg3 from "figma:asset/975174df45461a4ebd49039bd564317f1bdd66f8.png";

export interface ProjectImage {
  src: string;
  alt: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string; // e.g., "center", "top left", "50% 50%"
  scale?: number; // Scale multiplier (e.g., 1.5 = 150%, 0.8 = 80%)
  translateX?: string; // Horizontal offset (e.g., "10px", "5%", "-20px")
  translateY?: string; // Vertical offset (e.g., "10px", "5%", "-20px")
}

export interface Project {
  id: string;
  title: string;
  year: string;
  categories: string[];
  shortDescription?: string;
  longDescription: string;
  images: {
    card: [ProjectImage, ProjectImage, ProjectImage];
    detail: [ProjectImage, ProjectImage, ProjectImage];
  };
}

export const projects: Project[] = [
  {
    id: "credcore",
    title: "CredCore",
    year: "2023-2025",
    categories: ["UX/UI Design", "Design Systems", "Framer"],
    longDescription: "CredCore is an AI-powered fintech platform transforming how enterprises manage complex debt agreements.\n\nThrough iterative exploration, I designed and tested new ways to organize and visualize intricate financial data. In parallel, I built and maintained the platform's marketing website in Framer, ensuring design fidelity and high performance. I also created a unified design system that integrates shadcn/ui, bridging design and engineering under a refreshed brand while establishing consistent patterns across all product touchpoints.",
    images: {
      card: [
        {
          src: credcoreImg2,
          alt: "CredCore Project Screenshot 2",
          objectFit: "cover",
          objectPosition: "center"
        },
        {
          src: credcoreImg1,
          alt: "CredCore Project Screenshot 1",
          objectFit: "cover",
          objectPosition: "center"
        },
        {
          src: credcoreImg3,
          alt: "CredCore Project Screenshot 3",
          objectFit: "cover",
          objectPosition: "left top",
          scale: 2,
          translateX: "-6%",
          translateY: "0"
        }
      ],
      detail: [
        {
          src: credcoreImg1,
          alt: "CredCore Detailed View 1",
          objectFit: "none",
          objectPosition: "center"
        },
        {
          src: credcoreImg2,
          alt: "CredCore Detailed View 2",
          objectFit: "none",
          objectPosition: "center"
        },
        {
          src: credcoreImg3,
          alt: "CredCore Detailed View 3",
          objectFit: "none",
          objectPosition: "center"
        }
      ]
    }
  },
  {
    id: "mobility-platform",
    title: "Urban Mobility",
    year: "2022-2023",
    categories: ["Product Design", "Mobile App", "User Research"],
    longDescription: "Urban Mobility is a comprehensive transportation platform that connects users with various mobility options in urban environments. I led the design of the mobile application, focusing on creating an intuitive booking experience and real-time tracking system. The project involved extensive user research, prototyping, and usability testing to ensure the solution met diverse user needs across different demographics and use cases.",
    images: {
      card: [
        {
          src: credcoreImg1,
          alt: "Urban Mobility Project Screenshot 1",
          objectFit: "cover",
          objectPosition: "center"
        },
        {
          src: credcoreImg2,
          alt: "Urban Mobility Project Screenshot 2",
          objectFit: "cover",
          objectPosition: "center"
        },
        {
          src: credcoreImg3,
          alt: "Urban Mobility Project Screenshot 3",
          objectFit: "cover",
          objectPosition: "center"
        }
      ],
      detail: [
        {
          src: credcoreImg1,
          alt: "Urban Mobility Detailed View 1",
          objectFit: "none",
          objectPosition: "center"
        },
        {
          src: credcoreImg2,
          alt: "Urban Mobility Detailed View 2",
          objectFit: "none",
          objectPosition: "center"
        },
        {
          src: credcoreImg3,
          alt: "Urban Mobility Detailed View 3",
          objectFit: "none",
          objectPosition: "center"
        }
      ]
    }
  },
  {
    id: "healthtech-dashboard",
    title: "HealthSync",
    year: "2021-2022",
    categories: ["Dashboard Design", "Data Visualization", "Web App"],
    longDescription: "HealthSync is a digital health platform designed for medical professionals to monitor patient vitals and health metrics in real-time. I designed the dashboard interface with a focus on data clarity and quick decision-making. The project required balancing complex medical data with an interface that could be used efficiently in high-pressure clinical environments. I created custom data visualizations and established design patterns that prioritize critical information.",
    images: {
      card: [
        {
          src: credcoreImg3,
          alt: "HealthSync Project Screenshot 1",
          objectFit: "cover",
          objectPosition: "center"
        },
        {
          src: credcoreImg1,
          alt: "HealthSync Project Screenshot 2",
          objectFit: "cover",
          objectPosition: "center"
        },
        {
          src: credcoreImg2,
          alt: "HealthSync Project Screenshot 3",
          objectFit: "cover",
          objectPosition: "center"
        }
      ],
      detail: [
        {
          src: credcoreImg3,
          alt: "HealthSync Detailed View 1",
          objectFit: "none",
          objectPosition: "center"
        },
        {
          src: credcoreImg1,
          alt: "HealthSync Detailed View 2",
          objectFit: "none",
          objectPosition: "center"
        },
        {
          src: credcoreImg2,
          alt: "HealthSync Detailed View 3",
          objectFit: "none",
          objectPosition: "center"
        }
      ]
    }
  },
  {
    id: "defi-wallet",
    title: "CryptoVault",
    year: "2020-2021",
    categories: ["Crypto Wallet", "Web3 Design", "Security UI"],
    longDescription: "CryptoVault is a decentralized finance (DeFi) wallet application that prioritizes security and ease of use. I designed the entire user experience from onboarding to advanced trading features, making complex blockchain interactions accessible to users of varying technical expertise. The design system emphasizes trust and transparency, with clear visual feedback for all transactions and security-critical actions.",
    images: {
      card: [
        {
          src: credcoreImg2,
          alt: "CryptoVault Project Screenshot 1",
          objectFit: "cover",
          objectPosition: "center"
        },
        {
          src: credcoreImg3,
          alt: "CryptoVault Project Screenshot 2",
          objectFit: "cover",
          objectPosition: "center"
        },
        {
          src: credcoreImg1,
          alt: "CryptoVault Project Screenshot 3",
          objectFit: "cover",
          objectPosition: "center"
        }
      ],
      detail: [
        {
          src: credcoreImg2,
          alt: "CryptoVault Detailed View 1",
          objectFit: "none",
          objectPosition: "center"
        },
        {
          src: credcoreImg3,
          alt: "CryptoVault Detailed View 2",
          objectFit: "none",
          objectPosition: "center"
        },
        {
          src: credcoreImg1,
          alt: "CryptoVault Detailed View 3",
          objectFit: "none",
          objectPosition: "center"
        }
      ]
    }
  }
];

// Helper function to get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
