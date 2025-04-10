import logo from "/footerLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c1e] text-white py-16 px-6 md:px-24 font-['Roboto']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

        <div>
          <img src={logo} alt="MenteeTalk logo" className="w-40" />
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Mentee Talk</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
              </svg>
              <a href="#" className="hover:underline">Email</a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.2 13.2c-.3-.1-1.7-.8-2-1s-.5-.2-.7 0c-.2.3-.8 1-1 1.1-.1.1-.3.1-.6 0s-1.1-.4-2.1-1.4c-.8-.8-1.3-1.8-1.5-2.1s0-.5.1-.6c.1-.1.3-.4.4-.5s.2-.3.3-.5c.1-.1.1-.3 0-.5s-.6-1.3-.9-1.8c-.2-.5-.5-.4-.7-.4s-.4 0-.5 0c-.2 0-.5.1-.8.4-.3.4-1.1 1.1-1.1 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 4.3 2.3.5 3.2.3 3.8.3.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.4-.3-.7-.4z" />
                <path d="M20 4c-4.4-4.4-11.6-4.4-16 0C.9 7.1.3 13 .8 16.5L.1 22l5.5-.7C9 22.7 14.9 22.1 18 19c4.4-4.4 4.4-11.6 0-16zm-2.1 13.9c-2.3 2.3-6.4 3.1-9.6 2.2l-.7-.2-3.3.4.5-3.2-.2-.8c-.8-3.2 0-7.2 2.2-9.5 3.3-3.3 8.7-3.3 12 0 3.3 3.4 3.3 8.7.1 12.1z" />
              </svg>
              <a href="#" className="hover:underline">WhatsApp</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="flex flex-col  h-full">
          <div className="flex gap-4 mb-8 justify-end">
            <a href="#" aria-label="Instagram">
              <svg className="w-6 h-6 text-white hover:opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg className="w-6 h-6 text-white hover:opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 15l5-3-5-3v6zm10-13H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6l4 4 4-4h6c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6 text-white hover:opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5v-9h3v9zM6.5 8.7C5.7 8.7 5 7.9 5 7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7zm13.5 10.3h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.3c.6-.8 1.7-1.3 2.7-1.3 2.2 0 4 1.8 4 4v5z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        @menteetalk 2024 | New Delhi, India ©
      </div>
    </footer>
  );
};
export default Footer;
