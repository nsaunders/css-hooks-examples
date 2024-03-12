import { createHooks } from "@css-hooks/react";

export const { css, styleSheet } = createHooks({
  hooks: {
    ".group:focus-within &": ".group:focus-within &",
    ".group:has(:placeholder-shown) &": ".group:has(:placeholder-shown) &",
  },
  debug: import.meta.env.DEV,
});
