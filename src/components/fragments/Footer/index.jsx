import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <p>
                &copy; Copyright 2022. All Rights Reserved. Designed by{' '}
                <a href="">Daffa Tabiano</a>.
            </p>
            <ul className="d-flex gap-3">
                <li>
                    {' '}
                    <a href="">
                        {' '}
                        <i className="bi bi-instagram"></i>{' '}
                    </a>{' '}
                </li>
                <li>
                    {' '}
                    <a href="">
                        {' '}
                        <i className="bi bi-facebook"></i>{' '}
                    </a>{' '}
                </li>
                <li>
                    {' '}
                    <a href="">
                        {' '}
                        <i className="bi bi-twitter"></i>{' '}
                    </a>{' '}
                </li>
                <li>
                    {' '}
                    <a href="">
                        {' '}
                        <i className="bi bi-whatsapp"></i>{' '}
                    </a>{' '}
                </li>
                <li>
                    {' '}
                    <a href="">
                        {' '}
                        <i className="bi bi-github"></i>{' '}
                    </a>{' '}
                </li>
            </ul>
        </footer>
    );
}
