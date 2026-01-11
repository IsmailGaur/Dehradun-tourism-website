import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-primary-foreground/90">Last updated: January 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By accessing and using the Dehradun Tourism website, you accept and agree to be bound by these Terms and
                Conditions. If you do not agree with any part of these terms, please do not use our website.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use this website only for lawful purposes and in a way that does not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Infringe the rights of others</li>
                <li>Restrict or inhibit anyone else's use of the website</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All content on this website, including text, graphics, logos, images, and software, is the property of
                Dehradun Tourism or its content suppliers and is protected by copyright and other intellectual property
                laws. You may not reproduce, distribute, or create derivative works without our express written
                permission.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Information Accuracy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While we strive to provide accurate and up-to-date information about tourist attractions, events, and
                services in Dehradun, we make no warranties about the completeness, reliability, or accuracy of this
                information. Travel details such as timings, entry fees, and availability may change without notice. We
                recommend verifying information before planning your visit.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our website may contain links to third-party websites for your convenience. These links do not imply
                endorsement, and we are not responsible for the content, privacy practices, or accuracy of external
                websites. Access third-party sites at your own risk.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">User Submissions</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Any feedback, reviews, suggestions, or other submissions you provide through our website become our
                property. We may use, reproduce, modify, and distribute such submissions without compensation to you.
                You represent that your submissions do not violate any third-party rights.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dehradun Tourism shall not be liable for any direct, indirect, incidental, special, or consequential
                damages arising from your use of or inability to use this website, even if we have been advised of the
                possibility of such damages. This includes damages from errors, omissions, viruses, or interruptions in
                service.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You agree to indemnify and hold harmless Dehradun Tourism, its affiliates, officers, and employees from
                any claims, damages, or expenses arising from your use of the website or violation of these terms.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These Terms and Conditions are governed by and construed in accordance with the laws of India. Any
                disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in
                Dehradun, Uttarakhand.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                immediately upon posting on this page. Your continued use of the website constitutes acceptance of the
                modified terms.
              </p>

              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <p className="text-foreground">
                  <strong>Dehradun Tourism</strong>
                  <br />
                  Rajpur Road, Near Clock Tower
                  <br />
                  Dehradun, Uttarakhand 248001
                  <br />
                  Email: legal@dehraduntourism.gov.in
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
