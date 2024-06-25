import React, { useEffect, useState } from "react";

const Footer = ({ endpoint: { titles, links } }) => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container  text-slate-200">
          <div className="grid items-center grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, i) => (
              <div key={i} className="grid items.center">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((val, i) => (
              <ul key={i} className="grid items-center gap-1 ">
                {val.map((val, i) => (
                  <li key={i} className="text-sm sm:text-xs">
                    {val.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights{" "}
              <span className="font-semibold">Safoinetl {Year}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
