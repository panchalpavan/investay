import React, { useEffect, useState } from "react";
import { myEnquiries } from "../../../action-creators/enquiry/myEnquiries";
import { myProperties } from "../../../action-creators/properties/myProperties";
import { myShortlists } from "../../../action-creators/shortlist";
import LoadingSpinner from "../../../components/LoadingSpinner";
import MyEnquiries from "../../../components/profile/MyEnquiries";
import MyProperties from "../../../components/profile/MyProperties";
import MyShortLists from "../../../components/profile/MyShortlists";

const myListings = () => {
  const [loading, setLoading] = useState(false);
  const [shortlists, setShortlists] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [myproperties, setMyproperties] = useState([]);

  useEffect(() => {
    setLoading(true);
    myShortlists()
      .then((response: any) => {
        if (response.success) {
          setShortlists(response.shortlist.properties);
        }
      })
      .catch((error: any) => {
        console.log("Error in my listings: ", error.response.data.error);
        setLoading(false);
      });

    myEnquiries()
      .then((response: any) => {
        if (response.success) {
          setEnquiries(response.enquiries);
        }
      })
      .catch((error: any) => {
        console.log("My Enquiries error: ", error.response.data.error);
        setLoading(false);
      });
      
    myProperties()
      .then((response: any) => {
        if (response.success) {
          setMyproperties(response.properties);
          setLoading(false);
        }
      })
      .catch((error: any) => {
        console.log("My Properties error: ", error.response.data.error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && <LoadingSpinner />}
      <MyShortLists shortlists={shortlists} />
      <MyEnquiries enquiries={enquiries} />
      <MyProperties properties={myproperties} />
    </div>
  );
};

export default myListings;
myListings.profile = (page: React.ReactElement) => {
  return { page };
};
