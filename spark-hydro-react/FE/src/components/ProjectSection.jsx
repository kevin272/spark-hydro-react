import React from 'react';
import Table from './Table';

// Utility function to convert object to array of { field, value }
function objectToRows(obj) {
  return Object.entries(obj).map(([field, value]) => ({ field, value }));
}

function ProjectSection({ title, data }) {
  return (
    <section className="project-section">
      <h3>{title}</h3>
      {Array.isArray(data)
        ? data.map((obj, idx) => <Table key={idx} data={objectToRows(obj)} />)
        : <Table data={objectToRows(data)} />}
    </section>
  );
}

export default ProjectSection;