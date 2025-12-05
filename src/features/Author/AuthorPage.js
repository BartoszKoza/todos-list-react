import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";


export default () => (
  <Container>
    <Header title="O autorze" />
    <Section 
        title="Bartosz Koza" 
        body = {
            <>
            <p> 
                Pochodzę z małej miejscowości nieopodal Kielc. Ukończyłem Liceum
                Ogólnokształcące o profilu matematyczno - geograficzno - angielskim. Interesuje się sportem i muzyką.
                Moim ulubionym sportem jest oczywiście piłka nożna, natomiast jeśli chodzi o muzykę najczęściej słucham
                polskiego rapu/trapu, jednak nie zamykam się na inne gatunku muzyczne. Klasyki zespołu Kombii są mi
                bardzo dobrze znane. Muzyka to coś co pozwala mi na chwilę odpłynąć i zapomnieć o wszystkim.
               
            </p> 
        
        
            <h2> Zainteresowania </h2>


                Jak już wspominałem moim ulubionym sportem jest piłka nożna natomiast moim
                ulubionym zespołem któremu kibicuje od lat jest <i>Paris Saint-Germain</i>. Jeżeli chodzi o klub pochodzący z polski wspieram <i>Cracovię</i>. Pobocznym zainteresowaniem jest muzyka. Moim marzeniem jest nauczyć się grać na
                gitarze, ale na to przyjdzie jeszcze czas. Uwielbiam wsłuchiwać się w utwory muzyczne i analizować je.
                Analizuje teksty piosenek doszukując się często drugiego dna. Najwięcej podwójnych znaczeń i gier
                słownych znalazłem w piosenkach Taco Hemingway'a dlatego też on jest moim ulubionym artystom.

           
       
        
          
            <h2 class="section__heading"> Dlaczego Frontend? </h2>


            <p>Zawsze myślałem, że żeby programować to trzeba to robić od dziecka. Myślałem, że
                wszyscy programiści są po
                technikum i
                studiach informatycznych. Po zobaczeniu reklamy YouCode postanowiłem wpaść na live'a. Dowiedziałem się
                tam,
                że
                programistą się nie rodzisz a stajesz, że wcale nie potrzeba studiów żeby się w tym odnaleźć. Oczywiście
                studia
                mogą pomóc ale one nie definiują dobrego programisty. Myślę, że Frontend to przyszłość! </p>
            
            
                <h2> Co dalej? </h2>


                <p> Mam nadzieję, że po zakończeniu kursu będę mógł znaleźć pracę w tej branży.
                    Wysokie zarobki, zdalna praca,
                    możliwość podróżowania podczas pracy czyli tak zwane <i>workation</i> to brzmi fantastycznie. </p>
            </>
        } />
            
        
            
  </Container>
);
