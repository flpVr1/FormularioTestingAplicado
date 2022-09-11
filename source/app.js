import { Product } from "./product.js";
import { UI } from "./ui.js";

// Eventos de DOM: estos eventos suceden cuando un usuario da un click en algun boton (DOM = Document Objet Model), osea un evento del html

document.getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Esta función lo que hace es que captura un evento realizado en HTML por el usuario dentro del formulario con el Id de "product-form"

      // Sobreescribir el formulario por defecto anterior
      e.preventDefault();

      // Obteniendo los valores del formulario ingresados por interfaz gráfica
      const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

      // Creando un nuevo Objeto de producto
      const product = new Product(name, price, year); /* Aquí podemos capturar los datos ingresados por los inputs*/

      // Creando una nueva Instancia UI
      // Con esta nueva instancia le indicamos que va a obtener todos los metodos de add product, delete product y show message de element
      const ui = new UI();

      // Validación del usuario mediante Input
      if (name === "" || price === "" || year === "") {
        return ui.showMessage("Por favor, llena todos los campos solicitados para continuar", "danger"); //Con la ación return haremos que no nos muestre ambas opciones, es decir, eliminamos el mensaje de "producto ingresado satisfactoriamente" y solo muestra la opción de por favor llenar los datos
      }

      // Guardar un producto, Mostrar un mensaje y reiniciar el formulario
      ui.addProduct(product);
      ui.showMessage("Producto ingresado satisfactoriamente", "success");
      ui.resetForm();
    });

document.getElementById("product-list").addEventListener("click", (e) => { /* Con esta acción podemos acceder a todo div que contenga "product-list" en su Id */
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});