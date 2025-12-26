import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";

const LeftSide = () => {
  // Define a reusable class for the primary accent color
  const accentColorClass = "text-cyan-400";

  // Define social media data for cleaner rendering
  const socialLinks = [
    {
      name: "facebook",
      imageSrc: "/facebook.png",
      href: "https://www.facebook.com/shine.ko.18659041?mibextid=ZbWKwL",
    },
    {
      name: "linkedin",
      imageSrc: "/linkedin.png",
      href: "https://www.linkedin.com/in/u-shine-720661198/",
    },
    {
      name: "medium",
      imageSrc: "/medium.png",
      href: "https://medium.com/@shineko192015",
    },
    {
      name: "portfolio",
      imageSrc: "/behance.png",
      href: "https://www.behance.net/shineko2/projects",
    },
  ];

  return (
    // Outer Container: Defines the 'card' look and overall padding.
    <div
      className="
      w-full h-full flex flex-col items-center justify-start
      py-8 px-6
      text-center
      text-white
      rounded-lg
    "
    >
      {/* 1. Avatar Section */}
      <Avatar className="w-28 h-28 mb-4 rounded-xl overflow-hidden shadow-md">
        <AvatarImage
          src="/clients/designer.png"
          alt="Shine Ko"
          className="object-cover"
        />
        <AvatarFallback>SK</AvatarFallback>
      </Avatar>

      {/* Name */}
      <h1 className="text-2xl font-bold text-white mb-2 tracking-wider">
        SHINE KO
      </h1>

      {/* 2. Job Title/Pill Tag */}
      <div
        className="
        text-md
        bg-black/50 border border-gray-800/80
        text-cyan-400
        bg-transparent
        px-4 py-1
        rounded-full
        font-medium
        mb-10
      "
      >
        UI UX Designer & Mentor
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700/50 mt-2 mb-8 max-w-xs" />

      {/* 3. Contact Info Section (Updated with Icon Cards) */}
      <div className="w-full max-w-xs">
        <div className="flex flex-col space-y-5 text-left pl-2">
          {/* Email */}
          <div className="flex items-start gap-4">
            {/* ICON CARD DESIGN */}
            <div
              className={`
                w-12 h-12 flex items-center justify-center
                bg-black/50 border border-gray-800/80 rounded-lg
                ${accentColorClass}
            `}
            >
              <Mail className={`w-6 h-6`} />
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase pt-1">EMAIL</p>
              <a
                href="mailto:shineko192015@gmail.com"
                className="text-white text-sm font-semibold"
              >
                ushine.mmk@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            {/* ICON CARD DESIGN */}
            <div
              className={`
                w-12 h-12 flex items-center justify-center
                bg-black/50 border border-gray-800/80 rounded-lg
                ${accentColorClass}
            `}
            >
              <Phone className={`w-6 h-6`} />
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase pt-1">PHONE</p>
              <p className="text-white text-sm font-semibold">+95 9782436801</p>
            </div>
          </div>

          {/* Birthday */}
          <div className=" flex items-start gap-4">
            {/* ICON CARD DESIGN */}
            <div
              className={`
                w-12 h-12 flex items-center justify-center
                bg-black/50 border border-gray-800/80 rounded-lg
                ${accentColorClass}
            `}
            >
              <Calendar className={`w-6 h-6`} />
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase pt-1">BIRTHDAY</p>
              <p className="text-white text-sm font-semibold">
                October 31, 1994
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            {/* ICON CARD DESIGN */}
            <div
              className={`
                w-12 h-12 flex items-center justify-center
                bg-black/50 border border-gray-800/80 rounded-lg
                ${accentColorClass}
            `}
            >
              <MapPin className={`w-6 h-6`} />
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase pt-1">LOCATION</p>
              <p className="text-white text-sm font-semibold">Yangon,Myanmar</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- DIVIDER 2: BELOW CONTACT INFO / ABOVE SOCIAL ICONS --- */}
      <div className="w-full h-px bg-gray-700/50 mt-10 mb-8 max-w-xs" />

      {/* 4. Social Media Icons (Outlined circles) */}
      <div className="flex space-x-6">
  {socialLinks.map(({ name, href, imageSrc }) => (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
          text-gray-400
          bg-white border border-gray-800/80
          hover:border-cyan-400
          rounded-full
          transition-colors duration-300
          inline-flex items-center justify-center
          w-8 h-8
        `}
      aria-label={name}
    >
      <img
        src={imageSrc}
        alt={name}
        /* Changed from w-full h-full to w-4 h-4 */
        className="w-10 h-10 object-contain" 
      />
    </a>
  ))}
</div>
    </div>
  );
};

export default LeftSide;
