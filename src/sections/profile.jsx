function Profile() {
  const profilData = {
    birthDate: "06/09/2001",
    city: "Antalya",
    education: "Ekonometri",
    preferredRole: "Frontend, UI",
    aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! "
  };
  

  return (
    <div className="profile-container mx-[14rem]">
      <h1 className="profile-h1">Profile</h1>
      <div className="profile-content flex">
        <div className="profile-details flex-1">
          <h2 className="profile-baslik">Profile</h2>

          <div className="profile-p profile-p">
            <span >Doğum Tarihi:</span>
            <span className="profile-data">{profilData.birthDate}</span>
          </div>

          <div className="profile-p">
            <span>İkamet Şehri:</span>
            <span  className="profile-data">{profilData.city}</span>
          </div>

          <div className="profile-p">
            <span>Eğitim Durumu:</span>
            <span  className="profile-data">{profilData.education}</span>
          </div>
          
          <div className="profile-p">
            <span>Tercih Ettiği Rol:</span>
            <span className="profile-data">{profilData.preferredRole}</span>
          </div>
        </div>

        <div className="about-me flex-1">
          <h2 className="profile-baslik">About Me</h2>
          <p className="profile-p">{profilData.aboutMe}</p>
        </div>
        
      </div>
      <hr />
    </div>
    
  );
}

export default Profile;
