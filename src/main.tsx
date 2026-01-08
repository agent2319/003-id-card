
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// ⚠️ CRITICAL: Set __DNA_STATE__ BEFORE importing App/store!
// Using dynamic import() to prevent hoisting
(window as any).__DNA_STATE__ = {
  "uiTheme": {
    "fonts": "#FFFFFF",
    "darkPanel": "#0F172A",
    "lightPanel": "#1E293B",
    "elements": "#38BDF8",
    "accents": "#3B82F6",
    "interfaceScale": 105,
    "uiFontWeight": 900,
    "uiElementStroke": 1,
    "uiTextBrightness": 100,
    "uiBaseFontSize": 16,
    "panelX": 0,
    "panelY": 0,
    "isFloating": false
  },
  "globalSettings": {
    "GL01": {
      "name": "Text",
      "params": [
        {
          "id": "P1",
          "name": "Base Size",
          "type": "range",
          "value": "16",
          "min": 10,
          "max": 24
        },
        {
          "id": "P2",
          "name": "Scale Ratio",
          "type": "range",
          "value": "1.25",
          "min": 1.1,
          "max": 2
        },
        {
          "id": "P3",
          "name": "Line Height",
          "type": "range",
          "value": "1.5",
          "min": 1,
          "max": 2.5
        },
        {
          "id": "P4",
          "name": "Weight",
          "type": "range",
          "value": "900",
          "min": 100,
          "max": 900
        },
        {
          "id": "P5",
          "name": "Tracking",
          "type": "range",
          "value": "-0.02",
          "min": -0.05,
          "max": 0.5
        },
        {
          "id": "P6",
          "name": "Uppercase",
          "type": "toggle",
          "value": "false",
          "min": 0,
          "max": 0
        },
        {
          "id": "P7",
          "name": "Smoothing",
          "type": "toggle",
          "value": "true",
          "min": 0,
          "max": 0
        },
        {
          "id": "P8",
          "name": "Font Family",
          "type": "select",
          "value": "Space Grotesk",
          "min": 0,
          "max": 0,
          "options": [
            "Space Grotesk",
            "Inter",
            "Roboto",
            "Open Sans",
            "Manrope",
            "Agency",
            "Ancorli",
            "Share Tech",
            "Lilex",
            "Orbitron",
            "Google Sans",
            "Code"
          ]
        }
      ]
    },
    "GL02": {
      "name": "Colors",
      "params": [
        {
          "id": "P1",
          "name": "Base Bg",
          "type": "color",
          "value": "#09090B",
          "min": 0,
          "max": 100
        },
        {
          "id": "P2",
          "name": "Surface",
          "type": "color",
          "value": "#18181B",
          "min": 0,
          "max": 100
        },
        {
          "id": "P3",
          "name": "Accent",
          "type": "color",
          "value": "#3B82F6",
          "min": 0,
          "max": 100
        },
        {
          "id": "P4",
          "name": "Text Prim",
          "type": "color",
          "value": "#FFFFFF",
          "min": 0,
          "max": 100
        },
        {
          "id": "P5",
          "name": "Text Sec",
          "type": "color",
          "value": "#A1A1AA",
          "min": 0,
          "max": 100
        },
        {
          "id": "P6",
          "name": "Border",
          "type": "color",
          "value": "#27272A",
          "min": 0,
          "max": 100
        },
        {
          "id": "P7",
          "name": "Inversion",
          "type": "toggle",
          "value": "false",
          "min": 0,
          "max": 100
        },
        {
          "id": "P8",
          "name": "BG Pattern",
          "type": "select",
          "value": "None",
          "min": 0,
          "max": 100,
          "options": [
            "None",
            "Noise",
            "Dots",
            "Checkered",
            "Grid"
          ]
        },
        {
          "id": "P9",
          "name": "Pattern Opacity",
          "type": "range",
          "value": "10",
          "min": 0,
          "max": 100
        },
        {
          "id": "P10",
          "name": "Pattern Size",
          "type": "range",
          "value": "20",
          "min": 4,
          "max": 100
        }
      ]
    },
    "GL03": {
      "name": "Spacing",
      "params": [
        {
          "id": "P1",
          "name": "Grid Unit",
          "type": "range",
          "value": "8",
          "min": 2,
          "max": 16
        },
        {
          "id": "P2",
          "name": "Gap",
          "type": "range",
          "value": "24",
          "min": 0,
          "max": 100
        },
        {
          "id": "P3",
          "name": "Pad X",
          "type": "range",
          "value": "40",
          "min": 0,
          "max": 120
        },
        {
          "id": "P4",
          "name": "Pad Y",
          "type": "range",
          "value": "20",
          "min": 0,
          "max": 80
        },
        {
          "id": "P5",
          "name": "Margin",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 60
        },
        {
          "id": "P6",
          "name": "Container",
          "type": "range",
          "value": "1200",
          "min": 320,
          "max": 1920
        },
        {
          "id": "P7",
          "name": "Flow",
          "type": "range",
          "value": "1.0",
          "min": 0.5,
          "max": 2
        }
      ]
    },
    "GL04": {
      "name": "Buttons",
      "params": [
        {
          "id": "P1",
          "name": "Size",
          "type": "range",
          "value": "1.0",
          "min": 0.5,
          "max": 2
        },
        {
          "id": "P2",
          "name": "Pad X",
          "type": "range",
          "value": "24",
          "min": 8,
          "max": 64
        },
        {
          "id": "P3",
          "name": "Pad Y",
          "type": "range",
          "value": "12",
          "min": 4,
          "max": 32
        },
        {
          "id": "P4",
          "name": "Typo",
          "type": "range",
          "value": "12",
          "min": 8,
          "max": 24
        },
        {
          "id": "P5",
          "name": "Stroke",
          "type": "range",
          "value": "1",
          "min": 0,
          "max": 4
        },
        {
          "id": "P6",
          "name": "Radius",
          "type": "range",
          "value": "4",
          "min": 0,
          "max": 40
        },
        {
          "id": "P7",
          "name": "Shadow",
          "type": "toggle",
          "value": "false",
          "min": 0,
          "max": 0
        }
      ]
    },
    "GL05": {
      "name": "Inputs",
      "params": [
        {
          "id": "P1",
          "name": "Height",
          "type": "range",
          "value": "44",
          "min": 32,
          "max": 64
        },
        {
          "id": "P2",
          "name": "Radius",
          "type": "range",
          "value": "4",
          "min": 0,
          "max": 32
        },
        {
          "id": "P3",
          "name": "Stroke",
          "type": "range",
          "value": "1",
          "min": 0,
          "max": 3
        },
        {
          "id": "P4",
          "name": "Bg Fill",
          "type": "color",
          "value": "#FFFFFF",
          "min": 0,
          "max": 0
        },
        {
          "id": "P5",
          "name": "Focus",
          "type": "color",
          "value": "#3B82F6",
          "min": 0,
          "max": 0
        },
        {
          "id": "P6",
          "name": "Placeholder",
          "type": "color",
          "value": "#9CA3AF",
          "min": 0,
          "max": 0
        },
        {
          "id": "P7",
          "name": "Labels",
          "type": "color",
          "value": "#374151",
          "min": 0,
          "max": 0
        }
      ]
    },
    "GL06": {
      "name": "Effects & Depth",
      "params": [
        {
          "id": "P1",
          "name": "Shadow Intensity",
          "type": "range",
          "value": "10",
          "min": 0,
          "max": 100
        },
        {
          "id": "P2",
          "name": "Shadow Blur",
          "type": "range",
          "value": "20",
          "min": 0,
          "max": 60
        },
        {
          "id": "P3",
          "name": "Glass Blur",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 40
        },
        {
          "id": "P4",
          "name": "Glass Opacity",
          "type": "range",
          "value": "100",
          "min": 0,
          "max": 100
        },
        {
          "id": "P5",
          "name": "Border Width",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 4
        },
        {
          "id": "P6",
          "name": "Border Opacity",
          "type": "range",
          "value": "10",
          "min": 0,
          "max": 100
        },
        {
          "id": "P7",
          "name": "Inner Glow",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 100
        }
      ]
    },
    "GL07": {
      "name": "Radius",
      "params": [
        {
          "id": "P1",
          "name": "Global",
          "type": "range",
          "value": "8",
          "min": 0,
          "max": 40
        },
        {
          "id": "P2",
          "name": "Inner",
          "type": "range",
          "value": "4",
          "min": 0,
          "max": 40
        },
        {
          "id": "P3",
          "name": "Outer",
          "type": "range",
          "value": "12",
          "min": 0,
          "max": 40
        },
        {
          "id": "P4",
          "name": "Button",
          "type": "range",
          "value": "4",
          "min": 0,
          "max": 40
        },
        {
          "id": "P5",
          "name": "Input",
          "type": "range",
          "value": "4",
          "min": 0,
          "max": 40
        },
        {
          "id": "P6",
          "name": "Card",
          "type": "range",
          "value": "16",
          "min": 0,
          "max": 40
        },
        {
          "id": "P7",
          "name": "Multiplier",
          "type": "range",
          "value": "1.0",
          "min": 0.5,
          "max": 2
        }
      ]
    },
    "GL08": {
      "name": "Icons",
      "params": [
        {
          "id": "P1",
          "name": "Size",
          "type": "range",
          "value": "20",
          "min": 12,
          "max": 48
        },
        {
          "id": "P2",
          "name": "Stroke",
          "type": "range",
          "value": "1.5",
          "min": 0.5,
          "max": 3
        },
        {
          "id": "P3",
          "name": "Optical",
          "type": "range",
          "value": "0",
          "min": -2,
          "max": 2
        },
        {
          "id": "P4",
          "name": "Align",
          "type": "range",
          "value": "0.5",
          "min": 0,
          "max": 1
        },
        {
          "id": "P5",
          "name": "Set ID",
          "type": "range",
          "value": "1",
          "min": 1,
          "max": 10
        },
        {
          "id": "P6",
          "name": "Style",
          "type": "range",
          "value": "1",
          "min": 1,
          "max": 5
        },
        {
          "id": "P7",
          "name": "Spacing",
          "type": "range",
          "value": "8",
          "min": 0,
          "max": 24
        }
      ]
    },
    "GL09": {
      "name": "Animation",
      "params": [
        {
          "id": "P1",
          "name": "Duration",
          "type": "range",
          "value": "0.6",
          "min": 0.1,
          "max": 2
        },
        {
          "id": "P2",
          "name": "Easing",
          "type": "range",
          "value": "0.1",
          "min": 0,
          "max": 0.5
        },
        {
          "id": "P3",
          "name": "Entrance",
          "type": "range",
          "value": "20",
          "min": 0,
          "max": 100
        },
        {
          "id": "P4",
          "name": "Hover",
          "type": "range",
          "value": "0.95",
          "min": 0.8,
          "max": 1.1
        },
        {
          "id": "P5",
          "name": "Scroll",
          "type": "range",
          "value": "10",
          "min": 0,
          "max": 40
        },
        {
          "id": "P6",
          "name": "Loop",
          "type": "range",
          "value": "1",
          "min": 1,
          "max": 5
        },
        {
          "id": "P7",
          "name": "Physics",
          "type": "range",
          "value": "0.3",
          "min": 0.1,
          "max": 1
        }
      ]
    },
    "GL10": {
      "name": "System Meta",
      "params": [
        {
          "id": "P1",
          "name": "SEO",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 100
        },
        {
          "id": "P2",
          "name": "Analytics",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 100
        },
        {
          "id": "P3",
          "name": "API Root",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 100
        },
        {
          "id": "P4",
          "name": "Export",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 100
        },
        {
          "id": "P5",
          "name": "Meta",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 100
        },
        {
          "id": "P6",
          "name": "Environment",
          "type": "range",
          "value": "0",
          "min": 0,
          "max": 100
        },
        {
          "id": "P7",
          "name": "Theme Mode",
          "type": "select",
          "value": "Dark",
          "min": 0,
          "max": 100,
          "options": [
            "Light",
            "Dark"
          ]
        }
      ]
    },
    "GL11": {
      "name": "Sticky Navigation",
      "params": [
        {
          "id": "P1",
          "name": "Sticky Mode",
          "type": "toggle",
          "value": "true",
          "min": 0,
          "max": 100
        }
      ]
    },
    "GL12": {
      "name": "Language Settings",
      "params": [
        {
          "id": "P1",
          "name": "Default Language",
          "type": "select",
          "value": "en",
          "min": 0,
          "max": 100,
          "options": [
            "en",
            "uk",
            "de",
            "fr",
            "es",
            "it",
            "zh",
            "ru"
          ]
        },
        {
          "id": "P2",
          "name": "Available Languages",
          "type": "select",
          "value": "en,uk,ru",
          "min": 0,
          "max": 100,
          "options": [
            "en",
            "uk",
            "de",
            "fr",
            "es",
            "it",
            "zh",
            "ru"
          ]
        }
      ]
    }
  },
  "pages": {
    "home": [
      {
        "id": "caa8990f-5ca5-4266-b04e-0922778c8979",
        "type": "B0101",
        "localOverrides": {
          "data": {
            "header": "YURA RULEV",
            "links": [],
            "stickyLogic": "true"
          },
          "control": {
            "F-C01": "header",
            "F-C06": "stickyLogic"
          },
          "layout": {
            "F-L04": "80",
            "F-L06": "100%",
            "paddingX": "40"
          },
          "style": {
            "F-S02": null,
            "F-S06": "true",
            "useGlobalDNA": true,
            "backgroundPattern": null,
            "bgFill": null,
            "borderRadius": "8px"
          },
          "effects": {
            "F-E02": "slide-down"
          },
          "inheritance": "0111GL"
        },
        "isVisible": true
      },
      {
        "id": "c87b24b7-7dfd-486e-98d1-fb63b228d86a",
        "type": "B2501",
        "localOverrides": {
          "data": {
            "title": "IDENTITY PROFILE",
            "subtitle": "Digital Access Card",
            "images": [
              {
                "url": "https://scontent.fiev24-1.fna.fbcdn.net/v/t39.30808-6/338154999_780901790209960_8505000261018959962_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=0kFb5ixtbRwQ7kNvwFpWmrJ&_nc_oc=Admaq4xOWMHSlQtS0DicS-PeuUv9Gq3gPDf0SPmhLgfKNdfppBiGLOQBH4G02w71ZqE&_nc_zt=23&_nc_ht=scontent.fiev24-1.fna&_nc_gid=-b8w6xNym3QJTZDLB9lEbQ&oh=00_AfoDGvL-rFbMElMwWANtoycZ5wOYmO9RYS3x_zKD5CuLXw&oe=6965C71A",
                "shape": "circle"
              },
              {
                "url": "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=DNA",
                "shape": "square"
              },
              {
                "url": "https://scontent.fiev24-1.fna.fbcdn.net/v/t39.30808-6/610946187_1982935992568393_7532326486443600052_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=VHlEp4tIKY4Q7kNvwHkNpRX&_nc_oc=AdlY0kAdRCHa6V6KSiIDW08H9y60Jql_giFGxnw0oPw4vfgUwxnnMmk-aaTd8W3YSqM&_nc_zt=23&_nc_ht=scontent.fiev24-1.fna&_nc_gid=QnmNaMZdHn5jiGen6GYErg&oh=00_AfqLCXWSkiyborOCvy2IIutxk2vWPkwZw3yvitxmBu85Cg&oe=6965CABA",
                "shape": "circle"
              }
            ],
            "buttons": [
              {
                "label": "AI SEQUENCE  EDITOR",
                "url": "https://019-site-git-agt2319.vercel.app/"
              },
              {
                "label": "VIDEO  Editor",
                "url": "#"
              }
            ],
            "text": "Artists used to mix paints. Now you mix data. The difference isn't as big as it seems. Industry changes. You change with it. This isn't betrayal of talent. It's evolution of the tool."
          },
          "layout": {
            "paddingY": "40",
            "textSize": "12",
            "titleSize": "18",
            "subtitleSize": "12"
          },
          "style": {
            "bgFill": null,
            "backgroundPattern": null,
            "borderRadius": "8px"
          }
        },
        "isVisible": true
      }
    ]
  },
  "currentPage": "home"
};

console.log('✅ DNA State loaded BEFORE store initialization', {
    hasPages: !!((window as any).__DNA_STATE__?.pages),
    hasGlobalSettings: !!((window as any).__DNA_STATE__?.globalSettings),
    currentPage: (window as any).__DNA_STATE__?.currentPage,
    blocksCount: (window as any).__DNA_STATE__?.pages?.home?.length || 0
});

// Dynamic import ensures App loads AFTER __DNA_STATE__ is set
import('./App').then((module) => {
  const App = module.default;
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}).catch(err => {
  console.error('Failed to load App:', err);
});
