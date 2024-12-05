import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateCampaign = () => {

    const campaign = useLoaderData();
    const { user } = useContext(AuthContext); // Assuming user info is available from context
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
      });

    
      const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const updateFormData = {
            image: form.image.value,
            title: form.title.value,
            campaignType: form.campaignType.value,
            description: form.description.value,
            minDonation: form.minDonation.value,
            deadline: form.deadline.value,
            email: userInfo.email,
            name: userInfo.name,
        };

        // Send PUT request to update campaign
        fetch(`http://localhost:5000/campaigns/${campaign._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateFormData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Campaign updated successfully!",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                    form.reset()
                    navigate("/mycampaign");
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Campaign wasn't updated.",
                        icon: "error",
                        confirmButtonText: "Try Again",
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: "An error occurred while updating the campaign.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
                console.error(error);
            });
    };

    useEffect(() => {
        if (user && (!user.displayName || !user.email)) {
          fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                setUserInfo({
                  name: data.name || 'Guest', // Assuming the user's name is stored in the DB
                  email: data.email,
                });
              }
            })
            .catch((error) => {
              console.error('Error fetching user info from DB:', error);
            });
        } else if (user) {
          // Use the context if the name and email are available
          setUserInfo({
            name: user.displayName || 'Guest',
            email: user.email,
          });
        }
      }, [user]);

    return (
        <>
        <form onSubmit={handleSubmit} className="card-body md:w-5/6 mx-auto my-12">
      <h1 className="text-5xl font-extrabold text-center text-primary">Update Campaign: {campaign.title}</h1>

      {/* Image field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-accent font-semibold">Image (URL)</span>
        </label>
        <input
          name="image"
          type="url"
          placeholder="Enter campaign image URL"
          className="input input-bordered placeholder-accent border-accent"
          defaultValue={campaign.image}
          required
        />
      </div>

      {/* Campaign title field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-accent font-semibold">Campaign Title</span>
        </label>
        <input
          name="title"
          type="text"
          placeholder="Enter campaign title"
          className="input input-bordered placeholder-accent border-accent"
          defaultValue={campaign.title}
          required
        />
      </div>

      {/* Campaign type dropdown */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-accent font-semibold">Campaign Type</span>
        </label>
        <select
          name="campaignType"
          className="select select-bordered"
          defaultValue={campaign.campaignType}
          required
        >
          <option defaultValue="">Select type</option>
          <option defaultValue="personal issue">Personal Issue</option>
          <option defaultValue="startup">Startup</option>
          <option defaultValue="business">Business</option>
          <option defaultValue="creative ideas">Creative Ideas</option>
        </select>
      </div>

      {/* Description field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-accent font-semibold">Description</span>
        </label>
        <textarea
          name="description"
          placeholder="Enter campaign description"
          className="textarea textarea-bordered placeholder-accent border-accent"
          defaultValue={campaign.description}
          required
        />
      </div>

      {/* Minimum donation amount field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-accent font-semibold">Minimum Donation</span>
        </label>
        <input
          name="minDonation"
          type="number"
          placeholder="Enter minimum donation amount"
          className="input input-bordered placeholder-accent border-accent"
          defaultValue={campaign.minDonation}
          required
        />
      </div>

      {/* Deadline field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-accent font-semibold underline">Deadline</span>
        </label>
        <input
          name="deadline"
          type="date"
          className="input input-bordered placeholder-accent border-accent"
          defaultValue={campaign.deadline}
          required
        />
      </div>

      {/* User email (read-only) */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-accent font-semibold">Your Email</span>
        </label>
        <input
          type="email"
          defaultValue={userInfo.email}
          className="input input-bordered placeholder-accent border-accent"
          readOnly
        />
      </div>

      {/* User name (read-only) */}
      <div className="form-control">
        <label className="label">
          <span className="label-text text-accent font-semibold">Your Name</span>
        </label>
        <input
          type="text"
          defaultValue={userInfo.name}
          className="input input-bordered placeholder-accent border-accent"
          readOnly
        />
      </div>

      {/* Add button */}
      <div className="form-control mt-6">
        <button className="btn btn-primary text-[#FFDEB6]">Add Campaign</button>
      </div>
    </form>
        </>
    );
};

export default UpdateCampaign;