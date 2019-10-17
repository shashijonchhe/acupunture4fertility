import React from 'react';



const Navbar=(props)=>{
    return(
        <div className="Navbar"> 
        <ul>
        <li className="Dropdown">
        <li><a href="https://acupuncture4fertility.com/" aria-current="page">HOME</a></li>
        </li>
        <li className="Dropdown">
        <a href="https://acupuncture4fertility.com/about/">ABOUT</a>
             <div class="dropdown-content">
             <a href="https://acupuncture4fertility.com/about/">LEARN ABOUT US</a>
             <a href="https://acupuncture4fertility.com/frequently-asked-questions/">FAQ</a>
             <a href="https://acupuncture4fertility.com/about/media/">IN THE NEWS</a>
             <a href="https://acupuncture4fertility.com/studies/">STUDIES</a>
              </div>
        </li>
        

        <li className="Dropdown">
        <a href="a">SERVICES</a>
          <div class="dropdown-content">
             <a href="https://acupuncture4fertility.com/resources/">Acupuncture for Fertility</a>
             <a href="https://acupuncture4fertility.com/resources-learn-more-about-acupuncture-for-menopause/">Acupuncture for Menopause</a>
             <a href="https://acupuncture4fertility.com/resources-learn-more-about-acupuncture-for-postpartum/">Acupuncture For Postpartum</a>
          </div>
        </li>


        <li className="Dropdown">
        <a href="https://acupuncture4fertility.com/category/successes/">SUCCESSES</a>
        </li>


        <li className="Dropdown">
        <a href="a">CONTACT</a>
          <div class="dropdown-content">
            <a href="https://acupuncture4fertility.com/contact/">Sacramento Office</a>
            <a href="https://acupuncture4fertility.com/patient-forms/">Patient Forms</a>
          </div>
        </li>

        <li className="Dropdown">
        <a href="https://acupuncture4fertility.com/blog/">BLOG</a>
        </li>
        
        
        <li className="Dropdown">
        <a href="https://www.ultalabtests.com/acupuncturefertility/">LABS</a>
        </li>
        

        

      </ul>
        </div>
    )
}



export default Navbar;