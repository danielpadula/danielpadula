import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function CV() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Padula</title>
      </Head>

      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4">Daniel Padula</span>
          </a>
        </header>

        <main>
          <h1>Fullstack developer</h1>
          <p className="fs-5">Using my experience as Senior Python/Django Developer, I've developed
            several web applications such as Social platforms and authenticacion
            platforms using OpenID & OpenID Connect standards for validating the access
            to Buenos Aires goverment's web services dashboard and several
            applications. I worked in the project as a developer and Scrum Master. Also
            worked with Django and MongoDB on a automated selling machine, Hybrid
            mobile applications based on Cordova/Ionic and several Open Data Platforms.
            I've also developed realtime applications using JavaScript/HTML/NodeJS with
            stacks like MeanIO and MeteorJS. My last project was a platform that shows
            possible emergencies in a map based on Twitter posts.
            I been working with PHP/Drupal. The last project I worked on this technology
            was the site of Buenos Aires City.
            Sysadmin Senior. I gained extensive experience with high-performance
            systems working for French Bank for five years.
          </p>

          <hr className="col" />

          <h2>Experience</h2>

          <h4>Freelance projects</h4>

          <div className="row">
            <div className="col-md-6">
              <p>WANID</p>
              <div>Mobile application for psychomotorists.</div>
              <a href="https://wanid.com.ar/">https://wanid.com.ar/</a>
              <p className="lead">2021</p>
            </div>
            
            <div className="col-md-6">
              <p>SAD - Sociedad Argentina de Diabétes</p>
              <div>Clasifications calculator for Diabetic Foot</div>
              <a href="http://diabetes.org.ar">http://diabetes.org.ar</a>
              <p className="lead">2021</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>----</p>
              <div>I've worked on an Open Data Platform. Junar's cloud-based Open Data Platform is the fastest, easiest, and most affordable way to transform government data into resources that your citizens can use. The application is developed in Django, MySQL and Java and orchestrated with Salt.</div>
              <p className="lead">2014 - 2016</p>
            </div>
            
            <div className="col-md-6">
              <p>QHAPAX – CÓRDOBA CITY</p>
              <div>Open data portal and platform of the city of Cordoba</div>
              <a href="https://gobiernoabierto.cordoba.gob.ar">https://gobiernoabierto.cordoba.gob.ar</a>
              <p className="lead">2016</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>STASH LATIN AMERICA – SA JOURNALISTS</p>
              <div>Hybrid mobile application. Discover Latin America's most inspirational animation, VFX and motion design talent – complete with HD videos, creative and technical details and weekly updates.</div>
              <p className="lead">2016</p>
            </div>
            
            <div className="col-md-6">
              <p>BICI PROVIDENCIA</p>
              <div>Mobile Application of the Municipality of Providencia (Chile) showing bike lanes of the town and can see the traffic based on previous statistics.</div>
              <p className="lead">2016</p>
            </div>
          </div>

          <h4>Companies</h4>
          <div className="row">
            <div className="col-md-6">
              <p>FULLSTACK DEVELOPER AT JUNAR</p>
              <div>I've worked on an Open Data Platform. Junar's cloud-based Open Data Platform is the fastest, easiest, and most affordable way to transform government data into resources that your citizens can use. The application is developed in Django, MySQL and Java and orchestrated with Salt.</div>
              <p className="lead">2014 - 2016</p>
            </div>
            
            <div className="col-md-6">
              <p>FULLSTACK DEVELOPER AT MERCHANT ATLAS</p>
              <div>I worked on an automated selling machine created in Django, with a machine learning for targeting products with for example best zones, best time to contact, less costs. The application is developed in Django and MongoDB and orchestrated with Salt.</div>
              <p className="lead">2014 - 2015</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>FULLSTACK DEVELOPER AT GOBIERNO DE LA CIUDAD DE BUENOS AIRES</p>
              <div>I've developed a server that validates the access to Buenos Aires goverment's web services dashboard and all its related applications (https://id.buenosaires.gob.ar) on  Python/Django which complies with OpenID y OpenID Connect Standards, along with modules wrote on Drupal for their site (www.buenosaires.gob.ar). Using my Phonegap skills, I programmed mobile applications and provided coaching on their desings.</div>
              <p className="lead">2013 - 2014</p>
            </div>
            
            <div className="col-md-6">
              <p>DEVELOPER / SYSADMIN AT BBVA BANCO FRANCÉS</p>
              <div>Using Python/Django I developed several web applications for the maintenance, managing, monitoring and self-repair of branch offices, servers and ATMs from Latin America, detecting problems, running servers workarounds and automating processes in a friendly web interface. Sysadmin of Xen virtual servers farms with Linux, LAMP servers, Java applications and management systems for IBM and HP hardware.</div>
              <p className="lead">2007 - 2012</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">

              <p>DEVELOPER / SYSADMIN AT COLEGIO NACIONAL DE BUENOS AIRES</p>
              <div>Sysadmin of Xen virtual servers farms with Linux, LAMP servers. Developed web applications on LAMP platform for online registration of students, treasury management, personnel management and an application that based on a per student ID, they can make purchases within the school without using cash.</div>
              <p className="lead">2009 - 2011</p>
            </div>

            <div className="col-md-6">
              <p>FCP CONSULTING, CONSULTORES ASOCIADOS</p>
              <div>Developed a Debian-based operating system used on new equipment sold in Fravega called 'Arandas' and also modified the kernel module V4L Video for Linux to support TV capture plates supplied with the equipment. I developed the installer of such distribution, the internet connection wizzard and equipment testing tool based on Python / QT. Site: www.fcpconsulting.com.ar</div>
              <p className="lead">2007 - 2009</p>
            </div>
          </div>

          <div className="row">
            <h2>Training</h2>
            <div className="col-md-6">
              <div>Scrum for agile development training</div>
              <p>KLEER <a href="http://www.kleer.la/">http://www.kleer.la</a> - 2014</p>

              <div>Computer Engineering</div>
              <p>UNIVERSIDAD DE BUENOS AIRES - 2006</p>
            </div>

            <div className="col-md-6">
              <div>Computer Engineering</div>
              <p>UNIVERSIDAD NACIONAL DE LA MATANZA - 2002- 2004</p>

              <div>Junior, Kids, Preparatory, adults and First Certificate.</div>
              <p>CAMBRIDGE UNIVERSITY - 1992- 2003</p>
            </div>
          </div>
        </main>

        <footer className="pt-5 my-5 text-muted border-top">
          Daniel Padula &middot; &copy; 2021
        </footer>
      </div>

    </div>
  )
}
