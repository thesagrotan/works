import content from './siteContent.json';

interface Hero {
  intro: string;
  experience: string;
  cta: string;
  email: string;
}

interface HelpWith {
  heading: string;
  links: string[][];
}

interface SiteContent {
  hero: Hero;
  selectedWork: string;
  helpWith: HelpWith;
}

export const siteContent = content as SiteContent;

// Helper to parse markdown-style bold text (**text**)
export const parseBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return { text: part.slice(2, -2), bold: true, key: i };
    }
    return { text: part, bold: false, key: i };
  });
};
