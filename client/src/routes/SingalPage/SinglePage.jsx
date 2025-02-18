import { useState } from "react";
import Map from "../../components/map/Map";
import Slider from "../../components/searchbar/SearchBar";
import PropertyTabs from "../../components/Tab/Propertytab";
import { singlePostData, userData } from "../../lib/dummydata";
import "./SinglePage.scss";

function SinglePage() {
  const reviews = [
    {
      name: "Alice",
      rating: 5,
      comment: "Amazing place! Everything was perfect.",
    },
    {
      name: "Bob",
      rating: 4,
      comment: "Very comfortable and clean. Would stay again.",
    },
    {
      name: "Charlie",
      rating: 3,
      comment: "Decent experience, but could improve the amenities.",
    },
    {
      name: "Diana",
      rating: 4.5,
      comment: "Great value for money. Highly recommended!",
    },
  ];
  const [reviews1, setReviews] = useState(reviews);
  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <PropertyTabs
            singlePostData={singlePostData}
            reviews={reviews1}
            userData={userData}
            onAddReview={handleAddReview}
          />
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="pet" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="fee" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="size" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="bed" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="bath" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="school" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="bus" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="restaurant" />

              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="save" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
