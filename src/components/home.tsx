import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ConsultationForm from "./ConsultationForm";
import { motion, useScroll } from "framer-motion";
import { ShoppingCart, Users, Zap } from "lucide-react";
import ProductCard from "./ProductCard";
import { colors } from "@/lib/colors";

const FeatureGrid = React.lazy(() => import("./FeatureGrid"));

const Home = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleConsultationClick = () => {
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        onConsultationClick={handleConsultationClick}
        isScrolled={isScrolled}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />

        <React.Suspense fallback={<div>Loading...</div>}>
          <FeatureGrid />
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-16">
                  <h2
                    className={`text-4xl sm:text-5xl font-bold text-[${colors.text}] mb-6`}
                  >
                    Наши продукты
                  </h2>
                  <p
                    className={`text-xl text-[${colors.textSecondary}] max-w-3xl mx-auto`}
                  >
                    Выберите оптимальное решение для вашего бизнеса
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProductCard
                    title="Telegram Магазин"
                    description="Автоматизированная система продаж и поддержки клиентов через Telegram с интеграцией платежей и управлением товарами."
                    icon={
                      <ShoppingCart
                        className={`w-6 h-6 text-[${colors.primary}]`}
                      />
                    }
                    link="/telegram-shop"
                  />
                  <ProductCard
                    title="ИИ-сотрудники"
                    description="Интеллектуальные ассистенты для HR, консультантов, продавцов и аналитиков, оптимизирующие рабочие процессы."
                    icon={
                      <Users className={`w-6 h-6 text-[${colors.primary}]`} />
                    }
                    link="/ai-employees"
                  />
                  <ProductCard
                    title="Комплексное решение"
                    description="Объединение Telegram-магазина с ИИ-сотрудниками для максимальной автоматизации и эффективности бизнеса."
                    icon={
                      <Zap className={`w-6 h-6 text-[${colors.primary}]`} />
                    }
                    link="/complete-solution"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </React.Suspense>

        {/* Fixed consultation button */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={handleConsultationClick}
            className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 text-black rounded-full font-medium shadow-lg hover:from-[#D4AF37]/90 hover:to-[#D4AF37]/70 transition-all duration-300 transform hover:scale-105"
          >
            Получить консультацию
          </button>
        </motion.div>

        <ConsultationForm
          open={isConsultationOpen}
          onOpenChange={setIsConsultationOpen}
        />
      </motion.main>
    </div>
  );
};

export default Home;
