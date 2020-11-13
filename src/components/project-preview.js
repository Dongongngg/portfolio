import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//styles
import "../styles/project-preview.scss";

const ProjectCard = ({ data }) => {
  return (
    <div className="col-sm-12 col-md-6">
      <div className="card shadow rounded mx-auto">
        <div className="project-img-box rounded">
          <img
            className="project-img rounded"
            src={data.img}
            alt="project"
          ></img>
        </div>

        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title mr-2">{data.title}</h4>
            {data.github_url ? (
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="2x"
                className="mr-2"
                onClick={() => {
                  window.open(data.github_url);
                }}
              />
            ) : null}
            {data.netlify_url ? (
              <FontAwesomeIcon
                icon={["fas", "link"]}
                size="2x"
                onClick={() => {
                  window.open(data.netlify_url);
                }}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Test it"
              />
            ) : null}
          </div>
          <p className="card-text">{data.description}</p>
          <div
            className="dropdown-divider"
            style={{ borderTop: "1px solid #413538", margin: "1rem 0" }}
          ></div>
          <div>
            {data.skills.map((e, i) => (
              <p className="skills" key={i}>
                {e}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectPreview() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              projects {
                description
                github_url
                id
                img
                netlify_url
                skills
                title
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <div className="project-preview-box">
            <div className="container-fluid">
              <div className="row project-preview">
                {data.site.siteMetadata.projects.map((e) => {
                  return <ProjectCard data={e} key={e.id} />;
                })}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
