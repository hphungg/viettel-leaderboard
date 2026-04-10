const fs = require('fs');

const colors = {
    "on-tertiary-fixed-variant": "#004b71",
    "secondary-container": "#e2dfde",
    "tertiary": "#006494",
    "on-error-container": "#93000a",
    "on-tertiary": "#ffffff",
    "surface-container-highest": "#e2e2e4",
    "error-container": "#ffdad6",
    "on-primary-container": "#150001",
    "inverse-surface": "#2f3132",
    "surface-container-lowest": "#ffffff",
    "error": "#ba1a1a",
    "surface-container": "#eeeef0",
    "surface-container-high": "#e8e8ea",
    "outline": "#936e6c",
    "on-secondary-container": "#636262",
    "on-tertiary-fixed": "#001e30",
    "secondary": "#5f5e5e",
    "tertiary-fixed": "#cbe6ff",
    "on-background": "#1a1c1d",
    "on-error": "#ffffff",
    "surface-dim": "#d9dadc",
    "on-secondary": "#ffffff",
    "secondary-fixed-dim": "#c8c6c5",
    "surface-container-low": "#f3f3f5",
    "primary-container": "#ee0033",
    "surface-bright": "#f9f9fb",
    "on-primary-fixed": "#410007",
    "inverse-primary": "#ffb3b0",
    "tertiary-fixed-dim": "#8ecdff",
    "primary-fixed": "#ffdad8",
    "primary": "#bf0027",
    "secondary-fixed": "#e5e2e1",
    "on-secondary-fixed": "#1c1b1b",
    "on-surface": "#1a1c1d",
    "background": "#f9f9fb",
    "on-tertiary-container": "#00060d",
    "primary-fixed-dim": "#ffb3b0",
    "on-surface-variant": "#5e3f3e",
    "on-secondary-fixed-variant": "#474746",
    "surface-tint": "#bf0027",
    "inverse-on-surface": "#f0f0f2",
    "on-primary-fixed-variant": "#92001b",
    "on-primary": "#ffffff",
    "surface": "#f9f9fb",
    "surface-variant": "#e2e2e4",
    "outline-variant": "#e8bcba",
    "tertiary-container": "#317daf"
};

let themeCss = '@import "tailwindcss";\n\n@theme {\n';
for (const [k, v] of Object.entries(colors)) {
    themeCss += `  --color-${k}: ${v};\n`;
}

themeCss += `
  --font-headline: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-label: "Inter", sans-serif;

  --radius-default: 0.125rem;
  --radius-lg: 0.25rem;
  --radius-xl: 0.5rem;
  --radius-full: 0.75rem;
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
}
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e2e2e4;
    border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #bf0027;
}

body {
  font-family: var(--font-body);
}
`;

fs.writeFileSync('app/globals.css', themeCss);
console.log('Done');
