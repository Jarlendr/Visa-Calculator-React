const DaysCircleText = (props) => {
  return (
    <text
      className="days"
      id="days"
      x="50%"
      y="50%"
      alignmentBaseline="middle"
      textAnchor="middle"
      fill="white"
      
    >
      {props.days}
    </text>
  );
};

export default DaysCircleText;
