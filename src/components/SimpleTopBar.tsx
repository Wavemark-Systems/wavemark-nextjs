import Link from "next/link"
import { useLocale } from "@/components/LocaleProvider"

export default function SimpleTopBar() {
  const { t } = useLocale();
  return (
    <nav className="w-full px-4 sm:px-8 lg:px-16 py-4 sm:py-6">
      <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-normal text-black hover:underline transition-all">
        {t.brand}
      </Link>
    </nav>
  )
}
