export const getRandomUsernames = () => {
  const names = [
    "Juan",
    "María",
    "Pedro",
    "Laura",
    "Carlos",
    "Ana",
    "Luis",
    "Sofía",
    "Miguel",
    "Lucía",
    "Diego",
    "Valentina",
    "Javier",
    "Camila",
    "Daniel",
    "Isabella",
    "Manuel",
    "Gabriela",
    "Alejandro",
    "Natalia",
  ];

  const lastnames = [
    "Gómez",
    "Rodríguez",
    "González",
    "Fernández",
    "López",
    "Martínez",
    "Pérez",
    "Sánchez",
    "Ramírez",
    "Torres",
    "Hernández",
    "Flores",
    "Vargas",
    "Reyes",
    "Morales",
    "Rojas",
    "Jiménez",
    "Silva",
    "Navarro",
    "Cruz",
  ];
  const numbers = Math.floor(Math.random() * 100); // Genera un número aleatorio del 0 al 99

  const randomAdjective = names[Math.floor(Math.random() * names.length)];
  const randomNoun = lastnames[Math.floor(Math.random() * lastnames.length)];

  return `${randomAdjective}${randomNoun}${numbers}`;
};
