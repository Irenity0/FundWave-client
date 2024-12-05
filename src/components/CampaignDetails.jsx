import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  const { user } = useContext(AuthContext); // Get logged-in user's info
  const campaign = useLoaderData(); // Fetch specific campaign details

  const [mongoUser, setMongoUser] = useState(null);

  useEffect(() => {
      if (user?.email) {
          fetch(`http://localhost:5000/users/${user.email}`)
              .then(res => res.json())
              .then(data => setMongoUser(data))
              .catch(error => console.error("Error fetching MongoDB user:", error));
      }
  }, [user]);

  const displayName = user?.displayName || mongoUser?.name || "User";

  const handleDonate = async () => {
    const currentDate = new Date();
    const campaignDeadline = new Date(campaign.deadline);

    if (currentDate > campaignDeadline) {
      // If deadline is over, show a message and prevent donation
      Swal.fire({
        icon: "error",
        title: "Deadline Over",
        text: "You can no longer donate to this campaign as the deadline has passed.",
      });
      return;
    }

    if (!user) {
      // If no user is logged in
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in to donate.",
      });
      return;
    }

    // Prepare donation data
    const donationData = {
      campaignId: campaign._id,
      title: campaign.title,
      type: campaign.campaignType,
      description: campaign.description,
      donatedBy: user.email, // Logged-in user's email
      name: displayName,
      date: new Date().toISOString(),
    };

    try {
      // Add the donation to the database (backend or Firebase)
      const response = await fetch("http://localhost:5000/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "Your donation has been recorded.",
        });
      } else {
        throw new Error("Failed to record donation.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="campaign-details">
      <h1 className="text-4xl font-bold text-primary">{campaign.title}</h1>
      <img
        src={campaign.image}
        alt={campaign.title}
        className="campaign-image w-full max-h-[400px] object-cover my-4 rounded-lg"
        />
      <p className="text-lg"><strong>By:</strong> {campaign.name}</p>
      <p className="text-lg"><strong>Description: </strong>{campaign.description}</p>
      <p><strong>Type:</strong> {campaign.campaignType}</p>
      <p><strong>Minimum Donation:</strong> ${campaign.minDonation}</p>
      <p><strong>Deadline: </strong>{new Date(campaign.deadline).toLocaleDateString()}</p>
      <p><strong>Contact: </strong> {campaign.email}</p>
      <button className="btn btn-primary mt-4" onClick={handleDonate}>
        Donate Now
      </button>
    </div>
  );
};

export default CampaignDetails;
