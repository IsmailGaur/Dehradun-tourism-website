import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-primary-foreground/90">Last updated: January 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dehradun Tourism ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, and other contact information you
                  voluntarily provide through our contact forms or newsletter subscription.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you access and use the website, including your IP
                  address, browser type, pages visited, and time spent on pages.
                </li>
                <li>
                  <strong>Cookies:</strong> Small files stored on your device that help us improve your experience and
                  analyze site traffic.
                </li>
              </ul>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you newsletters and promotional materials (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To analyze usage patterns and trends</li>
                <li>To protect against fraudulent or illegal activity</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>With service providers who assist us in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>With your consent for any other purpose</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Cookies Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website uses cookies to enhance your browsing experience. You can set your browser to refuse
                cookies, but some features of the website may not function properly without them.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of these external sites and encourage you to review their privacy policies.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <p className="text-foreground">
                  <strong>Dehradun Tourism</strong>
                  <br />
                  Rajpur Road, Near Clock Tower
                  <br />
                  Dehradun, Uttarakhand 248001
                  <br />
                  Email: privacy@dehraduntourism.gov.in
                  <br />
                  Phone: +91 135 2746 817
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
