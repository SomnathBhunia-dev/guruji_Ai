"use client"
import { Provider } from 'react-redux';
import store from './Redux/store';
import Chat from './Chat';
import Input from './Input';

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black flex flex-col items-center justify-center">
          <Input />
          <Chat />
        </div>
      </Provider>
    </>
  );
}

