import React, { useState } from "react";
import { FAQS_DATA } from "../data/engineeringData.ts";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="w-full bg-surface border-b border-outline-variant py-20"
      aria-labelledby="faq-section-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="text-center mb-12">
          <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
            STATUTORY &amp; TECHNICAL FAQ
          </span>
          <h2
            id="faq-section-heading"
            className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight mb-4"
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Technical answers regarding GCC climate adaptation, BIM LOD 400
            requirements, municipal authority approvals, and emergency SLA
            response.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="border border-outline-variant bg-surface-container-lowest transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-secondary"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    {/* <span className="font-tech-data text-xs text-secondary font-bold uppercase whitespace-nowrap">
                      {faq.category}
                    </span> */}
                    <span className="font-tech-index text-base sm:text-lg font-bold text-primary">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className="material-symbols-outlined text-secondary text-2xl shrink-0 transition-transform duration-200"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-6 pb-6 pt-2 border-t border-outline-variant/40"
                  >
                    <p className="font-body-md text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
