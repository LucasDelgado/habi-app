import "./layout.scss";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <p>HABI-APP</p>
      </header>
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">Copyright</footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
