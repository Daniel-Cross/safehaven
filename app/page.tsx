import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.jpg" 
              alt="Haven" 
              width={48} 
              height={48}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-900">Haven</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition">Benefits</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            <Link 
              href="/dashboard"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Haven
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-4">
          Keeping schools safe
        </p>
        <p className="text-xl text-blue-600 mb-12 font-medium">
          Be proactive, not reactionary
        </p>
        <div className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
          <p>
            The incident tracking platform helping schools reduce repeat behavioral incidents by up to 70%. 
            Identify at-risk students earlier, respond faster, and create a safer learning environment.
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

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Up to 70%</div>
                <div className="text-sm text-gray-600">Fewer repeat incidents through early intervention</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">3-5x Faster</div>
                <div className="text-sm text-gray-600">Response with complete behavioral history</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">10+ Hours</div>
                <div className="text-sm text-gray-600">Saved per week on documentation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            See Haven in Action
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            A mobile-first platform designed for teachers and staff to quickly document incidents and track student wellbeing.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[280px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/screenshot-1.jpg" 
                  alt="Haven mobile app dashboard showing weekly incident reports chart with positive and negative trends, student focus areas, and actionable insights for schools" 
                  width={300} 
                  height={649}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">Dashboard & Insights</h3>
              <p className="text-center text-gray-600 mt-2">
                Real-time trends and actionable insights at a glance
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[280px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/screenshot-2.jpg" 
                  alt="Haven analytics showing students needing attention, praise recommendations, location-based incident tracking, and subject-specific behavioral patterns for schools" 
                  width={300} 
                  height={649}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">Smart Analytics</h3>
              <p className="text-center text-gray-600 mt-2">
                Identify patterns and students who need attention
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[280px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/screenshot-3.jpg" 
                  alt="Haven mobile incident reporting form allowing teachers to quickly report behavioral issues or positive praise for students" 
                  width={300} 
                  height={649}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">Quick Reporting</h3>
              <p className="text-center text-gray-600 mt-2">
                Log incidents or positive praise in seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Dashboard Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Admin Dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Manage your school&apos;s staff, students, and incidents from a comprehensive web dashboard. 
              Import data, configure settings, and get a bird&apos;s-eye view of your school&apos;s wellbeing.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <Image 
              src="/screenshot-dashboard.jpg" 
              alt="Haven web admin dashboard for schools showing staff management, student overview with 36 enrolled students, 24 open incidents, and quick start options for importing data and organization settings" 
              width={1280} 
              height={720}
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Manage Staff & Students</h3>
              <p className="text-gray-600 text-sm">
                Centralized management for all users and students
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Bulk Import Data</h3>
              <p className="text-gray-600 text-sm">
                Import existing records from your student information system
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Custom Configuration</h3>
              <p className="text-gray-600 text-sm">
                Tailor incident types and rules to your school&apos;s needs
              </p>
            </div>
          </div>
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">Prevent Future Incidents</h3>
            <p className="text-gray-600">
              Spot patterns and identify at-risk students before issues escalate. 
              Early intervention leads to up to 70% fewer repeat incidents.
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
            Why Schools Choose Haven
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Stop Issues Before They Escalate</h3>
                <p className="text-gray-600">
                  Identify students needing support weeks earlier. Schools using Haven can achieve up to 70% fewer repeat behavioral incidents through proactive intervention.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Respond 3-5x Faster</h3>
                <p className="text-gray-600">
                  Complete behavioral history at your fingertips. Staff can intervene immediately with full context, preventing escalation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Save 10+ Hours Per Week</h3>
                <p className="text-gray-600">
                  Streamlined documentation and automated reporting. Spend less time on paperwork, more time supporting students.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-600 text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Data-Driven Decisions</h3>
                <p className="text-gray-600">
                  Spot patterns across locations, subjects, and time periods. Make informed improvements backed by evidence, not guesswork.
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
            Ready to make your school safer? Contact us to learn more about Haven 
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
              <div className="flex items-center gap-3 mb-2">
                <Image 
                  src="/logo.jpg" 
                  alt="Haven" 
                  width={40} 
                  height={40}
                  className="rounded-full"
                />
                <span className="text-lg font-bold">Haven</span>
              </div>
              <p className="text-gray-400">Keeping schools safe</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">safehaven.dev</p>
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Haven. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
