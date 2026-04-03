import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy – Ivoiretissue",
  description: "Privacy Policy and Corporate Policies of Ivoire Tissue Paper.",
};

export default function PolicyPage() {
  return (
    <div className="bg-white w-full pb-20">
      {/* 页面标题区 */}
      <section className="bg-gray-50 py-16 text-center border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-wide">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* 政策条款正文区 */}
      <section className="container mx-auto px-6 max-w-4xl mt-12">
        <div className="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">
          {/* Intro */}
          <p>
            Welcome to the Ivoire Tissue website at
            <a
              href="https://www.ivoiretissue.com"
              className="text-[#00a698] hover:underline ml-1"
            >
              https://www.ivoiretissue.com
            </a>{" "}
            (the “Website”), which includes all present and future subdomains
            and sub-pages, including but not limited. We are delighted that you
            have chosen to visit us and use the Website. Ivoire Tissue takes
            your privacy and security of Personal Information very seriously. We
            have provided and will continue to provide a secure environment and
            this strict Privacy Policy (the “Policy”) that describes the limited
            ways your information is used and the limited access to such
            information. We ask that you read it carefully.
          </p>

          {/* About Us */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">
              About Us and Contacting Us
            </h2>
            <p className="mb-4">
              The Website is owned and operated by Ivoire Tissue Corporation., a
              duly corporate company in the Province of Quebec, Canada, with an
              office at the address listed below.
            </p>
            <p className="mb-4">
              The present Policy refers to “Ivoire Tissue” they may refer to
              Ivoire Tissue Corp. and/or its affiliates, subsidiaries, and
              divisions and their respective shareholders, officers, directors,
              employees, agents, partners, principals, representatives,
              successors, and assigns (collectively “Representatives”),
              depending on the context, and in the context Ivoire Tissue. Any
              reference to “we”, “our”, or “us” in this Policy shall also refer
              to Ivoire Tissue Paper. In this Policy a website visitor or user
              may be referred to as “you” or “your”.
            </p>
            <p className="mb-4">
              The Policy should be read in conjunction with the Terms of Use, as
              both these documents govern your use of the Website.
            </p>
            <p className="mb-4">
              If you want to ask us anything about the content of this Policy,
              or any questions related to our processing of your Personal
              information, or to exercise any of your available privacy rights,
              you can contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-md border border-gray-100 text-sm md:text-base">
              <p className="font-semibold text-gray-900 mb-2">
                Person in charge of the Protection of Personal Information at
                Ivoire Tissue Administration:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:admin@ivoiretissue.com"
                  className="text-[#00a698] hover:underline"
                >
                  admin@ivoiretissue.com
                </a>
              </p>
              <p>
                <strong>Or:</strong> 222 Rue Poirier, Saint-Eustache, Québec
                Canada, J7R 6B1
              </p>
            </div>
          </div>

          {/* Corporate Policies */}
          <div className="space-y-6 pt-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Environmental Policy:
              </h3>
              <p>
                Ivoire Tissue Paper is committed to minimizing its environmental
                footprint by prioritizing sustainable practices throughout its
                operations. This includes sourcing raw materials responsibly,
                reducing energy consumption, minimizing waste generation, and
                implementing recycling initiatives. The company pledges to
                continually improve its environmental performance and comply
                with all relevant environmental regulations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quality Assurance Policy:
              </h3>
              <p>
                Ivoire Tissue Paper maintains stringent quality control measures
                to ensure that all its products meet or exceed industry
                standards and customer expectations. This involves rigorous
                testing of raw materials, regular inspections of manufacturing
                processes, and thorough quality checks of finished products. The
                company is dedicated to delivering consistently high-quality
                paper products that are reliable, safe, and satisfactory to
                customers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Ethical Sourcing Policy:
              </h3>
              <p>
                Ivoire Tissue Paper is committed to ethical sourcing practices
                and upholding the rights and well-being of workers throughout
                its supply chain. The company only partners with suppliers who
                adhere to fair labor standards, ensure safe working conditions,
                and respect human rights. Ivoire Tissue Paper conducts regular
                audits and evaluations of its suppliers to ensure compliance
                with these ethical standards. Health and Safety Policy: Ivoire
                Tissue Paper prioritizes the health and safety of its employees,
                customers, and the public. The company maintains a safe working
                environment by identifying and mitigating potential hazards,
                providing comprehensive training on safety procedures, and
                promoting a culture of accountability and responsibility. Ivoire
                Tissue Paper complies with all relevant health and safety
                regulations and continuously seeks to improve its practices in
                this area.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Customer Satisfaction Policy:
              </h3>
              <p>
                Ivoire Tissue Paper is dedicated to achieving customer
                satisfaction by providing exceptional products and services. The
                company values customer feedback and actively seeks
                opportunities to enhance the customer experience. Ivoire Tissue
                Paper resolves customer concerns promptly and courteously,
                striving to exceed customer expectations at every opportunity.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Community Engagement Policy:
              </h3>
              <p>
                Ivoire Tissue Paper is committed to being a responsible
                corporate citizen and actively engages with the communities in
                which it operates. The company supports local initiatives,
                contributes to charitable causes, and participates in community
                events. Ivoire Tissue Paper seeks to build positive
                relationships with stakeholders and make a meaningful difference
                in the communities it serves. These policies reflect Ivoire
                Tissue Paper’s commitment to environmental sustainability,
                product quality, ethical business practices, workplace safety,
                customer satisfaction, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
