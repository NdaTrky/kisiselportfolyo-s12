function Button({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      DarkMode: {darkMode ? "Kapat" : "Aç"}
    </button>
  );
}

export default Button;
