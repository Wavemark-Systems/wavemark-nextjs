export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm sm:text-base text-gray-600">
          © 2025 Vivien Henz Productions
        </p>
        <a 
          href="https://vivienhenz.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 hover:underline mt-1 inline-block"
        >
          vivienhenz.com
        </a>
      </div>
    </footer>
  );
}

