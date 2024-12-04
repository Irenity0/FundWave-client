import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { Tooltip } from 'react-tooltip'

const AddCampaign = () => {
  const { user } = useContext(AuthContext); // Assuming user info is available from context
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    campaignType: '',
    description: '',
    minDonation: '',
    deadline: '',
  });

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });

  // Fetch user info from the database if not available from AuthContext
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.image ||
      !formData.title ||
      !formData.campaignType ||
      !formData.description ||
      !formData.minDonation ||
      !formData.deadline
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill all fields before submitting.',
      });
      return;
    }

    const campaignData = {
      ...formData,
      email: userInfo.email, // User email from context or database
      name: userInfo.name, // User name from context or database
    };

    // Sending the campaign data to the backend
    fetch('http://localhost:5000/campaigns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaignData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Campaign Added!',
            text: 'Your campaign has been successfully added.',
          });
          setFormData({
            image: '',
            title: '',
            campaignType: '',
            description: '',
            minDonation: '',
            deadline: '',
        });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong. Please try again later.',
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="card-body md:w-5/6 mx-auto my-12">
      <h1 className="text-5xl font-extrabold text-center text-primary">Add Campaign</h1>

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
          value={formData.image}
          onChange={handleChange}
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
          value={formData.title}
          onChange={handleChange}
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
          value={formData.campaignType}
          onChange={handleChange}
          required
        >
          <option value="">Select type</option>
          <option value="personal issue">Personal Issue</option>
          <option value="startup">Startup</option>
          <option value="business">Business</option>
          <option value="creative ideas">Creative Ideas</option>
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
          value={formData.description}
          onChange={handleChange}
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
          value={formData.minDonation}
          onChange={handleChange}
          required
        />
      </div>

      {/* Deadline field */}
      <div className="form-control">
        <label className="label">
          <span data-tooltip-id="my-tooltip" data-tooltip-content="WARNING: You cannot update the deadline later. Choose it wisely" className="label-text text-accent font-semibold underline">Deadline</span>
        </label>
        <input
          name="deadline"
          type="date"
          className="input input-bordered placeholder-accent border-accent"
          value={formData.deadline}
          onChange={handleChange}
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
          value={userInfo.email}
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
          value={userInfo.name}
          className="input input-bordered placeholder-accent border-accent"
          readOnly
        />
      </div>

      {/* Add button */}
      <div className="form-control mt-6">
        <button className="btn btn-primary text-[#FFDEB6]">Add Campaign</button>
      </div>
      <Tooltip id="my-tooltip" />
    </form>
  );
};

export default AddCampaign;
