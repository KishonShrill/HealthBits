import '../styles/Header.css';
export default function Header() {
  return (
    <header>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="nav__btn-mobile mobile">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>

      <a className="nav__logo" href="www.facebook.com">
        <h1 className='web'>HEALTH BITS</h1>
        <h1 className='mobile'>HB</h1>
      </a>

      <ul>
        <a className="nav__url web" href='#'>Home</a>
        <a className="nav__url web" href='#'>News</a>
        <a className="nav__url web" href='#'>About</a>
      </ul>

      <button className="btn nav__btn web">Contacts</button>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none"
        viewBox="0 0 24 24" 
        strokeWidth={2.5} 
        stroke="black" 
        className="nav__btn-mobile mobile"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>        
    </header>
  );
};