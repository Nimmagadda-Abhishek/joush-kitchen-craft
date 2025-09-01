import React from "react";

const TermsAndConditions = () => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-6 text-sm text-gray-600">Last Updated: {lastUpdated}</p>

      <section className="mb-6">
        <p>
          Welcome to Joushna Foods. These Terms & Conditions govern your use of our website
          <a href="https://www.joushnafoods.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            www.joushnafoods.in
          </a>{" "}
          and the purchase of products from us. By accessing or using our site, you agree to these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Products</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>We sell packaged snacks, sweets, and dry fruits.</li>
          <li>All products are prepared and packed in compliance with FSSAI regulations.</li>
          <li>Product images are for representation purposes only. Actual products may vary slightly.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Orders & Payments</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Orders are accepted online through our website.</li>
          <li>Payments must be completed before order confirmation.</li>
          <li>We reserve the right to cancel or refuse orders in case of incorrect pricing, stock unavailability, or suspicious activity.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Shipping & Delivery</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>We deliver across India through trusted courier partners.</li>
          <li>Delivery timelines may vary depending on your location.</li>
          <li>We are not responsible for delays caused by courier services or unforeseen events.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Returns & Replacements</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Due to the perishable nature of our products, no returns or replacements are allowed.</li>
          <li>In case of damaged or incorrect items, please contact us within 24 hours of delivery.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>We are not liable for any indirect, incidental, or consequential damages from using our products.</li>
          <li>Allergen information is provided where possible, but customers are responsible for checking ingredients.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
        <p>These Terms are governed by the laws of India.</p>
        <p>Any disputes will be subject to the jurisdiction of Hyderabad, Telangana courts.</p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
