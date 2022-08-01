import Landing from "../components/landing/Home";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Project from "../components/Project";

export default function Home({
  user_id,
  service,
  template_id,
  user_email,
  projects,
}) {
  return (
    <div>
      <Landing />
      <Project projects={projects} />
      <Skills />
      <Contact
        userID={user_id}
        serviceID={service}
        templateID={template_id}
        userEmail={user_email}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const projects = [
    {
      image: "/Capture.PNG",
      caption: " Crypto Info",
      description:
        "This website leverages the coinRanking API to display different cryptocurrencies. It uses redux-toolkit to manage state and query data.",
      categories: ["React", "Redux-Toolkit", "Chakra-UI"],
      link: "https://cryptoinfo-app1.netlify.app",
    },
    {
      image: "/Capture2.PNG",
      caption: " Avatar LAB",
      description:
        "This is a simple site that leverages the avatar-LAB(Last Air-Bender API) to display the avatar universe characters and their traits. The site uses NextJs for sever-side rendering and the next-Image component for lazy loading Images to better optimize the site.",
      categories: ["React", "TS", "NextJS","TailwindCSS"],
      link: "https://avatar-lab.netlify.app",
    },
    {
      image: "/Capture3.PNG",
      caption: " Blog site",
      description:
        "This is a simple blog site that leverages contentlayer. Contentlayer is a content SDK that validates and transforms content into type-safe JSON, which makes it easier for devleopers to work with content. Contentlayer greatly reduces the amount of work required to setup and maintain a blog.",
      categories: ["React", "TS", "NextJS","TailwindCSS","ContentLayer"],
      link: "https://aj-blog-example.netlify.app",
    },
    {
      image: "/Capture4.PNG",
      caption: " Cocktail directory",
      description:
        "This is a site that leveraged thecocktaildb.com API. It uses the API to search and display different cocktail on the website. The website also has a details page to show details of each cocktail on the site, including the ingridients and instructions on how to make the cocktails.",
      categories: ["React", "NextJS", "TailwindCSS","React-Query"],
      link: "https://cocktails-ditcionary.netlify.app",
    },
  ];
  return {
    props: {
      user_id: process.env.EMAILJS_USERID,
      template_id: process.env.EMAILJS_TEMPLATEID,
      service: process.env.EMAILJS_SERVICEID,
      user_email: process.env.MY_EMAIL,
      projects,
    },
  };
};
