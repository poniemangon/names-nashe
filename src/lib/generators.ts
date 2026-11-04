const NOMBRES_ES = [
  "Agustín", "Alejandro", "Andrés", "Ángel", "Bautista", "Benjamín", "Carlos", "Cristian",
  "Daniel", "Diego", "Eduardo", "Emiliano", "Esteban", "Facundo", "Federico", "Fernando",
  "Francisco", "Gabriel", "Gonzalo", "Guillermo", "Ignacio", "Javier", "Joaquín", "Jorge",
  "José", "Juan", "Julián", "Leandro", "Lucas", "Luis", "Marcelo", "Mariano",
  "Martín", "Mateo", "Matías", "Nicolás", "Pablo", "Pedro", "Ramiro", "Raúl",
  "Roberto", "Rodrigo", "Santiago", "Sebastián", "Tomás", "Valentín",
  "Agustina", "Ana", "Andrea", "Belén", "Camila", "Carla", "Carolina", "Catalina",
  "Claudia", "Daniela", "Elena", "Florencia", "Gabriela", "Graciela", "Julieta", "Laura",
  "Lucía", "Luciana", "Lourdes", "Marcela", "María", "Martina", "Micaela", "Milagros",
  "Natalia", "Paula", "Rocío", "Silvia", "Sofía", "Valentina", "Victoria", "Ximena",
];

const NOMBRES_EN = [
  "Aaron", "Adam", "Andrew", "Benjamin", "Brandon", "Bradley", "Charles", "Christopher",
  "Daniel", "David", "Edward", "Ethan", "Frank", "George", "Henry", "Jack",
  "Jacob", "James", "Jason", "John", "Jonathan", "Joshua", "Kevin", "Liam",
  "Mark", "Matthew", "Michael", "Nathan", "Oliver", "Patrick", "Peter", "Richard",
  "Robert", "Ryan", "Samuel", "Scott", "Steven", "Thomas", "Tyler", "William",
  "Abigail", "Amanda", "Amy", "Ashley", "Brittany", "Charlotte", "Chloe", "Emily",
  "Emma", "Grace", "Hannah", "Heather", "Jennifer", "Jessica", "Kate", "Lauren",
  "Lily", "Madison", "Megan", "Olivia", "Rachel", "Sarah", "Stephanie", "Taylor",
];

const APELLIDOS_ES = [
  "Acosta", "Aguirre", "Alonso", "Álvarez", "Benítez", "Blanco", "Cabrera", "Castro",
  "Díaz", "Domínguez", "Fernández", "Flores", "Franco", "García", "Giménez", "Gómez",
  "González", "Gutiérrez", "Hernández", "Herrera", "Ibáñez", "Juárez", "López", "Luna",
  "Martínez", "Medina", "Méndez", "Molina", "Morales", "Moreno", "Muñoz", "Navarro",
  "Núñez", "Ortiz", "Pereyra", "Pérez", "Quiroga", "Ramírez", "Ramos", "Ríos",
  "Rodríguez", "Rojas", "Romero", "Ruiz", "Sánchez", "Silva", "Sosa", "Suárez",
  "Torres", "Vázquez", "Vega", "Villalba",
];

const APELLIDOS_MUNDO = [
  "Smith", "Johnson", "O'Connor", "MacGregor", "Müller", "Schneider", "Fischer", "Rossi",
  "Bianchi", "Esposito", "Dubois", "Lefebvre", "Moreau", "Silva", "Oliveira", "Pereira",
  "Nakamura", "Tanaka", "Yamamoto", "Kim", "Park", "Nguyen", "Chen", "Wang",
  "Ivanov", "Petrov", "Kowalski", "Nowak", "Novák", "Horvath", "Papadopoulos", "Yilmaz",
  "Andersson", "Johansson", "Hansen", "Virtanen", "Van der Berg", "De Vries", "Haddad", "Mansour",
  "Cohen", "Levy", "Okafor", "Mensah", "Singh", "Patel", "Hernández", "García",
];

const PALABRAS_ES = [
  "Alfajor", "Mate", "Choripán", "Empanada", "Bondi", "Fernet", "Asado", "Medialuna",
  "Dulce", "Tostado", "Milanesa", "Locro", "Chimichurri", "Provoleta", "Facturas", "Sifón",
  "Tornillo", "Paraguas", "Zapallo", "Morrón", "Pepino", "Ladrillo", "Banquito", "Pantufla",
  "Mondongo", "Torta", "Rayo", "Trueno", "Cohete", "Pelusa", "Galleta", "Yerba",
];

const APODOS_ES = [
  "Pipi", "Tato", "Coco", "Beto", "Chino", "Flaco", "Gordo", "Toto",
  "Pato", "Nene", "Rulo", "Pelado", "Colo", "Negro", "Cholo", "Mono",
  "Loco", "Lalo", "Tete", "Kike", "Bebe", "Pepe", "Tuto", "Yoyo",
];

const PRIMERA_PARTE = [
  "High", "Low", "Risk", "Self", "Fast", "Hard", "Well", "Long",
  "Deep", "Data", "Mission", "Results", "Forward", "Open", "Quick", "Top",
  "World", "Award", "Mind", "Game", "Value", "Cross", "Full", "Next",
];

const SEGUNDA_PARTE = [
  "Ending", "Taking", "Taught", "Driven", "Minded", "Thinking", "Made", "Moving",
  "Winning", "Changing", "Rated", "Tier", "Bending", "Breaking", "Loving", "Focused",
  "Building", "Earning", "Growing", "Seeking", "Trained", "Powered", "Born", "Tested",
];

const PREFIJOS_TIPO_3 = ["Culi", "Tucu", "Pipi"];

const CONSONANTES = ["b", "ch", "d", "f", "g", "j", "k", "l", "m", "n", "p", "r", "s", "t", "y", "z"];
const VOCALES = ["a", "e", "i", "o", "u"];

function elegir<T>(lista: readonly T[]): T {
  return lista[Math.floor(Math.random() * lista.length)];
}

function capitalizar(texto: string) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function sinAcentos(texto: string) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Une dos palabras sin espacio ni acentos: Alfajor + Álvarez = Alfajoralvarez
function juntar(palabra: string, apellido: string) {
  return capitalizar(sinAcentos(palabra + apellido).toLowerCase());
}

// Misma consonante con vocales al azar: pipi, jajuji, totu
function apodoInventado() {
  const consonante = elegir(CONSONANTES);
  const silabas = Math.random() < 0.5 ? 2 : 3;
  let apodo = "";
  for (let i = 0; i < silabas; i++) apodo += consonante + elegir(VOCALES);
  return capitalizar(apodo);
}

function apodoCorto() {
  return Math.random() < 0.5 ? elegir(APODOS_ES) : apodoInventado();
}

export const TIPOS = [
  {
    id: "criollo",
    titulo: "Criollo",
    formato: "Nombre + apodo + Palabraapellido",
    generar: () =>
      `${elegir(NOMBRES_ES)} ${apodoCorto()} ${juntar(elegir(PALABRAS_ES), elegir(APELLIDOS_ES))}`,
  },
  {
    id: "linkedin",
    titulo: "LinkedIn",
    formato: "Name + Palabra-palabra + Apellido del mundo",
    generar: () =>
      `${elegir(NOMBRES_EN)} ${elegir(PRIMERA_PARTE)}-${elegir(SEGUNDA_PARTE).toLowerCase()} ${elegir(APELLIDOS_MUNDO)}`,
  },
  {
    id: "barrial",
    titulo: "Barrial",
    formato: "Nombre + Culi/Tucu/Pipi junto al apellido",
    generar: () =>
      `${elegir(NOMBRES_ES)} ${juntar(elegir(PREFIJOS_TIPO_3), elegir(APELLIDOS_ES))}`,
  },
] as const;

export type TipoId = (typeof TIPOS)[number]["id"];

export function generarNombres(tipoId: TipoId, cantidad = 8) {
  const tipo = TIPOS.find((t) => t.id === tipoId) ?? TIPOS[0];
  const nombres = new Set<string>();
  while (nombres.size < cantidad) nombres.add(tipo.generar());
  return [...nombres];
}
