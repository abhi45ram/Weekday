import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const JobCard = ({ job,staticData }) => {
  const { jdLink, jobDetailsFromCompany, maxJdSalary, minJdSalary, salaryCurrencyCode, location, minExp, maxExp, jobRole } = job;

  const renderData = (data) => {
    return data !== null ? data : null;
  };

  return (
    <Card style={{ width: '30%', margin: '1%' }}> 
      <CardContent>
        <Typography variant="h6" component="h2">
          {jobRole}
          
          {staticData.name} 
        </Typography>
        <Typography color="textSecondary">
          Location: {renderData(location)}
        </Typography>
        <Typography variant="body2" component="p">
          {renderData(jobDetailsFromCompany)}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Experience: {minExp} - {maxExp} years
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Salary: {minJdSalary ? `${minJdSalary} - ${maxJdSalary} ${salaryCurrencyCode}` : `Up to ${maxJdSalary} ${salaryCurrencyCode}`}
        </Typography>
        <Button variant="contained" color="primary" href={jdLink} target="_blank" rel="noopener noreferrer">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
