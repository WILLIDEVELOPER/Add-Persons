let fullName = document.getElementById("fullName");
let busqueda = document.getElementById("buscador");
let search = document.getElementById("search");
let personas = JSON.parse(localStorage.getItem("Personas"));
let personFound = [];
let res = document.getElementById("resultado");
let atras = document.getElementById("atras");
let fechaNac = "";
let fechaNacData = {
  dia: 0,
  mes: 0,
  year: 0,
};
let mensaje = "";
let fechaAct = "";
let fechaActData = {
  dia: 0,
  mes: 0,
  year: 0,
};

let diasFaltantes = 0;
let mesesFaltantes = 0;

search.addEventListener("click", () => {
  personFound = personas.filter((persona) => persona.nombre == busqueda.value);
  if (personFound) {
    res.hidden = false;
    atras.innerHTML = "atras";
    personFound.forEach((element) => {
      fullName.innerHTML = `${element.nombre} ${element.apellido}`;
      fechaNac = element.fechaNacimiento;
    });

    fechaNac = new Date(fechaNac);
    fechaNacData.dia = fechaNac.getDate();
    fechaNacData.mes = fechaNac.getMonth() + 1;
    fechaNacData.year = fechaNac.getFullYear();
    
    fechaAct = new Date();
    fechaActData.dia = fechaAct.getDate();
    fechaActData.mes = fechaAct.getMonth() + 1;
    fechaActData.year = fechaAct.getFullYear();

    let diferecia = fechaActData.year -fechaNacData.year

    if (fechaNacData.year > fechaActData.year) {
      mensaje = "Esta persona no ha nacido";
    }

    if (fechaActData.year > fechaNacData.year) {
      if (
        fechaActData.mes == fechaNacData.mes
      ) {
        if (fechaActData.dia > fechaNacData.dia) {
          diasFaltantes = fechaActData.dia - fechaNacData.dia + 365;
          mensaje = `Te faltan ${diasFaltantes} para cumplir años`;
          console.log(diasFaltantes);
        } else if (fechaActData.dia == fechaNacData.dia) {
          mensaje = "Feliz cumpleaños";
          console.log(diasFaltantes);
        } else {
          diasFaltantes = fechaNacData.dia - fechaActData.dia;
          mensaje = `Te faltan ${diasFaltantes} para cumplir años`;
        }
      } else if (fechaActData.year == fechaNacData.year) {
        mensaje = "Este año ha nacido, Tiene 0 años";
      } else if (fechaNacData.mes > fechaActData.mes) {
        

      }
    }

    console.log(fechaNacData);
    console.log(fechaActData);
  }
});
