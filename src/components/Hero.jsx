import '../styles/Hero.css';
export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero__texts'>
        <h2 className='hero__subtitle'>Health and Wellness</h2>
        <h1 className='hero__title'>Health Bits</h1>
        <p className='hero__statement'>
          Health Bits is your gateway to a healthier, happier you. Dive into a world of 
          well-being, where we unravel the secrets to a nutritious diet, effective fitness
          routines, and tips for fostering a healthy lifestyle.
        </p>
      </div>
      <div className="hero__components">
        <img className='hero__img' src="../../images/healthbits-logo.jpg" alt="Health Bits Logo" />
        <img src="../../images/apple.png" alt="" />
        <img src="../../images/cookies.png" alt="" />
        <img src="../../images/milk.png" alt="" />
        <img src="../../images/red-pill.png" alt="" />
        <img src="../../images/yellow-pill.png" alt="" />
      </div>
    </div>
  );
};