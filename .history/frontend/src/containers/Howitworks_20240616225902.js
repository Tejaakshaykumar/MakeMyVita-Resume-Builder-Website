import React, { useEffect } from 'react';
import './Howitworks.css';

const Howitworks = () => {

  useEffect(() => {
    const handleScroll = (event) => {
      const target = event.target.closest('a[href*="#"]');
      if (target) {
        event.preventDefault();
        const hash = target.hash;
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleScroll);

    return () => {
      document.removeEventListener('click', handleScroll);
    };
  }, []);

  return (
    <div className="wrapperh">
      <nav className="nav__wrapperh" id="navbar-example">
        <ul className="navh">
          <li role="presentation" className="active">
            <a href="#section1">
              <span className="nav__counterh">01</span>
              <h3 className="nav__titleh">Intro</h3>
              <p className="nav__bodyh"><strong>Timeline-style navigation</strong>. Scroll down to see what happens, or click on a number in the nav.</p>
            </a>
          </li>
          <li role="presentation">
            <a href="#section2">
              <span className="nav__counterh">02</span>
              <h3 className="nav__titleh">Section 2 Title</h3>
              <p className="nav__bodyh">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
            </a>
          </li>
          <li role="presentation">
            <a href="#section3">
              <span className="nav__counterh">03</span>
              <h3 className="nav__titleh">Section 3 Title</h3>
              <p className="nav__bodyh">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
            </a>
          </li>
          <li role="presentation">
            <a href="#section4">
              <span className="nav__counterh">04</span>
              <h3 className="nav__titleh">Section 4 Title</h3>
              <p className="nav__bodyh">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
            </a>
          </li>
          <li role="presentation">
            <a href="#section5">
              <span className="nav__counterh">05</span>
              <h3 className="nav__titleh">Section 5 Title</h3>
              <p className="nav__bodyh">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
            </a>
          </li>
          <li role="presentation">
            <a href="#section6">
              <span className="nav__counterh">06</span>
              <h3 className="nav__titleh">Section 6 Title</h3>
              <p className="nav__bodyh">Sed sit amet justo sed odio tempus tempus. Vestibulum sed varius mi, sit amet condimentum lacus.</p>
            </a>
          </li>
        </ul>
      </nav>
      
      <section className="sectionh section1" id="section1">
        Scroll down or use the nav.
      </section>
      <section className="sectionh section2" id="section2">
        Section 2
      </section>
      <section className="sectionh section3" id="section3">
        Section 3
      </section>
      <section className="sectionh section4" id="section4">
        Section 4
      </section>
      <section className="sectionh section5" id="section5">
        Section 5
      </section>
      <section className="sectionh section6" id="section6">
        Section 6
      </section>
    </div>
  );
}

export default Howitworks;
