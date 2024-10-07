// const links = [
//     { name: 'Services', url: '#' },
//     { name: 'Process', url: '#' },
//     { name: 'Work', url: '#' },
//     { name: 'Testimonial', url: '#' },
//     { name: 'Contact', url: '#' },
// ]

// const Footer = () => {
//     return (
//         <footer className="bg-gray-200  px-36 dark:text-white dark:bg-gray-900">
//             <div className="grid grid-cols-2 gap-4 py-24 items-center">
//                 <div>
//                     <img src="Logo-withoutBG.png" alt="logo" className="w-24 dark:invert" />
//                     <p className="text-lg pr-36">
//                         We&#39;re a software agency on a mission to bridge a gap between Marketplace Businesses and Innovation through custom software and automations.
//                     </p>
//                     <div className="my-4">Email - contact@egma.in</div>
//                     <i className="fa-brands fa-linkedin text-4xl mr-4"></i>
//                     <i className="fa-brands fa-square-instagram text-4xl"></i>
//                 </div>
//                 <div>
//                     <ul className="list-none pl-36">
//                         {links.map((link) => (
//                             <li key={link.name}>
//                                 <a href="#" className="">{link.name}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <div className="flex justify-between pb-4">
//                 <div>All rights reserved to Egma</div>
//                 <div>
//                     <a href="#" className="mr-12">Privacy Policy</a>
//                     <a href="#">Terms and Conditions</a>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

const links = [
    { name: 'Services', url: '#' },
    { name: 'Process', url: '#' },
    { name: 'Work', url: '#' },
    { name: 'Testimonial', url: '#' },
    { name: 'Contact', url: '#' },
];

const Footer = () => {
    return (
        <footer className="bg-gray-200 px-8 md:px-16 lg:px-36 dark:text-white dark:bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-24 items-center">
                <div>
                    <img src="Logo-withoutBG.png" alt="logo" className="w-16 md:w-24 dark:invert" />
                    <p className="text-base md:text-lg pr-0 md:pr-16 lg:pr-36 mt-4">
                        We&#39;re a software agency on a mission to bridge a gap between Marketplace Businesses and Innovation through custom software and automations.
                    </p>
                    <div className="my-4">Email - contact@egma.in</div>
                    <div className="flex space-x-4">
                        <i className="fa-brands fa-linkedin text-3xl md:text-4xl"></i>
                        <i className="fa-brands fa-square-instagram text-3xl md:text-4xl"></i>
                    </div>
                </div>
                <div className="text-center md:text-left mt-8 md:mt-0">
                    <ul className="list-none space-y-4">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a href={link.url} className="text-lg hover:underline">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pb-4">
                <div className="text-sm md:text-base">All rights reserved to Egma</div>
                <div className="mt-4 md:mt-0">
                    <a href="#" className="mr-4 md:mr-12 text-sm md:text-base hover:underline">Privacy Policy</a>
                    <a href="#" className="text-sm md:text-base hover:underline">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

