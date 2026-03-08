function Footer() {
    return (
        <footer className="relative bg-gray-50 dark:bg-(--zdark-color) border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
            {/* 🔥 Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo + About */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Desk<span className="text-[#155DFC]">Lio</span>
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                DeskLio helps freelancers and teams manage clients, organize
                projects, and deliver work faster — all in one powerful workspace.
                </p>
            </div>

            {/* Product */}
            <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                Product
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Features
                </li>
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Pricing
                </li>
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Integrations
                </li>
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Updates
                </li>
                </ul>
            </div>

            {/* Company */}
            <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                Company
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    About
                </li>
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Blog
                </li>
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Careers
                </li>
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Contact
                </li>
                </ul>
            </div>

            {/* Legal */}
            <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                Legal
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Privacy Policy
                </li>
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Terms of Service
                </li>
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Security
                </li>
                <li className="hover:text-[#155DFC] cursor-pointer transition">
                    Cookies
                </li>
                </ul>
            </div>
            </div>

            {/* 🔥 Divider */}
            <div className="mt-16 border-t border-gray-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} DeskLio. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-gray-500 dark:text-gray-400">
                <span className="hover:text-[#155DFC] cursor-pointer transition">
                Twitter
                </span>
                <span className="hover:text-[#155DFC] cursor-pointer transition">
                LinkedIn
                </span>
                <span className="hover:text-[#155DFC] cursor-pointer transition">
                GitHub
                </span>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
