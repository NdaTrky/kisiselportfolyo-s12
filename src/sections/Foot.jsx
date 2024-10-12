function Foot() {
  return (
    <div className="footer-container relative bottom-20 px-[20%]">
      <h1 className="font-[Inter] text-4xl font-semibold leading-[60px] text-left text-[#1F2937] w-[540px] ">
        Let’s work together on your next product.
      </h1>

     
      <div className="mt-[5rem] m-10">
        <a
          className=" font-Inter font-medium text-left text-[#AF0C48]"
          href="mailto:nturkaaayyy@gmail.com?subject=Subject%20Here&body=Body%20Text%20Here"
        >
          nidaturkaaayyy@gmail.com
        </a>
      </div>

      <div className="mt-[10%] mx-[80rem] mr-4">
        <a className="font-inter text-[18px] font-medium leading-[27px] tracking-[0.01em] text-left mr-4" href="#" target="_blank">
          Blog
        </a>

        <a className="font-inter text-[18px] font-medium leading-[27px] tracking-[0.01em] text-left mr-4 text-[#00AB6B]" href="https://github.com/NdaTrky" target="_blank">
          Github
        </a>

        <a className="font-inter text-[18px] font-medium leading-[27px] tracking-[0.01em] text-left mr-4 text-[#0077B5]" href="https://www.linkedin.com/in/nidaturkay/" target="_blank">
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Foot;
