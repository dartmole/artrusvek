import React from "react";
//Router
import { Link } from "react-router-dom";
//Components
import PlayList from "./PlayList";

const Section = (props) => {
  return (
    <section>
      <div className="section_header">
        <h2>{props.title}</h2>
        <Link to={props.linkTo} className="title_link">
          Посмотреть все
        </Link>
      </div>
      <PlayList />
    </section>
  );
};

export default Section;
