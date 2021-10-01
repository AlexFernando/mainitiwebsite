const settings = {
  "name": "mainiti-website",
  "state": {
    "frontity": {
      "url": "https://mainitiwp.wildfreewalkingtours.com/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "mainiti",

      "state": {
        "theme": {
          "menu": [
            ["About", "/about/"],
            ["Retreats", "/retreats/"],
            ["Ayahuasca", "/ayahuasca/"],
            ["Plant Dieta", "/plantdieta/"],
            ["Preparation", "/preparation/"],            
            ["Testimonials", "/testimonials/"],
            ["FAQ's", "faqs"],
            ["Contact", "/contact/"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },

    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://mainitiwp.wildfreewalkingtours.com/wp-json/",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
