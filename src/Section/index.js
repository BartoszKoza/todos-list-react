import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="tasksSection">
    <header className="tasksSectionHeader">
      <h2 className="header">{title}</h2>
      {extraHeaderContent}
    </header>
    <div className="tasksSectionBody">{body}</div>
  </section>
);

export default Section;
