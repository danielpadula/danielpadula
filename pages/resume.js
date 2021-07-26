import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
              <h3>Fullstack Web and Mobile Developer</h3>
            </div>
            <div className="d-flex flex-fill justify-content-end">
              <Image
                src="/image.jpg"
                alt="Picture of the author"
                className="rounded-circle"
                width={150}
                height={150}
              />
            </div>
          </div>
        </header>

        <main>
          {/*
          <h2>Resume</h2>
          <p>
            Using my experience as Senior Python/Django Developer, I&apos;ve
            developed several web applications such as Social platforms and
            authenticacion platforms using OpenID & OpenID Connect standards for
            validating the access to Buenos Aires goverment&apos;s web services
            dashboard and several applications. I worked in the project as a
            developer and Scrum Master. Also worked with Django and MongoDB on a
            automated selling machine, Hybrid mobile applications based on
            Cordova/Ionic and several Open Data Platforms. I&apos;ve also
            developed realtime applications using JavaScript/HTML/NodeJS with
            stacks like MeanIO and MeteorJS. My last project was a platform that
            shows possible emergencies in a map based on Twitter posts. I been
            working with PHP/Drupal. The last project I worked on this
            technology was the site of Buenos Aires City. Sysadmin Senior. I
            gained extensive experience with high-performance systems working
            for French Bank for five years.
          </p>*/}

          <h2>Experience</h2>

          <h4 className="my-4">Freelance projects</h4>

          <div className="row">
            <div className="col-6 my-2">
              <div className="lead">WANID</div>
              <div>
                Connect the Community with Psychomotorists from Argentina.
              </div>
              <a href="https://wanid.com.ar/">https://wanid.com.ar/</a>
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
              <a href="https://www.weareoverflow.com/">
                https://www.weareoverflow.com/
              </a>
              <div>
                <small className="text-muted">Web and Mobile application</small>
              </div>
              <div>
                <span className="badge bg-success me-1">React</span>
                <span className="badge bg-secondary me-1">NextJS</span>
                <span className="badge bg-warning">React Native</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">SAD - Sociedad Argentina de Diabétes</div>
              <div>Clasifications calculator for Diabetic Foot</div>
              <a href="http://diabetes.org.ar">http://diabetes.org.ar</a>
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
              <a href="parkin.gg/">https://parkin.gg/</a>
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
              <a href="https://gamity.app/">https://gamity.app/</a>
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
              <a href="https://www.ezgiftcard.com/">
                https://www.ezgiftcard.com/
              </a>
              <div>
                <small className="text-muted">Backend</small>
              </div>
              <div>
                <span className="badge bg-info">Django</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">PRETOR</div>
              <div></div>
              <a href="http://inquilinos.pre-tor.com/">
                http://inquilinos.pre-tor.com/
              </a>
              <div>
                <small className="text-muted">Mobile application</small>
              </div>
              <div>
                <span className="badge bg-warning">React Native</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">BURGUER KING</div>
              <div></div>
              <a href="https://www.burgerking.com.mx/">
                https://www.burgerking.com.mx/
              </a>
              <div>
                <small className="text-muted">Mobile application</small>
              </div>
              <div>
                <span className="badge bg-warning  me-1">React Native</span>
                <span className="badge bg-dark">Android Native</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">MI ARGENTINA</div>
              <div>
                An easy and secure way to access government digital services
                with a single session and in one place.
              </div>
              <a href="https://www.argentina.gob.ar/miargentina">
                https://www.argentina.gob.ar/miargentina
              </a>
              <div>
                <small className="text-muted">Backend</small>
              </div>
              <div>
                <span className="badge bg-info">Django</span>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="lead">INTEGRA CARD</div>
              <div>Mastercard cards for Córdoba &apos;s citizens</div>
              <a href="https://integracard.net.ar/">
                https://integracard.net.ar/
              </a>
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
              <a href="https://gobiernoabierto.cordoba.gob.ar">
                https://gobiernoabierto.cordoba.gob.ar
              </a>
              <div>
                <small className="text-muted">Backend</small>
              </div>
              <div>
                <span className="badge bg-info">Django</span>
              </div>
            </div>
          </div>

          <h4 className="my-4">Companies</h4>
          <div className="row">
            <div className="col-md-6">
              <p>FULLSTACK DEVELOPER AT JUNAR</p>
              <div>
                I&apos;ve worked on an Open Data Platform. Junar&apos;s
                cloud-based Open Data Platform is the fastest, easiest, and most
                affordable way to transform government data into resources that
                your citizens can use. The application is developed in Django,
                MySQL and Java and orchestrated with Salt.
              </div>
              <p className="lead">2014 - 2016</p>
            </div>

            <div className="col-md-6">
              <p>FULLSTACK DEVELOPER AT MERCHANT ATLAS</p>
              <div>
                I worked on an automated selling machine created in Django, with
                a machine learning for targeting products with for example best
                zones, best time to contact, less costs. The application is
                developed in Django and MongoDB and orchestrated with Salt.
              </div>
              <p className="lead">2014 - 2015</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>
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
              <p className="lead">2013 - 2014</p>
            </div>

            <div className="col-md-6">
              <p>DEVELOPER / SYSADMIN AT BBVA BANCO FRANCÉS</p>
              <div>
                Using Python/Django I developed several web applications for the
                maintenance, managing, monitoring and self-repair of branch
                offices, servers and ATMs from Latin America, detecting
                problems, running servers workarounds and automating processes
                in a friendly web interface. Sysadmin of Xen virtual servers
                farms with Linux, LAMP servers, Java applications and management
                systems for IBM and HP hardware.
              </div>
              <p className="lead">2007 - 2012</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>DEVELOPER / SYSADMIN AT COLEGIO NACIONAL DE BUENOS AIRES</p>
              <div>
                Sysadmin of Xen virtual servers farms with Linux, LAMP servers.
                Developed web applications on LAMP platform for online
                registration of students, treasury management, personnel
                management and an application that based on a per student ID,
                they can make purchases within the school without using cash.
              </div>
              <p className="lead">2009 - 2011</p>
            </div>

            <div className="col-md-6">
              <p>FCP CONSULTING, CONSULTORES ASOCIADOS</p>
              <div>
                Developed a Debian-based operating system used on new equipment
                sold in Fravega called &apos;Arandas&apos; and also modified the
                kernel module V4L Video for Linux to support TV capture plates
                supplied with the equipment. I developed the installer of such
                distribution, the internet connection wizzard and equipment
                testing tool based on Python / QT. Site:
                www.fcpconsulting.com.ar
              </div>
              <p className="lead">2007 - 2009</p>
            </div>
          </div>

          <div className="row">
            <h2>Training</h2>
            <div className="col-md-6">
              <div>Scrum for agile development training</div>
              <p>
                KLEER <a href="http://www.kleer.la/">http://www.kleer.la</a> -
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
              <a href="mailto:hola@danielpadula.com">hola@danielpadula.com</a>
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
