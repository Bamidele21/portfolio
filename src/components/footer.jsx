function Footer() {
    const date = new Date()
    return(
    <>
    <div className="footer-container">
    <h3> © Bamidele Ogunseye {date.getFullYear()}</h3>
    </div>
    </>
    )
}

export default Footer;