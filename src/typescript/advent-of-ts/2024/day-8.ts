// thanks to refresh my memory @FuzeTox: https://www.youtube.com/@FuzeTox
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MOOD_LIGHTS: "true",
      BATH_TEMPERATURE: "327.59",
      STRAWBERRIES: "chocolate",
    }
  }
}
