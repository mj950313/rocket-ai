import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        ko: {
            translation: {
              header: {
                title: "로켓AI",
                language: "한국어",
              },
              chat: {
                placeholder: "메시지를 입력하세요 ..."
              }
            },
          },
        en: {
            translation: {
            header: {
                title: "RocketAI",
                language: "English",
            },
            chat: {
              placeholder: "Enter your message ..."
            }
            },
        },
    },
    lng: 'ko', // 기본 언어
    fallbackLng: 'en', // 기본 언어가 없을 경우 사용할 언어
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
