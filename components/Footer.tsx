"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Heart } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${siteConfig.links.email}`,
      label: "Email",
    },
    {
      icon: Linkedin,
      href: siteConfig.links.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: siteConfig.links.github,
      label: "GitHub",
    },
  ]

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-3">
              Siham Demami
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Data Science & Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Experience", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1 flex-wrap">
            <span>© {currentYear} Siham Demami. Built with</span>
            <Heart className="w-4 h-4 text-red-500 inline" />
            <span>using Next.js, TailwindCSS & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
