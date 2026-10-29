(window.BABUL ||= {}).product = {
  "format": 1,
  "name": "hamburg",
  "description": "A kitchen companion: deep guides to ingredients, what each one becomes, and what pairs with it. 100% vegetarian. There is no app; this set is the spec.",
  "startedFrom": "blank",
  "start": "home/home",
  "logo": "assets/icon.svg",
  "art": [],
  "sizes": [
    "web"
  ],
  "perSize": false,
  "frames": {
    "web": {
      "w": 1440,
      "h": 900
    }
  },
  "themes": [
    "light"
  ],
  "stack": [
    "html",
    "tailwind",
    "lucide"
  ],
  "roles": [],
  "missing": [
    {
      "what": "Search",
      "why": "home and Journeys draw a search field, and Pairings a picker. Nothing answers them: the set has no script"
    },
    {
      "what": "Filters",
      "why": "the chips on Ingredients, Journeys and Recipes are buttons that filter nothing"
    },
    {
      "what": "Seven season tiles on Home go nowhere",
      "why": "Mango, Sweet corn, Berries, Cucumber, Peppers, Basil and Stone fruit have no dossier. Their links are #"
    },
    {
      "what": "Dossiers for Milk, Wheat and Sourdough",
      "why": "Home shows them as ingredients with 7 chapters; the tiles open their journeys instead. See features/0001"
    },
    {
      "what": "Six dossiers are the older chapter layout",
      "why": "only Tomato was redrawn as a single-frame bento. See features/0002"
    },
    {
      "what": "The narrow layout",
      "why": "the stylesheet has rules for 900, 640 and 560px and the README calls the site mobile-first. No screen is drawn at that width, and there is no mobile surface"
    },
    {
      "what": "A dark theme",
      "why": "the prototype drew none"
    },
    {
      "what": "Flour, Base dough and the wild-yeast node",
      "why": "three nodes in the Dough and Sourdough graphs, and two notes on Milk → Paneer, link to #"
    }
  ]
};
