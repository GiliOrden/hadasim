const config = {
  user: "membersSQL",
  password: "members",
  server: "DESKTOP-0QFNCBN",
  database: "members",
  trustServerCertificate: true,
  options: {
    trustedconnection: true,
    enableAritAort: true,
    instancename: "SQLEXPRESS",
  },

  port: 1433,
};

module.exports = config;
