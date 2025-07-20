import './../styles/App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Lambda Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;