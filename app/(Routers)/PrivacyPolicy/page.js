import React from 'react'

function page() {
  return (
    <div className='p-8'>
      <h1 className="text-6xl md:text-8xl md:pt-20 pb-8 text-center">
        Privacy Policy
        <span className="text-zprimary-600 text-9xl leading-0">.</span>
      </h1>

<p class="mb-4">This Privacy Policy describes how Zahid Anasari (we, us, or our) collects, uses, and shares personal information when you visit or interact with our website (<a href="https://zahid.vercel.app" class="text-blue-500">https://zahid.vercel.app</a>) (the Site).</p>

<h2 class="text-2xl font-bold mb-2">Information We Collect</h2>

<div class="ml-4">
    <h3 class="text-base font-bold mb-2">Personal Information You Provide to Us</h3>
    <ul class="list-disc ml-8 mb-2">
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone Number (optional)</li>
        <li>Any other information you choose to provide to us through forms or inquiries.</li>
    </ul>

    <h3 class="text-base font-bold mb-2">Automatically Collected Information</h3>
    <ul class="list-disc ml-8">
        <li>Your IP address</li>
        <li>Browser type</li>
        <li>Operating system</li>
        <li>Pages visited</li>
        <li>Time spent on each page</li>
        <li>Links clicked</li>
        <li>Device information</li>
    </ul>
</div>

<h2 class="text-2xl font-bold mt-6 mb-2">How We Use Your Information</h2>
<p class="mb-4">We may use the information we collect for various purposes, including to:</p>
<ul class="list-disc ml-8 mb-4">
    <li>Provide, operate, and maintain our website</li>
    <li>Respond to your inquiries and provide customer support</li>
    <li>Analyze how visitors use the Site</li>
    <li>Improve our website and services</li>
    <li>Send you promotional communications, if you have opted in to receive them</li>
</ul>

{/* <!-- Other sections like Sharing Your Information, Your Choices, Data Retention, Security, Children's Privacy, Changes to this Privacy Policy, and Contact Us can be added similarly --> */}

<h2 class="text-lg font-bold mt-6 mb-2">Contact Us</h2>
<p>If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us at <a href="mailto:zahidanasari17@gmail.com" class="text-blue-500">zahidanasari17@gmail.com</a>.</p>
</div>
  )
}

export default page
