const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="/features" className="text-gray-700 hover:text-gray-900">Features</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;