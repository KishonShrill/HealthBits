import '../styles/ScrollHeader.css';
export default function Hero() {
  return (
    <div className='hero' id="sticky-parallax-header">
      <div className="hero__overlay"></div>
      <div className='hero__texts'>
        <h2 className='hero__subtitle'>Health and Wellness</h2>
        {/* <h1 className='hero__title'>Health Bits</h1> */}
        <p className='hero__statement'>
          Health Bits is your gateway to a healthier, happier you. Dive into a world of 
          well-being, where we unravel the secrets to a nutritious diet, effective fitness
          routines, and tips for fostering a healthy lifestyle.
        </p>
      </div>
    </div>
  );
};