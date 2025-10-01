import {useState,useEffect, use} from 'react'
import jobs from '../jobs.json'
import JobCard from './jobcards.jsx'




function JobListings({isHome=false}) {
  const [jobList, setJobList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchJobs = async () => {

      try {
        const response = await fetch('http://localhost:8000/jobs')
        const data = await response.json()
        setJobList(data.jobs)
        
      } catch (error) {
        console.error('Error fetching jobs:', error)
        
      }
      finally{
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

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
