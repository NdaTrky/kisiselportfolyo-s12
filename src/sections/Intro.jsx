function Intro() {
  const hireMeButtonClick = () => {
    alert("Butona Tıklandı!");
  };

  const handleSkillsClick = () => {
    Navigation("/skills");
  };

  return (
    
      <div>
        <div>
          <img
            className="max-w-10 py-10 mx-20 relative bottom-[4rem]"
            src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
            alt="Profil Resmi"
          />
          <a
            href="#"
            className="ml-10 text-[#4338CA] font-[Inter] text-xl font-medium text-left"
          >
            _____Nida Türkay
          </a>
        </div>

        <nav className="flex justify-end items-center text-lg font-medium gap-14 px-10 relative bottom-[9rem] ">
          <a onClick={handleSkillsClick} href="#">
            Skills
          </a>

          <a href="#">Projects</a>
          <button
            onClick={hireMeButtonClick}
            className="py-4 px-8 border rounded border-purple-500"
          >
            Hire Me
          </button>
        </nav>
      </div>
  );
}

export default Intro;
