import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1681.485276850059!2d30.467435068404065!3d59.921617142844156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696254feb872e13%3A0xb773e55fc4a0b4b5!2z0JvQtdC00L7QstGL0Lkg0LTQstC-0YDQtdGG!5e0!3m2!1sru!2sru!4v1619023143092!5m2!1sru!2sru"
        width="100%"
        height="500px"
        frameBorder="0"
        title="gglemaps"
        allowFullScreen></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
