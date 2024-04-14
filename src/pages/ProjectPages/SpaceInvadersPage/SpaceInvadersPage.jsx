import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import projects from "../../../data/projectListOptions";

const SpaceInvadersPage = () => {
  const { src, alt, title, code, demo, techStack } = projects[0];

  const content = <p>SOME TEXT</p>;

  return (
    <ProjectPage
      src={src}
      alt={alt}
      title={title}
      content={content}
      code={code}
      demo={demo}
      techStack={techStack}
    />
  );
};

export default SpaceInvadersPage;
