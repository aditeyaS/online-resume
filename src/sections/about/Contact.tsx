import EmailIcon from "../../icons/EmailIcon";
import LocationIcon from "../../icons/LocationIcon";
import PhoneIcon from "../../icons/PhoneIcon";

interface ContactProps {
  location: string;
  email: string;
  phone: string;
}

const Contact = ({ location, email, phone }: ContactProps) => {
  const openLocation = () => {
    let map = "https://www.google.com/maps?q=";
    const loc = location.split(",");
    loc.forEach((l, index) => {
      l = l.trim();
      map += l;
      if (index != loc.length - 1) {
        map += ",";
      }
    });
    window.open(map, "_blank");
  };

  return (
    <div className="flex gap-4 text-base-content justify-center md:flex-row sm:flex-col">
      <div className="flex gap-0.5 hover:text-secondary" onClick={openLocation}>
        <LocationIcon />
        {location}
      </div>
      <div className="flex gap-0.5 hover:text-secondary">
        <PhoneIcon />
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
      <div className="flex gap-0.5 hover:text-secondary">
        <EmailIcon />
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};
export default Contact;
