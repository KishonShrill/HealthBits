import '../styles/ScrollHero.css';
import HealthBitsCover from '../../public/images/healthbits-cover-removebg.png';

export default function Hero() {
  return (
    <div className='hero' id="sticky-parallax-header">
      <div className='hero__background'></div>
      <Hero__Texts />
      <hr />
      <Hero__Texts2 />
    </div>
  );
};

{/* <Hero__Blob /> */}
function Hero__Texts() {
  return (
    <div className='hero__texts'>
      <h1 className='hero__title'>Health & Wellness</h1>
      <br />
      <a className="hero__btn btn web" href="#">Explore More</a>
      <p className="mobile" href="#">\/ Scroll Down \/</p>
    </div>
  );
}

function Hero__Texts2() {
  return (
    <div className='hero__texts2 web'>
      <div>
        <p className='hero__statements'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa placeat porro labore!</p>
        <br />
        <a href="#"><h2>Go Over Here -&gt;</h2></a>
      </div>
      <div>
        <p className='hero__statements'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat quisquam quidem!</p>
        <br />
        <a href="#"><h2>Go Over Here -&gt;</h2></a>
      </div>
      <div>
        <p className='hero__statements'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatem inventore provident.</p>
        <br />
        <a href="#"><h2>Go Over Here -&gt;</h2></a>
      </div>
    </div>
  );
}

function Hero__Blob() {
  return (
    <div className='hero__img'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
        <mask id="maskBackground">
          <path 
            fill="white"
            d="M46.2,-36.6C62.2,-16.7,79.3,2.7,75.7,16.8C72.1,31,47.8,40,26.2,48C4.5,56,-14.6,62.9,-28.2,57C-41.9,51.1,-50.1,32.2,-55.2,12C-60.3,-8.2,-62.4,-29.8,-52.6,-48.3C-42.9,-66.7,-21.5,-82.1,-3.2,-79.6C15.1,-77,30.1,-56.5,46.2,-36.6Z"
            transform="translate(100 100) scale(1)"
          />
        </mask>
        <mask id='maskImage'>
          <path
            fill="white"
            d="M 85 -66 C 91 -44 79.3 2.7 75.7 16.8 C 72.1 31 47.8 40 26.2 48 C 4.5 56 -14.6 62.9 -28.2 57 C -41.9 51.1 -50.1 32.2 -55.2 12 C -60.3 -8.2 -62.4 -29.8 -52.6 -48.3 C -42.9 -66.7 -49 -109 -21 -113 C 12 -119 63 -124 71 -109 Z"
            transform="translate(100 100) scale(1)"
          />
        </mask>
        <rect width="200" height="200" x="0" y="0" fill="#FF0066" mask="url(#maskBackground)" />
        <image className='hero__blobImg' width="200" height="200" x="0" y="20" mask="url(#maskImage)" xlinkHref={HealthBitsCover} />
      </svg>
    </div>
  );
}