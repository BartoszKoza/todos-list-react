import "./style.css"

const Section = ({title, body, extraHeaderContent}) => (
    <section className="taskSection">
        <header>
            <h2 className="tasksHeader">{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;