import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/OWASP', label: 'GitHub' },
  { icon: FaTwitter, href: 'https://twitter.com/owasp', label: 'Twitter' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/owasp', label: 'LinkedIn' },
  { icon: FaDiscord, href: 'https://discord.gg/owasp', label: 'Discord' },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6 mt-8">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyber-blue transition-colors duration-200"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">{label}</span>
          <Icon className="h-6 w-6" />
        </motion.a>
      ))}
    </div>
  );
}