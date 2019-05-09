import React from 'react';
import LegalFooter from 'components/LegalFooter';
import EngagementPanel from 'components/EngagementPanel';

import 'styles/HowItWorksPage.css';

import diagramImage from '../assets/img/howitworks.jpg';

const HowItWorksPage = () => {
  return (
    <div className="HowItWorksPage Page">
      <div className="Page__content">
        <h4>How it works</h4>
        <p>
          We use <em>property ownership mapping</em> to determine the buildings that a landlord or management company are associated with. The primary basis for this information comes from analyzing <a href="http://www1.nyc.gov/site/hpd/about/open-data.page" target="_blank" rel="noopener noreferrer">HPD registration data</a> on multiple dwellings, which contains self-reported landlord contact information on about 200,000 buildings.
        </p>
        <aside>
          <img src={diagramImage} alt="how it works" className=" img-responsive" />
        </aside>
        <p>
          According to HPD policy, “property owners of residential buildings are required by law to register annually with HPD if the property is a multiple dwelling (3+ residential units) or a private dwelling (1-2 residential units) where neither the owner nor the owner's immediate family resides.” This data must be made publicly available according to <a href="https://opendata.cityofnewyork.us/" target="_blank" rel="noopener noreferrer">NYC’s Open Data law</a>.
        </p>
        <p>
          <b>HPD updates this registration data (and we update this site) monthly.</b> We also use datasets from the following sources to provide additional information on a building:
        </p>
        <ul>
          <li><a href="https://data.cityofnewyork.us/Housing-Development/Housing-Maintenance-Code-Violations/wvxf-dwi5" target="_blank" rel="noopener noreferrer" className="text-bold">HPD violations</a> <em>- updated monthly</em></li>
          <li><a href="https://www1.nyc.gov/site/planning/data-maps/open-data.page" target="_blank" rel="noopener noreferrer" className="text-bold">Dept. of City Planning lot data (“PLUTO”)</a> <em>- updated yearly</em></li>
          <li><b>Eviction data for 2018</b> from City Counsel, the <nobr><a href="https://www.housingdatanyc.org/" target="_blank" rel="noopener noreferrer">Housing Data Coalition</a></nobr>, and the <nobr><a href="https://www.antievictionmap.com/" target="_blank" rel="noopener noreferrer">Anti-Eviction Mapping Project</a></nobr> via <a href="https://www1.nyc.gov/site/doi/offices/cpr2.page" target="_blank" rel="noopener noreferrer">NYC Marshals</a> <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">(CC BY NC SA 4.0)</a>.
          </li>
          <li><b>Rent Stabilization unit estimates (from taxbills.nyc, adapted from Dept. of Finance tax bills).</b> This data is <b>not</b> conclusive, but should be seen as an approximation. See <a href="http://blog.johnkrauss.com/where-is-decontrol/" target="_blank" rel="noopener noreferrer">this page</a> for more information. <em>- updated yearly</em></li>
        </ul>
        <p>
          For additional questions, or help with research, you can email us at <a href="mailto:hello@justfix.nyc" target="_blank" rel="noopener noreferrer">hello@justfix.nyc</a>.
        </p>
      </div>
      <EngagementPanel />
      <LegalFooter />
    </div>
  );
}

export default HowItWorksPage;
