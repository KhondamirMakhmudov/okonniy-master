import CountUp from "react-countup";

const StaticCard = ({ content = "лет опыта", value = 15 }) => {
  return (
    <div className="text-center lg:text-left">
      <div className="text-3xl lg:text-4xl font-extralight text-black mb-2">
        <CountUp end={value} />+
      </div>
      <div className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-light">
        {content}
      </div>
    </div>
  );
};

export default StaticCard;
