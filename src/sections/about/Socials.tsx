import GitHubIcon from "../../icons/GitHubIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import { SocialModel } from "../../models/AboutModel";

const Socials = ({ linkedin, github, twitter, instagram }: SocialModel) => {
  const s = {
    li: "linkedin",
    gh: "github",
    x: "twitter",
    ig: "instagram",
  };
  const onOpenSocial = (social: string) => {
    let socialURL = "";
    switch (social) {
      case s.li:
        socialURL = `https://www.${s.li}.com/in/${linkedin}`;
        break;
      case s.gh:
        socialURL = `https://www.${s.gh}.com/${github}`;
        break;
      case s.ig:
        socialURL = `https://www.${s.ig}.com/${instagram}`;
        break;
      case s.x:
        socialURL = `https://www.${s.x}.com/${twitter}`;
        break;
    }
    window.open(socialURL, "_blank");
  };

  return (
    <div className="flex gap-4 justify-center">
      <button className="btn btn-circle" onClick={() => onOpenSocial(s.li)}>
        <LinkedInIcon />
      </button>
      <button className="btn btn-circle" onClick={() => onOpenSocial(s.gh)}>
        <GitHubIcon />
      </button>
      <button className="btn btn-circle" onClick={() => onOpenSocial(s.ig)}>
        <InstagramIcon />
      </button>
      <button className="btn btn-circle" onClick={() => onOpenSocial(s.x)}>
        <TwitterIcon />
      </button>
    </div>
  );
};
export default Socials;
