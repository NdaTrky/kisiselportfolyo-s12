const profilData = {
  birthDate: "06/09/2001",
  city: "Antalya",
  education: "Ekonometri",
  preferredRole: "Frontend, UI",
  aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
};


function Profil() {
  return (
    <div className="profile-container mx-auto max-w-6xl px-4">
    <h1 className="title">Profile</h1>
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1 mb-6 sm:mr-6">
        <h2 className="purple-title">Profile</h2>
        <div className="mb-2">
          <span>Doğum Tarihi:</span> <span className="font-inter text-base">{profilData.birthDate}</span>
        </div>
        <div className="mb-2">
          <span>İkamet Şehri:</span>
          <span className="font-inter text-base">{profilData.city}</span>
        </div>
        <div className="mb-2">
          <span>Eğitim Durumu:</span>
          <span className="font-inter text-base">{profilData.education}</span>
        </div>
        <div className="mb-2">
          <span>Tercih Ettiği Rol:</span>
          <span className="font-inter text-base">{profilData.preferredRole}</span>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="purple-title">About Me</h2>
        <p className="font-inter text-base">{profilData.aboutMe}</p>
      </div>
    </div>
    <hr />
  </div>
  );
}

export default Profil;