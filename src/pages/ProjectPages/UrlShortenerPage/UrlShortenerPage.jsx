import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import projects from "../../../data/projectListOptions";

const UrlShortenerPage = () => {
  const { src, alt, title, code, demo, techStack } = projects[3];

  const content = (
    <p>
      URL Shortener is a web application that allows users to shorten long URLs
      into compact, easy-to-share links. This application is designed to enhance
      the user experience by providing a simple and efficient way to manage
      URLs.
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

export default UrlShortenerPage;
