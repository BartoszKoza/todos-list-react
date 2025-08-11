import { BodyDivision, Header, TaskSection, TaskSectionHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <TaskSection>
    <TaskSectionHeader>
      <Header>{title}</Header>
      {extraHeaderContent}
    </TaskSectionHeader>
    <BodyDivision>{body}</BodyDivision>
  </TaskSection>
);

export default Section;
