function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>© {currentYear} Dinesh Sinnathamby. All rights reserved.</p>
    </footer>
  )
}

export default Footer
