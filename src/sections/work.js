import React from "react";
import { graphql, StaticQuery } from "gatsby";
//Styles
import "../styles/work.scss";

const WorkCards = ({ work }) => {
  return (
    <div className="col-sm-12 col-md-6">
      <div key={work.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="lead card-title work-title">{work.title}</h5>
            <h6 className="lead card-subtitle work-date">({work.date})</h6>
            <h6 className="lead card-subtitle text-muted work-title d-inline">
              {work.company}
            </h6>
            <p className="card-text text-muted work-location d-inline ml-3">
              {work.location}
            </p>
            <ul>
              {work.responsibility.map((e, i) => (
                <li className="card-text work-res" key={i}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              works {
                id
                title
                company
                location
                responsibility
                date
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <>
            <div className="section-title" id="works">
              <h1>Work Experiences</h1>
            </div>
            <div className="work-box">
              <div className="tab-content">
                <div className="container">
                  <div className="row">
                    {data.site.siteMetadata.works.map((work) => (
                      <WorkCards key={work.id} work={work} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    />
  );
};

export default Work;
