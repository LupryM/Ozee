"use client";

import Navbar from "@/components/navbar";
import { useState, FormEvent, ChangeEvent } from "react";

// 1. Define the shape of your form data
type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  // 2. State to hold the input values
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // 3. State for loading status and success/error messages
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    msg: string;
    type: "success" | "error" | "";
  }>({ msg: "", type: "" });

  // 4. Handle typing in inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 5. Handle Form Submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);
    setStatus({ msg: "", type: "" });

    try {
      const response = await fetch("/api/send", {
        // Calls your new API route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ msg: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus({
          msg: data.message || "Something went wrong.",
          type: "error",
        });
      }
    } catch (error) {
      setStatus({
        msg: "Failed to send. Please check your connection.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#110C0A" }}>
      <Navbar />

      <div className="py-16">
        <h1
          className="text-6xl font-light tracking-widest mb-2 text-center"
          style={{ color: "#8A7F66" }}
        >
          CONTACT
        </h1>
        <p className="text-sm text-center mb-16" style={{ color: "#8A7F66" }}>
          Get in touch for inquiries and commissions
        </p>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto px-8">
          <div
            className="mb-16 pb-12 border-b"
            style={{ borderColor: "#8A7F66" }}
          >
            <h2
              className="text-2xl font-light tracking-widest mb-8"
              style={{ color: "#8A7F66" }}
            >
              GET IN TOUCH
            </h2>
            {/* ... (Your existing static contact info remains unchanged) ... */}
            <div className="space-y-6">
              <div>
                <p
                  className="text-xs tracking-widest font-light mb-2"
                  style={{ color: "#8A7F66" }}
                >
                  EMAIL
                </p>
                <a
                  href="mailto:omhlezuma29@gmal.com"
                  className="text-base hover:opacity-70 transition"
                  style={{ color: "#8A7F66" }}
                >
                  omhlezuma29@gmal.com
                </a>
              </div>
              <div>
                <p
                  className="text-xs tracking-widest font-light mb-2"
                  style={{ color: "#8A7F66" }}
                >
                  PHONE
                </p>
                <a
                  href="tel:067 099 5455"
                  className="text-base hover:opacity-70 transition"
                  style={{ color: "#8A7F66" }}
                >
                  067 099 5455
                </a>
              </div>
              <div>
                <p
                  className="text-xs tracking-widest font-light mb-2"
                  style={{ color: "#8A7F66" }}
                >
                  LOCATION
                </p>
                <p className="text-base" style={{ color: "#8A7F66" }}>
                  Johannesburg, South Africa
                </p>
              </div>
            </div>
          </div>

          <h2
            className="text-2xl font-light tracking-widest mb-8"
            style={{ color: "#8A7F66" }}
          >
            SEND A MESSAGE
          </h2>

          {/* 6. Attach handleSubmit to the form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-16">
            {/* Name Input */}
            <div>
              <label
                className="block text-sm font-light tracking-wide mb-2"
                style={{ color: "#8A7F66" }}
              >
                NAME
              </label>
              <input
                type="text"
                name="name" // MUST match state key
                value={formData.name} // Bind to state
                onChange={handleChange} // Update state on type
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 focus:outline-none focus:border-gray-400 transition"
                style={{ color: "#8A7F66" }}
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                className="block text-sm font-light tracking-wide mb-2"
                style={{ color: "#8A7F66" }}
              >
                EMAIL
              </label>
              <input
                type="email"
                name="email" // MUST match state key
                value={formData.email} // Bind to state
                onChange={handleChange} // Update state on type
                required
                placeholder="your-email@example.com"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 focus:outline-none focus:border-gray-400 transition"
                style={{ color: "#8A7F66" }}
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                className="block text-sm font-light tracking-wide mb-2"
                style={{ color: "#8A7F66" }}
              >
                MESSAGE
              </label>
              <textarea
                name="message" // MUST match state key
                value={formData.message} // Bind to state
                onChange={handleChange} // Update state on type
                required
                placeholder="Your message..."
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 focus:outline-none focus:border-gray-400 transition resize-none"
                style={{ color: "#8A7F66" }}
              />
            </div>

            {/* 7. Success/Error Message Display */}
            {status.msg && (
              <p
                className="text-center text-sm"
                style={{
                  color: status.type === "success" ? "#4ade80" : "#ef4444",
                }}
              >
                {status.msg}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading} // Prevent double clicking
              className="px-6 py-2 border border-gray-600 hover:border-gray-400 transition font-light tracking-wide disabled:opacity-50"
              style={{ color: "#8A7F66" }}
            >
              {loading ? "SENDING..." : "SEND"}
            </button>
          </form>

          {/* Follow Me on Instagram Text */}
          <div className="text-center mb-12 mt-20">
            <p
              className="text-sm tracking-widest font-light"
              style={{ color: "#8A7F66" }}
            >
              FOLLOW ME ON INSTAGRAM
            </p>
          </div>

          {/* Social Links with Icons (Unchanged) */}
          <div className="flex justify-center items-center gap-12">
            {/* ... (Icons remain the same) ... */}
           
            <a
              href="https://www.instagram.com/shotsbyozee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-transform hover:scale-110"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ color: "#8A7F66" }}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
