import React from 'react';

function Card(props) {
  const data = props.data;
  return (
    <>
    <div className='bg-zgary p-8 rounded-xl flex flex-row'>
      <div className='w-1/2 flex flex-col'>
        <h1 className='text-9xl'>{data.project_name}</h1>
        <img src={data.logo_url} alt={data.project_name} className='rounded-full w-10 aspect-square'/>
        <a
              href={data.project_link}
              type="button"
              className="border border-zprimary hover:bg-zprimary w-full p-2 rounded-md font-medium text-xl transition duration-300 ease-in-out"
            >
              Visit Now
            </a>

      </div>
      <div className='w-1/2'>
        <p>{data.description}</p>

      </div>

    </div>
    </>
  );
}

export default Card;
