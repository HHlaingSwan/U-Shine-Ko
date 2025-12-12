import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  Facebook,
  Linkedin,
  MessageSquare,
} from "lucide-react";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      <Avatar className="w-32 h-32 mb-4">
        <AvatarImage src="https://github.com/shadcn.png" alt="Ko Shine" />
        <AvatarFallback>KS</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold mb-1">Ko Shine</h1>
      <p className="text-lg text-gray-400 mb-6">UI UX Designer & Mentor</p>

      <div className="w-full bg-gray-800 p-6 rounded-lg">
        <div className="flex flex-col space-y-4 text-left">
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-4 text-yellow-400" />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a href="mailto:example@email.com" className="text-white">
                example@email.com
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-4 text-yellow-400" />
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-white">+95 9 123 456 789</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-4 text-yellow-400" />
            <div>
              <p className="text-gray-400 text-sm">Birthday</p>
              <p className="text-white">Jan 1, 1990</p>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-4 text-yellow-400" />
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white">Yangon, Myanmar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="#" className="text-gray-400 hover:text-white">
          <Facebook />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <Linkedin />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <MessageSquare />
        </a>
      </div>
    </div>
  );
};

export default LeftSide;
