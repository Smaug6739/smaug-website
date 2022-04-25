import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  target: "server",
  app: {
    head: {
      title: "Smaug#6739",
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      meta: [
        {  hid: "theme-color",  name: "theme-color",  content: "#0e0c0c" },
        {  hid: "description",  name: "description",  content:    "Hi, I'm Smaug6739, full-stack developer from France, I develop also software and diffrent libraries." },
        
        // Open Graph / Facebook
        { hid: "og-type", property: "og:type", content: "website" },
        { hid: "og-title", property: "og:title", content: "Smaug6739" },
        { hid: "og-description", property: "og:description", content: "Hi, I'm Smaug6739, full-stack developer from France, I develop also software and diffrent libraries."},
        {  hid: "og-url",  property: "og:url",  content: `https://smaug-6739.com` },
        {  hid: "og-keywords",  property: "og:keywords",  content: "Developer, Full-Stack, Software, Smaug6739" },
        {  hid: "og-image",  property: "og:image",  content: `https://smaug-6739.com/seo/img.png` },

        // Twitter
        {  hid: "twitter-title",  name: "twitter:title",  content: `Smaug6739` },
        {  hid: "twitter-creator",  name: "twitter:creator",  content: `Smaug6739` },
        {  hid: "twitter-site",  name: "twitter:site",  content: `https://smaug-6739.com` },
        {  hid: "twitter-url",  name: "twitter:url",  content: `https://smaug-6739.com` },
        {  hid: "twitter-description",  name: "twitter:description",  content: `Hi, I'm Smaug6739, full-stack developer from France, I develop also software and diffrent libraries.` },
        {  hid: "twitter-card",  name: "twitter:card",  content: `summary_large_image` },
        {  hid: "twitter-image",  name: "twitter:image",  content: `https://smaug-6739.com/seo/img.png` },
      ],
    },
  },
});
