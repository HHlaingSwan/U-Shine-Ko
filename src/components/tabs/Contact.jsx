import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <div className="grid grid-cols-1 gap-8">
        {/* Left Column: Contact Info & Map */}
        <div className="space-y-8">
          {/* Map Placeholder */}
          <div className="h-80 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.297449539286!2d-122.41941568468155!3d37.77492957975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a76b05f9%3A0x469e320f7c006ed!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1671542159654!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-cyan-400">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y divide-gray-700">
              {/* Email */}
              <div className="flex items-center gap-4 py-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-900/50">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-base font-medium text-white hover:underline"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-4 py-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-900/50">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <span className="text-base font-medium text-white">
                    +1 (123) 456-7890
                  </span>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-center gap-4 py-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-900/50">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <span className="text-base font-medium text-white">
                    Creativity City, CA
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-cyan-400">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <Textarea
                placeholder="Your Message"
                rows={6}
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
