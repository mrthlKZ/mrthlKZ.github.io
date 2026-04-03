export interface Stat {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  summaryShort: string;
  heroTags: string[];
  stats: Stat[];
}
