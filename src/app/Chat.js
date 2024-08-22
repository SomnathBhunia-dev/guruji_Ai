"use client";
import React from 'react';
import { marked } from 'marked';
import { useSelector } from 'react-redux';

export default function Chat() {
  const chat = useSelector((state) => state.chat);

  console.log(chat);
  return (
    <>
      {chat.length > 0 &&
        <div className="w-full md:w-2/3 p-4 flex flex-col-reverse bg-transparent text-white">
          <div className="min-h-screen bg-gradient-to-r from-black via-darkGreen to-green-600 flex flex-col items-center p-4 rounded-md">
            {chat?.map((i, index) => (
              <div className="whole w-full lg:w-4/5 flex flex-col" key={index}>
                <div className="one min-w-40 w-3/4 border self-end border-white my-4 bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">
                  {i.input}
                </div>
                <div className=" text-lg font-semibold text-green-400">Response:</div>
                <div className="two w-full xl:w-3/4 self-start border border-white bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block prose prose-invert text-container" >
                  {i?.output === null ? <span className='h-[30vh] block' /> : <span className="animated-text-line" dangerouslySetInnerHTML={{ __html: marked(i?.output) }} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
}
