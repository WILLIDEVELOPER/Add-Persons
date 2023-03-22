let guardar = document.getElementById("save");
let actual = new Date();
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let fechaNac = document.getElementById("fechaNacimiento");
let cedula = document.getElementById("cedula");
let person;
let validacion = false;
let fullName = "";
let cumple = "";
let listName = document.getElementById("listName");
let ListBirth = document.getElementById("ListBirth");


class Persona {
  nombre;
  apellido;
  fechaNacimiento;
  cedula;
  edad;

  constructor(nombre, apellido, fechaNacimiento, cedula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cedula = cedula;
  }

  validar() {
    if (
      this.nombre == "" ||
      this.apellido == "" ||
      this.fechaNacimiento == "" ||
      this.cedula == ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  fullName() {
    return this.nombre + " " + this.apellido;
  }

  birthday() {
    //getting day of birth
    let dayAct = actual.getDate();
    let dayNac = new Date(this.fechaNacimiento).getDate() + 1;

    //getting month
    let mesAct = actual.getMonth() + 1;
    let mesNac = new Date(this.fechaNacimiento).getMonth() + 1;

    if (dayNac == dayAct && mesNac == mesAct) {
      return "SI";
    } else {
      return "NO";
    }
  }
  calcularEdad() {
    let cumpleanios = new Date(this.fechaNacimiento);
    let res = this.birthday()
    
    if (res == "SI") {
        this.edad = actual.getFullYear() - cumpleanios.getFullYear()
        return this.edad;
    }else if(res == "NO"){
        this.edad = (actual.getFullYear() - cumpleanios.getFullYear())-1;
        return this.edad
    }
  }
}
let personas = []

guardar.addEventListener("click", () => {
  person = new Persona(
    nombre.value,
    apellido.value,
    fechaNac.value,
    cedula.value
  );
  person.calcularEdad();
  validacion = person.validar();
  if (validacion) {
    fullName = person.fullName();
    cumple = person.birthday();
    listName.innerHTML += `<p class="p-[0.3rem] text-center  w-full border-b-solid border-white border-b-[0.2rem]">${fullName}</p>`;
    ListBirth.innerHTML += `<p class="p-[0.3rem] text-center  w-full border-b-solid border-white border-b-[0.2rem]">${cumple}</p>`;
    personas.push(person)
    console.log(personas);
    localStorage.setItem("Personas", JSON.stringify(personas))

    nombre.value = ""
    apellido.value = ""
    fechaNac.value = ""
    cedula.value = ""
  }else{
    alert("Ingrese todos los campos")
  }
});
