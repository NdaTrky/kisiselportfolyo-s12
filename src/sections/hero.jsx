function Hero() {
  

  
  return (



  <div className = "hero-container flex flex-col items-start mx-auto">
<div className="w-[596px] pl-[80px] pb-[80px] ">
    <h1 className = "hero-baslik text-6xl font-bold leading-tight font-[ınter]">
      <span className="hero-span ">CREATIVE THINKER</span>
      <br />
      <span className="hero-span ">MINIMALISM LOVER</span>
    </h1>
    
    <p className="w-[553px] font-inter text-base font-normal leading-[28px] text-left font-inter text-[18px]">Hi, I’m Nida. I’m a full-stack developer. If you are looking for a <br /> Developer who to craft solid and scalable frontend products with <br /> great user experiences. Let’s shake hands with me.</p>
  </div>
  
  <div className="hero-button">
    <button className="w-[120px] h-[52px] py-1 text-white ml-20 -mt-[10%] mb-20 border rounded bg-[#3730A3]">Hire Me</button>
  <a href="https://github.com/NdaTrky" target="_blank">
    <button className="py-3 px-6 ml-3 border rounded border-[#3730A3] text-[#3730A3]">
  <i className="fa-brands fa-github mr-2"></i>
  Github
</button>
</a>
<a href="https://www.linkedin.com/in/nidaturkay/" target="_blank">
<button className="py-3 px-6 ml-3 border rounded border-[#3730A3] text-[#3730A3]">
<i className="fa-brands fa-linkedin-in mr-2"></i>
  Linkedin
</button>
</a>
    
  </div>

    <div className="w-[476px] absolute top-[235px] letf-[798px] rounded-l-[18px] ml-[55rem] mt-[5rem]">
<img src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JvmK-kBMmmutOP83x3fC-zApmk-pGIzv2RWPwYezRZMs7J-~EPgsjGUIsBMXuj2Wec5BgpbN4PQSGZYt4MbDNPVE6Xh~sssFJ3bZdfKEsQ0nn7o6w4en2SjVKa~AyesZRzDbmwpSAptTAjo-2kl6zCTnF35fZBarvT5WnrNCp-5Yf9TUQ67wczDiNOssRoey~VG2sZrT4Rr1YyjUlY-yW4Uko5LJNgjktazl7fqZfSbjXbVMloIGOtRuOswA5dq9~olG~K9uBxu6QjwMOJH45tDqWQkqeJcxn6wFlF4cutcPgm1q8h9O-gNnC5AOpPEGhGVi7dfFh55MKXJV-QKLqw__" alt="hero-img" />

    </div>
  </div>



  
  );
}

export default Hero;