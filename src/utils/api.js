import axios from 'axios';
import { useDispatch } from 'react-redux'; 
import { loadAllData } from '../actions/loadAllData';

// Function to fetch jobs data with provided limit and offset
export const fetchJobs = async (limit, offset) => {
  const dispatch = useDispatch(); 
  const headers = {
    'Content-Type': 'application/json',
  };

  const requestBody = JSON.stringify({ limit, offset });

  try {
    // Dispatch action to load all data
    dispatch(loadAllData());
    return "data";
  } catch (error) {
    throw new Error('Failed to fetch jobs');
  }
};
