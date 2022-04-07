import Landing from "../components/landing/Home";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Project from "../components/Project";

export default function Home({ user_id, service_id, template_id,user_email }) {
  return (
    <div>
      <Landing />
      <Project />
      <Skills />
      <Contact
        userID={user_id}
        serviceID={service_id}
        templateID={template_id}
        userEmail={user_email}
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      user_id: process.env.EMAILJS_USERID,
      template_id: process.env.EMAILJS_TEMPLATEID,
      service_id: process.env.EMAILJS_SERVICEID,
      user_email: process.env.MY_EMAIL
    },
  };
};
