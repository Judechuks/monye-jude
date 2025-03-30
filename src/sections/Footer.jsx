import { Logo, SocialMedia } from "../components";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="padding-t pb-6">
      <div className="grid grid-cols-1 mobile:grid-cols-3 justify-items-center gap-8">
        {/* FIRST ROW */}
        <div className="flex flex-col items-start text-center mobile:text-left">
          <a href="/" className="max-mobile:mx-auto">
            <Logo />
          </a>
          <p className="mt-4 text-base leading-6 font-montserrat sm:max-w-sm">
            For any collaboration, jobs, gigs, questions or concerns. You can
            reach me through any of these means. Thanks and I look forward to
            hearing from you!
          </p>
        </div>
        {/* SECOND ROW */}
        <div className="flex justify-between max-sm:text-center">
          {footerLinks.map((section) => (
            <div key={section.title} className="">
              <h4 className="font-montserrat font-semibold text-xl leading-normal mb-2 text-center">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="hover:text-slate-gray text-center"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* THIRD ROW */}
        <div className="">
          <h4 className="font-montserrat font-semibold text-xl leading-normal mb-2 text-center">
            Social Media Handles
          </h4>
          <SocialMedia />
        </div>
      </div>
      <div className="mt-12 flex justify-center cursor-pointer">
        <p>
          &copy; Copyright {new Date().getFullYear()} | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
