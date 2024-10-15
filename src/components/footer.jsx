const links = [
  { name: "Services", url: "#" },
  { name: "Process", url: "#" },
  { name: "Work", url: "#" },
  { name: "Testimonial", url: "#" },
  { name: "Contact", url: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-200 px-2 sm:px-4 md:px-8 lg:px-12 dark:text-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 md:py-12 items-center">
        <div className="text-center md:text-left">
          <img
            src="Logo-withoutBG.png"
            alt="logo"
            className="w-20 md:w-24 dark:invert mx-auto md:mx-0"
          />
          <p className="text-xs md:text-sm md:pr-36">
            We&#39;re a software agency on a mission to bridge a gap between
            Marketplace Businesses and Innovation through custom software and
            automations.
          </p>
          <div className="my-2 text-xs md:text-sm">Email - contact@egma.in</div>
          <div className="flex justify-center md:justify-start my-2">
            <i className="fa-brands fa-linkedin text-xl mr-2"></i>
            <i className="fa-brands fa-square-instagram text-xl"></i>
          </div>
        </div>
        <div>
          <ul className="list-none md:pl-8 text-center md:text-left">
            {links.map((link) => (
              <li key={link.name} className="text-xs md:text-sm">
                <a href={link.url} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between pb-2 text-xs md:text-sm">
        <div>All rights reserved to Egma</div>
        <div className="mt-2 sm:mt-0">
          <a href="#" className="mr-4 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
