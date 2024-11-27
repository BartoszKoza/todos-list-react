import { Header, TaskSection, TaskSectionHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <TaskSection>
    <TaskSectionHeader>
      <Header>{title}</Header>
      {extraHeaderContent}
    </TaskSectionHeader>
    <div className="tasksSectionBody">{body}</div>
  </TaskSection>
);

export default Section;