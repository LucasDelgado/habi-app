const Layout = ({ children }) => {
  return (
    <>
      <header>HABI-APP</header>
      <main className="container">{children}</main>
      <footer>Copyright</footer>
    </>
  );
};

export default Layout;
