import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import projects from "../../../data/projectListOptions";

const SpaceInvadersPage = () => {
  const { src, alt, title, code, demo, techStack } = projects[0];

  const content = (
    <p>
      This is a classic arcade game implemented in JavaScript, where you control
      a spaceship to defend the Earth from waves of invading aliens.
    </p>
  );

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
