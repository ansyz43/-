import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { colors } from "@/lib/colors";

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  extendedInfo?: string;
}

const FeatureCard = ({
  title = "Генеративный искусственный интеллект",
  description = "Создаем передовые решения на базе нейронных сетей для автоматизации бизнес-процессов.",
  icon = <ArrowRight className={`h-6 w-6 text-[${colors.primary}]`} />,
  extendedInfo = "Используем последние достижения в области генеративного ИИ для создания умных и эффективных решений.",
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full h-full"
    >
      <Card
        className={`h-full bg-[${colors.card}] border-[${colors.border}] hover:border-[${colors.primary}] cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
      >
        <CardHeader className="space-y-4">
          <div
            className={`rounded-full bg-[${colors.primary}]/10 w-12 h-12 flex items-center justify-center`}
          >
            {icon}
          </div>
          <CardTitle className={`text-2xl font-semibold text-[${colors.text}]`}>
            {title}
          </CardTitle>
          <CardDescription
            className={`text-[${colors.textSecondary}] text-base leading-relaxed`}
          >
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            className={`text-sm text-[${colors.textSecondary}] mt-4 overflow-hidden`}
          >
            {extendedInfo}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
