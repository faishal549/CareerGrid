const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
                    {/* Left - Branding */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-blue-400">CareerGrid</h2>
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
                    </div>

                    {/* Center - Navigation */}
                    <div className="flex gap-4 text-sm text-gray-300">
                        <a href="#" className="hover:text-white transition">Home</a>
                        <a href="#" className="hover:text-white transition">About</a>
                        <a href="#" className="hover:text-white transition">Contact</a>
                        <a href="#" className="hover:text-white transition">Privacy</a>
                    </div>

                    {/* Right - Credits */}
                    <div className="text-sm text-gray-400 text-center sm:text-right">
                        Built with ❤️ by Faishal
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
