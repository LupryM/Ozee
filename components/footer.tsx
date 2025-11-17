import Link from 'next/link';
import Logo from './logo';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000', borderColor: '#110C0A' }} className="border-t py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#8A7F66' }}>SHOTS BY OZEE</h3>
            <p className="text-sm" style={{ color: '#8A7F66', opacity: 0.7 }}>
              Capturing moments, crafting stories.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#8A7F66' }}>Navigation</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#8A7F66', opacity: 0.7 }}>
              <li><Link href="/photography" className="hover:opacity-100 transition-opacity">Photography</Link></li>
              <li><Link href="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#8A7F66' }}>Services</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#8A7F66', opacity: 0.7 }}>
              <li>Commercial</li>
              <li>Portraits</li>
              <li>Landscapes</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#8A7F66' }}>Contact</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#8A7F66', opacity: 0.7 }}>
              <li><a href="mailto:hello@shotsbyozee.com" className="hover:opacity-100 transition-opacity">hello@shotsbyozee.com</a></li>
              <li className="pt-2 flex gap-4">
                <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t" style={{ borderColor: '#110C0A', paddingTop: '2rem', textAlign: 'center' }}>
          <p className="text-sm" style={{ color: '#8A7F66', opacity: 0.7 }}>&copy; 2025 Shots By Ozee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
