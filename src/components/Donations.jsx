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
    fetch("https://assignment-10-server-eight-iota.vercel.app/donations")
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Type</th>
              <th>Description</th>
              <th>Date</th>
              <th>Thanks</th>
            </tr>
          </thead>
          <tbody>
            {myDonations.map((donation, index) => (
              <tr key={donation._id}>
                <td>{index + 1}</td>
                <td className="underline font-bold">{donation.title}</td>
                <td>{donation.type}</td>
                <td>{donation.description}</td>
                <td>{new Date(donation.date).toLocaleDateString()}</td>
                <td className="font-semibold">Thanks for donating!!</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
</div>
  );
};

export default MyDonations;
