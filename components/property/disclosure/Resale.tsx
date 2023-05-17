import React from "react";
import { Disclosure } from "@headlessui/react";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/20/solid";
export const Resale = () => {
  const data = [
    {
      question: "What is a resale property?",
      answer:
        "A resale home is a home that was purchased and is 'For Sale' by the initial buyer. A resale indicates that the property is being sold to someone new from someone who was assigned the same property before. Essentially, the resale property can either occur from the first allotted or the beneficiary who had bought the same from someone else previously. ",
    },
    {
      question: "What are the documents required for resale flat registration?",
      answer:
        " Depending on the state and region, you need everything from a sale deed, mother deed, Katha certificate, tax paid receipt, Katha certificate, occupation certificate, no objection certificate from the bank, society, maintenance office, Aadhar, etc.",
    },
    {
      question: "What are the charges for buying a resale flat?",
      answer:
        "The stamp duty charges for a resale flat generally varies between 2-8% of the gross deal value and the registration fee is usually 1% of the sale value.",
    },
    {
      question: "What are the pros and cons of buying a resale house?",
      answer:
        " A resale home comes at a lower cost, is ready-made, and you also get tax benefits like a new home. However, the resale property may also be old needing maintenance, may not be eligible for home insurance, and you have an added cost of constructing new amenities.",
    },
    {
      question:
        "What is the difference between long-term Capital Gains and short-term Capital Gains?",
      answer:
        "Short-term capital gain is one in which profit earned from the sale of the capital asset, is owned by the assessee for a period less than 36 months. Conversely, when the asset transferred is held by the assessee, for more than 36 months, the gain arising out of such transfer is termed as long-term capital gain.",
    },
    {
      question: "  How do you calculate the cost of a resale flat?",
      answer:
        "You can check the resale value of flats or old flats by applying the following formula: Value or resale flat = value of undivided share of land + depreciated value of building and amenities + value of overheads, expenses, etc.",
    },
    {
      question: "Is it worth to buy resale flat?",
      answer:
        "Nothing can be more profitable than purchasing a flat at a price much lesser than the market rate. Moreover, the resale flats are fully constructed and come with a ready-to-move-in tag. One of the biggest benefits that the resale apartments provide is the tax benefit after gaining possession.",
    },
    {
      question: "Is there any GST for resale flat?",
      answer:
        "According to the new GST tax structure, residential projects which have received a completion certificate, or ready to move in properties cannot be classified as a service. Hence there is no GST rate applicable in these cases. Therefore, in the case of resale of such properties, there will be no GST levied",
    },
    {
      question:
        " Which documents do I need to submit while applying for a home loan for a resale flat?",
      answer:
        "Agreement to Sell (ATS), Chain of Title or Sale Deed., NOC from the society or other concerned bodies., Share Certificates in case of societies, Title Report, Occupancy/Completion Certificate (OC), Encumbrance Certificate (EC).",
    },
    {
      question: "Is PMAY applicable for resale flat?",
      answer:
        " No, you cannot avail PMAY subsidy benefits for a resale flat as the scheme is applicable for the purchase or construction of new houses, extension or improvement of existing homes.",
    },
    {
      question: "Who should I contact in case I face any issues?  ",
      answer:
        " We have a dedicated team, which is available at your service 6 days a week from 10 am to 5 pm. You can call them on +91 80 4433 4464 or mail at enquiry@investayrealty.com",
    },
  ];
  return (
    <>
      <div className="mt-6">
        {data.map((questions, key) => {
          return (
            <Disclosure key={key}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex focus:outline-none mt-4 items-center">
                    <div>
                      {open ? (
                        <MinusSmallIcon className="h-6 w-6 " />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6 " />
                      )}
                    </div>
                    <div>
                      <p className="text-[12px] xxs:text-sm xs:text-base md_link:text-md text-start  italic ml-1 font-semibold">
                        {questions.question}
                      </p>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <p className="text-[12px] xxs:text-sm xs:text-base md_link:text-md text-start font-normal antialiased italic text-secondaryLightColor ml-5 xxs:ml-7">
                      {questions.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </>
  );
};
