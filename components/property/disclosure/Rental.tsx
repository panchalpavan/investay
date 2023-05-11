import React from "react";
import { Disclosure } from "@headlessui/react";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/20/solid";
export const Rental = () => {
  const data = [
    {
      question: "What if I have to back out of my rental agreement?",
      answer:
        "You can back out of the lease, only if both parties agree and sign and legally end the lease.",
    },
    {
      question: " How can I change the terms of my rental agreement?",
      answer:
        " If you are the landlord of the property, you are allowed to change terms, conditions and clauses of the rental agreement, but only with 30 days prior notice. However, if you have mentioned changing of terms and conditions in your agreement, then you can also give 7-8 days’ notice.",
    },
    {
      question: "What if I make my own rental agreement?",
      answer:
        "There is nothing stopping you from writing your own rental agreement, so as long as both parties are present while doing so. However, it is more advisable to consult a lawyer, as they will provide more security and will know all the legalities that might come along.",
    },
    {
      question: " Who keeps the original rental agreement?",
      answer:
        "In all cases, the landlord of the property keeps the original copy. But you can always ask for a copy. If you are also using a lawyer, she or he will also have a copy of the rental agreement that was used.",
    },
    {
      question: " What payment methods will you accept for rent?",
      answer:
        "Landlords are allowed to designate which forms of payments they will accept, but the best landlords make it easy for a tenant to pay. Landlords who only accept cash should be avoided at all cost. Online payments are the best way to pay rent (in our opinion), because it allows for automation, security, and convenience for both tenant and landlord.",
    },
    {
      question: "  How to handle pet issues in rental property?",
      answer:
        " Many landlords simply advertise their vacancies as “no pets allowed” and then handle exceptions on a case-by-case basis. If there is a pet policy, will make sure we will inform in advance. ",
    },
    {
      question: " Who should I contact in case I face any issues?",
      answer:
        "We have a dedicated team, which is available at your service 6 days a week from 10 am to 5 pm. You can call them on +91 80 4433 4464 or mail at enquiry@investayrealty.com",
    },
  ];
  return (
    <div className="mt-6">
      {data.map((questions, key) => {
        return (
          <Disclosure key={key}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex focus:outline-none items-center mt-4 ">
                  <div>
                    {open ? (
                      <MinusSmallIcon className="h-6 w-6 " />
                    ) : (
                      <PlusSmallIcon className="h-6 w-6 " />
                    )}
                  </div>
                  <div>
                    <p className="text-[12px] xxs:text-sm xs:text-base md_link:text-md text-start  italic ml-1 font-semibold">
                      {questions?.question}
                    </p>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p className="text-[12px] xxs:text-sm xs:text-base md_link:text-md text-start font-normal antialiased italic text-secondaryLightColor ml-5 xxs:ml-7">
                    {questions?.answer}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};
