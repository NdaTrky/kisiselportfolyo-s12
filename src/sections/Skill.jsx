import Card from '../components/Card'; 

function Skill() {
  const skillsData = [
    { title: 'JavaScript', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'React.Js', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'Node.Js', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  return (
    <div className="flex flex-wrap justify-between items-start pl-[8rem] mx-[90px] mb-20">


      <div className="dark:bg-slate-900 dark:text-white"></div>
      
      <h1 className="opacity-100 mb-[3rem] w-full font-[Inter] text-5xl font-semibold leading-[48px] mt-[10rem]">Skills</h1>

      {skillsData.map((skill, index) => (
        <Card key={index} title={skill.title} text={skill.text} /> 
      ))}

      <hr/>
    </div>
  );
}

export default Skill;
