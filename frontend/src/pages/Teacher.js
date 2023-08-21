import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Badge, Form, Button } from "react-bootstrap";
import teachersData from "./teachersData"; // Import your teacher data
import "./style.css";

const TeacherProfile = () => {
  const { teacherId } = useParams(); // Get the teacherId from URL

  // Find the selected teacher based on the teacherId
  const selectedTeacher = teachersData.find(
    (teacher) => teacher.id === parseInt(teacherId)
  );
  console.log("Selected Teacher is: ", selectedTeacher.name);

  // State for rating form
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    // Process and send review to the server
    // You can implement API calls or state management here
    // Reset the form fields
    setRating(0);
    setReview("");
  };

  const renderStars = () => {
    const stars = [];
    const ratingRounded = Math.round(selectedTeacher.rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= ratingRounded ? "filled" : "empty"}`}
          role="button"
          onClick={() => setRating(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  const styl = () => ({
    background: selectedTeacher.background ? `url(${selectedTeacher.background})` : 'gray',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  });
  

  return (
    <>
      <Container className="my-5">
        <Card className="shadow-lg">
          <Card.Body>
            <div className="profile" style={styl()}>
              <img src={selectedTeacher.profileImage} alt="TeacherImage" />
            </div>
            <Card.Title className="text-center mb-0">
              {selectedTeacher.name}
            </Card.Title>
            <Card.Subtitle className="text-muted text-center mb-3">
              {selectedTeacher.subjects.join(", ")}
            </Card.Subtitle>
            <h2>Bio:</h2>
            <p>{selectedTeacher.bio}</p>

            {/* Education Section */}
            <h4>Education</h4>
            <ul>
              {selectedTeacher.education.map((edu, index) => (
                <li key={index}>
                  {edu.degree} - {edu.institute}
                </li>
              ))}
            </ul>

            {/* Experience Section */}
            <h4>Experience</h4>
            <ul>
              {selectedTeacher.experience}
            </ul>

            {/* Employment History Section */}
            <h4>Employment History</h4>
            <ul>
              {selectedTeacher.employmentHistory.map((job, index) => (
                <li key={index}>
                  {job.position} - {job.school} - {job.years}
                </li>
              ))}
            </ul>
            <h4 className="mt-4">Rating</h4>
            <div className="d-flex align-items-center">
              <Badge pill variant="success" className="rating-badge">
                {selectedTeacher.rating.toFixed(1)}
              </Badge>
              <p className="ml-2 mb-0">Based on student reviews</p>
            </div>
            <div className="star-rating">
              {renderStars()}
              <p className="ml-2 mb-0">Click to rate</p>
            </div>
            <Form className="mt-4" onSubmit={handleSubmitReview}>
              <Form.Group controlId="rating">
                <Form.Label>Your Rating</Form.Label>
                <Form.Control
                  as="select"
                  value={rating}
                  onChange={handleRatingChange}
                >
                  <option value={0}>Select...</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="review">
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={review}
                  onChange={handleReviewChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Review
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default TeacherProfile;
