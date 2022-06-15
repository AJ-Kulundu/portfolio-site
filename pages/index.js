import Landing from "../components/landing/Home";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Project from "../components/Project";

export default function Home({ user_id, service, template_id,user_email,projects }) {
  return (
    <div>
      <Landing />
      <Project projects={projects}/>
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

export const getServerSideProps =  async() => {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: " web application",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi dunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
      categories: ["js", "ts", "swift", "flutter"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: " web application",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi dunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
      categories: ["js", "ts", "swift"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: " web application",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi dunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
      categories: ["js", "ts", "swift"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: " web application",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi dunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
      categories: ["js", "ts", "swift"],
    },
  ];
  return {
    props: {
      user_id: process.env.EMAILJS_USERID,
      template_id: process.env.EMAILJS_TEMPLATEID,
      service: process.env.EMAILJS_SERVICEID,
      user_email: process.env.MY_EMAIL,
      projects
    },
  };
};
