import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Haven School Safety Platform',
  description: 'Manage your school organization, staff, students, and incidents with Haven\'s comprehensive web dashboard. Coming soon.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.jpg" 
              alt="Haven" 
              width={48} 
              height={48}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-900">Haven</span>
          </Link>
          <Link 
            href="/"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Dashboard Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Dashboard Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            The Haven dashboard for managing your school organization is currently under development.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-12 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="flex gap-3 mb-4">
                  <div className="text-blue-600 text-2xl">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Organization Management</h3>
                    <p className="text-gray-600 text-sm">
                      Create and manage your school organization settings
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-3 mb-4">
                  <div className="text-blue-600 text-2xl">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Staff & Student Access</h3>
                    <p className="text-gray-600 text-sm">
                      Invite staff members and manage student records
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-3 mb-4">
                  <div className="text-blue-600 text-2xl">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Incident Tracking</h3>
                    <p className="text-gray-600 text-sm">
                      View, filter, and export all incident reports
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-3 mb-4">
                  <div className="text-blue-600 text-2xl">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Analytics & Insights</h3>
                    <p className="text-gray-600 text-sm">
                      Data-driven insights to improve school safety
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Want Early Access?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about Haven and get notified when the dashboard launches.
            </p>
            <Link 
              href="/#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
