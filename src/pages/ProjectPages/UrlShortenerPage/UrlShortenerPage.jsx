import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import projects from "../../../data/projectListOptions";

const UrlShortenerPage = () => {
  const { src, alt, title, code, demo, techStack } = projects[3];

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

export default UrlShortenerPage;
