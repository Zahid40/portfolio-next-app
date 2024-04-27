import React from 'react'

export async function generateMetadata({ params }) {
  return {
    title: "Project - " +  params.slug,
  }
}

function page({params}) {
  
  return (
    <div>{params.slug}</div>
  )
}

export default page

