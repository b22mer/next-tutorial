import Image from 'next/image'
import { TOKEN, DATABASE_ID } from '../config'
// import { DATABASE_ID, TOKEN } from './config';
import { use } from 'react';
import ProjectItem from '../components/projects/ProjectItem';
export default function Project() {
  const projects = use(fetchData());
  // console.log("이거냐",a.results);
  // projects.results.forEach((it: any) => console.log("지림:", it.cover))


  return (
    <>
      <h1 className="text-4xl font-bold sm:text-6xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h1>
      <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                    {projects.results.map((aProject:any) => {
                      const temp ={...aProject.properties,cover:aProject.cover};
                      return <ProjectItem key={aProject.id} data={temp}/>
                    }
                        
                    )}
                </div>
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