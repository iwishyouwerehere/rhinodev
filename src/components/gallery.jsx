import { Image } from "./image";

const Video = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <iframe src={props.videoURL} frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>
    </div>
  );
};

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Video title={d.title} videoURL={d.videoURL} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
