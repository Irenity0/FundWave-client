import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CampaignDetails = () => {
  const { id } = useParams(); // Extract campaign ID from URL
  const [campaign, setCampaign] = useState(null);
  

  useEffect(() => {
    fetch(`http://localhost:5000/campaigns/${_id}`)
      .then((res) => res.json())
      .then((data) => setCampaign(data))
      .catch((error) => console.error('Error fetching campaign:', error));
  }, [id]);

  if (!campaign) return <div>Loading...</div>; // Show loading state while fetching

  return (
    <div className="campaign-details">
      <h1 className="text-4xl font-bold">{campaign.title}</h1>
      <img src={campaign.image} alt={campaign.title} className="campaign-image" />
      <p>{campaign.description}</p>
      <p><strong>Type:</strong> {campaign.campaignType}</p>
      <p><strong>Minimum Donation:</strong> ${campaign.minDonation}</p>
      <p><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
      {/* Add Donate button */}
    </div>
  );
};

export default CampaignDetails;