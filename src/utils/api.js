import { setup } from "axios-cache-adapter";

export default setup({
  baseURL: process.env.REACT_APP_API,

  cache: {
    maxAge: 15 * 60 * 1000,
  },
});
