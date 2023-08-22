import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function Modal({ handleAddMovie }) {
  const [validated, setValidated] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieLink, setMovieLink] = useState("");
  const [movieRating, setMovieRating] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    event.stopPropagation();

    let newMovie = {
      title: movieTitle,
      description: movieDescription,
      posterurl: movieLink,
      rating: movieRating,
    };

    handleAddMovie(newMovie);
    console.log(newMovie);
    setValidated(true);
  };

  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ width: "40%", margin: "auto" }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Movie Title"
              onChange={(e) => setMovieTitle(e.target.value)}
              value={movieTitle}
              defaultValue={movieTitle}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Movie Description</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Movie Description"
              onChange={(e) => setMovieDescription(e.target.value)}
              value={movieDescription}
              defaultValue={movieDescription}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Movie Link</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Movie Link"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setMovieLink(e.target.value)}
                value={movieLink}
                defaultValue={movieLink}
              />
              <Form.Control.Feedback type="invalid">
                Please type in the movie link.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rating"
              required
              onChange={(e) => setMovieRating(e.target.value)}
              value={movieRating}
              defaultValue={movieRating}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a rating.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default Modal;