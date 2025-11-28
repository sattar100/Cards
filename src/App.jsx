import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cards } from './assets/components/Cards'

function App() {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 62, // dollars per hour
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Support Associate",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "10 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 78,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "3 days ago",
    post: "Data Analyst",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 95,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "DevOps Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 70,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    name: "Tesla",
    datePosted: "6 weeks ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 82,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Research Intern",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: 40,
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    name: "Uber",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 60,
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    name: "Spotify",
    datePosted: "9 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 75,
    location: "London, UK"
  }
];


  return (
   <>
   <div className='h-full bg-amber-400 flex flex-wrap'>
    {jobOpenings.map(function(elem){
      return <Cards company={elem.name} date={elem.datePosted} post={elem.post}/>
    })}
   <Cards/>
   
   </div>
   </>
  )
}

export default App
