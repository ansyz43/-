import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { motion } from "framer-motion";
import { colors } from "@/lib/colors";

interface ConsultationFormProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ConsultationForm = ({
  open = true,
  onOpenChange = () => {},
  onSubmit = () => {},
}: ConsultationFormProps) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };
    onSubmit(data);
    setIsSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`bg-[${colors.background}] border border-[${colors.border}] sm:max-w-[600px]`}
      >
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle
                className={`text-2xl font-bold text-[${colors.text}]`}
              >
                Запросить Консультацию
              </DialogTitle>
              <DialogDescription className={`text-[${colors.textSecondary}]`}>
                Заполните форму ниже, и наша команда свяжется с вами в течение
                24 часов.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="name" className={`text-[${colors.text}]`}>
                  Имя
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Иван Иванов"
                  className={`bg-[${colors.card}] border-[${colors.border}] text-[${colors.text}]`}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className={`text-[${colors.text}]`}>
                  Эл. почта
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ivan@example.com"
                  className={`bg-[${colors.card}] border-[${colors.border}] text-[${colors.text}]`}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className={`text-[${colors.text}]`}>
                  Компания
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Ваша Компания"
                  className={`bg-[${colors.card}] border-[${colors.border}] text-[${colors.text}]`}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className={`text-[${colors.text}]`}>
                  Сообщение
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Расскажите о вашем проекте..."
                  className={`bg-[${colors.card}] border-[${colors.border}] text-[${colors.text}] min-h-[100px]`}
                  required
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className={`w-full bg-[${colors.primary}] text-white hover:bg-[${colors.hover}]`}
                >
                  Отправить Запрос
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <div className="mb-6">
              <div
                className={`h-16 w-16 mx-auto bg-[${colors.primary}]/20 rounded-full flex items-center justify-center`}
              >
                <svg
                  className={`h-8 w-8 text-[${colors.primary}]`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <DialogTitle
              className={`text-2xl font-bold text-[${colors.text}] mb-4`}
            >
              Спасибо!
            </DialogTitle>
            <DialogDescription className={`text-[${colors.textSecondary}]`}>
              Мы получили ваш запрос на консультацию и скоро свяжемся с вами.
            </DialogDescription>
            <Button
              onClick={() => onOpenChange(false)}
              className={`mt-6 bg-[${colors.primary}] text-white hover:bg-[${colors.hover}]`}
            >
              Закрыть
            </Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;
