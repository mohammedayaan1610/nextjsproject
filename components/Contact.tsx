"use client";

import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = () => {
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <main className="w-full bg-[#061b20] text-white">
      <section className="min-h-[calc(100vh-78px)] w-full border-b border-white/10 pt-[78px]">
        <div className="grid min-h-[calc(100vh-78px)] grid-cols-1 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative hidden border-r border-white/20 lg:block">
            <div className="absolute inset-0 p-[42px]">
              <img
                src="/vita-travel-assets/6989df5258a6f0a8174626f3_illustration-contact.webp"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex min-h-[calc(100vh-78px)] flex-col px-[42px] pb-[42px] pt-[69px]">

            {/* HEADER */}
            <div>
              <div className="mb-[31px] flex items-center gap-2">
                <img
                  src="/vita-travel-assets/svg-1.svg"
                  alt=""
                  className="h-[20px] w-[20px] opacity-45"
                />

                <span className="text-[16px] font-semibold text-white/55">
                  Contacts
                </span>
              </div>

              <h1 className="text-[4rem] font-semibold leading-[0.95] tracking-[-0.055em] xl:text-[4.15rem]">
                Get in touch
              </h1>

              <p className="mt-[28px] text-[18px] font-medium leading-none text-white/55">
                Contact the Vita Travel team today!
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-[61px] flex flex-1 flex-col"
              autoComplete="off"
            >
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-2 gap-[26px]">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-[9px] block text-[14px] font-semibold text-white"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    autoComplete="new-password"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="
                      w-full
                      border-0
                      border-b
                      border-white/15
                      bg-transparent
                      px-0
                      pb-[15px]
                      text-[20px]
                      font-medium
                      text-white
                      outline-none
                      placeholder:text-white/35
                      focus:border-white/30
                      [-webkit-text-fill-color:white]
                      [&:-webkit-autofill]:bg-transparent
                      [&:-webkit-autofill]:[-webkit-text-fill-color:white]
                      [&:-webkit-autofill]:[transition:background-color_9999s_ease-out_0s]
                    "
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-[#fb9826]">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-[9px] block text-[14px] font-semibold text-white"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="new-password"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="
                      w-full
                      border-0
                      border-b
                      border-white/15
                      bg-transparent
                      px-0
                      pb-[15px]
                      text-[20px]
                      font-medium
                      text-white
                      outline-none
                      placeholder:text-white/35
                      focus:border-white/30
                      [-webkit-text-fill-color:white]
                      [&:-webkit-autofill]:bg-transparent
                      [&:-webkit-autofill]:[-webkit-text-fill-color:white]
                      [&:-webkit-autofill]:[transition:background-color_9999s_ease-out_0s]
                    "
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-[#fb9826]">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mt-[57px]">
                <label
                  htmlFor="message"
                  className="mb-[9px] block text-[14px] font-semibold text-white"
                >
                  Message
                </label>

                <input
                  id="message"
                  type="text"
                  placeholder="Message"
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="
                    w-full
                    border-0
                    border-b
                    border-white/15
                    bg-transparent
                    px-0
                    pb-[15px]
                    text-[20px]
                    font-medium
                    text-white
                    outline-none
                    placeholder:text-white/35
                    focus:border-white/30
                    [-webkit-text-fill-color:white]
                  "
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-[#fb9826]">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* BOTTOM DIVIDER */}
              <div className="mt-auto border-b border-white/15 pb-[41px]" />

              {/* SUBMIT */}
              <div className="pt-[43px]">
                <button
                  type="submit"
                  className="
                    flex
                    h-[57px]
                    min-w-[143px]
                    items-center
                    justify-center
                    gap-4
                    rounded-full
                    bg-white
                    px-8
                    text-[14px]
                    font-semibold
                    text-[#061b20]
                    transition-colors
                    duration-300
                    hover:bg-[#fb9826]
                    hover:text-white
                  "
                >
                  <span>Submit</span>
                  <span className="text-[11px]">✦</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}