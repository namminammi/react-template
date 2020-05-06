import React, { useState } from "react";

const ProjectRow = ({ ...props }) => {
  const project = props.project;
  const link_name = project.link_name;
  const website = project.website;
  const desc = project.desc;

  return (
    <div className="control">
      <h4>{link_name}</h4>
      <div className="description">
        <p>{desc}</p>
        <a href={website} target="_blank" rel="noopener noreferrer">
          link
        </a>
      </div>
    </div>
  );
};

const ProjectTable = ({ ...props }) => {
  const filterText = props.filterText;
  const rows = [];

  props.projects.forEach((project) => {
    if (project.category.indexOf(filterText) === -1) {
      return;
    }
    rows.push(<ProjectRow project={project} key={project.link_name} />);
  });

  return <div className="container">{rows}</div>;
};

const SearchButtons = ({ ...props }) => {
  // eslint-disable-next-line
  const [value, setValue] = useState(props);
  const handleFilterTextChange = (e) => {
    setValue(e.target.value);
    props.onFilterTextChange(e.target.value);
  };

  return (
    <form>
      <input
        type="button"
        placeholder="Team Works"
        value="Team Works"
        onClick={handleFilterTextChange}
      />
      <input
        type="button"
        placeholder="Personal Projects"
        value="Personal Projects"
        onClick={handleFilterTextChange}
      />
      <input
        type="button"
        placeholder="Front End Tests"
        value="Front End Tests"
        onClick={handleFilterTextChange}
      />
      <input
        type="button"
        placeholder="Etc"
        value="Etc"
        onClick={handleFilterTextChange}
      />
      <input
        type="button"
        placeholder="See All"
        value=""
        onClick={handleFilterTextChange}
      />
      <label>See All</label>
    </form>
  );
};

const FilterableProjectTable = ({ ...props }) => {
  const [filterText, setFilterText] = useState(props);
  const handleFilterTextChange = (filterText) => {
    setFilterText(filterText);
  };
  return (
    <div>
      <SearchButtons
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
      />
      <ProjectTable projects={props.projects} filterText={filterText} />
    </div>
  );
};

export default FilterableProjectTable;
