export interface Resume {
  basics: {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: {
      city: string;
      region: string;
      countryCode: string;
    };
    profiles: {
      network: string;
      username: string;
      url: string;
    }[];
  };
  work: {
    name: string;
    position: string;
    url: string;
    startDate: string;
    summary: string;
    highlights: string[];
  }[];
  education: {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
  }[];
  certificates: {
    name: string;
    issuer: string;
    date: string;
    url: string;
  }[];
  publications: {
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
  }[];
  skills: {
    name: string;
    level: string;
    keywords: string[];
  }[];
  awards: {
    title: string;
    date: string;
    awarder: string;
    summary: string;
  }[];
  languages: {
    language: string;
    fluency: string;
  }[];
  interests: {
    name: string;
    keywords: string[];
  }[];
  projects: {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
    url: string;
  }[];
  references: {
    name: string;
    reference: string;
  }[];
}
