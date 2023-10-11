import '../styles/Header.css';
export default function Header() {
  return (
    <header>
      <a className="nav__logo" href="www.facebook.com">
        <h1>HEALTH BITS</h1>
      </a>
      <ul>
        <a className="nav__url" href='#'>Home</a>
        <a className="nav__url" href='#'>News</a>
        <a className="nav__url" href='#'>About</a>
      </ul>
      <button className="btn nav__btn">Contacts</button>
    </header>
  );
};