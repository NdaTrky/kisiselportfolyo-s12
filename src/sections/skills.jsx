import Cards from '../components/Cards'; 

function Skills() {
  const skillsData = [
    { title: 'JavaScript', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'React.Js', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'Node.Js', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  return (
    <div className="skills-container mx-[80px] mb-20">
      <h1 className="skills-h1 w-full font-[Inter] text-5xl font-semibold leading-[48px] mb-10">Skills</h1>

      {skillsData.map((skill, index) => (
        <Cards key={index} title={skill.title} text={skill.text} /> 
      ))}

      <hr/>
    </div>
  );
}

export default Skills;
