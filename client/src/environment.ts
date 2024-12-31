const { PROD, MODE } = import.meta.env;

export const environment = {
  production: MODE !== "development" && PROD,
};
