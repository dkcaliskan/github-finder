import footerSVG from '../../images/footerSVG.svg'

export default function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
            <div>
                <img src={footerSVG} />
                <p>Copyright &copy; {footerYear} All rights reserved</p>

            </div>
        </footer>
    )
}
