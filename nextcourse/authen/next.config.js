/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "hiephanguyen01",
        mongodb_password: "hahiep01",
        mongodb_clustername: "cluster0",
        mongodb_database: "next-auth-dev",
      },
      reactStrictMode: true,
    };
  }

  return {
    env: {
      mongodb_username: "hiephanguyen01",
      mongodb_password: "hahiep01",
      mongodb_clustername: "cluster0",
      mongodb_database: "next-auth",
    },
    reactStrictMode: true,
  };
};
