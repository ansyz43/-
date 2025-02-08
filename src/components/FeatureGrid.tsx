import React from "react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import { colors } from "@/lib/colors";

interface FeatureGridProps {
  features?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    extendedInfo: string;
  }>;
}

const FeatureGrid = ({ features }: FeatureGridProps) => {
  const defaultFeatures = [
    {
      title: "Снижение затрат",
      description:
        "Забудьте о необходимости содержать огромные штаты сотрудников. Наши системы автоматизируют рутинные процессы, что позволяет существенно экономить бюджет.",
      icon: <DollarSign className={`h-6 w-6 text-[${colors.primary}]`} />,
      extendedInfo:
        "Мы не предлагаем легких обещаний. Мы трансформируем ваш бизнес в простую, масштабируемую модель, где вместо сотен операторов работают интеллектуальные решения на базе искусственного интеллекта.",
    },
    {
      title: "Увеличение эффективности",
      description:
        "Интеллектуальные чат-боты и голосовые помощники обеспечивают мгновенное обслуживание клиентов, сокращая время ожидания и повышая качество коммуникации.",
      icon: <Clock className={`h-6 w-6 text-[${colors.primary}]`} />,
      extendedInfo:
        "Автоматизация рутинных задач позволяет вашим сотрудникам сосредоточиться на стратегически важных задачах, повышая общую производительность бизнеса.",
    },
    {
      title: "Рост выручки",
      description:
        "Благодаря автоматизации продаж и поддержки – например, через интегрированный Telegram-магазин – вы получаете больше заказов и создаёте условия для стабильного увеличения дохода.",
      icon: <TrendingUp className={`h-6 w-6 text-[${colors.primary}]`} />,
      extendedInfo:
        "Автоматизированные системы работают круглосуточно, обрабатывая заказы и отвечая на вопросы клиентов в любое время, что напрямую влияет на рост продаж.",
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-[#F5F5F7] py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-[${colors.text}] mb-6`}
          >
            Трансформация процессов для роста выручки
          </h2>
          <p
            className={`text-xl text-[${colors.textSecondary}] max-w-3xl mx-auto`}
          >
            Мы трансформируем ваш бизнес в простую, масштабируемую модель, где
            вместо сотен операторов работают интеллектуальные решения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {displayFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                extendedInfo={feature.extendedInfo}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureGrid;
