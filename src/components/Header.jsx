function Header() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My App</h2>
      <ul style={styles.list}>
        <li style={styles.item}>Home</li>
        <li style={styles.item}>About</li>
        <li style={styles.item}>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(90deg, #1e3a8a, #2563eb)", 
    color: "white",
    padding: "12px 24px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  logo: {
    margin: 0,
    fontWeight: "600",
    letterSpacing: "1px",
  },
  list: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  item: {
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Header;