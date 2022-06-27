import { InstagramLogo, YoutubeLogo } from "phosphor-react";
import { LogoFooter } from "./LogoFooter";

export function Footer() {
  return (
    <footer className="border-t border-gray-600 flex justify-between items-center py-6 mx-8">
      <div className="gap-6 flex items-center">
        <a href="#">
          <LogoFooter />
        </a>
        <p>Bravo Milano - All rights reserved</p>
      </div>
      <div className="flex gap-4">
        <a href="https://www.youtube.com/channel/UCNlDA1JfnXh3QENDwVp1fuA" className="flex gap-2 hover:text-orange-500" target="_blank" title="Bravo Youtube Channel">
          <YoutubeLogo size={24} />
          Bravo Youtube Channel
        </a>
        <a href="https://instagram.com/bravomilanoofficial" className="flex gap-2 hover:text-orange-500" target="_blank" title="Bravo on Instagram">
          <InstagramLogo size={24} />
          Bravo on Instagram
        </a>
      </div>
    </footer>
  )
}