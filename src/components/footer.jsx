const links = [
    { name: 'Services', url: '#' },
    { name: 'Process', url: '#' },
    { name: 'Work', url: '#' },
    { name: 'Testimonial', url: '#' },
    { name: 'Contact', url: '#' },
]

const Footer = () => {
    return (
        <footer className="bg-gray-200  dark:text-white dark:bg-gray-900">
            <div className="grid grid-cols-2 gap-4 py-24 items-center">
                <div>
                    <img src="Logo-withoutBG.png" alt="logo" className="w-24 dark:invert" />
                    <p className="text-lg pr-36">
                        We&#39;re a software agency on a mission to bridge a gap between Marketplace Businesses and Innovation through custom software and automations.
                    </p>
                    <div className="my-4">Email - contact@egma.in</div>
                    <i className="fa-brands fa-linkedin text-4xl mr-4"></i>
                    <i className="fa-brands fa-square-instagram text-4xl"></i>
                </div>
                <div>
                    <ul className="list-none pl-36">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a href="#" className="">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-between pb-4">
                <div>All rights reserved to Egma</div>
                <div>
                    <a href="#" className="mr-12">Privacy Policy</a>
                    <a href="#">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
