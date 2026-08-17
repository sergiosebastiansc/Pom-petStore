@login
Feature: Servicio de inicio de sesion
  Como usuario
  Quiero iniciar sesion
  Para ingresar a las funciones del sistema

  Background:
    Given el usuario esta previamente registrado y en la pagina de login

  Scenario: Intento de ingreso con credenciales validas
  When el usuario ingresa los siguientes datos:
    | email            | password     | 
    | test@example.com | Password123  | 

    And el usuario hace click en el boton 'Ingresar'
    Then se debe mostrar el mensaje 'Bienvenido'

  Scenario: Intento de ingreso con credenciales invalidas

  When el usuario ingresa los siguientes datos:

   | email            | password        | 
   | test@example.com | claveIncorrecta | 

   And el usuario hace click en el boton 'ingresar'
   Then se debe mostrar el mensaje 'Invalid email or password'

  Scenario: Intento de ingreso con campos vacios

  When  el usuario ingresa los siguientes datos:

   | email            | password    | password    |
   | test@example.com | Password123 | Password123 |
   |                  | Password123 | Password123 |
   | test@example.com |             |             |

   And el usuario hace click en el boton 'ingresar'
   Then se debe mostrar un mensaje de validacion '<mensaje_error>'

  Examples:
      | nombre     | email                  | password     | mensaje_error                      |
      | Juan Pérez |                        | Password123  | El campo email es obligatorio      |
      | Juan Pérez | juan.perez@example.com |              | El campo contraseña es obligatorio |
    