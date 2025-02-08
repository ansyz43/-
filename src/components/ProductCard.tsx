import React from "react";
import { motion } from "framer-motion";
import { colors } from "@/lib/colors";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link: string;
}

const ProductCard = ({ title, description, icon, link }: ProductCardProps) => {
  return (
    <Link to={link}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`p-8 bg-[${colors.card}] rounded-xl border border-[${colors.border}] hover:border-[${colors.primary}] cursor-pointer group`}
      >
        <div className="flex justify-between items-start mb-6">
          <div
            className={`w-12 h-12 rounded-full bg-[${colors.primary}]/10 flex items-center justify-center`}
          >
            {icon}
          </div>
          <ArrowRight
            className={`w-6 h-6 text-[${colors.primary}] opacity-0 group-hover:opacity-100 transition-opacity`}
          />
        </div>
        <h3 className={`text-2xl font-semibold text-[${colors.text}] mb-4`}>
          {title}
        </h3>
        <p className={`text-[${colors.textSecondary}] leading-relaxed`}>
          {description}
        </p>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
