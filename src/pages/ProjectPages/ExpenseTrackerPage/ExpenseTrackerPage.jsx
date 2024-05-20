import ProjectPage from "../../../components/ProjectPage/ProjectPage";
import projects from "../../../data/projectListOptions";

const ExpenseTrackerPage = () => {
  const { src, alt, title, code, demo, techStack } = projects[2];

  const content = (
    <p>
      This Expense Tracker App is designed to help users manage their personal
      finances efficiently. This intuitive and user-friendly application enables
      you to track your income, monitor your expenses, and gain valuable
      insights into your spending habits. Whether you&apos;re aiming to save
      more money, cut down on unnecessary expenses, or simply get a better grasp
      of your financial situation, our app is the perfect tool for you.
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

export default ExpenseTrackerPage;
