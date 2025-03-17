import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I register for MJPL?",
    answer: "You can register for MJPL by visiting our official website, www.mjpl.co.in, and following the registration process. Details are available under the ‘Registration’ section."
  },
  {
    question: "Is there a registration fee for MJPL?",
    answer: "Yes, a registration fee is applicable. You can check the Registration section on the website for updated details."
  },
  {
    question: "Can I register for MJPL if I'm not from India?",
    answer: "No, only players in India can register, as they must be physically present at the designated locations for trials and selection."
  },
  {
    question: "How will I know that I have been registered?",
    answer: "After registering on the website, all candidates will receive confirmation via SMS and email."
  },
  {
    question: "How can i contact customer support",
    answer: "You can reach out to us via email at info@macjhons.com"
  },
 
];

 function FaqBox() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className="lg:pl-24 py-10 p-4">
    <div>
        <h4 className="text-4xl mb-10 font-semibold"><span className="text-secondary">MacJhons </span>Frequently Ask Questions</h4>
    </div>
     <div className="max-w-xl">
      {faqs.map((faq, index) => (
        <div key={index} className="border-y border-collapse overflow-hidden">
          <button
            className={`w-full flex justify-between ${openIndex==index ? "bg-primary text-white" :"bg-white"} duration-300 items-center p-4`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
              <ChevronDown />
            </motion.div>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
          </motion.div>
        </div>
      ))}
    </div>
   </section>
  );
}


export default FaqBox