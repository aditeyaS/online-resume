interface ResumeProps {
  resumeLink: string;
}

const Resume = ({ resumeLink }: ResumeProps) => {
  const onViewResume = () => {
    window.open(resumeLink, "_blank");
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={onViewResume}
        className="btn btn-outline btn-primary transform transition duration-500 hover:scale-125"
      >
        View Resume
      </button>
    </div>
  );
};

export default Resume;
