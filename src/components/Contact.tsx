import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import resumeData from "../data/resumeData";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",     // 🔴 replace
        "YOUR_TEMPLATE_ID",    // 🔴 replace
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        "YOUR_PUBLIC_KEY"      // 🔴 replace
      );

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="
        py-20 px-4 sm:px-6 lg:px-8
        bg-gray-50 dark:bg-gray-800
        opacity-0 translate-y-8
        transition-all duration-700 ease-out
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send a Message
            </h3>

            {submitted && (
              <div className="mb-6 text-green-700 dark:text-green-300 font-medium">
                ✅ Message sent successfully!
              </div>
            )}

            {error && (
              <div className="mb-6 text-red-600 dark:text-red-400 font-medium">
                ❌ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3 rounded-lg text-white font-medium
                  bg-blue-600 hover:bg-blue-700
                  transition-all duration-300
                  disabled:opacity-60
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            {resumeData.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="ml-4 text-gray-800 dark:text-gray-200">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
