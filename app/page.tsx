import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Placeholder for logo - will be replaced */}
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              SH
            </div>
            <span className="text-xl font-bold text-gray-900">Safe Haven</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition">Benefits</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Safe Haven
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-4">
          Keeping schools safe
        </p>
        <p className="text-xl text-blue-600 mb-12 font-medium">
          Be proactive, not reactionary
        </p>
        <div className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
          <p>
            Incident tracking and reporting for schools. Empower your staff to document, 
            track, and respond to incidents with a system designed for education.
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Request a Demo
          </a>
          <a 
            href="#features" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-blue-600"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Built for Schools
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Simple Incident Logging</h3>
            <p className="text-gray-600">
              Quick and intuitive forms help staff document incidents accurately, 
              capturing all essential details in real-time.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Track Trends & Patterns</h3>
            <p className="text-gray-600">
              Identify recurring issues and spot patterns before they escalate. 
              Data-driven insights help prevent future incidents.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Compliant</h3>
            <p className="text-gray-600">
              Your data is protected with industry-standard security. 
              GDPR-compliant and designed for educational institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Schools Choose Safe Haven
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Respond Faster</h3>
                <p className="text-gray-600">
                  Immediate notifications and streamlined workflows ensure swift response times.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Better Documentation</h3>
                <p className="text-gray-600">
                  Comprehensive records that stand up to scrutiny and support accountability.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Informed Decisions</h3>
                <p className="text-gray-600">
                  Analytics and reports help leadership make data-driven improvements.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Peace of Mind</h3>
                <p className="text-gray-600">
                  Know that every incident is tracked, managed, and appropriately handled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Get Started Today
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Ready to make your school safer? Contact us to learn more about Safe Haven 
            and schedule a demo for your institution.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  SH
                </div>
                <span className="text-lg font-bold">Safe Haven</span>
              </div>
              <p className="text-gray-400">Keeping schools safe</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">safehaven.dev</p>
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Safe Haven. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
