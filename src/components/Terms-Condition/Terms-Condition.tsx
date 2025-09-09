"use client";

import PageBaner from "@components/PageBaner/PageBaner";
import "./Terms-Condition.css";

const TermsCondition:React.FC = () => {
  return (
  <>
    <PageBaner heading={"Terms of Use"} />
    <section className="terms-section section py-5">
      <div className="container">
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-lg-6 terms-text">
            <h2 className="site-url">Terms of Use for www.vjcs.com</h2>

            <p>
              This Website and the information, tools, and material contained in it
              are not directed to, or intended for distribution to or use by, any
              person or entity who is a citizen or resident of or located in any
              jurisdiction where such distribution, publication, availability or use
              would be contrary to law or regulation or which would subject VJ
              Coresoft Pvt. Ltd. (“VJCS”) to any registration or licensing requirement
              within such jurisdiction.
            </p>

            <p className="highlight">
              This web site is subject to periodic update and revision. Materials
              should only be considered current as of the date of initial publication
              appearing thereon. VJCS maintains the right to delete or modify
              information on this web site without prior notice.
            </p>

            <h5>Limited License</h5>
            <p>
              Subject to the terms and conditions set forth in these “Terms of Use”,
              VJCS grants you a non-exclusive, non-transferable, limited right to
              access, use and display this site and the materials thereon.
            </p>

            <p>You hereby agree and confirm:</p>
            <ul>
              <li>Access to this web site and the information contained herein is not unlawful under applicable laws.</li>
              <li>Not to circulate copies of this information in any manner (including photocopying and email).</li>
              <li>Not to reproduce, retransmit, distribute, disseminate, sell, publish, broadcast or circulate the contents.</li>
              <li>Not to interrupt or attempt to interrupt the operation of this web site in any way.</li>
              <li>Not to intrude or attempt to intrude into this web site in any way.</li>
              <li>Not to post any obscene, defamatory or annoying materials.</li>
              <li>Not to obscure any materials, including this notice, already posted.</li>
              <li>Not to use the web site or its contents to defame, intimidate, annoy or cause nuisance.</li>
            </ul>

            <h5>Third Party Content</h5>
            <p>
              The VJCS Web Site makes information of third parties available, including
              articles, analyst reports, news reports, tools to facilitate calculation,
              company information and data about financial markets. You acknowledge
              and agree that the Third Party Content is not created or endorsed by
              VJCS. The provision of Third Party Content is for informational purposes
              only and VJCS makes no guarantees about accuracy or completeness.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 terms-text">
            <h5>No Warranties</h5>
            <p>
              This web site, the information and materials on this web site, are
              provided without any representation or warranty, express or implied.
              There is no warranty of any kind, including merchantability or fitness
              for purpose. Some jurisdictions do not allow the exclusion of implied
              warranties, so the above exclusions may not apply to you.
            </p>

            <h5>International Users and Choice of Law</h5>
            <p>
              The foregoing are subject to the laws of the Republic of India and the
              courts in Pune, India shall have the exclusive jurisdiction on any
              dispute that may arise out of the use of this site.
            </p>

            <p className="highlight">
              Please proceed only if you accept all the conditions enumerated herein
              above, out of your free will and consent.
            </p>

            <h5>Limitation of Damages</h5>
            <p>
              In no event shall VJCS and/or its subsidiaries be liable for any direct,
              indirect, punitive, incidental, special, consequential damages or any
              damages whatsoever including, without limitation, damages for loss of
              use, data or profits, arising out of or in any way connected with the
              use or performance of this web site/services.
            </p>

            <h5>Disclaimer</h5>
            <p>
              The web site may contain inaccuracies and typographical errors. VJCS
              expressly disclaims any obligation to update this site. VJCS reserves
              the right to correct errors or omissions, and to make changes to the
              site, the materials and the products, programs, or services described
              without notice.
            </p>

            <h5>Changes</h5>
            <p>
              VJCS reserves the rights, at its sole discretion, to change, modify, add
              or remove any portion of these “Terms of Use” at any time. Continued use
              of the site after such changes means you accept those changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default TermsCondition;
