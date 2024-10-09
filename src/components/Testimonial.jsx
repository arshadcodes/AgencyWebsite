const testimonials = [
    {
        name: "John Doe",
        role: "CEO, ExampleCorp",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "This company transformed our ideas into reality with professionalism and a keen understanding of our business needs. Highly recommended!"
    },
    {
        name: "Jane Smith",
        role: "CTO, InnovateTech",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Their team’s expertise in development and deployment exceeded our expectations. They provided end-to-end solutions that streamlined our process."
    },
    {
        name: "Michael Lee",
        role: "Product Manager, TechSolutions",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Amazing service! They understood our vision perfectly and helped us build a scalable product. We couldn’t have asked for better partners."
    }
];

const Testimonial = () => {
    return (
        <div className="bg-gray-50 py-12 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        We pride ourselves on delivering top-notch services. Here’s what our clients have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 dark:border-gray-500"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
