const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-5 rounded-md">
      {/* Top section of the footer */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0 space-y-2">
          <h1 className="text-3xl font-bold">Elevatifier</h1>
          <p className="text-sm text-gray-400">Delivering excellence</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
      <hr className="my-6 border-t border-gray-700" />

      {/* Bottom section of the footer */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Elevatifier. All rights reserved.
        </div>
        <div className="mt-4 lg:mt-0">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Privacy Policy
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
