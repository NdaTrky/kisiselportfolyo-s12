function Header() {

    const hireMeButtonClick = () => {
        alert("Butona Tıklandı!");
    }
  
    return (
        <header>
            <div className="header-container">
                <div className="dark:bg-slate-900 dark:text-white"></div>
  
                <div className="profile-info"> 
                    <img className="max-w-10 py-10 mx-20 relative bottom-[4rem]" src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="Profil Resmi" />
                    <h2 className="ml-10">_____Nida Türkay</h2>
                </div>
  
                <nav className="nav-container flex justify-end items-center font-serif text-lg font-medium gap-14 px-10 relative bottom-[9rem] ">
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <button onClick={hireMeButtonClick} className="py-4 px-8 border rounded border-purple-500">
                        Hire Me
                    </button>
                   
                </nav>
            </div>
        </header>
    );
  }
  
  export default Header;