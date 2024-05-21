interface HeadlineProps {
  headline: string;
}

const Headline = ({ headline }: HeadlineProps) => {
  return <div className="text-lg text-accent text-center">{headline}</div>;
};

export default Headline;
