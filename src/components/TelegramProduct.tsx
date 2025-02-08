import React from "react";
import { motion } from "framer-motion";
import { colors } from "@/lib/colors";
import {
  Check,
  Users,
  ShoppingCart,
  UserCog,
  Bell,
  Search,
} from "lucide-react";

const TelegramProduct = () => {
  const features = [
    "Круглосуточная поддержка клиентов, без выходных",
    "Быстрые и точные ответы на вопросы о продуктах, услугах, доставке и оплате",
    "Интеллектуальный анализ запросов для персонализированных рекомендаций",
    "Интеграция с базой знаний для актуальной информации о наличии товаров и ценах",
    "Поддержка разных языков для работы с международной аудиторией",
  ];

  const roles = [
    {
      title: "Покупатель",
      features: [
        "Простой и интуитивный интерфейс для поиска товаров",
        "Добавление в корзину и оформление заказов",
        "Отслеживание доставки",
        "Доступ к информации о товарах, акциях и скидках",
      ],
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      title: "Администратор",
      features: [
        "Полный контроль над ботом",
        "Управление каталогом товаров, ценами и акциями",
        "Аналитика продаж и отчетов",
        "Массовая рассылка клиентам",
      ],
      icon: <UserCog className="w-6 h-6" />,
    },
    {
      title: "Менеджер",
      features: [
        "Доступ к информации о клиентах и заказах",
        "Решение проблем и предоставление консультаций",
      ],
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const functionalities = [
    {
      title: "Для администратора",
      features: [
        {
          title: "Управление товарами",
          description:
            "Добавление, редактирование и удаление товаров, загрузка фото, описание, цена, размер, цвет.",
        },
        {
          title: "Управление сотрудниками",
          description:
            "Назначение менеджеров, настройка прав доступа, отслеживание эффективности работы.",
        },
      ],
    },
    {
      title: "Для менеджера",
      features: [
        {
          title: "Уведомления о заказах",
          description:
            "Мгновенные уведомления о новых заказах, возможность быстро ответить клиентам.",
        },
        {
          title: "Управление заказами",
          description: "Отслеживание статусов заказов в реальном времени.",
        },
      ],
    },
    {
      title: "Для покупателя",
      features: [
        {
          title: "Корзина и оформление заказа",
          description:
            "Добавление товаров в корзину, ввод контактных данных, отслеживание статуса заказа.",
        },
        {
          title: "Консультации",
          description:
            "Мгновенные ответы на вопросы о товарах, характеристиках, размерах и цветах.",
        },
        {
          title: "Поиск товаров",
          description:
            "Фильтры по категориям, цене, акциям и другим критериям.",
        },
      ],
    },
  ];

  const advantages = [
    {
      title: "Увеличение продаж",
      description:
        "Повышение конверсии за счёт удобства заказа, оперативного реагирования и персонализированного подхода.",
    },
    {
      title: "Аналитика продаж",
      description:
        "Отслеживание динамики продаж, популярных товаров и поведения покупателей.",
    },
    {
      title: "Безопасность платежей",
      description:
        "Интеграция с надёжными платежными системами и шифрование данных.",
    },
  ];

  const integrations = [
    {
      title: "База данных",
      description:
        "Централизованное хранение информации о товарах, заказах, клиентах и сотрудниках.",
    },
    {
      title: "1С",
      description:
        "Синхронизация с системой бухгалтерского учёта и управления запасами.",
    },
    {
      title: "CRM-система",
      description:
        "Анализ продаж, управление клиентами, маркетинговые кампании.",
    },
    {
      title: "Платёжные системы",
      description:
        "Поддержка банковских карт, электронных кошельков и других методов оплаты.",
    },
  ];

  const stages = [
    {
      number: "1",
      title: "Проектирование",
      description: "Разработка концепции, базы данных и структуры.",
    },
    {
      number: "2",
      title: "Реализация",
      description:
        "Создание функционала интернет-магазина (каталог, корзина, оформление заказа, чат-бот).",
    },
    {
      number: "3",
      title: "Интеграция",
      description: "Подключение к 1С и CRM для автоматизации процессов.",
    },
    {
      number: "4",
      title: "Тестирование",
      description: "Устранение ошибок, проверка стабильности работы.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F5F7]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold text-[${colors.text}] mb-6`}
          >
            ИИ-ассистент в Telegram-боте
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl text-[${colors.textSecondary}] max-w-3xl mx-auto mb-12`}
          >
            ИИ-ассистент встроен в бота и обеспечивает круглосуточную поддержку
            клиентов. Он отвечает на вопросы и предоставляет актуальную
            информацию о товарах и услугах.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-[${colors.text}] mb-12 text-center`}
          >
            Функции ИИ-ассистента
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 bg-[${colors.card}] rounded-xl border border-[${colors.border}] flex items-start gap-4`}
              >
                <Check
                  className={`w-6 h-6 text-[${colors.primary}] flex-shrink-0 mt-1`}
                />
                <p className={`text-[${colors.text}]`}>{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-[${colors.text}] mb-12 text-center`}
          >
            Три роли в Telegram-боте
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 bg-[${colors.card}] rounded-xl border border-[${colors.border}]`}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-[${colors.primary}]/10 flex items-center justify-center mb-6`}
                >
                  <div className={`text-[${colors.primary}]`}>{role.icon}</div>
                </div>
                <h3
                  className={`text-xl font-semibold text-[${colors.text}] mb-4`}
                >
                  {role.title}
                </h3>
                <ul className="space-y-3">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-blue-500">🔹</span>
                      <span className={`text-[${colors.text}]`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Functionality Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-[${colors.text}] mb-12 text-center`}
          >
            Функционал бота
          </h2>
          {functionalities.map((functionality, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <h3
                className={`text-2xl font-semibold text-[${colors.text}] mb-6`}
              >
                {functionality.title}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {functionality.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className={`p-6 bg-[${colors.card}] rounded-xl border border-[${colors.border}]`}
                  >
                    <h4
                      className={`text-lg font-semibold text-[${colors.text}] mb-2 flex items-center gap-2`}
                    >
                      <Check className={`w-5 h-5 text-[${colors.primary}]`} />
                      {feature.title}
                    </h4>
                    <p className={`text-[${colors.textSecondary}]`}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-[${colors.text}] mb-12 text-center`}
          >
            Преимущества использования Telegram-бота
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 bg-[${colors.card}] rounded-xl border border-[${colors.border}]`}
              >
                <h3
                  className={`text-lg font-semibold text-[${colors.text}] mb-2 flex items-center gap-2`}
                >
                  <Check className={`w-5 h-5 text-[${colors.primary}]`} />
                  {advantage.title}
                </h3>
                <p className={`text-[${colors.textSecondary}]`}>
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-[${colors.text}] mb-12 text-center`}
          >
            Интеграции с другими системами
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-blue-500 flex-shrink-0">🔹</span>
                <div>
                  <h3 className={`font-semibold text-[${colors.text}]`}>
                    {integration.title}
                  </h3>
                  <p className={`text-[${colors.textSecondary}]`}>
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Stages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-[${colors.text}] mb-12 text-center`}
          >
            Этапы разработки бота
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 bg-[${colors.card}] rounded-xl border border-[${colors.border}]`}
              >
                <div
                  className={`w-10 h-10 rounded-full bg-[${colors.primary}] text-white flex items-center justify-center mb-4 font-bold`}
                >
                  {stage.number}
                </div>
                <h3
                  className={`text-lg font-semibold text-[${colors.text}] mb-2`}
                >
                  {stage.title}
                </h3>
                <p className={`text-[${colors.textSecondary}]`}>
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-3xl font-bold text-[${colors.text}] mb-6`}>
            Заключение
          </h2>
          <p className={`text-xl text-[${colors.textSecondary}] mb-8`}>
            Наш Telegram-бот – это комплексное решение для интернет-магазинов.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Check className={`w-6 h-6 text-[${colors.primary}]`} />
              <span className={`text-[${colors.text}]`}>Увеличение продаж</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className={`w-6 h-6 text-[${colors.primary}]`} />
              <span className={`text-[${colors.text}]`}>
                Улучшение обслуживания клиентов
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check className={`w-6 h-6 text-[${colors.primary}]`} />
              <span className={`text-[${colors.text}]`}>
                Автоматизация бизнес-процессов
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TelegramProduct;
