// Cambio de idioma
// Elementos del DOM - Inicio
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");
var textoInicioAcerca = document.getElementById("textoInicio");
var subtituloAcerca = document.getElementById("subtituloInicio");
var DescCV = document.getElementById("DoadCv");

var perfilTitulo = document.getElementById("perfilProfesional");
var perfilTexto = document.getElementById("textoPerfilProfesional");
var misionTitulo = document.getElementById("mision");
var misionTexto = document.getElementById("textoMision");
var visionTitulo = document.getElementById("vision");
var visionTexto = document.getElementById("textoVision");

var tituloHabilidades  = document.getElementById("tituloHabilidades");
var tituloProgramacion  = document.getElementById("tituloProgramacion");
var tituloBD  = document.getElementById("tituloBD");
var tituloDataAnalic = document.getElementById("tituloDataAnalic");
var tituloTools  = document.getElementById("tituloTools");
var tituloConocimientos  = document.getElementById("tituloConocimientos");

var tituloValores =  document.getElementById("tituloValores");
var perseverancia =  document.getElementById("perseverancia");
var perseveranciaTexto =  document.getElementById("perseveranciaTexto");
var liderazgo =  document.getElementById("liderazgo");
var liderazgoTexto =  document.getElementById("liderazgoTexto");
var Excelencia =  document.getElementById("Excelencia");
var ExcelenciaTexto =  document.getElementById("excelenciaTexto");
var lealtad =  document.getElementById("Lealtad");
var LealtadTexto =  document.getElementById("LealtadTexto");
var Respeto =  document.getElementById("respeto");
var RespetoTexto =  document.getElementById("respetoTexto");

var ProyectosTitulo = document.getElementById("ProyectosTitulo");
var ProyectosTodos = document.getElementById("ProyectosTodos");
var ProyectosAppWeb = document.getElementById("appWebProyectos");
var MMText = document.getElementById("MMText");
var ACText = document.getElementById("ACText");
var ASText = document.getElementById("ASText");
var TreesText = document.getElementById("TreesText");
var BPText  = document.getElementById("BPText");
var CPText = document.getElementById("CPText");
var SPText = document.getElementById("SPText");
var PYText = document.getElementById("PYText");
var MTText1 = document.getElementById("MTText1");
var MTText2 = document.getElementById("MTText2");
var RGText1 = document.getElementById("RGText1");

var ContactTitulo = document.getElementById("ContactTitulo");
var CorreoTitulo = document.getElementById("CorreoTitulo");
var PhoneTitulo = document.getElementById("PhoneTitulo");
var Name = document.getElementById("name");
var email = document.getElementById("email");
var contact = document.getElementById("contact");
var msj = document.getElementById("msj");
var enviarFormC = document.getElementById("enviarForm");


var cambioIdiomaBtn = document.getElementById("cambioIdiomaBtn");

// Definir textos en español e inglés
var textos = {
  español: {
    a1: "Inicio",
    a2: "Acerca de",
    a3: "Habilidades",
    a4: "Proyectos",
    a5: "Contacto",
    textoInicioAcerca: "Transformando ideas en experiencias digitales",
    subtituloAcerca: "Desarrolladora de Software",
    DescCV:"Descargar CV",

    perfilTitulo: "Perfil Profesional",
    perfilTexto: "Desarrolladora de Software full stack, con experiencia en diversos lenguajes de programación, con conocimientos en distintos frameworks y bases de datos relacionales, apasionada por crear soluciones innovadoras y funcionales que mejoren la experiencia del usuario.",
    misionTitulo: "Misión",
    misionTexto: "Crear soluciones tecnológicas innovadoras que transforman ideas en realidades digitales, aplicándolas con excelencia y respeto por el cliente para proporcionar productos de calidad que generen un impacto positivo.",
    visionTitulo: "Visión",
    visionTexto: "Llegar a ser una líder en el diseño y desarrollo de software, reconocida por la lealtad hacia la excelencia técnica y el compromiso con la innovación, ofreciendo soluciones digitales que inspiran y mejoran la vida de las personas.",
    
    tituloHabilidades: "Habilidades",
    tituloProgramacion: "Programación",
    tituloBD: "Bases de Datos",
    tituloDataAnalic: "Análisis de Datos",
    tituloTools: "Herramientas",
    tituloConocimientos: "Conocimientos",

    tituloValores: "Valores",
    perseverancia: "Perseverancia",
    perseveranciaTexto: "La determinación de seguir adelante, aprender de los fracasos y persistir hasta alcanzar los objetivos.",
    liderazgo: "Liderazgo",
    liderazgoTexto: "Influir positivamente en otros para lograr objetivos comunes. Inspirar, motivar y guiar a los demás con visión, ética y habilidades de comunicación efectivas.",
    Excelencia: "Excelencia",
    ExcelenciaTexto: "Buscar constantemente la mejora y la innovación, entregando resultados de alta calidad que superen las expectativas y contribuyan al éxito.",
    lealtad: "Lealtad",
    LealtadTexto: "Actuar con integridad, honradez y confianza, manteniendo la confidencialidad cuando sea necesario.",
    Respeto: "Respeto",
    RespetoTexto: "Valorar a los demás, sus opiniones, ideas y contribuciones. Con cortesía, empatía y consideración, creando un ambiente de trabajo positivo y colaborativo.",

    ProyectosTitulo: "Mis Proyectos",
    ProyectosTodos: "Todos",
    ProyectosAppWeb: "Aplicaciones Web",
    MMText: "Plataforma de Musicoterapia para Bébes y Padres.",
    ACText: "Animaciones para diseño de Contenedores de información.",
    ASText: "Animaciones para diseño de galerías de Aplicaciones",
    TreesText: "Empleado en Estructura de Datos.",
    BPText: "Varios Aplicativos",
    CPText: "Varios Aplicativos",
    SPText: "Varios Aplicativos",
    PYText: "Técnicas para el uso de Python.",
    MTText1: "Boletería en Línea",
    MTText2: "Desarrollada en Equipo",
    RGText1: "Venta en línea de repuestos para motos.",

    ContactTitulo: "Contacto",
    CorreoTitulo: "Correo Electrónico",
    PhoneTitulo: "Teléfono",
    Name: "Nombre Completo",
    email: "Email",
    contact: "Teléfono",
    msj: "Mensaje",
    enviarFormC: "Enviar Mensaje"
  },
  inglés: {
    a1: "Home",
    a2: "About us",
    a3: "Skills",
    a4: "Projects",
    a5: "Contact",
    textoInicioAcerca: "Transforming ideas into digital experiences",
    subtituloAcerca: "Software Developer",
    DescCV: "Download CV",

    perfilTitulo: "Professional Profile",
    perfilTexto: "Full stack software developer, with experience in various programming languages, knowledge in different frameworks and relational databases, passionate about creating innovative and functional solutions that improve the user experience.",
    misionTitulo: "Mission",
    misionTexto: "To create innovative technological solutions that transform ideas into digital realities, applying them with excellence and respect for the client to provide quality products that generate a positive impact.",
    visionTitulo: "Vision",
    visionTexto: "To become a leader in software design and development, recognized for loyalty to technical excellence and commitment to innovation, offering digital solutions that inspire and improve people\'s lives.",

    tituloHabilidades: "Skills",
    tituloProgramacion: "Programming",
    tituloBD: "Databases",
    tituloDataAnalic: "Data Analysis",
    tituloTools: "Tools",
    tituloConocimientos: "Knowledge",

    //VALORES
    tituloValores: "Values",
    perseverancia: "Perseverance",
    perseveranciaTexto: "The determination to keep going, learn from failures, and persist until goals are achieved.",
    liderazgo: "Leadership",
    liderazgoTexto: "Positively influencing others to achieve common goals. Inspiring, motivating, and guiding others with vision, ethics, and effective communication skills.",
    Excelencia: "Excellence",
    ExcelenciaTexto: "Constantly seeking improvement and innovation, delivering high-quality results that exceed expectations and contribute to success.",
    lealtad: "Loyalty",
    LealtadTexto: "Acting with integrity, honesty, and trust, maintaining confidentiality when necessary.",
    Respeto: "Respect",
    RespetoTexto: "Valuing others, their opinions, ideas, and contributions. With courtesy, empathy, and consideration, creating a positive and collaborative work environment.",
    
    //PROYECTOS
    ProyectosTitulo: "My Projects",
    ProyectosTodos: "All",
    ProyectosAppWeb: "Web Applications",
    MMText: "Music Therapy Platform for Babies and Parents.",
    ACText: "Animations for Information Container Design.",
    ASText: "Animations for Application Gallery Design.",
    TreesText: "Employee in Data Structure.",
    BPText: "Various Applications",
    CPText: "Various Applications",
    SPText: "Various Applications",
    PYText: "Techniques for Python Usage",
    MTText1: "Online Ticketing",
    MTText2: "Developed as a Team.",
    RGText1: "Online Sale of Motorcycle Parts",

    //CONTACTO
    ContactTitulo: "Contact",
    CorreoTitulo: "Email",
    PhoneTitulo: "Phone",
    Name: "Full Name",
    email: "Email",
    contact: "Phone Number", 
    msj: "Message",
    enviarFormC: "Send Message"

  }
};

// Inicializar idioma en español
var idiomaActual = "español";


// Función para cambiar idioma
function cambiarIdioma() {
  idiomaActual = idiomaActual === "español" ? "inglés" : "español";
  a1.textContent = textos[idiomaActual].a1;
  a2.textContent = textos[idiomaActual].a2;
  a3.textContent = textos[idiomaActual].a3;
  a4.textContent = textos[idiomaActual].a4;
  a5.textContent = textos[idiomaActual].a5;
  textoInicioAcerca.textContent = textos[idiomaActual].textoInicioAcerca;
  subtituloAcerca.textContent = textos[idiomaActual].subtituloAcerca;
  DescCV.textContent = textos[idiomaActual].DescCV;

  perfilTitulo.textContent  = textos[idiomaActual].perfilTitulo;
  perfilTexto.textContent = textos[idiomaActual].perfilTexto;
  misionTitulo.textContent = textos[idiomaActual].misionTitulo;
  misionTexto.textContent = textos[idiomaActual].misionTexto;
  visionTitulo.textContent = textos[idiomaActual].visionTitulo;
  visionTexto.textContent = textos[idiomaActual].visionTexto;

  tituloHabilidades.textContent  = textos[idiomaActual].tituloHabilidades;
  tituloProgramacion.textContent = textos[idiomaActual].tituloProgramacion;
  tituloBD.textContent = textos[idiomaActual].tituloBD;
  tituloDataAnalic.textContent = textos[idiomaActual].tituloDataAnalic;
  tituloTools.textContent = textos[idiomaActual].tituloTools;
  tituloConocimientos.textContent = textos[idiomaActual].tituloConocimientos;

  tituloValores.textContent = textos[idiomaActual].tituloValores;
  perseverancia.textContent = textos[idiomaActual].perseverancia;
  perseveranciaTexto.textContent = textos[idiomaActual].perseveranciaTexto;
  liderazgo.textContent = textos[idiomaActual].liderazgo;
  liderazgoTexto.textContent = textos[idiomaActual].liderazgoTexto;
  Excelencia.textContent = textos[idiomaActual].Excelencia;
  ExcelenciaTexto.textContent = textos[idiomaActual].ExcelenciaTexto;
  lealtad.textContent = textos[idiomaActual].lealtad;
  LealtadTexto.textContent = textos[idiomaActual].LealtadTexto;
  Respeto.textContent = textos[idiomaActual].Respeto;
  RespetoTexto.textContent = textos[idiomaActual].RespetoTexto;

  ProyectosTitulo.textContent = textos[idiomaActual].ProyectosTitulo;
  ProyectosTodos.textContent = textos[idiomaActual].ProyectosTodos;
  ProyectosAppWeb.textContent = textos[idiomaActual].ProyectosAppWeb;
  MMText.textContent = textos[idiomaActual].MMText;
  ACText.textContent = textos[idiomaActual].ACText;
  ASText.textContent = textos[idiomaActual].ASText;
  TreesText.textContent = textos[idiomaActual].TreesText;
  BPText.textContent = textos[idiomaActual].BPText;
  CPText.textContent = textos[idiomaActual].CPText;
  SPText.textContent = textos[idiomaActual].SPText;
  PYText.textContent = textos[idiomaActual].PYText;
  MTText1.textContent = textos[idiomaActual].MTText1;
  MTText2.textContent = textos[idiomaActual].MTText2;
  RGText1.textContent = textos[idiomaActual].RGText1;

  ContactTitulo.textContent = textos[idiomaActual].ContactTitulo;
  CorreoTitulo.textContent = textos[idiomaActual].CorreoTitulo; 
  PhoneTitulo.textContent = textos[idiomaActual].PhoneTitulo;
  Name.placeholder = textos[idiomaActual].Name;
  email.placeholder = textos[idiomaActual].email; 
  contact.placeholder = textos[idiomaActual].contact;
  msj.placeholder = textos[idiomaActual].msj; 
  enviarFormC.value = textos[idiomaActual].enviarFormC;
}

// Evento clic del botón para cambiar idioma
cambioIdiomaBtn.addEventListener("click", cambiarIdioma);

cambiarIdioma();