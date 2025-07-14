import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

// exported image and icon object where every images and icons can be accessed
import * as images from "../assets/images";
import * as icons from "../assets/icons";
export { icons, images };

import {
  BusinessBag,
  ComponentSolid,
  Cube,
  CubeReplaceFace,
  Home,
  Testimonial,
} from "../assets/icons/svgIcons";

import {
  EdufunLogo,
  EdufunCEO,
  JayfootwearsImg,
  cartPageImg,
  productPageImg,
  detailPageImg,
} from "../assets/images";

/* to use svg to retain internal stylign such as color, width,
 try this npm package: sanity-pluggin-inline-svg */

// Navigation Links
export const navLinks = [
  { href: "/#", label: "home", iconUrl: Home },
  { href: "/#skills", label: "skills", iconUrl: ComponentSolid },
  { href: "/#projects", label: "projects", iconUrl: Cube },
  { href: "/#experience", label: "experiences", iconUrl: BusinessBag },
  { href: "/#education", label: "education", iconUrl: CubeReplaceFace },
  { href: "/#reviews", label: "reviews", iconUrl: Testimonial },
];

// Skills // Handled with Sanity CMS (judechuks26@gmail.com)
export const skills = [
  {
    id: 1,
    title: "HTML",
    imageurl: icons.htmlIcon,
    bgColor: "bg-[#FC490B]",
  },
  {
    id: 2,
    title: "CSS",
    imageurl: icons.cssIcon,
    bgColor: "bg-[#2A7EBD]",
  },
  {
    id: 3,
    title: "Bootstrap",
    imageurl: icons.bootstrapIcon,
    bgColor: "bg-[#8311FA]",
  },
  {
    id: 4,
    title: "TailwindCSS",
    imageurl: icons.tailwindIcon,
    bgColor: "bg-[#16BECB]",
  },
  {
    id: 5,
    title: "Sass",
    imageurl: icons.sassIcon,
    bgColor: "bg-[#CD6799]",
  },
  {
    id: 6,
    title: "Javascript",
    imageurl: icons.javascriptIcon,
    bgColor: "bg-[#F7E018]",
  },
  {
    id: 7,
    title: "Reactjs",
    imageurl: icons.reactIcon,
    bgColor: "bg-[#00bcd4]",
  },
  {
    id: 8,
    title: "Git and Github",
    imageurl: icons.reactIcon,
    bgColor: "bg-[#FE5F0B]",
  },
  {
    id: 9,
    title: "Redux Toolkit",
    imageurl: icons.reactIcon,
    bgColor: "bg-[#]",
  },
  {
    id: 10,
    title: "MySQL",
    imageurl: icons.reactIcon,
    bgColor: "bg-[#FE5F0B]",
  },
  {
    id: 11,
    title: "SQL",
    imageurl: icons.reactIcon,
    bgColor: "bg-[#008ef3]",
  },
  {
    id: 12,
    title: "Python",
    imageurl: icons.reactIcon,
    bgColor: "bg-[#005b9c]",
  },
  {
    id: 13,
    title: "MongoDB",
    imageurl: icons.reactIcon,
    bgColor: "bg-[#13AA52]",
  },
  {
    id: 14,
    title: "NodeJS",
    imageurl: icons.reactIcon,
    bgColor: "bg-[#96f300]",
  },
];

export const otherSkills = [
  { id: 1, title: "Graphics Design" },
  { id: 2, title: "Teamwork" },
  { id: 3, title: "Analytical skills" },
  { id: 4, title: "Communication" },
  { id: 5, title: "Problem Solving" },
  { id: 6, title: "Creativity" },
  { id: 7, title: "Resilience" },
  { id: 8, title: "Emotional Intelligence" },
];

// Projects // Handled with Sanity CMS (judechuks26@gmail.com)
export const projects = [
  {
    id: 1,
    title: "JayFootwears",
    link: "https://jayfootwears.netlify.app",
    githubLink: "https://github.com/judechuks/jayfootwears",
    date: "22-01-2024",
    description:
      "An online store for buying elegant shoes of different types and sizes. Built with React and Tailwind. The home page comprises of products section, superquality section, special offer, testimonials and newsletter signup. The shop now takes users to the products page fot the available shoes and a pagination to view more products with an info button to get the details of the products and to add products to cart. ",
    thumbnail: JayfootwearsImg,
    photoGallery: [JayfootwearsImg, productPageImg, detailPageImg, cartPageImg],
    skills: ["react", "tailwind"],
    skillIcons: [icons.reactIcon, icons.tailwindIcon],
    bgColor: "bg-[#00bcd445]",
  },
];

// Experience // Handled with Sanity CMS (judechuks26@gmail.com)
export const experiences = [
  {
    id: 1,
    period: "June 2023 - Till Date",
    position: "Frontend Instructor",
    company: "Edufun Technik STEM Hub",
    location: "6 Ridge road, GRA Onitsha",
    type: "Full-time",
    logo: EdufunLogo,
    description:
      "I worked as the instructor where I taught student on frontend skills",
    skills: ["HTML", "CSS", "JS"],
    bgColor: "bg-[#FC490B45]",
  },
  {
    id: 2,
    period: "June 2022 - May 2023",
    position: "NYSC Intern",
    company: "Edufun Technik STEM Hub",
    location: "6 Ridge road, GRA Onitsha",
    type: "Internship",
    logo: EdufunLogo,
    description:
      "I worked as the instructor where I taught student on frontend skills",
    skills: ["HTML", "CSS"],
    bgColor: "bg-[#00BCD445]",
  },
  {
    id: 3,
    period: "July 2011 - November 2011",
    position: "Computer Instructor Intern",
    company: "New Concepts Training Institute",
    location: "Isede street, Agbor",
    type: "Internship",
    logo: undefined,
    description:
      "I worked as the computer appreciation instructor where I taught student on basic computer skills such as typing, MS Office Suites and Coreldraw",
    skills: ["Graphics", "MS Office Suite", "Typing"],
    bgColor: "bg-[#F7E01845]",
  },
];

// Education // Handled with Sanity CMS (judechuks26@gmail.com)
export const education = [
  {
    id: 1,
    logo: undefined,
    certification: "HND in Computer science",
    institution: "Auchi Poly",
    location: "Edo, Nigeria",
    period: "2 years",
    skills: ["AI", "C++", "Paschal", "Software Engineering", "Database"],
    bgColor: "bg-[#CD679945]",
  },
  {
    id: 2,
    logo: undefined,
    certification: "ND in Computer science",
    institution: "Covenant Poly",
    location: "Abia, Nigeria",
    period: "2 years",
    skills: [
      "Data Structure",
      "Algorithm",
      "Java",
      "System Analysis",
      "Algebra",
      "Assembly",
      "Digital Electronics",
    ],
    bgColor: "bg-[#2A7EBD45]",
  },
];

// Awards // Handled with Sanity CMS (judechuks26@gmail.com)
export const awards = [
  {
    imgURL: undefined,
    title: "Award of Excellence",
    institution: "Edufun Technik STEM Hub",
    by: "Mrs. Uchenna O.U.",
    description:
      "Awarded as an excellent corp member during my service year at Edufun Technik STEM Hub Onitsha.",
    date: "27-May-2023",
  },
  {
    imgURL: undefined,
    title: "ND Overall Best Student",
    description:
      "Awarded as the best graduating computer science student and overall best student at the National diploma level during my studies at Covenant Polytechnic",
    institution: "Covenant Poly",
    by: "Deacon Iyke Nwoke",
    date: "1-May-2018",
  },
];

// Reviews // Handled with Sanity CMS (judechuks26@gmail.com)
export const reviews = [
  {
    id: 1,
    imgURL: EdufunCEO,
    name: "Mrs. Uchenna O.U.",
    position: "C.E.O Edufun Technik STEM Hub",
    feedback:
      "Mr. Jude is organized, always willing to work and learn. He is a good coding instructor. I recommend him for any position/job.",
    rating: 5,
    bgColor: "bg-[#8311FA45]",
  },
];

export const generateRating = (rating) => {
  let starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push(i);
  }
  return starArray;
};

// Footer
export const footerLinks = [
  {
    title: "Contact",
    links: [
      { name: "+2348144638926", link: "tel:+2348144638926" },
      {
        name: "judechuks26@gmail.com",
        link: "mailto:judechuks26@gmail.com",
      },
    ],
  },
];

// Social Media
export const socialMedia = [
  { faName: <FaGithub />, link: "https://github.com/judechuks" },
  { faName: <FaLinkedinIn />, link: "https://linkedin.com/in/monye-jude" },
  { faName: <FaWhatsapp />, link: "https://wa.me/+2348144638926" },
  { faName: <FaFacebook />, link: "https://facebook.com/jude.chuks.583" },
  { faName: <FaInstagram />, link: "https://instagram.com/judechuks_" },
];
