import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Rating } from "@mui/material";

const PropertyTabs = ({ singlePostData, userData, reviews }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Calculate overall rating
  const calculateOverallRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  const overallRating = calculateOverallRating();

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      {/* Tabs Header */}
      <Tabs value={activeTab} onChange={handleChange} centered>
        <Tab label="Info" />
        <Tab label="Reviews" />
      </Tabs>

      {/* Tab Content */}
      {activeTab === 0 && (
        <Box sx={{ p: 2 }}>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="Location Pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">₹{singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="User" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </Box>
      )}

      {activeTab === 1 && (
        <Box sx={{ p: 2 }}>
          {/* Overall Rating */}
          <Box sx={{ mb: 2, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Overall Rating
            </Typography>
            <Rating value={overallRating} readOnly precision={0.5} />
            <Typography variant="body2">
              {reviews.length > 0
                ? `${overallRating.toFixed(1)} (${reviews.length} review${
                    reviews.length > 1 ? "s" : ""
                  })`
                : "No reviews yet."}
            </Typography>
          </Box>

          {/* Individual Reviews */}
          <div className="reviews">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <Box
                  key={index}
                  sx={{ mb: 2, borderBottom: "1px solid #ddd", pb: 1 }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {review.name}
                  </Typography>
                  <Rating value={review.rating} readOnly precision={0.5} />
                  <Typography variant="body2">{review.comment}</Typography>
                </Box>
              ))
            ) : (
              <Typography>No reviews yet.</Typography>
            )}
          </div>
        </Box>
      )}
    </Box>
  );
};

export default PropertyTabs;
