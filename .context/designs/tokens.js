(window.BABUL ||= {}).tokens = {
  "color": {
    "$description": "The palette holds every colour once, by base colour, light to dark. Every other colour is a role that names a palette colour; screens paint with roles, never the palette. Light only: the prototype drew no dark theme.",
    "palette": {
      "sage": {
        "50": {
          "$type": "color",
          "$value": "#eef4ea"
        },
        "100": {
          "$type": "color",
          "$value": "#e0efd8"
        },
        "150": {
          "$type": "color",
          "$value": "#dbe8d5"
        },
        "200": {
          "$type": "color",
          "$value": "#b8d8a8"
        },
        "250": {
          "$type": "color",
          "$value": "#b6d5a0"
        },
        "300": {
          "$type": "color",
          "$value": "#b5cfa8"
        },
        "350": {
          "$type": "color",
          "$value": "#7ab26b"
        },
        "400": {
          "$type": "color",
          "$value": "#7dac7d"
        },
        "450": {
          "$type": "color",
          "$value": "#6ca75b"
        },
        "500": {
          "$type": "color",
          "$value": "#5a8a5a"
        },
        "550": {
          "$type": "color",
          "$value": "#4b7a4b"
        },
        "700": {
          "$type": "color",
          "$value": "#2f4d2f"
        }
      },
      "coral": {
        "100": {
          "$type": "color",
          "$value": "#fce4d8"
        },
        "150": {
          "$type": "color",
          "$value": "#f5dac8"
        },
        "200": {
          "$type": "color",
          "$value": "#f3d8d0"
        },
        "250": {
          "$type": "color",
          "$value": "#e8b394"
        },
        "300": {
          "$type": "color",
          "$value": "#e0a898"
        },
        "400": {
          "$type": "color",
          "$value": "#e07a5f"
        },
        "450": {
          "$type": "color",
          "$value": "#d67a5f"
        },
        "500": {
          "$type": "color",
          "$value": "#c9603f"
        },
        "550": {
          "$type": "color",
          "$value": "#c05a4a"
        }
      },
      "butter": {
        "50": {
          "$type": "color",
          "$value": "#fbe9b3"
        },
        "150": {
          "$type": "color",
          "$value": "#e8ce7a"
        },
        "250": {
          "$type": "color",
          "$value": "#e8b842"
        },
        "300": {
          "$type": "color",
          "$value": "#d19c1f"
        }
      },
      "blue": {
        "50": {
          "$type": "color",
          "$value": "#dfeef3"
        },
        "150": {
          "$type": "color",
          "$value": "#b9dae4"
        },
        "350": {
          "$type": "color",
          "$value": "#5aa4bc"
        }
      },
      "purple": {
        "100": {
          "$type": "color",
          "$value": "#e8dff2"
        },
        "250": {
          "$type": "color",
          "$value": "#c9b4de"
        },
        "450": {
          "$type": "color",
          "$value": "#9b7bc7"
        }
      },
      "brown": {
        "300": {
          "$type": "color",
          "$value": "#b8a668"
        },
        "400": {
          "$type": "color",
          "$value": "#c9884a"
        },
        "500": {
          "$type": "color",
          "$value": "#8a6e3a"
        },
        "550": {
          "$type": "color",
          "$value": "#8a5e2a"
        }
      },
      "wheat": {
        "50": {
          "$type": "color",
          "$value": "#fdf5e6"
        },
        "100": {
          "$type": "color",
          "$value": "#f9f2df"
        },
        "150": {
          "$type": "color",
          "$value": "#f5e9d0"
        },
        "200": {
          "$type": "color",
          "$value": "#efe8cf"
        },
        "250": {
          "$type": "color",
          "$value": "#f5e2c0"
        },
        "300": {
          "$type": "color",
          "$value": "#f2e2c8"
        },
        "350": {
          "$type": "color",
          "$value": "#f0e2c4"
        },
        "400": {
          "$type": "color",
          "$value": "#e0cf9a"
        },
        "450": {
          "$type": "color",
          "$value": "#d6c99f"
        },
        "500": {
          "$type": "color",
          "$value": "#d9c095"
        },
        "550": {
          "$type": "color",
          "$value": "#dcbf90"
        },
        "600": {
          "$type": "color",
          "$value": "#d3a870"
        }
      },
      "cream": {
        "50": {
          "$type": "color",
          "$value": "#fdf9f3"
        },
        "100": {
          "$type": "color",
          "$value": "#f5eee1"
        },
        "150": {
          "$type": "color",
          "$value": "#ece2cc"
        },
        "200": {
          "$type": "color",
          "$value": "#ece1cc"
        },
        "250": {
          "$type": "color",
          "$value": "#d9c8a7"
        }
      },
      "ink": {
        "200": {
          "$type": "color",
          "$value": "#c9c1af"
        },
        "350": {
          "$type": "color",
          "$value": "#a09b8e"
        },
        "550": {
          "$type": "color",
          "$value": "#6b6659"
        },
        "850": {
          "$type": "color",
          "$value": "#2a2620"
        }
      },
      "white": {
        "$type": "color",
        "$value": "#ffffff"
      },
      "veil": {
        "$description": "Translucent grounds, by opacity: white over a gradient, the page under the blurred nav, the hairline on a white chip.",
        "page-85": {
          "$type": "color",
          "$value": "#fdf9f3d9"
        },
        "white-70": {
          "$type": "color",
          "$value": "#ffffffb3"
        },
        "white-85": {
          "$type": "color",
          "$value": "#ffffffd9"
        },
        "white-92": {
          "$type": "color",
          "$value": "#ffffffeb"
        },
        "black-6": {
          "$type": "color",
          "$value": "#0000000f"
        }
      }
    },
    "page": {
      "DEFAULT": {
        "$type": "color",
        "$value": "{color.palette.cream.50}"
      },
      "glass": {
        "$type": "color",
        "$value": "{color.palette.veil.page-85}",
        "$description": "The page under the blurred, sticky nav."
      }
    },
    "frame": {
      "$type": "color",
      "$value": "{color.palette.cream.50}"
    },
    "surface": {
      "$type": "color",
      "$value": "{color.palette.white}"
    },
    "muted": {
      "$type": "color",
      "$value": "{color.palette.cream.100}"
    },
    "sunken": {
      "$type": "color",
      "$value": "{color.palette.cream.150}"
    },
    "glass": {
      "DEFAULT": {
        "$type": "color",
        "$value": "{color.palette.veil.white-85}"
      },
      "soft": {
        "$type": "color",
        "$value": "{color.palette.veil.white-70}"
      },
      "strong": {
        "$type": "color",
        "$value": "{color.palette.veil.white-92}"
      }
    },
    "hairline": {
      "$type": "color",
      "$value": "{color.palette.veil.black-6}",
      "$description": "The border on a white chip."
    },
    "ink": {
      "DEFAULT": {
        "$type": "color",
        "$value": "{color.palette.ink.850}"
      },
      "2": {
        "$type": "color",
        "$value": "{color.palette.ink.550}"
      },
      "3": {
        "$type": "color",
        "$value": "{color.palette.ink.350}"
      },
      "4": {
        "$type": "color",
        "$value": "{color.palette.ink.200}"
      },
      "inverse": {
        "$type": "color",
        "$value": "{color.palette.white}"
      }
    },
    "line": {
      "DEFAULT": {
        "$type": "color",
        "$value": "{color.palette.cream.200}"
      },
      "strong": {
        "$type": "color",
        "$value": "{color.palette.cream.250}"
      }
    },
    "brand": {
      "50": {
        "$type": "color",
        "$value": "{color.palette.sage.50}"
      },
      "100": {
        "$type": "color",
        "$value": "{color.palette.sage.150}"
      },
      "200": {
        "$type": "color",
        "$value": "{color.palette.sage.300}"
      },
      "400": {
        "$type": "color",
        "$value": "{color.palette.sage.400}"
      },
      "500": {
        "$type": "color",
        "$value": "{color.palette.sage.500}",
        "$description": "Sage. RESERVED: the primary action, and a step or a skill that is solid."
      },
      "700": {
        "$type": "color",
        "$value": "{color.palette.sage.550}"
      },
      "900": {
        "$type": "color",
        "$value": "{color.palette.sage.700}"
      }
    },
    "accent": {
      "100": {
        "$type": "color",
        "$value": "{color.palette.coral.100}"
      },
      "500": {
        "$type": "color",
        "$value": "{color.palette.coral.400}",
        "$description": "Coral. RESERVED: avoid — what fights an ingredient, what ruins storage."
      },
      "700": {
        "$type": "color",
        "$value": "{color.palette.coral.500}"
      }
    },
    "highlight": {
      "100": {
        "$type": "color",
        "$value": "{color.palette.butter.50}"
      },
      "400": {
        "$type": "color",
        "$value": "{color.palette.butter.150}"
      },
      "500": {
        "$type": "color",
        "$value": "{color.palette.butter.250}",
        "$description": "Butter. RESERVED: learning, and sowing on a growing calendar."
      },
      "700": {
        "$type": "color",
        "$value": "{color.palette.butter.300}"
      }
    },
    "success": {
      "DEFAULT": {
        "$type": "color",
        "$value": "{color.palette.sage.500}"
      },
      "bg": {
        "$type": "color",
        "$value": "{color.palette.sage.150}"
      },
      "fg": {
        "$type": "color",
        "$value": "{color.palette.sage.550}"
      }
    },
    "warn": {
      "DEFAULT": {
        "$type": "color",
        "$value": "{color.palette.butter.250}"
      },
      "bg": {
        "$type": "color",
        "$value": "{color.palette.butter.50}"
      },
      "fg": {
        "$type": "color",
        "$value": "{color.palette.butter.300}"
      }
    },
    "danger": {
      "DEFAULT": {
        "$type": "color",
        "$value": "{color.palette.coral.400}"
      },
      "bg": {
        "$type": "color",
        "$value": "{color.palette.coral.100}"
      },
      "fg": {
        "$type": "color",
        "$value": "{color.palette.coral.500}"
      }
    },
    "info": {
      "DEFAULT": {
        "$type": "color",
        "$value": "{color.palette.blue.350}"
      },
      "bg": {
        "$type": "color",
        "$value": "{color.palette.blue.50}"
      },
      "fg": {
        "$type": "color",
        "$value": "{color.palette.blue.350}"
      }
    },
    "cat": {
      "$description": "RESERVED: an ingredient's category, and nothing else. A tile's tint says dairy, grain or spice before the label does.",
      "dairy": {
        "$type": "color",
        "$value": "{color.palette.blue.350}"
      },
      "vegetable": {
        "$type": "color",
        "$value": "{color.palette.sage.350}"
      },
      "legume": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.brown.400}"
        },
        "fg": {
          "$type": "color",
          "$value": "{color.palette.brown.550}"
        }
      },
      "grain": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.brown.300}"
        },
        "fg": {
          "$type": "color",
          "$value": "{color.palette.brown.500}"
        }
      },
      "spice": {
        "$type": "color",
        "$value": "{color.palette.coral.550}"
      },
      "herb": {
        "$type": "color",
        "$value": "{color.palette.sage.450}"
      },
      "fruit": {
        "$type": "color",
        "$value": "{color.palette.coral.450}"
      },
      "condiment": {
        "$type": "color",
        "$value": "{color.palette.purple.450}"
      }
    },
    "wash": {
      "$description": "The two ends of a category gradient; the dough, sourdough and kombucha graphs paint their nodes with the dough and starter steps.",
      "dairy": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.blue.50}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.blue.150}"
        }
      },
      "vegetable": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.sage.100}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.sage.200}"
        }
      },
      "legume": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.wheat.300}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.wheat.550}"
        }
      },
      "grain": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.wheat.200}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.wheat.450}"
        }
      },
      "spice": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.coral.200}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.coral.300}"
        }
      },
      "herb": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.sage.100}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.sage.250}"
        }
      },
      "fruit": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.coral.150}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.coral.250}"
        }
      },
      "condiment": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.purple.100}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.purple.250}"
        }
      },
      "plain": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.wheat.50}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.wheat.350}"
        }
      },
      "dough": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.wheat.150}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.wheat.500}"
        },
        "3": {
          "$type": "color",
          "$value": "{color.palette.wheat.100}"
        },
        "4": {
          "$type": "color",
          "$value": "{color.palette.wheat.400}"
        },
        "5": {
          "$type": "color",
          "$value": "{color.palette.wheat.100}"
        },
        "6": {
          "$type": "color",
          "$value": "{color.palette.wheat.350}"
        }
      },
      "starter": {
        "DEFAULT": {
          "$type": "color",
          "$value": "{color.palette.wheat.250}"
        },
        "2": {
          "$type": "color",
          "$value": "{color.palette.wheat.600}"
        }
      }
    }
  },
  "typography": {
    "2xs": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "10px",
        "fontWeight": 400,
        "lineHeight": 1.3
      }
    },
    "xs": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "11.5px",
        "fontWeight": 400,
        "lineHeight": 1.4
      }
    },
    "sm": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "13px",
        "fontWeight": 400,
        "lineHeight": 1.45
      }
    },
    "base": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5
      }
    },
    "body": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.5
      }
    },
    "lead": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "18px",
        "fontWeight": 400,
        "lineHeight": 1.45
      }
    },
    "h3": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "22px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "-0.01em"
      }
    },
    "h2": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "28px",
        "fontWeight": 400,
        "lineHeight": 1.15,
        "letterSpacing": "-0.02em"
      }
    },
    "h1": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "36px",
        "fontWeight": 400,
        "lineHeight": 1.08,
        "letterSpacing": "-0.02em"
      }
    },
    "display": {
      "$type": "typography",
      "$value": {
        "fontFamily": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "fontSize": "46px",
        "fontWeight": 400,
        "lineHeight": 1.02,
        "letterSpacing": "-0.03em"
      }
    }
  },
  "spacing": {
    "0": {
      "$type": "dimension",
      "$value": "0px"
    },
    "px": {
      "$type": "dimension",
      "$value": "1px"
    },
    "0.5": {
      "$type": "dimension",
      "$value": "2px"
    },
    "1": {
      "$type": "dimension",
      "$value": "4px"
    },
    "1.5": {
      "$type": "dimension",
      "$value": "6px"
    },
    "2": {
      "$type": "dimension",
      "$value": "8px"
    },
    "2.5": {
      "$type": "dimension",
      "$value": "10px"
    },
    "3": {
      "$type": "dimension",
      "$value": "12px"
    },
    "3.5": {
      "$type": "dimension",
      "$value": "14px"
    },
    "4": {
      "$type": "dimension",
      "$value": "16px"
    },
    "5": {
      "$type": "dimension",
      "$value": "20px"
    },
    "6": {
      "$type": "dimension",
      "$value": "24px"
    },
    "7": {
      "$type": "dimension",
      "$value": "28px"
    },
    "8": {
      "$type": "dimension",
      "$value": "32px"
    },
    "9": {
      "$type": "dimension",
      "$value": "36px"
    },
    "10": {
      "$type": "dimension",
      "$value": "40px"
    },
    "11": {
      "$type": "dimension",
      "$value": "44px"
    },
    "12": {
      "$type": "dimension",
      "$value": "48px"
    },
    "14": {
      "$type": "dimension",
      "$value": "56px"
    },
    "16": {
      "$type": "dimension",
      "$value": "64px"
    },
    "20": {
      "$type": "dimension",
      "$value": "80px"
    },
    "24": {
      "$type": "dimension",
      "$value": "96px"
    },
    "28": {
      "$type": "dimension",
      "$value": "112px"
    },
    "32": {
      "$type": "dimension",
      "$value": "128px"
    },
    "36": {
      "$type": "dimension",
      "$value": "144px"
    },
    "40": {
      "$type": "dimension",
      "$value": "160px"
    },
    "44": {
      "$type": "dimension",
      "$value": "176px"
    },
    "48": {
      "$type": "dimension",
      "$value": "192px"
    },
    "52": {
      "$type": "dimension",
      "$value": "208px"
    },
    "56": {
      "$type": "dimension",
      "$value": "224px"
    },
    "60": {
      "$type": "dimension",
      "$value": "240px"
    },
    "64": {
      "$type": "dimension",
      "$value": "256px"
    },
    "72": {
      "$type": "dimension",
      "$value": "288px"
    },
    "80": {
      "$type": "dimension",
      "$value": "320px"
    },
    "96": {
      "$type": "dimension",
      "$value": "384px"
    },
    "$description": "Tailwind's own scale: one step is 4px."
  },
  "radius": {
    "sm": {
      "$type": "dimension",
      "$value": "8px"
    },
    "DEFAULT": {
      "$type": "dimension",
      "$value": "12px"
    },
    "lg": {
      "$type": "dimension",
      "$value": "16px"
    },
    "xl": {
      "$type": "dimension",
      "$value": "20px"
    },
    "2xl": {
      "$type": "dimension",
      "$value": "24px"
    },
    "3xl": {
      "$type": "dimension",
      "$value": "28px"
    },
    "pill": {
      "$type": "dimension",
      "$value": "999px"
    }
  },
  "shadow": {
    "$description": "The prototype shadows with its own sage, rgb(90 138 90).",
    "sm": {
      "$type": "shadow",
      "$value": "0 1px 2px rgb(90 138 90 / 0.05)"
    },
    "DEFAULT": {
      "$type": "shadow",
      "$value": "0 4px 14px rgb(90 138 90 / 0.07)"
    },
    "lg": {
      "$type": "shadow",
      "$value": "0 14px 34px -10px rgb(90 138 90 / 0.18)"
    },
    "hover": {
      "$type": "shadow",
      "$value": "0 8px 24px rgb(90 138 90 / 0.12)",
      "$description": "A card, tile or node lifted under the pointer."
    },
    "lift": {
      "$type": "shadow",
      "$value": "0 10px 30px rgb(90 138 90 / 0.12)",
      "$description": "A journey card lifted under the pointer."
    },
    "node": {
      "$type": "shadow",
      "$value": "0 4px 12px rgb(90 138 90 / 0.25)",
      "$description": "A graph node under the pointer, as a drop-shadow filter."
    }
  }
};
