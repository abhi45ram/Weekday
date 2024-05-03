import axios from 'axios';

// const API_BASE_URL = 'https://api.weekday.technology/adhoc';
import { UseDispatch } from 'react-redux';
import { loadAllData } from '../actions/loadAllData';
export const fetchJobs = async (limit, offset) => {
  const dispatch = UseDispatch();
  const headers = {
    'Content-Type': 'application/json',
  };

  const requestBody = JSON.stringify({ limit, offset });

  try {
   dispatch(loadAllData());
    return "data";
  } catch (error) {
    throw new Error('Failed to fetch jobs');
  }
};