import React from 'react';






const Diningvideo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="video-wrapper">
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/DabNALLVgkM?si=a7sqyjWG2baBMFd2" title="YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen muted ></iframe>
          </div>
        </div>
        <div className='quotes col-md-4 aos-animate' data-aos="slide-down">
          <h2>"Savoring Excellence Since 1891: Where Italian Royalty Reigns Supreme!"</h2>
        </div>
      </div>
    </div>
  );
}


export default Diningvideo;