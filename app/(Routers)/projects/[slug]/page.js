import React from "react";

export async function generateMetadata({ params }) {
  return {
    title: "Project - " + params.slug,
    description: "Designing",
    openGraph: {
      title: "Projects by Zahid",
      description: "Designing",
      url: url,
      siteName: appname,
      images: "/images/ogimage.png",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects by Zahid",
      description: "Designing",
      creator: "@its_zahid83",
      images: [`${url}/images/ogimage.png`], // Must be an absolute URL
    },
  };
}

function page({ params }) {
  return <div>{params.slug}</div>;
}

export default page;
