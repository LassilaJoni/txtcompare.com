export default function PrivacyPage() {
    return (
      <main className="container mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy for txtcompare.com</h1>
          <p className="text-sm text-gray-600">
            <strong>Effective Date:</strong> 23rd February 2025
          </p>
        </header>
  
        <section className="mb-6">
          <p className="mb-4">
            At txtcompare.com, we are committed to protecting your privacy. This Privacy Policy explains what information is collected when you use our website and how it is used.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Information We Do Not Collect</h2>
          <p className="mb-4">
            We do not collect, store, or process any personal data from our users. txtcompare.com does not require account registration, nor do we gather any information such as names, email addresses, or IP addresses.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Third-Party Services</h2>
          <p className="mb-4">
            Our website uses Google AdSense to serve advertisements. Google, as a third-party vendor, may use cookies to personalize ads based on users’ browsing behavior. These cookies enable Google and its partners to serve ads based on your visit to txtcompare.com and other sites on the internet.
          </p>
          <p className="mb-4">
            Google uses advertising cookies to show relevant ads.
          </p>
          <p className="mb-4">
            You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://adssettings.google.com"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>
          <p className="mb-4">
            For more information on how Google collects and processes data, please see{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google’s Privacy Policy
            </a>
            .
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Cookies</h2>
          <p className="mb-4">
            Since txtcompare.com only uses Google AdSense for advertisements, cookies may be placed on your browser to enhance ad personalization. You can manage or disable cookies through your browser settings.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. External Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to read their respective privacy policies before providing any information.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time. Any changes will be reflected on this page, and we recommend reviewing this policy periodically.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
          <p className="mb-4">
            If you have any questions regarding this Privacy Policy, you can contact us at:{" "}
            <a
              href="mailto:app@nordicprograms.com"
              className="text-blue-500 hover:underline"
            >
              app@nordicprograms.com
            </a>
          </p>
        </section>
  
        <footer>
          <p>
            By using txtcompare.com, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </footer>
      </main>
    );
  }
  