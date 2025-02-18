import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Rating,
  TextField,
  Button,
} from "@mui/material";

const PropertyTabs = ({ singlePostData, userData, reviews, onAddReview }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

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

  const handleReviewSubmit = () => {
    if (rating > 0 && comment.trim()) {
      const newReview = {
        name: userData.name,
        rating,
        comment,
      };
      onAddReview(newReview);
      setRating(0);
      setComment("");
    } else {
      alert("Please provide a rating and comment.");
    }
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

          {/* Add New Review Form */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Add Your Review
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
              {/* Star Rating */}
              <Rating
                value={rating}
                onChange={(e, newValue) => setRating(newValue)}
                precision={0.5}
              />

              {/* Textarea for Comment */}
              <TextField
                label="Write your comment"
                variant="outlined"
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                sx={{ mt: 2 }}
              />

              {/* Submit Button */}
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleReviewSubmit}
              >
                Submit Review
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PropertyTabs;
