import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import projects from "../../../data/projectListOptions";

const PersonalWebsitePage = () => {
  const { src, alt, title, code, demo, techStack } = projects[1];

  const content = (
    <p>
      This portfolio website was developed with the goal of creating a dynamic
      and engaging platform to present my work. It serves as a digital resume,
      gallery, and contact point, encapsulating everything a potential client or
      employer might want to know about me.
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

export default PersonalWebsitePage;
