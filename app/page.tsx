import Image from 'next/image'
import Hero from './components/home/hero'
import { DATABASE_ID, TOKEN } from './config';
import { use } from 'react';
export default function Home() {
  // const a = use(fetchData())
  // console.log(a);

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-primary ">
          <Hero />
        </div>
      </section>
    </>
  )
}

// 빌드 타임에 호출
export async function fetchData() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ page_size: 100 })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  const result = await res.json();
  // console.log(result);

  return result;

  // return {
  //   props: {

  //   },
  // }
}