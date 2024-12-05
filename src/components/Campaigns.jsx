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
      const response = await fetch(`http://localhost:5000/campaigns/sorted`);

      if (!response.ok) {
        throw new Error('Failed to fetch sorted campaigns');
      }

      const sortedCampaigns = await response.json();
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
      
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Campaign Type</th>
              <th>Minimum Donation</th>
              <th>Deadline</th>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={campaign.email}>
                <td>{index + 1}</td>
                <td className="underline font-bold">
                  <Link to={`/allcampaigns/${campaign._id}`}>{campaign.title}</Link>
                </td>
                <td>{campaign.campaignType}</td>
                <td>{campaign.minDonation}</td>
                <td>{campaign.deadline}</td>
                <td>{campaign.email}</td>
                <td>{campaign.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Campaigns;
