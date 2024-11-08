import Card from '../components/Card'; 

function Skill() {
  const skillsData = [
    { title: 'JavaScript', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'React.Js', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { title: 'Node.Js', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 mb-20">
      <h1 className="title">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <Card key={index} title={skill.title} text={skill.text} />
        ))}
      </div>
      <hr className="my-8" />
    </div>
  );
}

export default Skill;