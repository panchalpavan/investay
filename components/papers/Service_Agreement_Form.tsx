import React, { useRef } from "react";
import { ArrowLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import html2pdf from "html2pdf.js";
const Service_Agreement_Form = () => {
  const router = useRouter();
  const input = useRef(null);
  return (
    <div>
      <div className="px-6 mt-5 flex relative">
        <ArrowLeftIcon
          className="h-10 w-10 text-black cursor-pointer"
          onClick={() => router.back()}
        />
        <Link
          href="/assets/forms/Service-Agreement-Form.pdf"
          target={"_blank"}
          download={true}
        >
          <PrinterIcon
            // onClick={() => printRegistrationForm()}
            className="h-7 w-7 text-black absolute right-10 sm:right-16 lg:right-20  -bottom-[2rem] cursor-pointer"
          />
        </Link>
      </div>
      <div ref={input} className="px-10 md:px-16 lg:px-20">
        <p className="text-lg border-b-2 border-black pb-6">
          Service Agreement
        </p>
        <div className="mt-4">
          <p className="text-base">
            <span className="font-bold">Investay Realty Services LLP -</span>{" "}
            Real Estate Returns Maximized
          </p>
          <p className="text-base font-bold">Century Sales galleria</p>
          <p className="mt-1 text-sm">
            opposite Sahakar Nagar Cross, Hebbal, Banglore- 560092
          </p>
          <p className="mt-1 text-sm">
            T. +91 8044334464 www.investayrealty.com
          </p>
          <p className="text-center  my-10 uppercase text-lg font-bold">
            service agreement
          </p>
          <div className="flex items-center">
            <p className="ml-auto text-xs">Date:</p>
            <input
              type="text"
              className="border border-black outline-none mx-2 text-xs px-2"
            />
          </div>
          <p className="my-6 text-xs">
            This Service Agreement will cover entire details of the property for
            sale and we request our client to provide all the required details
            to ensure smooth sale of property.
          </p>
        </div>

        <div className="border border-black mt-8">
          <div className="flex items-center w-full px-4  border-b border-black">
            <div className="w-1/3 border-r border-black">
              <p className="text-sm py-2 ">First Name*</p>
            </div>
            <input
              type="text"
              className="border-none w-[66%] outline-none px-2 text-sm font-light"
            />
          </div>
          <div className="flex items-center w-full px-4 border-b border-black ">
            <div className="w-1/3 border-r border-black">
              <p className="text-sm py-2">Last Name*</p>
            </div>
            <input
              type="text"
              className="border-none w-[66%] outline-none px-2  text-sm font-light"
            />
          </div>
          <div className="flex items-center w-full px-4 border-b border-black">
            <div className="w-1/3 border-r border-black">
              <p className="text-sm py-2 ">Mobile Number*</p>
            </div>
            <input
              type="text"
              className="border-none w-[66%] outline-none px-2  text-sm font-light"
            />
          </div>
          <div className="flex items-center w-full px-4 border-b border-black">
            <div className="w-1/3 border-r border-black">
              <p className="text-sm py-2">Alternate Mobile Number</p>
            </div>
            <input
              type="text"
              className="border-none w-[66%] outline-none px-2  text-sm font-light"
            />
          </div>
          <div className="flex items-center w-full px-4 border-b border-black">
            <div className="w-1/3 border-r border-black">
              <p className="text-sm py-2 ">E-Mail ID*</p>
            </div>
            <input
              type="text"
              className="border-none w-[66%] outline-none px-2  text-sm font-light"
            />
          </div>
          <div className="flex items-center w-full px-4 border-b border-black">
            <div className="w-1/3 border-r border-black">
              <p className="text-sm py-2">Address of Property*</p>
            </div>
            <input
              type="text"
              className="border-none w-[66%] outline-none px-2  text-sm font-light"
            />
          </div>
          <div className="flex items-center w-full px-4 border-b border-black">
            <div className="w-1/3 border-r border-black">
              <p className="text-sm py-2">Current Address*</p>
            </div>
            <input
              type="text"
              className="border-none w-[66%] outline-none px-2  text-sm font-light"
            />
          </div>
          <div className="flex items-center w-full px-4 border-b border-black">
            <div className="w-1/3 border-r border-black">
              <p className="text-sm py-2">
                Resale/Rental
                <br />
                (mention any one)
              </p>
            </div>
            <input
              type="text"
              className="border-none w-[66%] outline-none px-2  text-sm font-light"
            />
          </div>

          <div className="flex items-center w-full px-4">
            <div className="w-1/3 border-r border-black">
              <p className="text-sm py-2">
                KYC (PAN/AADHAR NUMBER)*
                <br />
                Provide copy for same
              </p>
            </div>
            <input
              type="text"
              className="border-none w-[66%] outline-none px-2  text-sm font-light"
            />
          </div>
        </div>

        <p className="text-sm font-semibold mt-6">
          Terms & Conditions of this Contract
        </p>
        <p className="text-xs mt-2">
          <span className="font-semibold">
            1. Appointment as &lsquo;Exclusive Service Provider&rsquo;:
          </span>
          The Owner/s hereby appoints INVESTAY ashis/ her/their Exclusive
          Service Provider for the purpose of resale/ rental (as applicable) of
          Property.
        </p>
        <p className="mt-2 text-xs">
          <span className="font-semibold">2. Scope of Work:</span> It is agreed
          between the Parties that INVESTAY shall either through its employees
          or third party service providers, on best effort basis:
        </p>
        <div className="ml-4">
          <p className="text-xs mt-2">
            2.1. Assist and facilitate the Owner/s in identifying a suitable
            buyer(s)/ tenant(s) for the Property.
          </p>
          <p className="text-xs mt-2">
            2.2. At its sole discretion, use any or all media / online tools /
            platforms / any other mediumto display, disclose and advertise the
            details of the Property in order to gather maximum reach out to
            prospective buyer(s)/ tenant(s) with sole intention of getting
            optimum benefit on the Property to the Owner(s).
          </p>
          <p className="text-xs mt-2">
            2.3. Facilitate and arrange visits to the Property to various
            prospective buyer(s)/ tenant(s) on request.
          </p>
          <div className="html2pdf__page-break"></div>
          <p className="text-xs mt-2">
            2.4. Secure the best possible sale price/ rental value to the
            Property by negotiating with such prospective buyer(s)/ tenant(s)
            subject to minimum selling/ rental value (as applicable) as agreed
            between Investay and the owner(s).
          </p>
          <p className="text-xs mt-2">
            2.5. Collect from the prospective buyer a minimum of 10% (ten
            percent) of agreed sale value towards advance sale consideration,
            and arrange for execution of agreement of sale between the
            prospective buyer and the Owner(s) (Only in case of Sale).
          </p>
          <p className="text-xs mt-2">
            2.6. Collect from the prospective tenant(s) agreed value of the
            security deposit towards rental, and arrange for execution of rental
            agreement between the prospective tenant(s) and the Owner(s)
          </p>
          <p className="text-xs mt-2">
            2.7. Shall ensure the prospective buyer to complete the sale
            transaction within 3 (three) months from the date of agreement of
            sale (or within such time period mutually agreed at the time of
            signing of the said agreement of sale).
          </p>
          <p className="text-xs mt-2">
            2.8. Provide assistance in preparation of necessary legal
            documentation(s) including MOU/ agreement of sale/ sale deed/ rental
            agreement or such other document relating to the said transaction by
            whatsoever name called.
          </p>
          <p className="text-xs mt-2">
            2.9. Provide assistance in stamping/obtaining stamp paper for
            execution of such legal documentation at the cost of the Owner(s)/
            Buyer(s)/ Tenant(s) as may be agreed between the parties.
          </p>
          <p className="text-xs mt-2">
            2.10. Provide assistance in payment of statutory fees and completion
            of registration of the documents with the jurisdictional office of
            the Sub-registrar as regards the Proposed Transaction: to the
            authorities at the cost of the Owner(s)/ Buyer(s)/ Tenant(s) as may
            be agreed between the parties.
          </p>
          <p className="text-xs mt-2">
            It is expressly clarified and mutually agreed between the Parties
            that INVESTAY shall not be responsible for any additional scope of
            work outside the agreed scope of work as above.
          </p>
        </div>
        <p className="mt-2 text-xs">
          <span className="font-semibold">3. Mandate Period:</span> This
          Agreement shall be valid, binding and in force for a period of 90
          (ninety)days to 180 (one hundred and eighty) days (as applicable) from
          the effective date or completion of the Proposed Transaction,
          whichever is later. During the Mandate Period, the Owner(s) shall not
          appoint any other person/entity as their service provider for the
          resale/ Rent of the Property. In the event during the mandate period,
          if the Owner(s) agrees to sells/ rents the Property to any third party
          identified by Owner(s) either personally or through third party
          service provider(s), then the Owner(s) shall be liable to pay the
          Service charges as agreed upon in this agreement of INVESTAY.
        </p>
        <p className="mt-2 text-xs">
          <span className="font-semibold">4. Lock-in Period:</span> The entire
          Mandate Period shall be lock-in period for the Owner(s) and the
          Owner(s) shall not be entitled to terminate the Agreement during the
          Mandate Period (“Lock-in Period”). In the event the Owner(s) wishes to
          terminate the Agreement during the Lock-in Period, the Owner(s) will
          be liable to pay the entire Service Charges to INVESTAY as per Clause
          6 below.
        </p>
        <p className="mt-2 text-xs">
          <span className="font-semibold">5. Subscription Charges:</span> The
          Owner(s) shall deposit with INVESTAY a sum of = 5,000/- (Rupees Five
          Thousand only) as “Subscription Charges” on the Effective Date:
        </p>
        <div className="ml-4">
          <p className="text-xs mt-2">
            5.1. The Owner(s) have paid the said charges vide{" "}
            <span>
              <input
                type="text"
                className="border-b border-black mx-2 text-xs w-64 focus:outline-none"
              />
            </span>
            ,Bangalore. Subject to Clause 6 below, the entire Subscription
            Charges shall be refundable by INVESTAY to the Owner(s) within
            15(fifteen) days of expiry of the Mandate period: or
          </p>
        </div>
        <p className="text-xs mt-2 ml-4">
          5.2. The subscription charges are waived-off to the owner if he/she is
          an existing Century customer.
        </p>
        <p className="text-xs font-semibold mt-2">6. Service Charges:</p>
        <p className="mt-2 text-xs">
          <span className="font-semibold">
            6.1. Service Charges for Resale:
          </span>
          &nbsp;The Owner(s) agrees to pay to INVESTAY a sum equivalent{" "}
          <span>
            <input
              type="text"
              className="border-b border-black text-xs w-16 focus:outline-none"
            />
          </span>
          % (
          <span>
            <input
              type="text"
              className="border-b border-black text-xs w-16 focus:outline-none"
            />
          </span>{" "}
          percent) of actual sale value (“Resale Service Charges”), in the
          following manner:
        </p>
        <div className="ml-4">
          <p className="text-xs mt-2">
            6.1.1. A sum equivalent to 50% (fifty percent) of the Resale Service
            Charges immediately upon: receipt of Advance (defined below) by the
            Owner(s) from the buyer(s) of the Property.
          </p>
          <p className="text-xs mt-2">
            6.1.2. A sum equivalent to 50% (fifty percentile) of the remaining
            Resale Service Charges on the date of registration of the sale deed
            in relation to the Property.
          </p>
        </div>
        <p className="mt-2 text-xs">
          <span className="font-semibold">
            6.2. Service Charges for Rental:
          </span>{" "}
          The Owner(s) agrees to pay to INVESTAY a sum equivalent to. rental
          value of one month (“Rental Service Charges”)
        </p>
        <p className="mt-2 text-xs ml-4">
          6.2.1. A sum equivalent to 100% (hundred percent) of the Rental
          Service Charges immediately upon receipt of security deposit.
        </p>
        <div className="html2pdf__page-break"></div>
        <p className="mt-2 text-xs">
          <span className="font-semibold">
            6.3. Common Service Charges Terms:
          </span>{" "}
          The Subscription Charges and the Resale Service Charges/ Rental
          Service Charges (as applicable) are exclusive of applicable goods and
          services tax (“GST”). Applicable GST shall be payable by the Owner(s)
          in addition to the aforesaid charges.
        </p>

        <div className="ml-4">
          <p className="mt-2 text-xs">
            6.3.1. Both Subscription Charges and Resale Service Charges/ Rental
            Service Charges (as applicable) shall be paid by way of cheque/
            Demand Draft/ bank transfer/ online transfer in favor of INVESTAY
            REALTY SERVICES LLP. Details of Bank Acount of Investay:
          </p>
          <p className="text-xs mt-2">
            A/c Name:{" "}
            <span>
              <input
                type="text"
                className="text-xs border-b border-black w-64 focus:outline-none"
              />
            </span>
          </p>
          <p className="text-xs mt-2">
            A/c No:{" "}
            <span>
              <input
                type="text"
                className="text-xs border-b border-black w-64 focus:outline-none"
              />
            </span>
          </p>
          <p className="text-xs mt-2">
            Bank Name:{" "}
            <span>
              <input
                type="text"
                className="text-xs border-b border-black w-64 focus:outline-none"
              />
            </span>
          </p>
          <p className="text-xs mt-2">
            Bank Branch:{" "}
            <span>
              <input
                type="text"
                className="text-xs border-b border-black w-64 focus:outline-none"
              />
            </span>
          </p>
          <p className="text-xs mt-2">
            IFSC:{" "}
            <span>
              <input
                type="text"
                className="text-xs border-b border-black w-64 focus:outline-none"
              />
            </span>
          </p>
          <p className="mt-4 text-xs">
            6.3.2. In the event after identifying the prospective buyer/ tenant
            after executing the agreement of sale/ Rent Agreement, if the
            Owner(s) decline to sell/ rent the Property to the said prospective
            buyer/ tenant, then the Owner(s) shall be liable to pay the entire
            Resale Service Charges/ Rental Service Charges (as applicable) to
            INVESTAY.
          </p>
          <p className="mt-2 text-xs">
            6.3.3. In the event after executing the agreement of sale/ Rent
            Agreement, if the prospective buyer/ tenant declines to purchase/
            rent the Property, then from and out of the damages, if any paid by
            the said buyer/ tenant, the Owner/s shall pay the balance Resale
            Service Charges/ Rental Service Charges to INVESTAY.
          </p>
          <p className="mt-2 text-xs">
            6.3.4. In the event any prospective buyer/ tenant declines to
            purchase the Property for reasons attributable to misrepresentations
            or suppression of facts made by the Owner(s) under this Agreement,
            the Owner(s) shall be liable to pay the entire Resale Service
            Charges / Rental Service Charges to INVESTAY.
          </p>
          <p className="mt-2 text-xs">
            6.3.5. It is expressly agreed by the Owner(s) that the Resale
            Service Charges/ Rental Service Charges once paid shall not be
            refundable under any circumstances whatsoever.
          </p>
        </div>
        <p className="mt-2 text-xs">
          <span className="font-semibold">
            7. Owner(s)&rsquo;s Assurances, Covenants, Warranties and
            obligations.
          </span>{" "}
          The Owner(s) have made the following representations, assurances etc.,
          and undertakes to abide by the following terms and conditions in
          relation to the Proposed Resale/ Rent.
        </p>
        <p className="mt-2 text-xs">
          Notwithstanding anything contained herein to the contrary, the
          Owner(s) hereby:
        </p>
        <div className="ml-4">
          <p className="mt-2 text-xs">
            7.1. Covenants that he/she/they is/are the absolute and lawful
            Owner(s) of the Property having a : clear, legal and marketable
            title to the Property free from all encumbrances.
          </p>
          <p className="mt-2 text-xs">
            7.2. Covenants that he/she/they has/have not entered into any
            arrangement for a similar service in relation to the Property with
            any other person or entity.
          </p>
          <p className="mt-2 text-xs">
            7.3. Covenants that he/she/they has/have not entered into any
            agreement/agreement of sale, license, rent, lease etc., of the
            Property or any part thereof with any person/entity.
          </p>
          <p className="mt-2 text-xs">
            7.4. Agrees to abide by all the terms and conditions of this
            Agreement.
          </p>
          <p className="mt-2 text-xs">
            7.5. Agrees to hereby authorize INVESTAY to advertise, disclose,
            display the details of the Property as may be necessary to reach out
            to maximum number of prospective buyer(s)/ tenant(s) through various
            websites/ media/ platform at its sole discretion. The Owner(s)
            understands and agrees that this option granted to INVESTAY is with
            a sole intention to entitle INVESTAY to generate more leads and
            enquiries in relation to the Property for the benefit of Owner(s).
          </p>
          <p className="mt-2 text-xs">
            7.6. Hereby confers absolute rights to INVESTAY to arrange
            inspections and visits to Property by its; prospective buyers until
            the completion of the Proposed Transaction. In this regard the
            Owner(s) have handed over one set of keys to INVESTAY.
          </p>
          <p className="mt-2 text-xs">
            7.7. Hereby authorizes INVESTAY to handle end to end negotiations
            with the prospective buyer(s)/ tenant(s) including discussing and
            deciding sale consideration; payment terms and payment cycle(s);
            preparation of agreements, deeds, etc; procurement of stamp papers
            and facilitating execution and registration of the same; for and on
            behalf of the Owner(s). The Owner(s) hereby undertakes to come and
            execute the said deed(s) as and when intimated by INVESTAY.
          </p>
          <div className="html2pdf__page-break"></div>
          <p className="mt-2 text-xs">
            7.8. Understands and agrees that INVESTAY will undertake the
            aforementioned exercise for and on behalf of the Owner(s) with bona
            fide intention on a best effort basis and the final sale
            consideration is subject to various factors like location of the
            Property, nature of the Property, market trend, market demand, etc.,
            which neither INVESTAY nor the Owner(s) will have any control of.
          </p>
          <p className="mt-2 text-xs">
            7.9. Agrees to pay the Service Charges to INVESTAY in terms of
            Clause 6 above.
          </p>

          <p className="mt-2 text-xs">
            7.10. Hereby agrees that on and from the Effective Date, (i) not to
            entrust the agreed scope of work: or any portion of it to any other
            person or entity other than INVESTAY, (ii) not to solicit or
            encourage, discuss, negotiate or accept proposals or offers
            concerning the Property during the Mandate Period from any third
            party, (iii) that any breach in this regard will be a material
            breach of the Agreement, and (iv) Owner(s) shall pay the Resale
            Service Charges/ Rental Service Charges agreed hereunder during the
            Mandate Period even if the Owner(s) deals with the Property
            personally or through a third party in breach of this Agreement.
          </p>
          <p className="mt-2 text-xs">
            7.11. the Owner(s) shall furnish Property documents as set out in
            Annexure II for establishing clear, valid and marketable title (in
            case of Resale).
          </p>
          <p className="mt-2 text-xs">
            7.12. agrees to arrange for original documents inspection upon
            specific requests made by any prospective buyer(s) (in case of
            Resale), and
          </p>
          <p className="mt-2 text-xs">
            7.13. Affirms that Owner(s) have disclosed all material facts and/or
            defects in relation to the Property/documents in relation to the
            Property, pending litigations, threat of litigation or procedures,
            notices issued by any statutory authorities as and when received by
            the Owner(s) to INVESTAY and keep INVESTAY informed at all times
            about any new developments in relation to the Property prior to and
            during the Mandate Period.
          </p>
          <p className="mt-2 text-xs">
            714. The summary of property set out in Annexure Ill is correct in
            all manners.
          </p>
          <p className="mt-2 text-xs">
            7.15. Agrees to indemnify and keep indemnified INVESTAY at all times
            against any loss/ damage/ cost/ charge/ expense that INVESTAY incurs
            or suffers by any reason: (i) of any action or inaction, deed or
            thing done by the Owner(s), (ii) of Owner(s)&rsquo;s
            representations, covenants and warranties under this Agreement
            including regarding title being defective and other undisclosed
            material defects, and/or (iii) of use of the information or
            assistance provided under this Agreement.
          </p>
        </div>
        <p className="mt-2 text-xs">
          <span className="font-semibold">8. Rights of INVESTAY.</span>{" "}
          Notwithstanding anything contained herein to the contrary, the
          Owner(s) : hereby expressly agrees and accepts that INVESTAY is
          entitled to the following rights under this Agreement:
        </p>
        <div className="ml-4">
          <p className="text-xs mt-2">
            8.1. Receiving Resale Service Charges/ Rental Service Charges under
            this Agreement.
          </p>
          <p className="text-xs mt-2">
            8.2. Terminate the Agreement for any material breach by the Owner(s)
            or if any of the representations made by the Owner(s) to INVESTAY is
            found to be materially incorrect.
          </p>
          <p className="text-xs mt-2">
            8.3 In the event of any breach of the terms of this Agreement by the
            Owner(s), INVESTAY shall be entitled to enforce specific performance
            and also be entitled to recover all the losses and expenses incurred
            as consequence of such breach from the Owner(s).
          </p>
        </div>
        <p className="mt-2 text-xs font-semibold">9. Miscellaneous:</p>
        <div className="ml-4">
          <p className="text-xs mt-2">
            9.1. It is agreed between the Parties that subject to the Owner(s)
            complying with all the terms.
          </p>
          <p className="text-xs mt-2">
            9.2. Under this Agreement including the payment schedule, INVESTAY
            shall endeavor on best effort basis to complete the Proposed
            Transaction within the Mandate Period.
          </p>
          <p className="text-xs mt-2">
            9.3. The Parties confirm and acknowledge that this Agreement
            together with the schedules and annexures, if any shall constitute
            the entire agreement between them and shall supersede and override
            all previous communications, either oral or written, between the
            Parties with respect to the subject matter of this Agreement and no
            understanding varying or extending the same shall be binding upon
            any Party unless arising out of the specific provisions of this
            Agreement and is in writing.
          </p>
          <p className="text-xs mt-2">
            9.4. The terms contained in this Agreement intend to reflect the
            entire understanding of the Parties: and will be binding upon the
            Parties upon the execution of this Agreement and thus, impose legal
            binding obligations on the Parties. Either Party shall not cause any
            willful damage or loss to the Property during the Mandate Period.
          </p>
          <div className="html2pdf__page-break"></div>

          <p className="text-xs mt-2">
            9.5. If for any reason whatsoever, any provision of this Agreement
            is deemed invalid or unenforceable, the remainder of this Agreement
            shall be interpreted so as best to affect the intent of this
            Agreement.
          </p>
          <p className="text-xs mt-2">
            9.6. No indulgence, delay or relaxation on the part of the Parties
            hereto in enforcing any of the terms and conditions and these
            presents shall constitute a notice of waiver of breach of terms and
            conditions, nor shall it in anyway prejudice the rights of the
            Parties under these presents to any extent in any manner.
          </p>
          <p className="text-xs mt-2">
            9.7. All the responsibilities, clauses and conditions of this
            Agreement are obligatory. Any deviation! of the Owner(s) without
            express and written authorization from INVESTAY will have effect
            only through tolerance, and could never be regarded as agreed and
            Owner(s) to be adherent to all clauses and conditions requiring
            strict fulfillment.
          </p>
          <p className="text-xs mt-2">
            9.8. This Agreement may not be altered, amended, modified or
            otherwise changed in any way except by a written instrument signed
            by the Parties.
          </p>
        </div>
        <p className="mt-2 text-xs font-semibold">
          10. Jurisdiction And Dispute Resolution:
        </p>
        <div className="ml-4">
          <p className="mt-2 text-xs">
            10.1. The substantive laws of India shall apply to all judicial and
            quasi-judicial proceedings herein. The courts in Bangalore alone
            shall have jurisdiction in all matters relating to this Agreement.
          </p>
          <p className="mt-2 text-xs">
            10.2. It is agreed between the Parties that in the event of any
            dispute or difference of opinion, claims, or other questions
            whatsoever arising between the Parties relating to this Agreement or
            other documents and papers executed to be executed in pursuance
            hereof, the same shall be first mutually resolved between the
            Parties and in case if the Parties are unable to reach a consensus
            on the same, then it shall be referred to arbitration of a single
            arbitrator in accordance with and subject to the provisions of the
            Arbitration and Conciliation Act, 1996, or any statutory
            modification or re-enactment thereof for the time being in force.
            The seat of Arbitration shall be Bangalore and the proceedings shall
            be in English Language.
          </p>
          <p className="mt-2 text-xs">
            IN WITNESS WHEREOF, the Parties hereto have set their respective
            signatures to this Agreement on the day, month and year first here
            in above written before the following witnesses.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <div className="leading-10	">
            <p className="text-sm">Owner(s):</p>
            <input
              type="text"
              className="mt-2 text-sm focus:outline-none w-44 border-b border-black"
            />
            <p className="text-sm mt-2"> Name:</p>
            <p className="text-sm mt-2">
              Witness: 1.{" "}
              <span>
                <input
                  type="text"
                  className="text-sm border-b border-black w-44 focus:outline-none"
                />
              </span>
            </p>
          </div>
          <div className="leading-10	">
            <p className="text-sm">
              FOR INVESTAY REALTY SERVICES LLP, by its authorized signatory:
            </p>
            <input
              type="text"
              className="mt-2 text-sm focus:outline-none w-44 border-b border-black"
            />
            <p className="text-sm mt-2"> Name:</p>
            <p className="text-sm mt-2">
              2.{" "}
              <span>
                <input
                  type="text"
                  className="text-sm border-b border-black w-44 focus:outline-none"
                />
              </span>
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold">ANNEXURE - I</p>
        <p className="mt-2 text-sm font-semibold">(Description of Property)</p>

        <p className="text-xs mt-2">
          All that piece and parcel of the immovable property bearing Unit No.{" "}
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>
          municipal No.
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>
          (PID No.{" "}
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>
          ), measuring{" "}
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>{" "}
          square feet of super built-up area. situated in the
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>{" "}
          floor of the residential apartment building known as,
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-32"
            />
          </span>
          constructed on larger land bearing
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>
          No.
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>
          measuring about
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>
          , situated at
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-32"
            />
          </span>
          Village,
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>
          Hobli,
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>
          Taluk, Bangalore together with{" "}
          <span>
            <input
              type="text"
              className="text-xs border-b border-black focus:outline-none px-1 w-16"
            />
          </span>
          square feet of UDS in the said larger land and bounded on:
        </p>
        <div className="flex items-center justify-center  mt-3">
          <p className="text-xs ">East by:</p>
          <input
            type="text"
            className="font-light text-xs border-none outline-none flex-grow px-2"
          />
        </div>
        <div className="flex items-center justify-center  mt-3">
          <p className="text-xs ">West by:</p>
          <input
            type="text"
            className="font-light text-xs border-none outline-none flex-grow px-2"
          />
        </div>
        <div className="flex items-center justify-center  mt-3">
          <p className="text-xs ">North by:</p>
          <input
            type="text"
            className="font-light text-xs border-none outline-none flex-grow px-2"
          />
        </div>
        {/* <p className="text-xs mt-3">South by:</p> */}
        <div className="flex items-center justify-center  mt-3">
          <p className="text-xs ">South by:</p>
          <input
            type="text"
            className="font-light text-xs border-none outline-none flex-grow px-2"
          />
        </div>

        <div className="html2pdf__page-break"></div>

        <p className="mt-6 text-sm font-semibold">ANNEXURE - II</p>
        <p className="mt-2 text-sm font-semibold">
          (Property documents to be furnished by Owner)
        </p>

        <p className="mt-4 text-sm font-semibold">
          A. List of documents if the property was originally developed by
          CENTURY:
        </p>
        <div className="border border-black  mt-2 text-sm">
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">1</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Agreement of sale executed in relation to the Property.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">2</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Construction agreement executed in relation to the Property.
            </p>
            {/*    <div className="px-3 py-2 w-20 flex justify-center items-center">
                              <input type="checkbox" className="w-5  h-5 outline-none border-none accent-black" />
                        </div> */}
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">3</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Sale Deed / any other deed of conveyance under which the Owner/s
              came to acquire the right, title and interest to the Property.
            </p>
            {/*    <div className="px-3 py-2 w-20 flex justify-center items-center">
                              <input type="checkbox" className="w-5  h-5 outline-none border-none accent-black" />
                        </div> */}
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">4</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Khatha certificate of the Property in the name/s of the Owner/s.
            </p>
            {/*    <div className="px-3 py-2 w-20 flex justify-center items-center">
                              <input type="checkbox" className="w-5  h-5 outline-none border-none accent-black" />
                        </div> */}
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">5</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Khatha extract of the Property.
            </p>
            {/*    <div className="px-3 py-2 w-20 flex justify-center items-center">
                              <input type="checkbox" className="w-5  h-5 outline-none border-none accent-black" />
                        </div> */}
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">6</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Up-to-date taz paid receipts of the Property from the date of
              purchase from CENTURY.
            </p>
            {/*    <div className="px-3 py-2 w-20 flex justify-center items-center">
                              <input type="checkbox" className="w-5  h-5 outline-none border-none accent-black" />
                        </div> */}
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">7</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Encumbrance certificate from the date of purchase from CENTURY to
              date.
            </p>
            {/*    <div className="px-3 py-2 w-20 flex justify-center items-center">
                              <input type="checkbox" className="w-5  h-5 outline-none border-none accent-black" />
                        </div> */}
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">8</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Latest electricity bill, and paid receipt.
            </p>
            {/*    <div className="px-3 py-2 w-20 flex justify-center items-center">
                              <input type="checkbox" className="w-5  h-5 outline-none border-none accent-black" />
                        </div> */}
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">9</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Latest water bill and paid receipt, if applicable.
            </p>
            {/*    <div className="px-3 py-2 w-20 flex justify-center items-center">
                              <input type="checkbox" className="w-5  h-5 outline-none border-none accent-black" />
                        </div> */}
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">10</p>
            <p className="border-r border-black px-3 py-2 w-full">
              No Dues Certificate as regards maintenance charges etc issued by
              the apartment owners&rsquo; association for sale of the Property.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">11</p>
            <p className="border-r border-black px-3 py-2 w-full">
              No objection certificate issued by the apartment owners&rsquo;
              association for sale of the Property.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>

          {/* <div className="flex border-b border-black">
                        <p className="border-r  border-black w-16 py-2 text-center">12</p>
                        <p className="border-r border-black px-3 py-2 w-full">
                            Whether the Property is mortgaged with any Bank / financial
                            institute.
                        </p>
                           <div className="px-3 py-2 w-20 flex justify-center items-center">
                              <input type="checkbox" className="w-5  h-5 outline-none border-none accent-black" />
                        </div>
                    </div> */}
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">12</p>
            <div className="border-r border-black px-3 py-2 w-full">
              <p>
                {" "}
                Whether the Property is mortgaged with any Bank / financial
                institute.If yes to furnish
              </p>
              <p className="mt-2">a) Mortgage Deed</p>
              <p>
                b) Statement of Current outstanding issued by the said Bank /
                financial institute
              </p>
              <p>c) List of the documents mortgaged</p>
            </div>
            <div className="px-3 py-2 flex flex-col justify-center items-center gap-y-5 w-20">
              <input
                type="checkbox"
                className="w-5 h-5 outline-none border-none accent-black "
              />
              <input
                type="checkbox"
                className="w-5 h-5 outline-none border-none accent-black"
              />
              <input
                type="checkbox"
                className="w-5 h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">13</p>
            <p className="border-r border-black px-3 py-2 w-full">
              If the Property is tenanted, to furnish a copy of said Agreement.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">14</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Whether agreement/s of any nature entered into with any third
              parties (for sale/ service/ license etc). If yes, furnish a copy
              of same.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">15</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Details and documents concerning any past / existing litigation in
              relation to the Property or any portion of it.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex">
            <p className="border-r  border-black w-16 py-2 text-center">16</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Any other document/s as may be requested by INVESTAY / prospective
              buyer / legal counsel in relation to the Property.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
        </div>
        <div className="html2pdf__page-break"></div>

        <p className="mt-6 text-sm font-semibold">
          B. List of documents if the property is not developed by CENTURY:
        </p>
        <div className="border border-black  mt-2 text-sm">
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">1</p>
            <p className="border-r border-black px-3 py-2 w-full">
              All documents listed in section 'A'
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">2</p>
            <p className="border-r border-black px-3 py-2 w-full">
              All title and other documents pertaining to the Property prior to
              the date of purchase or acquiring ownership (along with Byelaws of
              Owners Association)
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">3</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Title report from the legal counsel directed INVESTAY.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">4</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Documents or clarifications as may be requested by the legal
              counsel issuing the title report.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex border-b border-black">
            <p className="border-r  border-black w-16 py-2 text-center">5</p>
            <p className="border-r border-black px-3 py-2 w-full">
              Whether the original documents of the project has been handed over
              to the Owners Association by the developer ?
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
          <div className="flex">
            <p className="border-r  border-black w-16 py-2 text-center">6</p>
            <p className="border-r border-black px-3 py-2 w-full">
              To arrange for inspection of original documents of the project.
            </p>
            <div className="px-3 py-2 w-20 flex justify-center items-center">
              <input
                type="checkbox"
                className="w-5  h-5 outline-none border-none accent-black"
              />
            </div>
          </div>
        </div>
        <p className="text-sm mt-2">
          Note: The list of documents above are not exhaustive. Any further
          documents as may be required by the prospective buyer/ tenant shall be
          provided to INVESTAY on request.
        </p>

        <p className="mt-6 text-sm font-semibold">ANNEXURE - III</p>
        <p className="mt-2 text-sm font-semibold">Property Summary Sheet</p>
        <p className="mt-2 text-sm">
          Please tick / fill the relevant box appropriately.
          <br />
          All fields are mandatory.
        </p>

        <div className=" mt-2 text-sm">
          <div className="flex border border-black text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">1</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3">Developer</p>
              <p className=" border-r border-black py-2 pl-3">CENTURY Group</p>
              <p className=" pl-3 py-2">Non-CENTURY Project (to specify)</p>
            </div>
          </div>
          <div className="flex border-b border-x border-black text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">2</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3">Project Name</p>
              <div className=" py-2 pl-3">
                <input
                  type="text"
                  className="w-full h-full border-none outline-none"
                />
              </div>
              {/* <div className=" pl-3 py-2">
                            </div> */}
            </div>
          </div>
          <div className="flex border-b border-x border-black text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">3</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Number of Owners
              </p>
              <div className=" py-2 pl-3">
                <input
                  type="text"
                  className="w-full h-full border-none outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">4</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Owner/s or GPA holder Name & contact details
              </p>
              <div className=" py-2 pl-3">
                <input
                  type="text"
                  className="w-full h-full border-none outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">5</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Whether mortgaged
              </p>
              <div className="col-span-2 flex pl-3 py-2">
                <input type="checkbox" />
                <label className="ml-2">YES</label>
                <input type="checkbox" className="ml-4" />
                <label className="ml-2">NO</label>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">6</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Khata in Owner/s name
              </p>
              <div className="col-span-2 flex pl-3 py-2">
                <input type="checkbox" />
                <label className="ml-2">YES</label>
                <input type="checkbox" className="ml-4" />
                <label className="ml-2">NO</label>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">7</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Tax paid for 2022-23
              </p>
              <div className="col-span-2 flex pl-3 py-2">
                <input type="checkbox" />
                <label className="ml-2">YES</label>
                <input type="checkbox" className="ml-4" />
                <label className="ml-2">NO</label>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">8</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Nature of property
              </p>
              <div className="col-span-2 flex flex-wrap pl-3 py-2">
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Apartment</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">Villa</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">Plot</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">Independent</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">Bungalow</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">Penthouse</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">9</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Type of Property
              </p>
              <div className="col-span-2 flex flex-wrap pl-3 py-2">
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Studio</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">1 BHK</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">2 BHK</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">3 BHK</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">4 BHK</label>
                </div>
                <div>
                  <input type="checkbox" className="ml-4" />
                  <label className="ml-2">5 BHK</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">10</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Area of Property (sft)
              </p>
              <div className="col-span-2 flex gap-12 items-center flex-wrap pl-3 py-2">
                <div>
                  <label className="mr-2">Super Built-up Area:</label>
                  <input
                    type="text"
                    className="max-w-[7rem] text-xs border-b border-b-black outline-none"
                  />
                </div>
                <div>
                  <label className="mr-2">Carpet Area:</label>
                  <input
                    type="text"
                    className="max-w-[7rem] text-xs border-b border-b-black outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="html2pdf__page-break"></div>
          <div className="flex border border-t-0 border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">11</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Status of Property (if resale)
              </p>
              <div className="col-span-2 flex flex-wrap gap-x-28  gap-y-5 pl-3 py-2">
                <div>
                  <div>
                    <input type="checkbox" />
                    <label className="ml-2">Ready-to-Occupy</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label className="ml-2">Under-construction</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label className="ml-2">Nearing completion</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label className="ml-2">More than 1 year to complete</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">12</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Interiors
              </p>
              <div className="col-span-2 flex flex-wrap gap-x-10 gap-y-2 pl-3 py-2">
                {/* <p>Not furnished</p> */}
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Not furnished</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Semi furnished</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Fully furnished</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">13</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Facing of property
              </p>
              <div className="col-span-2 flex flex-wrap gap-x-10 gap-y-2 pl-3 py-2">
                {/* <p>East</p> */}
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">East</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">West</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">North</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">South</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">14</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Years since completion
              </p>
              <div className="col-span-2 flex flex-wrap gap-x-10 gap-y-2 pl-3 py-2">
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Lesss than 1 year</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">2-4 years</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">5-9 years</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">10-15 years</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">15+ years</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">15</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                If completed, present status of property
              </p>
              <div className="col-span-2 flex flex-wrap gap-10 pl-3 py-2">
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Vaccant</label>
                </div>
                {/* <p>Self-occupied</p> */}
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Self-occupied</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Tenanted</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">16</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                If tenanted
              </p>
              <div className="col-span-2 flex flex-wrap gap-10 pl-3 py-2">
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">To be vacated prior to sale</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">To be vacated after sale</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Tenancy to be attorned</label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">17</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                If tenanted
              </p>
              <div className="col-span-2 flex flex-wrap gap-2 pl-3 py-2">
                <p>Security deposit amount paid by tenant:</p>
                <input
                  type="text"
                  className="border-b border-b-black outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">18</p>
            <div className="grid grid-cols-3 w-full">
              <p className=" border-r border-black py-2 pl-3 col-span-1">
                Location Limits of property
              </p>
              <div className="col-span-2 flex flex-wrap gap-10 pl-3 py-2">
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">BBMP</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Village panchayat</label>
                </div>
                <div className="flex gap-1">
                  {" "}
                  <p>Others</p>(Specify:
                  <input
                    type="text"
                    className="border-b border-black outline-none text-xs  "
                  />
                  )
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">19</p>
            <div className=" w-full">
              <p className=" py-2 pl-3 col-span-1">
                Available Amenties to the property:
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-5 pl-3 py-2">
                {/* <p>Lift</p> */}
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Lift</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Power Back-up</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Club House</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Swimming Pool</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Gym</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Covered car park</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Indoor game area</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Badmiton/Tennis</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Grocery store</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Pharmacy</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Salon/Spas</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Kids play area</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">Pets area</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" />
                  <label className="ml-2">No. of car parks</label>
                </div>
                <div className="flex gap-1">
                  {" "}
                  <p>Others</p>(Specify:
                  <input
                    type="text"
                    className="border-b border-black outline-none text-xs  "
                  />
                  )
                </div>
              </div>
            </div>
          </div>
          <div className="flex border-b border-x border-black text-sm ">
            <p className="border-r  border-black w-16 py-2 text-center">20</p>
            <div className=" w-full">
              <p className=" py-2 pl-3 col-span-1">
                List of snags in the property:
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-5 px-2 h-16">
                <input
                  type="text"
                  className="border-none outline-none w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="html2pdf__page-break"></div>
          <div className="flex border border-black  text-sm">
            <p className="border-r  border-black w-16 py-2 text-center">21</p>
            <div className=" w-full">
              <p className=" py-2 pl-3 col-span-1">
                List of things undertaken to be repaired / fixed by Owner/s
                prior to sale deed registration:
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-5 px-2 h-20">
                <input
                  type="text"
                  className="border-none outline-none w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm px-5 mt-5">
          Disclaimer: The information contained in this agreement is for general
          information purposes only. INVESTAY assumes no responsibility for
          errors or omissions in the contents of the Service. In no event shall
          INVESTAY be liable for any special, direct, indirect, consequential,
          or incidental damages or any damages whatsoever, whether in an action
          of contract, negligence or other tort, arising out of or in connection
          with the use of the Service or the contents of the Service. INVESTAY
          reserves the right to make additions, deletions, or modifications to
          the contents on the Service at any time with the consent of the
          owner(s). Use of the advice and information contained herein is at
          your sole choice and risk.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            html2pdf(input.current);
          }}
          className="bg-primaryColor text-black text-sm sm:text-base  lg:text-xl px-6 py-3 rounded-lg cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Service_Agreement_Form;
