"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiSolidSend } from "react-icons/bi";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Submit");
  const [buttonDisable, setButtonDisable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonDisable(true);
    setButtonText("Processing...");
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });
      console.log("Success!", response);

      setButtonText("Request Sent 👍");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycby9r_lJvQj1Cowlvc4A0Psqkj7sYxWBwa5rKQRSAipv88Boc0_k3LGN90r3EBQ9HZ9P7g/exec";

  return (
    <div className="rounded-xl overflow-hidden w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-6xl md:text-8xl pt-10 md:pt-20 pb-8 text-center">
        Contact Me
        <span className="text-primary-600 text-9xl leading-0">.</span>
      </h1>
      <p className="font-light text-base md:text-xl text-center w-5/6 md:w-2/3 pb-8 md:pb-12">
        I&apos;d love to hear from you! Whether you have a question, a project
        idea, or just want to say hello, feel free to get in touch using the
        form below.
      </p>
      <div className="w-full h-full  flex md:flex-row justify-center md:p-8 p-4 flex-col">
        <Image
          src="/contactformimage.jpg"
          alt="Contact Form Feature Image"
          width={400}
          height={800}
          quality={30}
          className="md:rounded-l-3xl md:rounded-tr-none rounded-bl-none rounded-t-3xl overflow-hidden md:w-2/5 w-full md:h-auto h-[400px]"
          // blurDataURL="data:..." automatically provided
          //placeholder="blur" // Optional blur-up while loading
        />

        <div className="md:rounded-r-3xl md:rounded-bl-none rounded-tr-none rounded-b-3xl md:w-3/5 w-full md:h-full h-1/2 md:p-8 p-4 flex flex-col justify-between bg-zgary md:gap-2 gap-4">
          <h1 className="md:text-6xl text-5xl font-medium">
            Let’s Make Something{" "}
            <span className="bg-clip-text text-transparent md:text-7xl text-6xl font-bold bg-[linear-gradient(to_right,#818cf8,#e0e7ff,#38bdf8,#e879f9,#38bdf8,#e0e7ff,#818cf8)] bg-[length:200%_auto] animate-gradient">
              Phenomenal
            </span>
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:gap-6 gap-2"
          >
            <label htmlFor="name">
              Name<span className="text-secondary-500"> * </span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-transparent border-b border-white p-2"
              required
              pattern="[A-Za-zÀ-ÿ\s'-]+"
            />
            <div className="flex flex-row w-full md:justify-between flex-wrap gap-4 md:gap-0">
              <div className="flex flex-col md:gap-6 gap-4 md:w-2/5 w-full">
                <label htmlFor="email">
                  E-mail<span className="text-secondary-500"> * </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-white p-2"
                  required
                />
              </div>
              <div className="flex flex-col md:gap-6 gap-4 md:w-2/5 w-full">
                <label htmlFor="phone">
                  Phone<span className="text-secondary-500"> * </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-white p-2"
                  required
                  pattern="[0-9()+\s-]+"
                />
              </div>
            </div>
            <label htmlFor="message">
              Message / Comment<span className="text-secondary-500 "> * </span>
            </label>
            <textarea
              name="message"
              id="message"
              rows="2"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-transparent border-b border-white p-2"
              required
            ></textarea>
            <div className="flex items-center my-4">
              <input
                type="checkbox"
                id="confirmDetails"
                className="mr-4"
                required
              />
              <label htmlFor="confirmDetails" className="text-white">
                I confirm that all details filled are correct
              </label>
            </div>

            <button
              type="submit"
              className="border border-primary-700 hover:bg-primary-700 w-full p-4 rounded-md font-medium text-xl transition duration-300 ease-in-out flex items-center justify-center gap-4"
              disabled={buttonDisable}
            >
              {buttonText}
              <BiSolidSend />
            </button>
          </form>
          <span className="text-xs text-zgary2 font-medium italic m-2">
            Please fill out all fields marked with an asterisk (
            <span className="text-secondary-500"> * </span>) as they are
            mandatory. Incomplete forms may result in delays in processing your
            request.
          </span>
        </div>
      </div>

      <p className="font-light text-sm md:text-xl text-center w-5/6  p-8 md:p-12">
        If you have any questions, project inquiries, or collaboration ideas,
        don&apos;t hesitate to reach out. I&apos;m always excited to discuss new
        projects and opportunities. You can contact me via email, phone, or the
        form above. I look forward to connecting with you!
      </p>

      <div className="flex flex-col md:flex-row bg-zgary md:w-5/6 justify-center md:justify-between p-12 md:p-20  mb-8 md:my-16 relative rounded-3xl gap-8">
        <div className="flex flex-col gap-4">
          <p className="flex justify-start items-center gap-8 font-medium text-base md:text-xl">
            <IoMdMail className="inline bg-zbg p-3  rounded-lg text-5xl" />
            <a href="mailto:zahidanasari17@gmail.com">
              zahidanasari17@gmail.com
            </a>
          </p>
          <p className="flex justify-start items-center gap-8 font-medium text-base md:text-xl">
            <PiPhoneCallFill className="inline bg-zbg p-3  rounded-lg text-5xl" />
            <a href="tel:+919625162488">+91 96251 62488</a>
          </p>
        </div>
        <Image
          src="/assets/wavy-hand.svg"
          height={150}
          width={130}
          alt="wavy-hand"
          className="md:absolute right-8 bottom-0 hidden md:block"
        />
      </div>
    </div>
  );
}

export default Contact;
