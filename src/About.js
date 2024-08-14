const About = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
};

export default About;
