"use client"
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addInput, addOutput } from '../Redux/Reducers/reducer';

export default function Input() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addInput(input))
    generate(input)
    setInput('');
  };

  const generate = async (i) => {
    try {
      const res = await axios.post('/api/gemini', {
        qns: i
      });
      dispatch(addOutput(res.data.text))
    } catch (error) {
      console.error('There was an error making the POST request!', error);
    }
  }

  // console.log(Input)
  return (
    <>
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md p-10 rounded-xl shadow-2xl max-w-lg w-full">
        <h1 className="text-4xl text-white font-bold mb-8 text-center">
          GuruJi Ai
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            name='input'
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something..."
            className="w-full p-4 mb-4 text-lg text-gray-100 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-gray-600"
          />
          <button
            type="submit"
            className="w-full py-3 px-6 text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
