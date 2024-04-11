import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import projects from "../../../data/projectListOptions";

const UrlShortenerPage = () => {
  const { src, alt, title, code, demo, techStack } = projects[3];

  const content = (
    <p>
      This Currency Converter application is built with React, SCSS, and
      Bootstrap, utilizing the free API provided by the National Bank of Poland
      (NBP) to fetch the latest exchange rates for Euro (EUR), US Dollar (USD),
      and Swiss Franc (CHF). The app allows users to convert the selected
      currency to Polish Zloty (PLN). Features Real-Time Exchange Rates: The
      application fetches the latest exchange rates from the NBP API, ensuring
      accuracy and up-to-date currency conversions. User-Friendly Interface: The
      app provides a simple and intuitive user interface for easy navigation and
      efficient currency conversion.
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
