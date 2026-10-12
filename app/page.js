
const myEmail = "sgramenservice@gmail.com";
const myNumber = "31612345678";

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap">
          <img
            className="logo"
            alt="S&G Ramenservice logo"
            src="/logo.png"
            width="56"
            height="44"
          />
          <a className="btn" href="mailto:sgramenservice@gmail.com?subject=Offerte%20ramen%20wassen">Gratis offerte</a>

{/*           <a
            className="btn btn-green"
            href={`https://wa.me/${myNumber}`}
          >
            Stuur een WhatsApp-bericht
          </a> */}
        </div>
      </header>

      <main>
        <div className="wrap hero">
          <div>
            <h1>Schone ramen, zonder gedoe.</h1>
            <p>
              S&amp;G Ramenservice wast de ramen van uw huis in Amsterdam.
              Twee jonge ondernemers, nette afspraken en een prijs die u
              vooraf weet. Vanaf €25, en de eerste 20 klanten krijgen 20% korting.
            </p>

            <div className="cta">
              <a
                className="btn"
                href={`mailto:${myEmail}?subject=Offerte%20ramen%20wassen`}
              >
                Vraag een gratis offerte
              </a>

              <a className="btn ghost" href="#prijzen">
                Bekijk prijzen
              </a>
            </div>
          </div>

          <div className="pane" aria-hidden="true">
            <div className="grid">
              <i />
              <i />
              <i />
              <i />
            </div>

            <svg
              className="sp"
              style={{ right: "22%", top: "24%" }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"
              />
            </svg>

            <svg
              className="sp"
              style={{
                left: "20%",
                bottom: "22%",
                width: 22,
                height: 22,
              }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"
              />
            </svg>

            <div className="haze"></div>
          </div>
        </div>

        <div className="wrap">
          <section id="prijzen">
            <h2>Eerlijke prijzen</h2>

            <div className="rows">
              <div>
                <b>Vanaf €25</b>
                <span>
                  Rijtjeshuis, ongeveer 8 ramen op de begane grond
                </span>
              </div>

              <div>
                <b>20% korting</b>
                <span>
                  Voor onze eerste 20 klanten (rijtjeshuis ongeveer €20)
                </span>
              </div>

              <div>
                <b>Op offerte</b>
                <span>
                  Grotere huizen, kozijnen en ramen aan beide kanten
                </span>
              </div>
            </div>

            <p className="note">
              U krijgt altijd eerst een gratis offerte. Wat we afspreken
              is wat u betaalt.
            </p>
          </section>

          <section>
            <h2>Zo werkt het</h2>

            <ol className="steps">
              <li>
                <strong>Stuur een e-mail{/*  of WhatsApp-bericht */}</strong>
                <p>
                  Neem contact met ons op via e-mail{/*  of WhatsApp */}.
                  Vertel kort waar u woont en hoeveel ramen u heeft.
                </p>
              </li>

              <li>
                <strong>Ontvang uw offerte</strong>
                <p>Gratis en vrijblijvend, met een vaste prijs en een datum.</p>
              </li>

              <li>
                <strong>Wij komen langs</strong>
                <p>
                  Wij wassen de ramen. U betaalt pas als u tevreden bent.
                </p>
              </li>
            </ol>
          </section>

          <section>
            <h2>Waarom voor ons kiezen?</h2>

            <div className="why">
              <div>
                <strong>Jonge ondernemers</strong>
                <p>
                  Wij zijn net begonnen en willen dat u tevreden bent.
                  Daarom doen we elke klus zelf en met zorg.
                </p>
              </div>

              <div>
                <strong>Vaste prijs vooraf</strong>
                <p>Geen verrassingen achteraf. De offerte is gratis.</p>
              </div>

              <div>
                <strong>Veilig werken</strong>
                <p>
                  Wij werken op de begane grond en met kleine klussen.
                  Geen risico&apos;s op hoge ladders.
                </p>
              </div>

              <div>
                <strong>Netjes en op tijd</strong>
                <p>
                  Afspraak is afspraak. U hoort van ons als er iets verandert.
                </p>
              </div>
            </div>
          </section>

          <div className="contact">
            <h2>Benieuwd wat het kost?</h2>
            <p>
              Stuur ons een e-mail{/* of WhatsApp */} met uw straat en het aantal
              ramen. Wij reageren snel.
            </p>

            <a
              className="btn"
              href={`mailto:${myEmail}?subject=Offerte%20ramen%20wassen`}
            >
              Stuur een e-mail
            </a>

{/*             <a
              className="btn btn-green"
              href={`https://wa.me/${myNumber}`}
            >
              Stuur een WhatsApp-bericht
            </a> */}
          </div>
        </div>
      </main>

      <footer>
        <div className="wrap">
          <span>S&amp;G Ramenservice · Amsterdam en omgeving</span>
          <span>{myEmail}</span>
        </div>
      </footer>
    </>
  );
}
