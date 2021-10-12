//Se crea un archivo index porque al importar la carpeta "Middlewares" la exportación por si misma va a buscar el index
//y nos ahorramos un poco más de código

const validacioncp = require("../middlewares/validacioncp");
const validarTokne = require("../middlewares/validarToken");
const validarRoles = require("../middlewares/validarRole");

//Utilizamos el spread porque entonces se exporta todo lo que venga de cada archivo.

module.exports = {
  ...validacioncp,
  ...validarToken,
  ...validarRoles,
};
