export interface SocialModel {
  instagram: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface AboutModel {
  name: string;
  location: string;
  email: string;
  phone: string;
  socials: SocialModel;
  headline: string;
  resumeLink: string;
}
