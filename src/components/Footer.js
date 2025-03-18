import React, { useState } from "react";
import footer_logo from "../assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ footerCities }) => {
  const [cityOpen, setCityOpen] = useState(false);
  const handleCities = () => setCityOpen(!cityOpen);

  // Ensure footerCities is an array
  const cities = Array.isArray(footerCities) ? footerCities : [];

  return (
    <>
      <div className="flex bg-[#110705] text-[#ffffff99] flex-col items-center justify-center p-10">
        <div className="grid grid-cols-4 gap-x-[5%] w-[85%] mx-auto">
          {/* Footer Logo */}
          <div>
            <div className="flex items-center">
              <img className="w-40 filter grayscale" src={footer_logo} alt="Footer Logo" />
            </div>
          </div>

          {/* Cities We Deliver */}
          <div className="col-start-4 row-start-1">
            <h1 className="font-bold text-base leading-10 tracking-tighter text-white">
              We deliver to :
            </h1>
            {cities.slice(0, 6).map((x) => (
              <div key={x.text}>
                <h1 className="py-1">{x.text}</h1>
              </div>
            ))}
            <div
              className="flex justify-between mt-2 align-center items-center cursor-pointer border-[#ffffff70] border-solid border-[1px] w-fit px-2 rounded-xl"
              onClick={handleCities}
            >
              <h1 className="p-1 h-fit truncate">{cities.slice(6).length} more cities</h1>
              <div className="ml-2 pr-1">
                <FontAwesomeIcon icon={faChevronDown} className={cityOpen ? "rotate-180" : ""} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded City List */}
      {cityOpen && (
        <div className="flex flex-col items-center justify-center pt-6 pb-10 text-[#ffffff99] bg-[#110705] w-full h-fit border-t-[#ffffff70] border-solid border-t-[1px]">
          <h2 className="pb-6 font-bold text-lg text-white tracking-tight">
            Other Cities that we deliver
          </h2>
          <div className="grid grid-cols-4 gap-x-16 w-[80%]">
            {cities.slice(6).map((x, idx) => (
              <div key={idx} className="py-1">
                <h4 className="cursor-pointer p-1">{x.text}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GitHub & LinkedIn */}
      <div className="flex flex-col w-full items-center justify-center bg-[#110705] text-white p-6">
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/paras-sharma-429820253/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-3xl hover:text-[#0a66c2]" icon={faLinkedin} />
          </a>
          <a href="https://github.com/paras20222" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-3xl hover:text-[#333]" icon={faGithub} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
