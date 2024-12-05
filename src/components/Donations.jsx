import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "./loading";

const MyDonations = () => {
  const { user } = useContext(AuthContext); // Get logged-in user's info
  const [allDonations, setAllDonations] = useState([]);
  const [myDonations, setMyDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all donations from the backend
    fetch("http://localhost:5000/donations")
      .then((res) => res.json())
      .then((data) => {
        setAllDonations(data);

        // Filter donations for the logged-in user
        const userDonations = data.filter(
          (donation) => donation.donatedBy === user?.email
        );
        setMyDonations(userDonations);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching donations:", error);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">
          My Donations
        </h2>
        {myDonations.length === 0 ? (
          <p className="text-center text-lg text-accent">
            You haven't made any donations yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myDonations.map((donation) => (
              <div key={donation._id} className="p-6 bg-neutral/70 shadow-lg rounded-lg">
                <h3 className="text-2xl text-secondary font-bold mb-4">{donation.title}</h3>
                <p className="text-accent mb-4"><span className="font-semibold">Type: </span>{donation.type}</p>
                <p className="text-accent mb-4"><span className="font-semibold">Description: </span>{donation.description}</p>
                <p className="text-accent mb-4"><span className="font-semibold">Date: </span>{new Date(donation.date).toLocaleDateString()}</p>
                <p className="text-accent mb-4 font-semibold">Thanks for donating!!</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
