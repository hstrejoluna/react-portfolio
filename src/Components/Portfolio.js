import * as React from "react";
import { useState } from "react";
import Modal from "./Modal";

//*** Me puedo traer la misma data {title, projects, etc} div otro componente en el link con {data}**/
const Portfolio = ({ data }) => {
  //State for modal
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (project) => {
    setModal(true);
    setModalData(project);
  };
  const Toggle = () => setModal(!modal);
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <div onClick={() => openModal(projects)} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  var projectImage = "images/portfolio/" + modalData.image;

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
          <Modal show={modal} title={modalData.title} close={Toggle}>
            <section className="modal__columnimg">
              <img alt="project-hstrejoluna" src={projectImage}></img>
            </section>

            <section className="modal__columndesc">
              <h2>What I learned?</h2>
              <p>{modalData.description}</p>
            </section>
            <section className="modal__columnskills">
              <h2>Hard Skills</h2>
              <p>{modalData.hardskills}</p>
              <h2>Soft Skills</h2>
              <p>{modalData.softskills}</p>
            </section>

           |<a href={modalData.url}>See Project on wild</a>  | 
            {modalData.location}  |
            {modalData.industry}  | 
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
