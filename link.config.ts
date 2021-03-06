interface Authors {
  name: string,
  socialMedia: {
    instagram: string,
    linkedin: string,
    github: string,
  }
}

interface Pages {
  title: string;
  href: string;
}

interface Link {
  authors: Authors[];
  pages: Pages[]
}

const link: Link = {
  authors: [
    {
      name: "Sabiq Muhammad Antebing Mame",
      socialMedia: {
        instagram: "https://www.instagram.com/ssabiqmame/",
        linkedin: "https://www.linkedin.com/in/sabiq-muhammad-6b314a210/",
        github: "https://github.com/sabiq7392",
      },
    },
  ],
  pages: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Getting Started",
      href: "/getting-started",
    },
    {
      title: "Display Grid",
      href: "/display/grid",
    },
    {
      title: "Display Flex",
      href: "/display/flex",
    },
    {
      title: "HTML Tag",
      href: "/html-tag",
    },
    {
      title: "Screen",
      href: "/screen",
    },
    {
      title: "Accordion",
      href: "/components/accordion",
    },
    {
      title: "Carousel",
      href: "/components/carousel",
    },
    {
      title: "Dropdown",
      href: "/components/dropdown",
    },
    {
      title: "Navbar",
      href: "/components/navbar",
    },
  ],
};

export default link;
