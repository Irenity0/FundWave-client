import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const RunningCampaign = ({ campaigns }) => {
  const currentDate = new Date();

  const runningCampaigns = campaigns
    .filter(campaign => new Date(campaign.deadline) > currentDate)
    .slice(0, 6);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-6"><Typewriter
            words={['Current Campaigns']}
            loop={false} // Animates only once
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h2>
        <p className="text-lg text-accent text-center mb-12">
          Be a part of our mission to create impactful change. Explore our ongoing campaigns and help us achieve meaningful milestones. 
          Your contributions drive progress and transformation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {runningCampaigns.map(campaign => (
            <div key={campaign._id} className="p-6 bg-neutral/70 shadow-lg rounded-lg">
              <h3 className="text-2xl text-secondary font-bold mb-4">{campaign.title}</h3>
              <p className="text-accent mb-4"><span className='font-semibold'>Campaign Type: </span>{campaign.campaignType}</p>
              <p className="text-accent mb-4"><span className='font-semibold'>Deadline: </span>{new Date(campaign.deadline).toLocaleDateString()}</p>
              <p className="text-accent mb-4"><span className='font-semibold'>Description: </span>{campaign.description}</p>
              <button className="btn btn-secondary w-full"><Link to={`/allcampaigns/${campaign._id}`}>See More</Link></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningCampaign;
