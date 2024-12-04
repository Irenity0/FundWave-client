import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Campaigns = () => {
    const campaigns = useLoaderData();
    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);
    const [isSortedAsc, setIsSortedAsc] = useState(true); // Track sort order

    const handleSort = () => {
        const sorted = [...sortedCampaigns].sort((a, b) => {
            if (isSortedAsc) {
                return a.minDonation - b.minDonation; // Ascending order
            } else {
                return b.minDonation - a.minDonation; // Descending order
            }
        });
        setSortedCampaigns(sorted);
        setIsSortedAsc(!isSortedAsc); // Toggle sort order
    };

    return (
        <>
            <h1 className="text-5xl font-extrabold text-center text-primary">
                All Campaigns
            </h1>
            <br />
            <button
                onClick={handleSort}
                className="btn px-8 font-extrabold border-2 border-primary text-primary hover:bg-neutral hover:border-primary"
            >
                Sort by Minimum Donation ({isSortedAsc ? "Lowest" : "Highest"})
            </button>
            <br /><br />
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
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCampaigns.map((campaign, index) => (
                            <tr key={campaign.email}>
                                <td>{index + 1}</td>
                                <td className="underline font-bold"><Link to={`/${campaign._id}`}>{campaign.title}</Link></td>
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
        </>
    );
};

export default Campaigns;
