"use client"

import TopBar from "@/components/landing_page/TopBar"
import Footer from "@/components/landing_page/Footer"
import { useLocale } from "@/components/LocaleProvider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:vhenz@college.harvard.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('success');
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-160px)]">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-normal text-black mb-4">
            {t.contactTitle}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            {t.contactPageDesc}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t.name}</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={t.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
                className="border-2 border-black rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-black rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">{t.subject}</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder={t.subjectPlaceholder}
                value={formData.subject}
                onChange={handleChange}
                required
                className="border-2 border-black rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t.message}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="border-2 border-black rounded-lg resize-none"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700">
                Your email client should open shortly. If it doesn&apos;t, please email us directly at vhenz@college.harvard.edu
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg text-red-700">
                Something went wrong. Please try again or email us directly at vhenz@college.harvard.edu
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-black text-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150 text-base font-normal disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.sending : t.send}
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

