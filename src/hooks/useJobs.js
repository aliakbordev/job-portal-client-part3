import axios from 'axios';
import React, { useEffect } from 'react';


const useJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/jobS", {withCredentials:true})
        .then((res) =>setJobs(res.data));
    })
    return [jobs, setJobs];
};

export default useJobs;