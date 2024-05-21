import HobbyModel from "../../models/HobbyModel";

interface HobbyProps {
  hobbyList: HobbyModel[];
}

const Hobbies = ({ hobbyList }: HobbyProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold text-secondary">Hobbies</h2>
      <ul className="flex gap-2 flex-wrap">
        {hobbyList.map((hobby, index) => (
          <li
            key={index}
            className="p-4 border-4 border-accent rounded-md hover:bg-accent hover:text-accent-content"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">{hobby.emoji}</span>
              <span className="text-lg">{hobby.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
