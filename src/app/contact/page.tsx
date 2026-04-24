"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { MdEmail, MdAddCall, MdLocationOn } from "react-icons/md";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MdAddCall className="text-3xl" />,
      title: "Call Us",
      details: "+91 89496 94018",
      sub: "Mon - Sat, 9am - 7pm",
      color: "bg-mint/10 text-mint",
    },
    {
      icon: <MdEmail className="text-3xl" />,
      title: "Email Us",
      details: "contact@jyotirgamya.com",
      sub: "Online support 24/7",
      color: "bg-indigo/10 text-indigo",
    },
    {
      icon: <MdLocationOn className="text-3xl" />,
      title: "Visit Us",
      details: "Main Center, Rajasthan",
      sub: "Map coordinates coming soon",
      color: "bg-charcoal/10 text-charcoal",
    },
  ];

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async () => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    
    const formData = new FormData(form);
    formData.append("access_key", "f2a5478c-4b9d-4858-bc1d-afcf5117b6a0");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();
      
      if (response.status === 200 || data.success) {
        setIsSubmitted(true);
      } else {
        console.error("Error submitting form:", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen pt-32 pb-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-indigo uppercase tracking-widest font-semibold text-sm mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-charcoal mb-8"
          >
            Let's Start a <span className="italic">Conversation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl font-light leading-relaxed"
          >
            Whether you have questions about our services or want to book a session, we’re here to listen and help.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-premium transition-all duration-500 hover:shadow-xl group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal font-bold mb-1">{item.details}</p>
                <p className="text-gray-400 text-sm">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-premium border border-gray-50 flex flex-col relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  id="contact-form"
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-8 flex-grow" 
                >
                  {/* Web3Forms required hidden fields */}
                  <input type="hidden" name="from_name" value="Jyotirgamya Website" />
                  <input type="hidden" name="subject" value="New Contact Form Submission" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-xs uppercase tracking-widest text-gray-400 font-bold ml-1">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Enter your name" 
                        className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo transition-all"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs uppercase tracking-widest text-gray-400 font-bold ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="Enter your email" 
                        className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold ml-1">Inquiry Type</label>
                    <select name="inquiry_type" className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo transition-all appearance-none cursor-pointer">
                      <option value="Career Counselling Inquiry">Career Counselling Inquiry</option>
                      <option value="Autism Center Inquiry">Autism Center Inquiry</option>
                      <option value="Internship Application">Internship Application</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-bold ml-1">Message</label>
                    <textarea 
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us how we can help..." 
                      className="w-full px-6 py-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo transition-all resize-none"
                    />
                  </div>
                  <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="w-full md:w-fit px-12 py-6 bg-charcoal text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-indigo transition-all duration-500 shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 rounded-full bg-mint flex items-center justify-center text-charcoal text-4xl mb-8 animate-bounce">
                    ✓
                  </div>
                  <h2 className="text-3xl font-serif text-charcoal mb-4">Message Illuminted!</h2>
                  <p className="text-gray-500 max-w-sm mb-10">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-indigo font-bold uppercase tracking-widest text-xs hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
