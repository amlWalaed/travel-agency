import en from "@/lang/en.json";
import ar from "@/lang/ar.json";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ar",
  allowComposition: true,
  messages: {
    en,
    ar,
  },
}));
