import './Footer.css'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <p>&copy; <span id="current-year">{currentYear}</span> Christin Mitchell&apos;s Private Swimming Lessons. All rights reserved.</p>
    </footer>
  )
}

export default Footer