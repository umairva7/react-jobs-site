import React from 'react'
import jobs from '../jobs.json'
import JobCard from './jobcards.jsx'



function JobListings({isHome=false}) {
  const jobList = isHome ? jobs.slice(0,3) : jobs;

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Job ' : 'All Job '}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {jobList.map((job) => (
              <JobCard key={job.id} job={job} />
              
            ))}
            
          </div>
        </div> 
      </section>
    </div>
  )
}

export default JobListings
