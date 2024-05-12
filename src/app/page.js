'use client';
import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';

const Page = () => {

  const [text, setText] = useState();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-16">
      <p className="text-2xl tracking-wider mt-8 lg:mt-0">Markdown Previewer</p>

      <div className="w-full lg:w-11/12 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 mb-11">
        <textarea
          className="textarea textarea-primary w-11/12 lg:w-2/6 h-96 resize-none overflow-auto"
          placeholder="enter your markdown here"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="w-11/12 lg:w-2/6 h-96 border-2 border-slate-100 rounded-lg p-2 overflow-auto bg-transparent">
          {!text ? (
            'your markdown preview will be visible here'
          ) : (
            <Markdown className="markdown" remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{text}</Markdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
