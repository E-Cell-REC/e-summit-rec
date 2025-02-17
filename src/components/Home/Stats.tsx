import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  width: number;
}

const stats: StatProps[] = [
  { value: "3000+", label: "ATTENDEES", width: 100 },
  { value: "100+", label: "STARTUP IDEAS", width: 80 },
  { value: "30+", label: "EVENTS", width: 60 },
  { value: "10+", label: "STARTUPS", width: 40 },
];

const Stats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <div className="py-10 px-5 md:px-20">
      <div ref={ref} className="flex flex-col gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="overflow-hidden"
          >
            {/* Expanding Bar */}
            <motion.div
              initial={{ width: "0%" }}
              animate={isInView ? { width: `${stat.width}%` } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.3 }}
              className="bg-purple-700 h-14 flex items-center justify-end pr-4 rounded-lg relative"
            >
              {/* Value + Label aligned to the END */}
              <motion.span
                initial={{ x: "-100%" }}
                animate={isInView ? { x: "0%" } : { x: "-100%" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.3 }}
                className="text-white text-lg md:text-xl font-bold"
              >
                {stat.value} {stat.label}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;