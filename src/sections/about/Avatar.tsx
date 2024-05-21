interface AvatarProps {
  github: string;
}

const Avatar = ({ github }: AvatarProps) => {
  return (
    <div className="flex justify-center">
      <div className="avatar">
        <div className="rounded-full w-72 h-72 ring ring-accent ring-offset-base-100 ring-offset-2 hover:animate-spin">
          <img src={`https://github.com/${github}.png`} />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
