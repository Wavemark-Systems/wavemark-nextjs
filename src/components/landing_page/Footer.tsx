"use client"

import { useLocale } from "@/components/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  
  return (
    <footer className="w-full border-t border-gray-200 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-4 sm:mb-6">
          <div>
            <h3 className="text-sm font-normal text-black mb-2 sm:mb-3">{t.brand}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {t.footerTagline}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-normal text-black mb-2 sm:mb-3">{t.solutions}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="/solutions/advertisements" className="text-xs text-gray-600 hover:text-black transition-colors">{t.advertisements}</a></li>
              <li><a href="/solutions/accessibility" className="text-xs text-gray-600 hover:text-black transition-colors">{t.accessibility}</a></li>
              <li><a href="/solutions/announcements" className="text-xs text-gray-600 hover:text-black transition-colors">{t.announcements}</a></li>
              <li><a href="/solutions/call-centers" className="text-xs text-gray-600 hover:text-black transition-colors">{t.callCenters}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-normal text-black mb-2 sm:mb-3">{t.company}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="/company" className="text-xs text-gray-600 hover:text-black transition-colors">{t.aboutUs}</a></li>
              <li><a href="/careers" className="text-xs text-gray-600 hover:text-black transition-colors">{t.careers}</a></li>
              <li><a href="/login" className="text-xs text-gray-600 hover:text-black transition-colors">{t.login}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-4 sm:pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2025 {t.brand}. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}

