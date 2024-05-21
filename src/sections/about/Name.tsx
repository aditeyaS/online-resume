interface NameProp {
  name: string;
}

const Name = ({ name }: NameProp) => {
  return (
    <h1 className="text-8xl text-center font-bold text-primary cursor-pointer">
      {name}
    </h1>
  );
};
export default Name;
