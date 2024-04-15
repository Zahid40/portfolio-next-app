"use client";
import Loginpage3d from "@/app/components/Loginpage3d";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });
      console.log("Success!", response);

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
    <div className="rounded-xl overflow-hidden w-full h-full flex items-center justify-center">
      <div className="w-full h-full flex md:flex-row justify-center p-8 flex-col">
        <div className="md:rounded-l-3xl rounded-t-3xl overflow-hidden md:w-2/5 w-full md:h-[800px] h-2/5">
          <Loginpage3d />
        </div>
        <div className="md:w-3/5 w-full md:h-full h-3/5 p-8 flex flex-col justify-between rounded-r-3xl bg-zgary">
          <h1 className="text-6xl font-medium">
            Let’s Make Somthing{" "}
            <span className="bg-clip-text text-transparent text-7xl font-bold bg-[linear-gradient(to_right,#818cf8,#e0e7ff,#38bdf8,#e879f9,#38bdf8,#e0e7ff,#818cf8)] bg-[length:200%_auto] animate-gradient">
              Phenomenal
            </span>
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label htmlFor="name">
              Name<span className="text-zsecondary"> * </span>
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
            <div className="flex flex-row w-full justify-between gap-8">
              <div className="flex flex-col gap-6">
                <label htmlFor="email">
                  E-mail<span className="text-zsecondary"> * </span>
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
              <div className="flex flex-col gap-6">
                <label htmlFor="phone">
                  Phone<span className="text-zsecondary"> * </span>
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
              Message / Comment<span className="text-zsecondary "> * </span>
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
            <div className="flex items-center">
              <input type="checkbox" id="confirmDetails" className="mr-2" required />
              <label htmlFor="confirmDetails" className="text-gray-700">
                I confirm that all details filled are correct
              </label>
            </div>

            <button
              type="submit"
              className="border border-zprimary hover:bg-zprimary w-full p-4 rounded-md font-medium text-xl transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
          <span className="text-xs text-zgary2 font-medium italic m-2">
            Please fill out all fields marked with an asterisk (
            <span className="text-zsecondary"> * </span>) as they are mandatory.
            Incomplete forms may result in delays in processing your request.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
