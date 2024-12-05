import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MyCampaigns = () => {
  const { user } = useContext(AuthContext); 
  const campaigns = useLoaderData(); 

  // Filter campaigns based on the logged-in user's email
  const userCampaigns = campaigns.filter(campaign => campaign.email === user?.email);

  return (
    <>
    <h1 className="text-5xl font-extrabold text-center text-primary">All Campaigns</h1>
    <br />
    <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Campaign Type</th>
                            <th>Minimum Donation</th>
                            <th>Deadline</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCampaigns.map((campaign, index) => (
                            <tr key={campaign.email}>
                                <td>{index + 1}</td>
                                <td className="underline font-bold"><Link to={`/allcampaigns/${campaign._id}`}>{campaign.title}</Link></td>
                                <td>{campaign.campaignType}</td>
                                <td>{campaign.minDonation}</td>
                                <td>{campaign.deadline}</td>
                                <td>{campaign.email}</td>
                                <td>{campaign.name}</td>
                                <td><button className="btn text-blue-500 rounded-xl">Update</button></td>
                                <td><button className="btn text-red-500 rounded-xl">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </>
  );
};

export default MyCampaigns;
