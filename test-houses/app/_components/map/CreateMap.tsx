import React from 'react';
import './map.scss'

export const CreateMap = () => {
  return (
    <section className='map'>
      <div className='container'>
        <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=vulica%20Kirava%208,%20Minsk,%20Minskaja%20voblas%C4%87+(Dinamo%20Stadium)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
    </section>
    
  );
};