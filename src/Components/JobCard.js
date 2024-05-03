import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import './JobCard.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const JobCard = ({ job }) => {
  const { jdLink, jobDetailsFromCompany, maxJdSalary, minJdSalary, salaryCurrencyCode, location, minExp, maxExp, jobRole, companyName, logoUrl } = job;

  // Function to conditionally render data
  const renderData = (data) => {
    return data !== null ? data : null;
  };

  return (
    <Card className="job-card" style={{ borderRadius: '20px' }}>
      <CardContent className="card-content">
        <div className="company-info">
          {logoUrl && <img src={logoUrl} alt={companyName} className="company-logo" />}
          <Typography variant="h6" component="h2" className="company-name">
            {companyName}
          </Typography>
        </div>
        <Typography  style={{ marginLeft: '60px', marginTop: '-20px' }} variant="h6" component="h2">
          {jobRole}
        </Typography>
        <Typography style={{ marginLeft: '60px' }}  variant="body2" color="textSecondary">
          Location: {renderData(location)}
        </Typography>
        <Typography style={{marginTop:'7px'}} variant="body2" color="textSecondary">
          Estimated Salary: {minJdSalary ? `${minJdSalary} - ${maxJdSalary} ${salaryCurrencyCode}` : `Up to ${maxJdSalary} ${salaryCurrencyCode}`}
          <CheckCircleIcon style={{ color: 'green', marginLeft: '5px', verticalAlign: 'middle' }} />
        </Typography>
       <br/>
        <Typography variant="body2" component="p">
          <h5 style={{ margin: 0 }}>About Company</h5>
          <h4 style={{ margin: 0 }}>About Us</h4>
          {renderData(jobDetailsFromCompany)}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Minimum Experience:
          <div> {minExp} - {maxExp} years</div>
        </Typography>
        <br />
        <Button className='btn' variant="contained" color="primary" href={jdLink} target="_blank" rel="noopener noreferrer">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
