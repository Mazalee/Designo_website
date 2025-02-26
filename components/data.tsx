import { ReactElement } from "react";

type CardDataProps = {
  id: number;
  href: string;
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  alt: string;
  headerOne: string;
  headerTwo: string;
  icon: ReactElement;
};

type DesignDataProps = {
  id: number;
  src: string;
  alt: string;
  header: string;
  paragraph: string;
};

type DesignDataType = {
  web: DesignDataProps[];
  app: DesignDataProps[];
  graphic: DesignDataProps[];
};

type SocialIcons = {
  id: number;
  icon: ReactElement;
};

type CompanyDataProps = {
  id: number;
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  alt: string;
  header: string;
  paragraph: string;
  bgColor: string;
  color: string;
};

type CompanyExtraDataProps = CompanyDataProps & {
  paragraphTwo: string;
};

type PlacesDataProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
  button: string;
};

type LocationsDataProps = {
  id: number;
  MDSsrc: string;
  tabletSrc: string;
  alt: string;
  header: string;
  paragraphOne: string;
  paragraphTwo: string;
  spanOne: string;
  spanTwo: string;
  spanThree: string;
  spanFour: string;
};

export const cardData: CardDataProps[] = [
  {
    id: 1,
    href: "/design/web",
    mobileSrc: "/home/mobile/image-web-design.jpg",
    tabletSrc: "/home/tablet/image-web-design.jpg",
    desktopSrc: "/home/desktop/image-web-design-large.jpg",
    alt: "web design",
    headerOne: "web design",
    headerTwo: "view projects",
    icon: (
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#E7816B"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 2,
    href: "/design/app",
    mobileSrc: "/home/mobile/image-app-design.jpg",
    tabletSrc: "/home/tablet/image-app-design.jpg",
    desktopSrc: "/home/desktop/image-app-design.jpg",
    alt: "app design",
    headerOne: "app design",
    headerTwo: "view projects",
    icon: (
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#E7816B"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 3,
    href: "/design/graphic",
    mobileSrc: "/home/mobile/image-graphic-design.jpg",
    tabletSrc: "/home/tablet/image-graphic-design.jpg",
    desktopSrc: "/home/desktop/image-graphic-design.jpg",
    alt: "graphic design",
    headerOne: "graphic design",
    headerTwo: "view projects",
    icon: (
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#E7816B"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
];

export const icons: SocialIcons[] = [
  {
    id: 1,
    icon: (
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
          fill="#E7816B"
          fillRule="nonzero"
        />
      </svg>
    ),
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"
          fill="#E7816B"
          fillRule="nonzero"
        />
      </svg>
    ),
  },
  {
    id: 3,
    icon: (
      <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
          fill="#E7816B"
          fillRule="nonzero"
        />
      </svg>
    ),
  },
  {
    id: 4,
    icon: (
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
          fill="#E7816B"
          fillRule="nonzero"
        />
      </svg>
    ),
  },
  {
    id: 5,
    icon: (
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          fill="#E7816B"
          fillRule="nonzero"
        />
      </svg>
    ),
  },
];

export const designData: DesignDataType = {
  web: [
    {
      id: 1,
      src: "/web-design/desktop/image-express.jpg",
      alt: "express",
      header: "express",
      paragraph: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      id: 2,
      src: "/web-design/desktop/image-transfer.jpg",
      alt: "transfer",
      header: "transfer",
      paragraph:
        "Site for low-cost money transfers and sending money within seconds",
    },
    {
      id: 3,
      src: "/web-design/desktop/image-photon.jpg",
      alt: "photon",
      header: "photon",
      paragraph:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      id: 4,
      src: "/web-design/desktop/image-builder.jpg",
      alt: "building",
      header: "building",
      paragraph:
        "Connects users with local contractors based on their location",
    },
    {
      id: 5,
      src: "/web-design/desktop/image-blogr.jpg",
      alt: "blogr",
      header: "blogr",
      paragraph:
        "Blogr is a platform for creating an online blog or publication",
    },
    {
      id: 6,
      src: "/web-design/desktop/image-camp.jpg",
      alt: "camp",
      header: "camp",
      paragraph:
        "Get expert training in coding, data, design, and digital marketing",
    },
  ],
  app: [
    {
      id: 1,
      src: "/app-design/desktop/image-airfilter.jpg",
      header: "airfilter",
      alt: "airfilter",
      paragraph:
        "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      id: 2,
      src: "/app-design/desktop/image-eyecam.jpg",
      header: "eyecam",
      alt: "eyecam",
      paragraph:
        "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      id: 3,
      src: "/app-design/desktop/image-faceit.jpg",
      header: "faceit",
      alt: "faceit",
      paragraph:
        "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      id: 4,
      src: "/app-design/desktop/image-todo.jpg",
      alt: "todo",
      header: "todo",
      paragraph: "A todo app that features cloud sync with light and dark mode",
    },
    {
      id: 5,
      src: "/app-design/desktop/image-loopstudios.jpg",
      header: "loopstudios",
      alt: "loopstudios",
      paragraph: "A VR experience app made for Loopstudios",
    },
  ],
  graphic: [
    {
      id: 1,
      src: "/graphic-design/desktop/image-change.jpg",
      header: "tim brown",
      alt: "tim brown",
      paragraph: "A book cover designed for Tim Brown’s new release, ‘Change’",
    },
    {
      id: 2,
      src: "/graphic-design/desktop/image-boxed-water.jpg",
      header: "boxed water",
      alt: "boxed water",
      paragraph: "A simple packaging concept made for Boxed Water",
    },
    {
      id: 3,
      src: "/graphic-design/desktop/image-science.jpg",
      header: "science!",
      alt: "science",
      paragraph:
        "  A poster made in collaboration with the Federal Art Project",
    },
  ],
};

export const companyData: CompanyDataProps[] = [
  {
    id: 1,
    mobileSrc: "/about/mobile/image-about-hero.jpg",
    tabletSrc: "/about/tablet/image-about-hero.jpg",
    desktopSrc: "/about/desktop/image-about-hero.jpg",
    alt: "about us",
    header: "about us",
    bgColor: "#e7816b",
    color: "#ffffff",
    paragraph:
      "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
  },
];

export const companyDataExtra: CompanyExtraDataProps[] = [
  {
    id: 1,
    mobileSrc: "/about/mobile/image-world-class-talent.jpg",
    tabletSrc: "/about/tablet/image-world-class-talent.jpg",
    desktopSrc: "/about/desktop/image-world-class-talent.jpg",
    alt: "talent",
    header: "World-class talent",
    bgColor: "#ffffff",
    color: "#333136",
    paragraph:
      "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. ",
    paragraphTwo:
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
  },
  {
    id: 2,
    mobileSrc: "/about/mobile/image-real-deal.jpg",
    tabletSrc: "/about/tablet/image-real-deal.jpg",
    desktopSrc: "/about/desktop/image-real-deal.jpg",
    alt: "real deal",
    header: "The real deal",
    bgColor: "#ffffff",
    color: "#333136",
    paragraph:
      "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
    paragraphTwo:
      " We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
  },
];

export const placesData: PlacesDataProps[] = [
  {
    id: 1,
    src: "/shared/desktop/illustration-canada.svg",
    alt: "canada",
    title: "canada",
    button: "see location",
  },
  {
    id: 2,
    src: "/shared/desktop/illustration-australia.svg",
    alt: "australia",
    title: "australia",
    button: "see location",
  },
  {
    id: 3,
    src: "/shared/desktop/illustration-united-kingdom.svg",
    alt: "united-kingdom",
    title: "united kingdom",
    button: "see location",
  },
];

export const locationsData: LocationsDataProps[] = [
  {
    id: 1,
    MDSsrc: "/locations/desktop/image-map-canada.png",
    tabletSrc: "/locations/tablet/image-map-canada.png",
    alt: "canada",
    header: "canada",
    paragraphOne: "Designo Central Office",
    spanOne: "3886 Wellington Street",
    spanTwo: "Toronto, Ontario M9C 3J5",
    paragraphTwo: "contact",
    spanThree: "P: +1 253-863-8967",
    spanFour: "M: contact@designo.co",
  },
  {
    id: 2,
    MDSsrc: "/locations/desktop/image-map-australia.png",
    tabletSrc: "/locations/tablet/image-map-australia.png",
    alt: "australia",
    header: "australia",
    paragraphOne: "Designo AU Office",
    spanOne: "19 Balonne Street",
    spanTwo: "New South Wales 2443",
    paragraphTwo: "contact",
    spanThree: "P: (02) 6720 9072",
    spanFour: "M: contact@designo.au",
  },
  {
    id: 3,
    MDSsrc: "/locations/desktop/image-map-united-kingdom.png",
    tabletSrc: "/locations/tablet/image-map-uk.png",
    alt: "united kingdom",
    header: "united kingdom",
    paragraphOne: "Designo UK Office",
    spanOne: "13 Colorado Way",
    spanTwo: "Rhyd-y-fro SA8 9GA",
    paragraphTwo: "contact",
    spanThree: "P: 078 3115 1400",
    spanFour: "M: contact@designo.uk",
  },
];
