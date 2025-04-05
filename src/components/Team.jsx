// import React from "react";
// import ceo from "../assets/images/ceo.png"
// import WebDeveloper from "../assets/images/web-developer.png"
// import ContentWriter from "../assets/images/content-writer.png"
// import GraphicDesigner from "../assets/images/graphic-designer.png"

// import "aos/dist/aos.css";

// const Team = () => {
//   const teamMembers = [
//     {
//       name: "Safwan",
//       role: "Chief Executive Officer",
//       image: ceo, // Replace with actual image path
//       bio: "A visionary leader transforming digital solutions through innovation and strategic excellence.",
//       skills: ["Strategic Vision", "Innovation", "Leadership"],
//     },
//     {
//       name: "Nadran",
//       role: "Lead Web Developer",
//       image: WebDeveloper, // Replace with actual image path
//       bio: "Expert developer crafting robust and scalable web solutions with modern technologies.",
//       skills: ["Full-Stack", "Architecture", "Performance"],
//     },
//     {
//       name: "Salmanul Faris",
//       role: "Senior Graphic Designer",
//       image: GraphicDesigner, // Replace with actual image path
//       bio: "Creative designer bringing brands to life through compelling visual experiences.",
//       skills: ["UI/UX", "Branding", "Visual Design"],
//     },
//     {
//       name: "Hiba Sherin",
//       role: "Senior Content Strategist",
//       image: ContentWriter, // Replace with actual image path
//       bio: "Strategic content expert driving engagement through powerful storytelling.",
//       skills: ["Content Strategy", "SEO", "Digital Marketing"],
//     },
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//             Meet Our <span className="text-red-600">Team</span>
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">Exceptional professionals dedicated to your success</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="200">
//           {teamMembers.map((member, index) => (
//             <div
//               key={member.name}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
//               data-aos="fade-up"
//               data-aos-delay={100 * (index + 1)}
//             >
//               <div className="relative mb-6 mx-auto w-28 h-28 lg:w-32 lg:h-32">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
//                 />
//               </div>

//               <div className="text-center">
//                 <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
//                 <p className="text-red-600 text-sm font-medium mb-3">{member.role}</p>

//                 <div className="w-12 h-1 bg-red-600 mx-auto mb-4 rounded-full"></div>

//                 <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

//                 <div className="flex flex-wrap justify-center gap-2">
//                   {member.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full hover:bg-red-100 transition-colors"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
