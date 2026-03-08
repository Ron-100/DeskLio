import { Link } from "react-router-dom";
import Container from "../layout/Container";

function Root() {

  const testimonials = [
    {
      text: "This platform completely transformed our workflow. We're shipping 3x faster now.",
      author: "Sarah Chen",
      role: "CTO at TechCorp",
      avatar: "https://picsum.photos/200?random=70",
      company: "TechCorp",
    },
    {
      text: "The best investment we've made. ROI was positive within the first month.",
      author: "Michael Rodriguez",
      role: "CEO at StartupXYZ",
      avatar: "https://picsum.photos/200?random=71",
      company: "StartupXYZ",
    },
    {
      text: "Incredible support team and feature set. Highly recommend to any growing business.",
      author: "Emily Johnson",
      role: "Product Manager",
      avatar: "https://picsum.photos/200?random=72",
      company: "InnovateLab",
    },
  ];

  const companies = [
    { name: "Microsoft", logo: "M" },
    { name: "Google", logo: "G" },
    { name: "Apple", logo: "A" },
    { name: "Meta", logo: "f" },
    { name: "Tesla", logo: "T" },
  ];

  return (
    <Container>
        <section className="relative w-full h-full bg-white dark:bg-(--zdark-color)">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-15 pb-20">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-8">
                🚀 Trusted by 10,000+ Freelancers & Teams
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Built for
                <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}
                    Modern Workspaces
                </span>
                <br />
                Like Yours
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                DeskLio helps freelancers, agencies, and growing teams manage
                clients, track projects, and deliver results — all from one
                powerful dashboard.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <Link to='/sign-login' className="cursor-pointer px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                    Start Managing Smarter
                </Link>
                <button className="px-8 py-4 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 font-semibold rounded-lg transition-colors duration-200">
                    See How It Works
                </button>
                </div>
            </div>

            <div className="mb-16">
                <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-white mb-8">
                Powering productive teams worldwide
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {companies.map((company, index) => (
                    <div key={index} className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-gray-700 dark:text-gray-300">
                        {company.logo}
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {company.name}
                    </span>
                    </div>
                ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "DeskLio transformed how we manage clients and deadlines.
                    Everything is organized, clear, and easy to track."
                    </p>
                    <div className="flex items-center gap-3">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                        Agency Owner
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    </Container>
  );
}

export default Root;
