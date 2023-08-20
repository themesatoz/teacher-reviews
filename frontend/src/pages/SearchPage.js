import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import teachersData from './teachersData'; // Import your teacher data

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search logic using the searchQuery
    const results = teachersData.filter((teacher) => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const nameIncludesQuery = teacher.name.toLowerCase().includes(lowerCaseQuery);
      const hasMatchingEmployment = teacher.employmentHistory.some(
        (job) => job.school.toLowerCase().includes(lowerCaseQuery)
      );
      return nameIncludesQuery || hasMatchingEmployment;
    });
    
    setSearchResults(results);
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Search Teachers</h1>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="searchQuery">
          <Form.Control
            type="text"
            placeholder="Search by name or institute name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </Form>
      <Row className="mt-4">
        {searchResults.map((teacher) => (
          <Col key={teacher.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={teacher.profileImage} alt={teacher.name} />
              <Card.Body>
                <Card.Title>{teacher.name}</Card.Title>
                <Card.Text>{teacher.subjects.join(', ')}</Card.Text>
                {/* Use Link to navigate to teacher profile */}
                <Link to={`/teacher/${teacher.id}`} className="btn btn-primary">
                  View Profile
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchPage;
