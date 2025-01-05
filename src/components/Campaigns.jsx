import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Loading from "./loading";

const Campaigns = () => {
  const initialCampaigns = useLoaderData(); 
  const [campaigns, setCampaigns] = useState(initialCampaigns); 
  const [loading, setloading] = useState(false); 
  const [error, setError] = useState(null); 

  // Function to fetch sorted campaigns
  const sortCampaigns = async () => {
    try {
      setloading(true); 
      const response = await fetch(`https://assignment-10-server-eight-iota.vercel.app/campaigns/sorted`);

      if (!response.ok) {
        throw new Error('Failed to fetch sorted campaigns');
      }

      let sortedCampaigns = await response.json();

      // Ensure sorting on the frontend by converting minDonation to a number
      sortedCampaigns = sortedCampaigns.sort(
        (a, b) => Number(a.minDonation) - Number(b.minDonation)
      );

      setCampaigns(sortedCampaigns); 
    } catch (error) {
      setError('Error fetching sorted campaigns');
      console.error('Error fetching sorted campaigns:', error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center text-primary">
        All Campaigns
      </h1>
      <br />
      <button
        onClick={sortCampaigns}
        className="btn px-8 font-extrabold border-2 border-primary text-primary hover:bg-neutral hover:border-primary"
      >
        Sort by Minimum Donation (Ascending)
      </button>
      <br /><br />
      
      {loading && <Loading></Loading>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {campaigns.map((campaign, index) => (
          <div key={campaign.email} className="card text-accent bg-neutral shadow-xl p-6">
            <h2 className="card-title text-lg font-bold">
              <Link to={`/allcampaigns/${campaign._id}`} className="underline">
                {campaign.title}
              </Link>
            </h2>
            <p><strong>Type:</strong> {campaign.campaignType}</p>
            <p><strong>Min Donation:</strong> ${campaign.minDonation}</p>
            <p><strong>Deadline:</strong> {campaign.deadline}</p>
            <p><strong>Email:</strong> {campaign.email}</p>
            <p><strong>Name:</strong> {campaign.name}</p>
            <div className="card-actions mt-4">
              <Link to={`/allcampaigns/${campaign._id}`} className="btn btn-primary">
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
