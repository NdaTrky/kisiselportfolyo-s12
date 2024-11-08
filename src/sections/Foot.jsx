function Foot() {
  return (
    <div className="footer-container mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-inter text-4xl font-semibold leading-tight text-left text-[#1F2937]">
        Let’s work together on your next product.
      </h1>
      <div className="mt-5">
        <a
          className="font-inter font-medium text-left text-[#AF0C48]"
          href="mailto:nturkaaayyy@gmail.com?subject=Subject%20Here&body=Body%20Text%20Here"
        >
          nturkaaayyy@gmail.com
        </a>
      </div>
      <div className="mt-10 flex flex-col md:flex-row md:justify-end space-x-0 md:space-x-4">
        <a className="font-inter text-lg font-medium md:mr-4" href="#" target="_blank">
          Blog
        </a>
        <a className="font-inter text-lg font-medium text-[#00AB6B] md:mr-4" href="https://github.com/NdaTrky" target="_blank">
          Github
        </a>
        <a className="font-inter text-lg font-medium text-[#0077B5]" href="https://www.linkedin.com/in/nidaturkay/" target="_blank">
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Foot;