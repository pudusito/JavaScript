// Clase base Personaje con campo privado #habilidad
class Personaje {
  #habilidad; // propiedad privada (solo accesible dentro de esta clase)

  constructor(nombre, habilidad) {
    this.nombre = nombre;         // propiedad pública
    this.#habilidad = habilidad; // propiedad privada
  }

  hablar() {
    return "Algún sonido genérico";
  }

  // Método público que devuelve el valor de #habilidad
  usarHabilidad() {
    return `${this.nombre} usa ${this.#habilidad}`;
  }

  // Método de acceso controlado (opcional si quieres permitirlo en subclases)
  getHabilidad() {
    return this.#habilidad;
  }
}

// Clase Humano que extiende Personaje
class Humano extends Personaje {
  // Sobrescribe el método hablar
  hablar() {
    return "Sonido humano";
  }

  // Método adicional
  correr() {
    return `${this.nombre} está corriendo`;
  }

  // Método que accede a la habilidad a través del getter público
  habilidad() {
    return `${this.nombre} lanza ${this.getHabilidad()}`;
  }
}

// -----------------------------
// 🧪 Ejemplo de uso:
const personaje = new Personaje("Criatura", "rugido");
console.log(personaje.hablar());          // Algún sonido genérico
console.log(personaje.usarHabilidad());   // Criatura usa rugido

const humano = new Humano("Humanoide", "bola de fuego");
console.log(humano.hablar());             // Sonido humano
console.log(humano.correr());             // Humanoide está corriendo
console.log(humano.habilidad());          // Humanoide lanza bola de fuego

// 🚫 Error si intentas acceder directamente:
// console.log(humano.#habilidad); // ❌ SyntaxError

/*
📌 Notas importantes:
#habilidad es completamente privado. No puede ser accedido fuera de Personaje, ni siquiera desde subclases.

getHabilidad() es un método público seguro para exponer esa propiedad a otras clases si es necesario.

Este patrón permite encapsular y controlar el acceso a datos sensibles, cumpliendo el principio de ocultamiento de datos. */
