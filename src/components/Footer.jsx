
import { links } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-gray-200 px-8 sm:px-12 md:px-36 dark:text-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16 items-center">
        <div>
          <img
            src="Logo-withoutBG.png"
            alt="logo"
            className="w-24 dark:invert"
          />
          <p className="text-lg md:pr-36">
            We&#39;re a software agency on a mission to bridge a gap between
            Marketplace Businesses and Innovation through custom software and
            automations.
          </p>
          <div className="my-4">Email - contact@egma.in</div>
          <i className="fa-brands fa-linkedin text-4xl mr-4"></i>
          <i className="fa-brands fa-square-instagram text-4xl"></i>
        </div>
        <div>
          <ul className="list-none md:pl-36">
            {links.map((link) => (
              <li key={link.name}>
                <a href="#" className="">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between pb-4">
        <div>All rights reserved to Egma</div>
        <div className="mt-2 sm:mt-0">
          <a href="#" className="mr-12">
            Privacy Policy
          </a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
