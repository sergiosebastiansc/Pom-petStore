@register
Feature: Servicio de Registro de Usuario
  Como usuario visitante
  Quiero registrarme en la plataforma
  Para crear una cuenta e ingresar al sistema

  Background:
    Given el usuario esta en la pagina de registro de la plataforma
    And el usuario no ha iniciado sesion previamente

  Scenario: Registro exitoso con datos validos
    # When el usuario ingresa "<nombre>" en el campo de nombre
    # And el usuario ingresa "<email>" en el campo de email
    # And el usuario ingresa "<contraseña>" en el campo de contraseña
    # And el usuario ingresa "<contraseña>" en el campo de confirmacion de contraseña
    # And el usuario hace clic en el boton de "Registrarse"
    # Then se debe mostrar un mensaje de confirmacion "Cuenta creada con exito"
    # And el usuario es redirigido a la pagina https:example.com/home

    When el usuario ingresa los siguientes datos:
    | nombre       |   email         | password     |  password     |
    |  Juan Pérez  | juan.perez@example.com | password123| password123   |

     And el usuario hace clic en el boton de "Registrarse"
    Then se debe mostrar un mensaje de confirmacion "Cuenta creada con exito"
    And el usuario es redirigido a la pagina https:example.com/home

     

  Scenario: Intento de registro con contraseñas que no coinciden
    # When el usuario ingresa "Juan Pérez" en el campo de nombre
    # And el usuario ingresa "juan.perez@example.com" en el campo de email
    # And el usuario ingresa "Password123" en el campo de contraseña
    # And el usuario ingresa "Diferente123" en el campo de confirmacion de contraseña
    # And el usuario hace clic en el boton de "Registrarse"
    # Then se debe mostrar un mensaje de error "Las contraseñas no coinciden"

    When el usuario ingresa los siguientes datos:

    | nombre         |   email                | password     |  password     |
    |  Juan Pérez    | juan.perez@example.com | password123  | diferente123   |

  Scenario Outline: Validacion de campos obligatorios vacios
    # When el usuario ingresa "<nombre>" en el campo de nombre
    # And el usuario ingresa "<email>" en el campo de email
    # And el usuario ingresa "<password>" en el campo de contraseña

    When el usuario ingresa los siguientes datos:

      | nombre       | email                | password    | password    |
      |            | juan.perez@example.com | Password123 | Password123 |
      | Juan Pérez |                        | Password123 | Password123 |
      | Juan Pérez | juan.perez@example.com |             |             |
    And el usuario hace clic en el boton de "Registrarse"
    Then se debe mostrar un mensaje de validacion "<mensaje_error>"

    Examples:
      | nombre     | email                  | password     | mensaje_error                      |
      |            | juan.perez@example.com | Password123! | El campo nombre es obligatorio     |
      | Juan Pérez |                        | Password123! | El campo email es obligatorio      |
      | Juan Pérez | juan.perez@example.com |              | El campo contraseña es obligatorio |