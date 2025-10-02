import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";

function JobPage() {
    const [job, setJob] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch job details based on job ID from URL params
        const fetchJob = async () => {
            const response = await fetch(`http://localhost:8000/jobs/${id}`);
            const data = await response.json();
            setJob(data);
        };
        fetchJob();
        
    }, []);
  return loading ? <Spinner /> : (
    <div className="container mx-auto p-4">
        {job ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                <p className="text-gray-700">{job.description}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
  );
}

export default JobPage