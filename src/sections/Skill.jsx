import Card from '../components/Card'; 
import { useLanguage } from "../contexts/LanguageProvider"; // useLanguage'ı içe aktarın

function Skill() {
  const { texts } = useLanguage();
  const skillsData = texts.skillsData; // Bu, dil verisinden gelen beceri verilerini alır

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