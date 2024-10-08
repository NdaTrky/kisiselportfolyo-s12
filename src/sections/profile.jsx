function Profile() {

  const profilData = {
    birthDate: "06/09/2001",
    city: "Antalya",
    education: "Ekonometri",
    preferredRole: "Frontend, Uİ",
    aboutMe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia."
  
  
    
  }
    return (
        <div className="profile-container">
          <h1 className="profile-h1">Profile</h1>
          <div>
            <h2>Profile</h2>
            <p>Doğum Tarihi {profilData.birthDate}</p>
            <p>İkamet Şehri {profilData.city} </p>
            <p>Eğitim Durumu {profilData.education}</p>
            <p> Tercih Ettiği Rol {profilData.preferredRole}</p>
            </div>
          <div><h2>About Me</h2></div>
        </div>
    );
  }
  
  export default Profile;