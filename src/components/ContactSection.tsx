import React, { useState } from "react";

export const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section
      className="py-20 lg:py-24 bg-[#f6f3ec] border-b border-[#c1c8c2]/20"
      id="contact"
    >
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C85A32] mb-3 block">
            Direct Concierge Desk
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#032517] mb-3 font-semibold">
            Get in Touch
          </h2>
          {/* <p className="text-[15px] text-[#424843] leading-relaxed max-w-lg mx-auto">
            Have questions about our signature packages or luxury vehicle fleet?
            Leave your details below and our team will get back to you promptly.
          </p> */}
        </div>

        {/* Simple Form Card */}
        <div className="bg-white rounded-2xl border border-[#c1c8c2]/40 p-6 sm:p-10 shadow-lg">
          {isSubmitted ? (
            <div className="text-center py-8 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#1b3b2b] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="material-symbols-outlined text-3xl">
                  check
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#032517] mb-2">
                Message Received
              </h3>
              <p className="text-sm text-[#424843] max-w-md mx-auto mb-6">
                Thank you,{" "}
                <strong className="text-[#032517]">
                  {name || "Valued Traveler"}
                </strong>
                . Our travel concierge team has received your message and will
                reach out via email or phone shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#1b3b2b] hover:bg-[#032517] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-[11px] font-bold uppercase text-[#424843] tracking-wider block mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-[#c1c8c2]/70 focus:border-[#1b3b2b] focus:ring-1 focus:ring-[#1b3b2b] text-[15px] text-[#1c1c18] bg-[#fcf9f2] outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[11px] font-bold uppercase text-[#424843] tracking-wider block mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-3 rounded-lg border border-[#c1c8c2]/70 focus:border-[#1b3b2b] focus:ring-1 focus:ring-[#1b3b2b] text-[15px] text-[#1c1c18] bg-[#fcf9f2] outline-none transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-[11px] font-bold uppercase text-[#424843] tracking-wider block mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98460 00000"
                  className="w-full px-4 py-3 rounded-lg border border-[#c1c8c2]/70 focus:border-[#1b3b2b] focus:ring-1 focus:ring-[#1b3b2b] text-[15px] text-[#1c1c18] bg-[#fcf9f2] outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] font-bold uppercase text-[#424843] tracking-wider block mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you are looking for..."
                  className="w-full px-4 py-3 rounded-lg border border-[#c1c8c2]/70 focus:border-[#1b3b2b] focus:ring-1 focus:ring-[#1b3b2b] text-[15px] text-[#1c1c18] bg-[#fcf9f2] outline-none transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center h-11 sm:h-12 px-4 sm:px-6 bg-primary-container text-on-primary  uppercase tracking-wider hover:bg-secondary transition-colors duration-150 border-0 cursor-pointer whitespace-nowrap text-xs sm:text-sm font-semibold"
                >
                  {isSubmitting ? <span>Sending...</span> : <span>Submit</span>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
