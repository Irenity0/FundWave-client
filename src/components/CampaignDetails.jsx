import { useLoaderData } from 'react-router-dom';

const CampaignDetails = () => {
  const campaign = useLoaderData(); // This will now load the specific campaign details
  console.log(campaign);

  return (
    <div className="campaign-details">
      <h1 className="text-4xl font-bold text-primary">{campaign.title}</h1>
      <img src={campaign.image} alt={campaign.title} className="campaign-image w-full max-h-[400px] object-cover my-4 rounded-lg" />
      <p className="text-lg"><strong>By:</strong> {campaign.name}</p>
      <p className="text-lg"><strong>Description: </strong>{campaign.description}</p>
      <p><strong>Type:</strong> {campaign.campaignType}</p>
      <p><strong>Minimum Donation:</strong> ${campaign.minDonation}</p>
      <p><strong>Deadline: </strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
      <p><strong>Contact: </strong> {campaign.email}</p>
      {/* Optional: Add Donate button */}
      <button className="btn btn-primary mt-4">Donate Now</button>
    </div>
  );
};

export default CampaignDetails;
