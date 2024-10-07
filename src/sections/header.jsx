function Header() {




  return (
    <div className="header-container">

      <div className="profile-info"> 
          <img className="max-w-16 py-20 mx-20 mb-3" src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" />
          <h2 className="">Nida Türkay</h2>
      </div>

      <nav className="nav-container flex justify-end items-center font-serif text-lg font-medium gap-14 px-20 relative bottom-44 ">
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <button className="border-2 border-purple-600 rounded-xl p-4">Hire Me</button>
      </nav>

    </div>
);



}

export default Header;