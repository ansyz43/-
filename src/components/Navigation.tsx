import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { colors } from "@/lib/colors";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

interface NavigationProps {
  onConsultationClick?: () => void;
  isScrolled?: boolean;
}

const Navigation = ({
  onConsultationClick = () => {},
  isScrolled = false,
}: NavigationProps) => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? `bg-[${colors.background}]/80 backdrop-blur-lg border-b border-[${colors.border}]` : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className={`text-[${colors.text}] text-2xl font-bold`}>
          CraftAI
        </div>

        {/* Navigation Items */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`text-[${colors.text}] hover:text-[${colors.primary}] bg-transparent`}
              >
                Продукты
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div
                  className={`w-[400px] p-4 bg-[${colors.background}] border border-[${colors.border}]`}
                >
                  <div className="grid gap-3">
                    <div className={`p-4 hover:bg-[${colors.card}] rounded-lg`}>
                      <NavigationMenuLink
                        href="/telegram-bot"
                        className={`block hover:bg-[${colors.card}] rounded-lg`}
                      >
                        <h3 className={`text-[${colors.text}] font-medium`}>
                          Telegram Бот
                        </h3>
                      </NavigationMenuLink>
                      <p className={`text-[${colors.textSecondary}] text-sm`}>
                        ИИ-ассистент для вашего бизнеса
                      </p>
                    </div>
                    <div className={`p-4 hover:bg-[${colors.card}] rounded-lg`}>
                      <h3 className={`text-[${colors.text}] font-medium`}>
                        Интеграции
                      </h3>
                      <p className={`text-[${colors.textSecondary}] text-sm`}>
                        Подключение к CRM и 1С
                      </p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() +
                  ` text-[${colors.text}] hover:text-[${colors.primary}] bg-transparent`
                }
              >
                Решения
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() +
                  ` text-[${colors.text}] hover:text-[${colors.primary}] bg-transparent`
                }
              >
                FAQ
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <Button
          onClick={onConsultationClick}
          className={`bg-[${colors.primary}] text-white hover:bg-[${colors.hover}] font-medium px-6`}
        >
          Подобрать решение
        </Button>
      </div>
    </motion.div>
  );
};

export default Navigation;
