import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Badge, Form, Button } from 'react-bootstrap';
import teachersData from './teachersData'; // Import your teacher data

const TeacherProfile = () => {
  const { teacherId } = useParams(); // Get the teacherId from URL
  
  const { teachers, loading, error } = teachersData();

  // Find the selected teacher based on the teacherId
  const selectedTeacher = teachers.find((teacher) => teacher.id === parseInt(teacherId));
  console.log("Selected Teacher is: ", selectedTeacher.name);

  // State for rating form
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

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
    setReview('');
  };

  const renderStars = () => {
    const stars = [];
    const ratingRounded = Math.round(selectedTeacher.rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= ratingRounded ? 'filled' : 'empty'}`}
          role="button"
          onClick={() => setRating(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <>
    <Container className="my-5">
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title className="text-center mb-0">{selectedTeacher.name}</Card.Title>
          <Card.Subtitle className="text-muted text-center mb-3">
            {selectedTeacher.subjects.join(', ')}
          </Card.Subtitle>
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
            {/* Rating and review form fields */}
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
