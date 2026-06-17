function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {currentYear} iPod Playlist
      </p>

      <p>
        Datos proporcionados por TheAudioDB
      </p>
    </footer>
  );
}

export default Footer;