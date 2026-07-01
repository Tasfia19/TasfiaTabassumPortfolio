"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MapPin, Link } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/Icons";

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/tasfiabd0000@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto text-left relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Contact Information Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 glass border border-white/5 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover:border-accent/10 transition-all duration-300"
        >
          {/* Decorative Background Accent */}
          <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Contact Information</h3>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              Have a question, proposal, or want to discuss a project? Reach out directly via the details below or drop a message.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group/item">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-accent group-hover/item:border-accent/30 group-hover/item:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-500 text-xs font-semibold uppercase tracking-wider">Email</span>
                  <a href="mailto:tasfiabd0000@gmail.com" className="text-slate-300 hover:text-accent font-medium text-sm transition-colors">
                    tasfiabd0000@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group/item">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-accent group-hover/item:border-accent/30 group-hover/item:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-500 text-xs font-semibold uppercase tracking-wider">Phone</span>
                  <a href="tel:+8801812326039" className="text-slate-300 hover:text-accent font-medium text-sm transition-colors">
                    +880 1812-326039
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group/item">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-accent group-hover/item:border-accent/30 group-hover/item:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-500 text-xs font-semibold uppercase tracking-wider">Location</span>
                  <span className="text-slate-300 font-medium text-sm">
                    Chittagong, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Row */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-wrap gap-4">
            <a
              href="https://github.com/Tasfia19"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-accent/30 transition-all flex items-center gap-2 text-sm font-semibold cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/tasfia-tabassum"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-accent/30 transition-all flex items-center gap-2 text-sm font-semibold cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://wa.me/8801812326039"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-accent/30 transition-all flex items-center gap-2 text-sm font-semibold cursor-pointer"
            >
              <WhatsappIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass border border-white/5 p-8 rounded-3xl relative"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-slate-950/40 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 rounded-xl text-slate-200 transition-all font-sans text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-slate-950/40 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 rounded-xl text-slate-200 transition-all font-sans text-sm"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880 XXXXX-XXXXXX"
                    className="w-full bg-slate-950/40 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 rounded-xl text-slate-200 transition-all font-sans text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-950/40 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 rounded-xl text-slate-200 transition-all font-sans text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-slate-950 py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-4 h-full min-h-[350px]"
              >
                <CheckCircle className="w-16 h-16 text-accent animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400 max-w-sm text-sm">
                  Thank you for reaching out! I have received your message and will get back to you as soon as possible.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};
