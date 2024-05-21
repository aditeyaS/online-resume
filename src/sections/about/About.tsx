import { AboutModel } from "../../models/AboutModel";
import Avatar from "./Avatar";
import Contact from "./Contact";
import Headline from "./Headline";
import Name from "./Name";
import Resume from "./Resume";
import Socials from "./Socials";

interface AboutProps {
  about: AboutModel;
}

const About = ({ about }: AboutProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Avatar github={about.socials.github} />
      <Name name={about.name} />
      <Contact
        location={about.location}
        email={about.email}
        phone={about.phone}
      />
      <Socials
        linkedin={about.socials.linkedin}
        instagram={about.socials.instagram}
        twitter={about.socials.twitter}
        github={about.socials.github}
      />
      <Resume resumeLink={about.resumeLink} />
      <Headline headline={about.headline} />
    </div>
  );
};
export default About;
