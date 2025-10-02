"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

interface InquiryPopupProps {
  title?: string;
  message?: string;
  delay?: number;
}

const InquiryPopup: React.FC<InquiryPopupProps> = ({
  title = "Inquiry Form",
  message = "Enter details to get an inquiry call from us 📞",
  delay = 5000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [state, handleSubmit] = useForm("xvgwradk"); // 👈 Your Formspree ID here

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Form */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              {title}
            </h2>
            <p className="text-gray-600 mb-6 text-center">{message}</p>

            {state.succeeded ? (
              <p className="text-green-600 font-medium text-center">
                ✅ Thanks! We will call you soon 🚀
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Mobile Number</label>
                  <input
                    id="number"
                    type="tel"
                    name="number"
                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your number"
                  />
                  <ValidationError
                    prefix="Number"
                    field="number"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  {state.submitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryPopup;