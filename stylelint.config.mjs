/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "no-descending-specificity": null,
    "color-hex-length": "short",
    "no-duplicate-selectors": null,
    "no-empty-source": null,
  },
};
