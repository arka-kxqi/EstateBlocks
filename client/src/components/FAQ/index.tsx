"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a decentralized website for property ownership?",
    answer:
      "A decentralized website for property ownership is a platform built on blockchain technology, enabling transparent and immutable records of property ownership through decentralized applications (DApps).",
  },
  {
    question: "Why use a decentralized website for property ownership?",
    answer:
      "Using a decentralized website ensures secure and tamper-proof property records, reducing the risk of fraud and providing trust among users. Additionally, it eliminates the need for intermediaries, resulting in lower transaction costs and faster processing times.",
  },
  {
    question:
      "Where does the concept of decentralized property ownership originate?",
    answer:
      "The concept of decentralized property ownership originates from the principles of blockchain technology, where data is stored on a distributed ledger, accessible to all participants of the network. This ensures transparency, security, and immutability of property records.",
  },
  {
    question: "What are the benefits of decentralized property ownership?",
    answer:
      "Decentralized property ownership offers numerous benefits, including increased transparency, reduced fraud, elimination of intermediaries, lower transaction costs, faster transactions, and global accessibility to property records.",
  },
  {
    question: "Is property ownership through DApps reliable?",
    answer:
      "Yes, property ownership through decentralized applications (DApps) is reliable due to the inherent features of blockchain technology, such as decentralization, immutability, and cryptographic security. Many decentralized websites are leveraging DApps to provide secure and efficient property ownership solutions.",
  },
];

const FAQ = () => {
  return (
    <div className="w-full flex flex-col gap-4 mx-4 my-16">
      <div className="w-[90%] mx-auto text-3xl font-[600]">
        <span className="px-4">-</span> FAQ's
      </div>
      <div className="w-full px-4">
        <div className="min-w-[90%] max-w-[840px] mx-auto">
          {faqData.map((faq, ind) => {
            return (
              <Disclosure as="div" key={ind} className={"w-full m-2  "}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full border-l-4 border-[#F24405]  justify-between bg-[#121212] px-6 py-4 text-left text-sm font-medium text-white  ">
                      <span>{faq.question}</span>
                      <IoIosArrowUp
                        className={`${
                          open ? "" : "rotate-180 transform"
                        } h-5 w-5 text-[#F24405]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-3 w-full text-sm text-gray-200">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
