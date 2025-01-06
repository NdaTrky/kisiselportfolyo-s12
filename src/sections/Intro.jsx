function Intro() {
  const hireMeButtonClick = () => {
    window.location.href = "mailto:example@example.com"; // Kullanıcıyı mail göndermek için yönlendirir
  };


  return (
    <div className="profile-container mx-auto max-w-6xl px-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center pt-20">
        {/* Profil fotoğrafı */}
        <div className="flex flex-col items-start md:items-start md:mr-10"> 
          <img
            className="w-32 h-32 rounded-full border-4 border-primary-purple"
            src="https://media.licdn.com/dms/image/v2/D4D03AQEOLq2AvGFxVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694278117384?e=1736380800&v=beta&t=xIdtujpD5wfENHVP-jXWppmwn55jggL98Wn87qdOy0Q"
            alt="Profil Resmi"
          />
          <a
            href="#"
            className="text-primary-purple font-inter text-xl font-medium mt-4"
          >
            _____Nida Türkay
          </a>
        </div>

        {/* Navigasyon Menüsü */}
        <nav className="flex justify-center items-center text-lg font-medium gap-6 mt-4 md:mt-0">
          <a  href="#">
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
    </div>
  );
}

export default Intro;
