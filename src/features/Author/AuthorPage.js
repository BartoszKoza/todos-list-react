import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Bartosz Koza"
      body={
        <>
          <p>
            Pochodzę z okolic Kielc i mam wykształcenie licealne o profilu
            matematyczno-geograficzno-angielskim. Pasjonuję się frontendem,
            sportem – szczególnie piłką nożną – oraz muzyką. Uwielbiam
            analizować teksty muzyczne i dostrzegać w nich drugie dno, a w
            przyszłości chciałbym nauczyć się gry na gitarze.
          </p>

          <h2> Dlaczego Frontend? </h2>
          <p>
            Wierzę, że programistą można stać się w każdym wieku. Frontend łączy
            kreatywność z technologią i daje możliwość rozwijania umiejętności w
            praktyczny sposób.
          </p>
          <h2> Plany zawodowe </h2>
          <p>
            Po ukończeniu kursu planuję podjąć pracę w branży IT, korzystając z
            możliwości pracy zdalnej i łączenia jej z podróżowaniem.
          </p>
        </>
      }
    />
  </Container>
);
