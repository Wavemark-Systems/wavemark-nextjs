export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-sm font-normal text-black mb-3">Neiom Systems</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Text-zu-Sprach Technologie fir Lëtzebuergesch. 
              Modern Léisungen fir Är Geschäft.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-normal text-black mb-3">Léisungen</h3>
            <ul className="space-y-2">
              <li><a href="/solutions/advertisements" className="text-xs text-gray-600 hover:text-black transition-colors">Reklammen</a></li>
              <li><a href="/solutions/accessibility" className="text-xs text-gray-600 hover:text-black transition-colors">Accessibilitéit</a></li>
              <li><a href="/solutions/announcements" className="text-xs text-gray-600 hover:text-black transition-colors">Ëffentlech Uweisungen</a></li>
              <li><a href="/solutions/call-centers" className="text-xs text-gray-600 hover:text-black transition-colors">Call Centers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-normal text-black mb-3">Firma</h3>
            <ul className="space-y-2">
              <li><a href="/company" className="text-xs text-gray-600 hover:text-black transition-colors">Iwwer eis</a></li>
              <li><a href="/careers" className="text-xs text-gray-600 hover:text-black transition-colors">Karriär</a></li>
              <li><a href="/login" className="text-xs text-gray-600 hover:text-black transition-colors">Umellen</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2025 Neiom Systems. All Rechter reservéiert.
          </p>
        </div>
      </div>
    </footer>
  );
}

