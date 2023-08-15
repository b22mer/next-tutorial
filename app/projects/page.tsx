import Image from 'next/image'
import { TOKEN, DATABASE_ID } from '../config'
// import { DATABASE_ID, TOKEN } from './config';
import { use } from 'react';
export default function Project() {
  const a = use(fetchData());

  return (
    <>
      <h1>총 프로젝트수: {a.results.length}</h1>
      {
        a.results.map((it: any, idx: any) => {
          return <h1 key={idx}>{it.properties.Name.title[0].plain_text}</h1>
        })
      }
    </>
  )
}

export async function fetchData() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      sorts: [
        {
          "property": "Name",
          "direction": "ascending"
        }
      ],
      page_size: 100
    })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  const projects = await res.json();

  const projectNames = projects.results.map((project: any) => project.properties.Name.title[0].plain_text
  )


  return projects;
}