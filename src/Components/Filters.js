import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import './Filters.css';

import { loadAllData } from '../actions/loadAllData';

const Filters = ({limit}) => {
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [isRemote, setIsRemote] = useState('');
  const [minBasePay, setMinBasePay] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const myFiters = {
      location,
      role,
      experience,
      isRemote,
      minBasePay,
      companyName,
      limit,
    };
    dispatch(loadAllData(myFiters,limit)); 
    // console.log(location)
  }, [role,location, experience, isRemote, minBasePay, limit,companyName,dispatch]);

 

  return (
    <div>
      <Typography variant="h6">Filters</Typography>
      <FormControl variant="outlined" margin="normal">
        <InputLabel id="experience-label">Experience</InputLabel>
        <Select   className="select-control"
          labelId="experience-label"
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          label="Experience"
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" margin="normal">
        <InputLabel id="location-label">Location</InputLabel>
        <Select  className="select-control"
          labelId="location-label"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          label="location"
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="chennai">Chennai</MenuItem>
          <MenuItem value="mumbai">Mumbai</MenuItem>
          <MenuItem value="delhi ncr">Delhi NCR</MenuItem>
        </Select>
      </FormControl>

      {/* company name  */}

      <FormControl variant="outlined" margin="normal">
        <InputLabel id="role-label">Roles</InputLabel>
        <Select  className="select-control"
          labelId="role-label"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          label="Roles"
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="frontend">Frontend</MenuItem>
          <MenuItem value="backend">Backend</MenuItem>
          <MenuItem value="android">Android</MenuItem>
          <MenuItem value="ios">iOS</MenuItem>
          <MenuItem value="tech lead">Tech Lead</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" margin="normal">
        <InputLabel id="remote-label">Remote/Onsite</InputLabel>
        <Select  className="select-control"
          labelId="remote-label"
          id="remote"
          value={isRemote}
          onChange={(e) => setIsRemote(e.target.value)}
          label="Remote"
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value='remote'>Remote</MenuItem>
          <MenuItem value='on site'>On Site</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" margin="normal">
        <InputLabel id="min-base-pay-label">Min Base Pay</InputLabel>
        <Select  className="select-control"
          labelId="min-base-pay-label"
          id="min-base-pay"
          value={minBasePay}
          onChange={(e) => setMinBasePay(e.target.value)}
          label="Min Base Pay"
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="0">0</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
          <MenuItem value="8">8</MenuItem>
          <MenuItem value="9">9</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="34">34</MenuItem>

        </Select>
      </FormControl>

      <TextField
        label="Search company by name"
        variant="outlined"
        margin="normal"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      {/* <Button variant="contained" color="primary" onClick={handleApplyFilters}>
        Apply Filters
      </Button> */}
    </div>
  );
};

export default Filters;
