import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const MyCampaigns = () => {
  const { user } = useContext(AuthContext); 
  const campaigns = useLoaderData();
  const [loadedCampaigns, setLoadedCampaigns] = useState(campaigns);


  // Filter campaigns based on the logged-in user's email
  const userCampaigns = loadedCampaigns.filter(campaign => campaign.email === user?.email);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Campaign has been deleted.", "success");
              const remaining = loadedCampaigns.filter((cam) => cam._id !== id);
              setLoadedCampaigns(remaining);
            } else {
              Swal.fire("Error", "Failed to delete the campaign.", "error");
            }
          })
          .catch((error) => {
            Swal.fire("Error", "Something went wrong. Please try again later.", "error");
          });
      }
    });
  };
  

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
                            <tr key={campaign._id}>
                                <td>{index + 1}</td>
                                <td className="underline font-bold"><Link to={`/allcampaigns/${campaign._id}`}>{campaign.title}</Link></td>
                                <td>{campaign.campaignType}</td>
                                <td>{campaign.minDonation}</td>
                                <td>{campaign.deadline}</td>
                                <td>{campaign.email}</td>
                                <td>{campaign.name}</td>
                                <td><button className="btn text-blue-500 rounded-xl"><Link to={`/updatecampaign/${campaign._id}`}>Update</Link></button></td>
                                <td><button onClick={() => handleDelete(campaign._id)} className="btn text-red-500 rounded-xl">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </>
  );
};

export default MyCampaigns;
