import React, { useEffect, useState } from 'react';
import JobCard from './Components/JobCard';
import Filters from './Components/Filters';
// import { UseDispatch } from 'react-redux';
import { useDispatch, useSelector} from 'react-redux';

import { loadAllData } from './actions/loadAllData';

function App() {
  const dispatch = useDispatch();
  const {jobsData,loading} = useSelector((state) => state.loadAllData);
  const [jobs,setJobs] = useState([]);
  const [limit,setLimit] = useState(10);

  const  myFiters = {
    "location":"",
    "role":"",
    "numEmployees":"",
    "experience":"",
    "isRemote":"",
    "minBasePay":"",
    "companyName":"",
  };
  useEffect(() => {

    dispatch(loadAllData(myFiters,limit));
  }, [limit]);

  const staticData = {
    name: "Hi working",
    // Add other static data properties as needed
  };
  return (
   
    
     <div >
       <Filters limit={limit} />
       {loading===false && 
       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {jobsData.map((job, index) => (
            <JobCard key={index} job={job} staticData={staticData} />
          ))}
       </div>
       }
       <button onClick={()=>setLimit(limit+10)}>Load More</button>
     
   </div>
  );
}

export default App;
