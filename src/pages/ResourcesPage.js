import React from 'react';
import ResourceCard from '../components/ResourceCard';

const dummyResources = [
  { id: 1, title: "Mathematics Study Guide", description: "Comprehensive guide for calculus and algebra.", url: "/documents/math_guide.pdf" },
  { id: 2, title: "Science Lab Manuals", description: "Downloadable manuals for all laboratory sessions.", url: "/documents/science_labs.zip" },
  { id: 3, title: "Literature Analysis Tools", description: "Resources to help with literary analysis.", url: "/resources/literature_tools" },
  { id: 4, title: "History Archives", description: "Access to historical documents and research papers.", url: "/archives/history" },
];

function ResourcesPage() {
  return (
    <div>
      <h1 className="page-header">Academic Resources</h1>
      <div className="resource-list">
        {dummyResources.map(resource => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            url={resource.url}
          />
        ))}
      </div>
    </div>
  );
}

export default ResourcesPage;