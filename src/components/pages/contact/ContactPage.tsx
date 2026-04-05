"use client";

import React from "react";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      console.log("Contact Form Data:", data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const onError: SubmitErrorHandler<ContactFormData> = () => {
    toast.error("Please fill in all required fields correctly.");
  };

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
            Let&apos;s get in touch
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
            Have a question, feedback, or need help with an order? Fill out the
            form below and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden border border-gray-200">
          {/* Left Side */}
          <div className="bg-[#F7F3EE] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="max-w-md">
              <p className="text-sm font-semibold tracking-[0.18em] text-gray-500 uppercase mb-3">
                Contact Information
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 leading-tight">
                We&apos;d love to hear from you
              </h2>

              <p className="text-gray-600 leading-7 mb-8 text-sm sm:text-base">
                Whether you have a question about products, your order, or
                anything else, our team is here to help.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-2xl bg-white/70 border border-white p-4">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">Email</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      hello@veloura.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white/70 border border-white p-4">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">Phone</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      +880 1234-567890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white/70 border border-white p-4">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">
                      Address
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-sm text-gray-600 leading-7">
                  We usually reply within
                  <span className="font-semibold text-black">24 hours</span>.
                  Please make sure your email address is correct so we can get
                  back to you.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="mb-6">
              <p className="text-sm font-semibold tracking-[0.18em] text-gray-500 uppercase mb-3">
                Send Message
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black">
                Tell us how we can help
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none focus:border-black transition"
                />
                {errors.name?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none focus:border-black transition"
                />
                {errors.email?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none focus:border-black transition"
                />
                {errors.subject?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3.5 outline-none focus:border-black transition resize-none"
                />
                {errors.message?.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-black text-white px-6 py-3.5 font-medium hover:bg-gray-900 transition disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;