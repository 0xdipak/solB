import Content from '@/components/expenser/Content'
import Header from '@/components/expenser/Header'
import React from 'react'

const Expenser = () => {
  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl rounded shadow bg-slate-700">
      <Header />
      <Content />
    </main>
  );
}

export default Expenser