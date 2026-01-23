import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import instasvg from '../../assets/instagram-1-svgrepo-com.svg'
import linkedinsvg from '../../assets/linkedin-svgrepo-com.svg'
export default function Footer() {
  return (
    <footer className="bg-white text-foreground py-16 border-t border-black/5 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-12">
        {/* Left Column: Logo & Tagline */}
        <div className="">
          <div className="relative w-64 h-32 opacity-90">
            <Image
              src="/logo.png"
              alt="Forge Logo"
              fill
              className="object-contain object-left brightness-0 saturate-50 filter"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 font-mono max-w-sm leading-relaxed">
            Build right. Build thoughtful. We help students bridge the gap
            between ideas and meaningful products.
          </p>
        </div>

        {/* Right Column: Contact & Apply */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Links */}
          <div className="flex gap-16">
            <div className="space-y-4">
              <h4 className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                Contact
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a href="mailto: admin@winnofusion.com" className="hover:text-primary transition-colors">
                    admin@winnofusion.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    @forge_program
                  </a>
                </li>
                <li className="flex gap-2 p-1  items-center">
                  <a href="https://www.instagram.com/winnofusion" target="blank" className="hover:text-primary transition-colors">
                    <Image src={instasvg} alt="" className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/winnofusion/" target="blank" className="hover:text-primary transition-colors">
                    <Image src={linkedinsvg} alt="" className="h-5 w-5" />
                  </a>
                </li>

              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                Program
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 font-medium">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-black transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#program"
                    className="hover:text-black transition-colors">
                    Curriculum
                  </Link>
                </li>
                <li>
                  <Link
                    href="#perks"
                    className="hover:text-black transition-colors">
                    Mentors
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
              Action
            </h4>

            <Link href="https://forms.gle/SbSPP3BD3Zd1xWya7" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-2 text-sm font-medium transition-all">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
        <p>© {new Date().getFullYear()} Forge Program.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
