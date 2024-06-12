import { memo } from 'react';
import Logo from '../../../../../assets/icons/Logo';
import { Link } from '../../../../../navigation';
import { Facebook, InstagramIcon } from 'lucide-react';

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl divide-y p-8 text-sm">
      <div className="flex flex-wrap items-start gap-4 pb-8">
        <div className="flex-1">
          <Logo />
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
        </div>
        <div className="flex w-52 flex-col items-start gap-6">
          <h3 className="font-semibold uppercase">Company</h3>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="flex w-52 flex-col items-start gap-6">
          <h3 className="font-semibold uppercase">Company</h3>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="flex w-52 flex-col items-start gap-6">
          <h3 className="font-semibold uppercase">Contact Us</h3>
          <Link className="flex items-center gap-2" href="#">
            <Facebook size={24} /> Facebook
          </Link>
          <Link className="flex items-center gap-2" href="#">
            <InstagramIcon size={24} /> Instagram
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <p>© 2023 ZST. All rights reserved</p>
        </div>
        <div className="space-x-4">
          <Link className="underline" href="#">
            Privacy Policy
          </Link>
          <Link className="underline" href="#">
            Terms of Service
          </Link>
          <Link className="underline" href="#">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
