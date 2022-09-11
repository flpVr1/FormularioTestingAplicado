/**
 * User Interface Class
 */
 export class UI {
    /**
     * Add a New Product 
     * @param {Object} product A new product Object
     */
    addProduct(product) {
      const productList = document.getElementById("product-list");
      const element = document.createElement("div");
      element.innerHTML = //En todo este conglomerado vamos a capturar lo ingresado en los inputs por parte del usuario y les damos sus respectivas constantes
             `<div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Producto</strong>: ${product.name} -
                      <strong>Precio</strong>: ${product.price} - 
                      <strong>Año</strong>: ${product.year}
                      <a href="#" class="btn btn-danger" name="delete">Delete</a>
                  </div>
              </div>`;
      productList.appendChild(element); // Aquí le agregamos todo lo anterior hecho en "const element"
    }
  
    // Evento para reiniciar formulario
    resetForm() {
      document.getElementById("product-form").reset(); //Con esta función haremos que el formulario, despues de ingresar un nuevo producto, se reinicie el formulario para ingresar más datos
    }
  
    deleteProduct(element) { //Aquí le daremos la funcionalidad de eliminar un producto dentro de la interfaz
      if (element.name === "delete") {
        element.parentElement.parentElement.remove();
        this.showMessage("Producto eliminado satisfactoriamente", "success");
      }
    }
  
    showMessage(message, cssClass) { //En esta sección daremos la funcionalidad de mostrar un mensaje, dependiendo de la acción que se realice
      const div = document.createElement("div");
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
  
      // Mostrar en el Document Object Model
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      // Insertando un mensaje en UI
      container.insertBefore(div, app);
  
      // Eliminando el mensaje dentro de 3 segundos
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  }