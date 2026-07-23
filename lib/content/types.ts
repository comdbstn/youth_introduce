export interface ValueCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient?: string;
}

export interface TimelineEntry {
  year: string;
  activities: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  url: string;
  description: string;
  tech: string[];
  features?: string[];
  achievements?: string[];
  category: string;
  images?: string[];
}

export interface PortfolioCategory {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  description: string;
}

export interface SiteContent {
  loading: {
    name: string;
  };
  hero: {
    name: string;
    romaji: string;
    role: string;
    tagline: string;
    taglineEn: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    closing: string;
    coreValuesTitle: string;
    mainValues: ValueCard[];
    subValues: ValueCard[];
  };
  works: {
    title: string;
    subtitle: string;
    timeline: TimelineEntry[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    categories: PortfolioCategory[];
    projects: PortfolioProject[];
    showLess: string;
    showMore: (remaining: number) => string;
  };
  card: {
    periodLabel: string;
    techLabel: string;
    showDetail: string;
    hideDetail: string;
    imagesLabel: string;
    featuresLabel: string;
    achievementsLabel: string;
    marketingNote: string;
  };
  connect: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaNote: string;
    socialHeading: string;
    socialLinks: SocialLink[];
    footerTagline: string;
    copyright: string;
  };
}
