import './Header.css';

function Header(props) {
  return (
    <div className="site-header">
    	{props.title}
    </div>
  );
}

export default Header;