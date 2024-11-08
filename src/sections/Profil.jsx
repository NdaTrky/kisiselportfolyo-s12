import { useLanguage } from "../contexts/LanguageProvider";

function Profil() {
  const { texts } = useLanguage();
  const profilData = texts.profilData;
  
  return (
    <div className="profile-container mx-auto max-w-6xl px-4">
      <h1 className="title">Profile</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 mb-6 sm:mr-6">
          <h2 className="purple-title">Profile</h2>
          <div className="mb-2">
            <span className="font-bold">Doğum Tarihi:</span> <span className="font-inter text-base ml-2">{profilData.birthDate}</span>
          </div>
          <div className="mb-2">
            <span className="font-bold">İkamet Şehri:</span>
            <span className="font-inter text-base ml-2">{profilData.city}</span>
          </div>
          <div className="mb-2">
            <span className="font-bold">Eğitim Durumu:</span>
            <span className="font-inter text-base ml-2">{profilData.education}</span>
          </div>
          <div className="mb-2">
            <span className="font-bold">Tercih Ettiği Rol:</span>
            <span className="font-inter text-base ml-2">{profilData.preferredRole}</span>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="purple-title">About Me</h2>
          <p className="font-inter text-base">{profilData.aboutMe}</p>
        </div>
      </div>
      <hr />
      <style jsx>{`
        .profile-container {
          display: flex;
          flex-direction: column;
        }
        .flex-1 {
          min-width: 300px; /* Minimum genişlik ayarı */
        }
        .purple-title {
          margin-bottom: 1rem; /* Başlıklar arasında boşluk */
        }
      `}</style>
    </div>
  );
}

export default Profil;