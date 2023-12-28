import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import ru from "./translations/ru";
// import uzCr from "./translations/uz-cr";
// import uzLtn from "./translations/uz-ltn";
const ru = {
  "Обманчиво простая, невероятно интересная":
    "Обманчиво простая, невероятно интересная",
};
const uzLtn = {
  "Обманчиво простая, невероятно интересная":
    "Aldamchi darajada sodda, aql bovar qilmaydigan darajada qiziqarli",
  "Играть сейчас": "Hozir O'ynash",
  "Особенности игры": "O'yin xususiyatlari",
  "Неважно, покоряете ли вы рейтинговую таблицу или просто играете в свое удовольствие":
    "Peshqadamlar ro‘yxatiga chiqasizmi yoki shunchaki o‘yin-kulgi uchun o‘ynayapsizmi ",
  "Boriga Baraka — игра для вас.": "Boriga Baraka o‘yini siz uchun",
  "Добро пожаловать в игру Boriga Baraka":
    "Boriga Baraka o'yiniga xush kelibsiz",
  "Обманчиво простая, невероятно интересная игра. Где каждый может выиграть.":
    "Aldamchi oddiy, nihoyatda qiziqarli o'yin. Hamma g'alaba qozonishi mumkin!",
  "Учетная запись": "Kirish",
  Авторизация: "Ruxsat olish",
  "Начать игру": "O'yinni boshlash",
  "Завершить игру": "O'yinni tugatish",
  "Ознакомиться с правилами": "Qoidalarni o'qing",
  "Новая игра": "Yangi o'yin",
  "Правила игры": "O'yin qoidalari",
  "Выберите ": "Tanlang ",
  " произвольные карты": " tasodifiy kartalar",
  "Выбранная карта станет вашей": "Tanlangan karta sizniki bo'ladi",
  //   "Неважно, покоряете ли вы рейтинговую таблицу или просто играете в свое удовольствие":
  //     "Peshqadamlar jadvalini zabt etasizmi yoki shunchaki o‘yin-kulgi uchun o‘ynayapsizmi, muhim emas",
  //   "Boriga Baraka — игра для вас": "Boriga Baraka - bu siz uchun o'yin",
};
const resources = {
  uz: {
    translation: uzLtn,
  },
  //   cr: {
  //     translation: uzCr,
  //   },
  ru: {
    translation: ru,
  },
};

const lang = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
  resources,
  // lng: getLang(),
  fallbackLng: lang ? lang : "uz",
  interpolation: {
    escapeValue: false,
  },
});
