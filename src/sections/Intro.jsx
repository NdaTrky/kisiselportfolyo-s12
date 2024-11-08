function Intro() {
  const hireMeButtonClick = () => {
    alert("Butona Tıklandı!");
  };

  const handleSkillsClick = () => {
    Navigation("/skills");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <img
          className="max-w-xs py-10"
          src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
          alt="Profil Resmi"
        />
        <a
          href="#"
          className="text-primary-purple font-inter text-xl font-medium"
        >
          _____Nida Türkay
        </a>
      </div>
      <nav className="flex justify-center items-center text-lg font-medium gap-6 mb-4">
        <a onClick={handleSkillsClick} href="#">
          Skills
        </a>
        <a href="#">Projects</a>
        <button
          onClick={hireMeButtonClick}
          className="py-2 px-4 border rounded border-primary-purple"
        >
          Hire Me
        </button>
      </nav>
    </div>
  );
}

export default Intro;