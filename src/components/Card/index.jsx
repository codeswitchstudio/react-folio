// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProjectCard({ project }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.text}
        </Card.Text>
        <a href='{project.url}'><Button variant="primary">Go</Button></a>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
