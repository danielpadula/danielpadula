import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function CV() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Padula</title>
      </Head>

      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <header className="pb-3 mb-5 border-bottom">
          <div className="d-flex flex-row">
            <div className="justify-content-center">
              <h1>Daniel Padula</h1>
              <h3>Engineering Manager & Technical Leader</h3>
            </div>
            <div className="d-flex flex-fill justify-content-end">
              <Image
                src="/image.jpg"
                alt="Daniel Padula"
                className="rounded-circle"
                width={150}
                height={150}
              />
            </div>
          </div>
        </header>

        <main>
          <h3>About me</h3>
          <div className="row mb-4">
            <p>
              I&apos;m an Engineering Manager and Tech Lead with over 17 years
              of experience in software development, with a strong focus on
              quality, clean architecture, and scalable system design. I lead
              technical teams on high-impact projects, combining strategic vision
              with hands-on technical expertise. I guide the evolution of
              complex systems, promoting best practices, modular architecture,
              and business-aligned decisions. I work closely with product teams
              to drive end-to-end product engineering, focusing on architecture,
              metrics, and continuous value delivery. I foster a culture of
              autonomy, ownership, continuous learning, and positive energy.
              I&apos;m passionate about mentoring, helping others grow, and
              building clear, sustainable solutions that create real value.
            </p>
          </div>

          <h3>Experience</h3>

          <h4 className="my-4">Jobs</h4>

          <div className="row">
            <div className="col-md-6 mb-4">
              <p className="lead">ENGINEERING MANAGER AT COMETA</p>
              <div>
                I lead the Financial Squad with full focus on product
                engineering. I&apos;m responsible for the end-to-end financial
                flow (payments, collections, billing cycles and reconciliations),
                architecture, metrics and coordination with Product. I work on
                the complete restructuring of teams and modernization of the
                technology base, driving stability, scalability and better
                processes for continuous value delivery.
              </div>
              <Link href="https://getcometa.com">https://getcometa.com</Link>
              <div>2025 - Now</div>
            </div>

            <div className="col-md-6 mb-4">
              <p className="lead">TECHNICAL LEAD AT COMETA</p>
              <div>
                I lead the technological transformation of a school management
                platform used by educational institutions across Mexico, driving
                the transition from a monolithic system to a microservices-based
                architecture. I promote SOLID principles, Clean Architecture,
                and modular design to ensure scalability, technical clarity, and
                low coupling. I work closely with the product team to align
                vision, priorities, and technical decisions, ensuring a coherent
                and value-driven development process. I foster a culture of
                technical ownership, continuous learning, and best development
                practices. I define and improve processes for code review,
                technical documentation, and automation. I’m actively involved
                in hiring and mentoring, helping build a strong and aligned
                engineering team. The architectural and organizational decisions
                made have improved development speed, enabled easier
                integrations, and supported the sustainable growth of the
                platform across hundreds of schools.
              </div>
              <Link href="https://getcometa.com">https://getcometa.com</Link>
              <div>2024 - 2025</div>
              <div className="mb-3">
                <span className="badge bg-secondary me-1">React</span>
                <span className="badge bg-secondary me-1">FastAPI</span>
                <span className="badge bg-secondary me-1">Django</span>
                <span className="badge bg-warning me-1">Typescript</span>
                <span className="badge bg-warning me-1">Python</span>
                <span className="badge bg-warning me-1">Go</span>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <p className="lead">TECHNICAL LEAD AT SLANG</p>
              <div>
                As a Technical Leader in the Fullstack Engineering team, I lead
                initiatives on a platform where our content team meticulously
                crafts material for English courses, emphasizing the nuanced
                management of lexicon, grammar, and content structures. My
                leadership style places significant emphasis on fostering a
                social perspective within the team. I actively contribute to the
                team&apos;s excellence by conducting thorough code reviews for
                the entire team, ensuring standards of code quality and
                promoting knowledge-sharing among team members. Moreover, I
                specialize in steering teams towards success by prioritizing the
                development and well-being of our individuals. This involves
                leveraging the strengths of our human capital to create a
                collaborative and thriving work environment. Additionally, I
                spearhead the implementation of essential modifications to the
                application, driving the integration of Machine Learning/Chat
                GPT for the automated creation of industry-specific content and
                courses.
              </div>
              <Link href="https://slangapp.com">https://slangapp.com</Link>
              <div>2023 - 2024</div>
              <div className="mb-3">
                <span className="badge bg-success me-1">React</span>
                <span className="badge bg-secondary me-1">Ruby on Rails</span>
                <span className="badge bg-warning me-1">Python</span>
                <span className="badge bg-success me-1">AWS</span>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <p className="lead">FULLSTACK ENGINEER AT SLANG</p>
              <div>
                As a Fullstack engineer, I contributed to a platform where the
                content team generates material for English courses, overseeing
                lexicon, grammar, and content structures. My responsibilities
                included implementing necessary modifications to the application
                to leverage Machine Learning/Chat GPT for the automated creation
                of industry-specific content and courses.
              </div>
              <Link href="https://slangapp.com">https://slangapp.com</Link>
              <div>2022 - 2023</div>
              <div className="mb-3">
                <span className="badge bg-success me-1">React</span>
                <span className="badge bg-secondary me-1">Ruby on Rails</span>
                <span className="badge bg-warning">Python</span>
                <span className="badge bg-success me-1">AWS</span>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <p className="lead">TECHNICAL LEAD AT CODERIO</p>
              <div>
                As a Technical Lead at Coderio, I held a pivotal role in
                overseeing projects for our major client, Cencosud, a prominent
                retail company. In this capacity, I led technical initiatives
                related to sales and automated product advertising tools. My
                responsibilities extended to the development and management of
                the mobile sales application, the sales website, and the
                seamless integration with payment providers. Within this dynamic
                environment, I played a crucial role in optimizing and enhancing
                tools for effective sales and automated advertising of products.
                This encompassed not only the technical aspects but also
                involved close collaboration with cross-functional teams to
                ensure a smooth interconnection between various components. My
                leadership at Coderio was instrumental in driving technological
                advancements that significantly contributed to the success of
                our client, Cencosud.
              </div>
              <Link href="https://coderio.co/">https://coderio.co/</Link>
              <div>2021 - 2023</div>
              <div className="mb-3">
                <span className="badge bg-success me-1">Java</span>
                <span className="badge bg-success me-1">AWS</span>
              </div>
            </div>

            <div className="col-md-6  mb-4">
              <p className="lead">
                PYTHON/DJANGO DEVELOPER AT SUBSECRETARÍA DE GOBIERNO ABIERTO Y
                PAÍS DIGITAL DE LA SECRETARÍA DE INNOVACIÓN PÚBLICA
              </p>
              <div>
                I&apos;m workig on Mi Argentina, an easy and secure way to
                access government digital services with a single session and in
                one place.
              </div>
              <Link href="https://www.argentina.gob.ar/miargentina">
                https://www.argentina.gob.ar/miargentina
              </Link>
              <div>2020 - 2021</div>
              <div className="mb-3">
                <span className="badge bg-info me-1">Django</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <p className="lead">PYTHON/DJANGO DEVELOPER AT JUNAR</p>
              <div>
                I&apos;ve worked on an Open Data Platform. Junar&apos;s
                cloud-based Open Data Platform is the fastest, easiest, and most
                affordable way to transform government data into resources that
                your citizens can use. The application is developed in Django,
                MySQL and Java and orchestrated with Salt.
              </div>
              <div>Febrero 2015 - 2017</div>
              <div className="mb-3">
                <span className="badge bg-info me-1">Django</span>
                <span className="badge bg-success me-1">AWS</span>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <p className="lead">PYTHON/DJANGO DEVELOPER AT MERCHANT ATLAS</p>
              <div>
                I worked on an automated selling machine created in Django, with
                a machine learning for targeting products with for example best
                zones, best time to contact, less costs. The application is
                developed in Django and MongoDB and orchestrated with Salt.
              </div>
              <div>Agosto 2014 - Febrero 2015</div>
              <div className="mb-3">
                <span className="badge bg-info me-1">Django</span>
                <span className="badge bg-success me-1">AWS</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <p className="lead">
                FULLSTACK DEVELOPER AT GOBIERNO DE LA CIUDAD DE BUENOS AIRES
              </p>
              <div>
                I&apos;ve developed a server that validates the access to Buenos
                Aires goverment&apos;s web services dashboard and all its
                related applications (https://id.buenosaires.gob.ar) on
                Python/Django which complies with OpenID y OpenID Connect
                Standards, along with modules wrote on Drupal for their site
                (www.buenosaires.gob.ar). Using my Phonegap skills, I programmed
                mobile applications and provided coaching on their desings.
              </div>
              <div>2013 - 2014</div>
              <div className="mb-3">
                <span className="badge bg-info me-1">Django</span>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <p className="lead">DEVELOPER / SYSADMIN AT BBVA BANCO FRANCÉS</p>
              <div>
                Using Python/Django I developed several web applications for the
                maintenance, managing, monitoring and self-repair of branch
                offices, servers and ATMs from Latin America, detecting
                problems, running servers workarounds and automating processes
                in a friendly web interface. Sysadmin of Xen virtual servers
                farms with Linux, LAMP servers, Java applications and management
                systems for IBM and HP hardware.
              </div>
              <div>2007 - 2012</div>
              <div className="mb-3">
                <span className="badge bg-success me-1">Python</span>
                <span className="badge bg-success me-1">Virtualization</span>
                <span className="badge bg-success me-1">Devops</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <p className="lead">
                DEVELOPER / SYSADMIN AT COLEGIO NACIONAL DE BUENOS AIRES
              </p>
              <div>
                Sysadmin of Xen virtual servers farms with Linux, LAMP servers.
                Developed web applications on LAMP platform for online
                registration of students, treasury management, personnel
                management and an application that based on a per student ID,
                they can make purchases within the school without using cash.
              </div>
              <div>2009 - 2011</div>
              <div className="mb-3">
                <span className="badge bg-success me-1">Python</span>
                <span className="badge bg-success me-1">Virtualization</span>
                <span className="badge bg-success me-1">Devops</span>
                <span className="badge bg-success me-1">PHP</span>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <p className="lead">FCP CONSULTING, CONSULTORES ASOCIADOS</p>
              <div>
                Developed a Debian-based operating system used on new equipment
                sold in Fravega called &apos;Arandas&apos; and also modified the
                kernel module V4L Video for Linux to support TV capture plates
                supplied with the equipment. I developed the installer of such
                distribution, the internet connection wizzard and equipment
                testing tool based on Python / QT. Site:
                www.fcpconsulting.com.ar
              </div>
              <div>2005 - 2007</div>
              <div className="mb-3">
                <span className="badge bg-success me-1">Python</span>
                <span className="badge bg-success me-1">C</span>
                <span className="badge bg-success me-1">Linux</span>
              </div>
            </div>
          </div>
          <h4 className="my-4">Freelance projects</h4>

          <div className="row">
            <div className="col-6 my-2">
              <div className="lead">WANID</div>
              <div>
                Connect the Community with Psychomotorists from Argentina.
              </div>
              <div>
                <small className="text-muted">2021</small>
              </div>
              <Link href="https://wanid.com.ar/">https://wanid.com.ar/</Link>
              <div>
                <small className="text-muted">Mobile application</small>
              </div>
              <div>
                <span className="badge bg-warning">React Native</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">OVERFLOW</div>
              <div>Accelerator for Independent Thinkers</div>
              <div>
                <small className="text-muted">Mar 2021 - Sep 2021</small>
              </div>
              <Link href="https://www.weareoverflow.com/">
                https://www.weareoverflow.com/
              </Link>
              <div>
                <small className="text-muted">Web and Mobile application</small>
              </div>
              <div>
                <span className="badge bg-success me-1">React</span>
                <span className="badge bg-secondary me-1">NextJS</span>
                <span className="badge bg-warning">React Native</span>
                <span className="badge bg-success me-1">AWS</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">SAD - Sociedad Argentina de Diabétes</div>
              <div>Clasifications calculator for Diabetic Foot</div>
              <Link href="http://diabetes.org.ar">http://diabetes.org.ar</Link>
              <div>
                <small className="text-muted">Oct 2020 - Oct 2021</small>
              </div>
              <div>
                <small className="text-muted">Mobile application</small>
              </div>
              <div>
                <span className="badge bg-warning">React Native</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">PARKIN</div>
              <div>
                PARKIN is an app based on the shared economy system that
                connects vehicle drivers with car park owners
              </div>
              <Link href="parkin.gg/">https://parkin.gg/</Link>
              <div>
                <small className="text-muted">Feb 2021 - Jul 2022</small>
              </div>
              <div>
                <small className="text-muted">Mobile application</small>
              </div>
              <div>
                <span className="badge bg-warning">React Native</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">GAMITY</div>
              <div>
                Be part of the first eSports social network in Latin America
              </div>
              <Link href="https://gamity.app/">https://gamity.app/</Link>
              <div>
                <small className="text-muted">2020</small>
              </div>
              <div>
                <small className="text-muted">Mobile application</small>
              </div>
              <div>
                <span className="badge bg-warning">React Native</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">EZ GiftCards</div>
              <div>
                Backend for mobile application and Chrome extension for manage
                your Gift Cards.
              </div>
              <Link href="https://www.ezgiftcard.com/">
                https://www.ezgiftcard.com/
              </Link>
              <div>
                <small className="text-muted">2020</small>
              </div>
              <div>
                <small className="text-muted">Backend</small>
              </div>
              <div>
                <span className="badge bg-info me-1">Django</span>
                <span className="badge bg-success me-1">AWS</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">PRETOR</div>
              <div>Creation and management of rental contracts.</div>
              <Link href="https://pre-tor.com/">https://pre-tor.com/</Link>
              <div>
                <small className="text-muted">2020</small>
              </div>
              <div>
                <small className="text-muted">Mobile application</small>
              </div>
              <div>
                <span className="badge bg-warning me-1">React Native</span>
                <span className="badge bg-secondary me-1">NextJS</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">BURGUER KING</div>
              <div>
                Development of the Burger King Mexico app, with a special
                functionality called The Traffic Whopper, which allows you to
                request delivery of your car stuck in traffic, tracking the
                shipment in real time.
              </div>
              <Link href="https://nosmk.com/es/proyecto/22/burger_king">
                https://nosmk.com/es/proyecto/22/burger_king
              </Link>
              <div>
                <small className="text-muted">Jan 2019 - Apr 2019</small>
              </div>
              <div>
                <small className="text-muted">Mobile application</small>
              </div>
              <div>
                <span className="badge bg-warning  me-1">React Native</span>
                <span className="badge bg-dark me-1">Android Native</span>
                <span className="badge bg-success me-1">AWS</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">INTEGRA CARD</div>
              <div>Mastercard cards for Córdoba &apos;s citizens</div>
              <Link href="https://integracard.net.ar/">
                https://integracard.net.ar/
              </Link>
              <div>
                <small className="text-muted">Apr 2019 - Aug 2019</small>
              </div>
              <div>
                <small className="text-muted">Web application</small>
              </div>
              <div>
                <span className="badge bg-info">Django</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">QHAPAX – CÓRDOBA CITY</div>
              <div>Open data portal and platform of the city of Cordoba</div>
              <Link href="https://gobiernoabierto.cordoba.gob.ar">
                https://gobiernoabierto.cordoba.gob.ar
              </Link>
              <div>
                <small className="text-muted">Julio 2016 - Sep 2017</small>
              </div>
              <div>
                <small className="text-muted">Backend</small>
              </div>
              <div>
                <span className="badge bg-info">Django</span>
              </div>
            </div>
          </div>

          <div className="row">
            <h2>Training</h2>
            <div className="col-md-6">
              <div>Scrum for agile development training</div>
              <p>
                KLEER{" "}
                <Link href="http://www.kleer.la/">http://www.kleer.la</Link> -
                2014
              </p>

              <div>Computer Engineering</div>
              <p>UNIVERSIDAD DE BUENOS AIRES - 2006</p>
            </div>

            <div className="col-md-6">
              <div>Computer Engineering</div>
              <p>UNIVERSIDAD NACIONAL DE LA MATANZA - 2002- 2004</p>

              <div>
                Junior, Kids, Preparatory, adults and First Certificate.
              </div>
              <p>CAMBRIDGE UNIVERSITY - 1992- 2003</p>
            </div>
          </div>

          <h2 className="my-4">Contact</h2>
          <dl className="row">
            <dt className="col-sm-3">Email</dt>
            <dd className="col-sm-9">
              <Link href="mailto:hola@danielpadula.com">
                hola@danielpadula.com
              </Link>
            </dd>
            <dt className="col-sm-3">Location</dt>
            <dd className="col-sm-9">Buenos Aires, Argentina</dd>
          </dl>
        </main>

        <footer className="pt-5 my-5 text-muted border-top">
          Daniel Padula &middot; &copy; 2021
        </footer>
      </div>
    </div>
  );
}
