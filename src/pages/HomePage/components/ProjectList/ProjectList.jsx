import { useEffect, useState } from "react";
import styles from "./ProjectList.module.scss";
import Project from "./components/Project/Project";
import Modal from "./components/Modal/Modal";
import projects from "./../../../../data/projectListOptions";
import clsx from "clsx";

const ProjectList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={clsx("container", styles.projectContainer)}>
      <div id="projects" className={styles.projectContent}>
        <h1>PROJECTS</h1>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              description={project.description}
              setModal={setModal}
              key={index}
              path={project.path}
              src={project.src}
              alt={project.alt}
            />
          );
        })}
      </div>
      {viewportWidth >= 1024 && <Modal modal={modal} projects={projects} />}
    </section>
  );
};
export default ProjectList;
