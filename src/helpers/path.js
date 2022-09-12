const REACT_APP_BASE_URL = process.env.PUBLIC_URL || "";

const ROUTER_PATH = {
  base: `${REACT_APP_BASE_URL}`,
  clocks: `${REACT_APP_BASE_URL}/clocks`,
  notes: `${REACT_APP_BASE_URL}/notes`,
};

export { ROUTER_PATH };
