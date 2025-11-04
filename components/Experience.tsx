"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { experiences } from "@/config/site"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions with measurable results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <div className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-white dark:ring-gray-950" />
                </div>

                {/* Content Card */}
                <div className="flex-1 md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                  >
                    {/* Company & Position */}
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      {exp.company}
                    </h4>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                        </span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="space-y-2 mb-4">
                      {Array.isArray(exp.description) ? (
                        exp.description.map((item, i) => (
                          <p key={i} className="text-gray-700 dark:text-gray-300">
                            • {item}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-700 dark:text-gray-300">
                          {exp.description}
                        </p>
                      )}
                    </div>

                    {/* Impact Metrics */}
                    {exp.impact && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Object.entries(exp.impact).map(([key, value]) => (
                          <div
                            key={key}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-semibold"
                          >
                            <TrendingUp className="w-3 h-3" />
                            {value}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary dark:bg-primary/20 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
