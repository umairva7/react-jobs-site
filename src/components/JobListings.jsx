import { useState, useEffect } from "react";
import JobCard from "./jobcards.jsx";
import Spinner from "./spinner.jsx";

function JobListings({ isHome = false }) {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchJobs = async () => {
    const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("Fetched jobs:", data); 
      setJobList(data); 
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchJobs();
}, []);


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "All Jobs"}
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {}
            {jobList.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default JobListings;