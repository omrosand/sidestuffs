import { Link } from "react-router-dom";

const CardSection = () => (
  <section className="cardSection">
    <section>
      <article>
        <h2>Bedre kundereiser</h2>
        <p>
          Vi hjelper til med å finne de viktigste kundesituasjonene og forbedre
          dem. Både for kundene dine og for bedriften. Bedre kundereiser er
          veien til bedre resultater.
        </p>
        <Link>Les mer</Link>
      </article>
      <article>
        <h2>Digital strategi for markedsføring og salg</h2>
        <p>
          Digitaliseringen endrer rammebetingelsene i alle bransjer. Vi hjelper
          med forbedring, effektivisering eller disrupsjon. Alltid med
          utgangspunkt i kundeatferd og kundeverdi.
        </p>
        <Link>Les mer</Link>
      </article>
      <article>
        <h2>Inbound marketing</h2>
        <p>
          Vi er Norges største kompetansemiljø på inbound marketing og HubSpot.
          Vi hjelper deg med alt fra strategi, etablering og gjennomføring.
        </p>
        <Link>Les mer</Link>
      </article>
    </section>
  </section>
);
export default CardSection;
