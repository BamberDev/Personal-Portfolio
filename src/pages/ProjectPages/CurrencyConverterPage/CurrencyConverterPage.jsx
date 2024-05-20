import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import projects from "../../../data/projectListOptions";

const CurrencyConverterPage = () => {
  const { src, alt, title, code, demo, techStack } = projects[4];

  const content = (
    <p>
      This application allows you to convert amounts between different
      currencies using the latest exchange rates.
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

export default CurrencyConverterPage;
