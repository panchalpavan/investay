import React, { useEffect, useState } from "react";
import { interestedClients } from "../../../action-creators/enquiry/interestedClients";
import { myListings } from "../../../action-creators/properties/myListings";
import LoadingSpinner from "../../../components/LoadingSpinner";
import InterestedClients from "../../../components/profile/InterestedClients";
import MyEnquiries from "../../../components/profile/MyEnquiries";
import MyListing from "../../../components/profile/MyListing";

const MyListings = () => {
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    setLoading(true);
    myListings()
      .then((response: any) => {
        if (response.success) {
          setListings(response.properties);
        }
      })
      .catch((error: any) => {
        console.log("Error in my listings: ", error.response.data.error);
        setLoading(false);
      });

    interestedClients()
      .then((response: any) => {
        if (response.success) {
          setEnquiries(response.interestedClients);
          setLoading(false);
        }
      })
      .catch((error: any) => {
        console.log("Interested Clients error: ", error.response.data.error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <LoadingSpinner />}
      <MyListing listings={listings} />
      <InterestedClients enquiries={enquiries} />
    </div>
  );
};

export default MyListings;
MyListings.profile = (page: React.ReactElement) => {
  return { page };
};
