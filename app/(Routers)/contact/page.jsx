"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiSolidSend } from "react-icons/bi";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useWeb3Forms from "@web3forms/react";

function Contact() {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(8).max(15),
    message: z.string(),
  });

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data) {
    // const formData = {
    //     ...data,
    //     "access_key":web3Key
    // }
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: "2c059951-6236-421c-85ad-cf6d4a820d88",
            subject: "New Submission on Zahid's Portfolio by " + data.name,
            ...data,
          }),
        });
        if (!response.ok) {
          console.log(response);
        }
        const resdata = await response.json();
        console.log(resdata);
    } catch (error) {
      console.log(error);
    }
    // console.log(formData);
  }

  return (
    <div className="max-w-6xl px-4 mx-auto rounded-xl overflow-hidden w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-clamp-6xl pt-10 md:pt-20 pb-8 text-center">
        Contact Me
        <span className="text-primary-600 text-9xl leading-0">.</span>
      </h1>
      <p className="font-light text-clamp-base text-center w-5/6 md:w-2/3 pb-8 md:pb-12">
        I&apos;d love to hear from you! Whether you have a question, a project
        idea, or just want to say hello, feel free to get in touch using the
        form below.
      </p>
      <div className="w-full h-full  flex md:flex-row justify-center flex-col border-2 rounded-3xl overflow-hidden">
        <div className="flex-1 relative min-h-96">
        <Image
          src="/contactformimage.jpg"
          alt="Contact Form Feature Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{objectFit:"cover"}}
        />
        </div>

        <div className="flex-1 md:p-8 p-4 flex flex-col justify-between bg-zgary md:gap-2 gap-4">
          <h1 className="text-clamp-5xl leading-none font-medium">
            Let’s Make Something{" "}
            <span className="bg-clip-text text-transparent md:text-7xl text-5xl font-bold bg-[linear-gradient(to_right,#818cf8,#e0e7ff,#38bdf8,#e879f9,#38bdf8,#e0e7ff,#818cf8)] bg-[length:200%_auto] animate-gradient">
              Phenomenal
            </span>
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name<span className="text-primary-300">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email<span className="text-primary-300">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number<span className="text-primary-300">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="your phone number" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="some text form me or about you" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full py-4 ">
                Submit
              </Button>
            </form>
          </Form>
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
