### descripcion del proyecto

# Página de Inicio de Pokédex

- * Este proyecto se centra en crear una página de inicio para una aplicación de Pokédex utilizando la plataforma Cells y componentes de BBVA.

- * Objetivos del Proyecto

- Crear una página de inicio atractiva y fácil de navegar.
- Integrar el componente poketaller-ui para mostrar información sobre Pokémon.
- Utilizar la plataforma Cells y componentes de BBVA para mejorar la experiencia del usuario.

# Componentes del Proyecto

- HomePage: Clase principal que extiende de BbvaCoreIntlMixin y CellsPage.
- poketaller-ui: Componente que muestra información sobre Pokémon.

### Propiedades y Métodos

# Propiedades

- title1: Título de la página (tipo String).

# Métodos

- _initPage: Inicializa la página y solicita una actualización.
- render: Renderiza el contenido de la página.

# Implementación


- * import { CellsPage } from '@cells/cells-page';
- * import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
- * import { html } from 'lit-element';
- * import '@pokedex/poketaller/poketaller-ui.js';

- * class HomePage extends BbvaCoreIntlMixin(CellsPage) {
  // ... }

- * window.customElements.define((link unavailable), HomePage);


### Uso

- * Para utilizar este componente, simplemente importa el archivo JavaScript y agrega el componente <home-page> a tu PAGE en tu app.


<home-page></home-page>


### Dependencias

- @cells/cells-page
- @bbva-web-components/bbva-core-intl-mixin
- lit-element
- @pokedex/poketaller/poketaller-ui.js

## Licencia

Este proyecto está bajo la licencia [Nombre de la licencia].

## Contribución

- * Para contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Clona el repositorio.
2. Crea una rama para tu contribución.
3. Realiza tus cambios y commit.
4. Envía un pull request.

## Autor

- * Juan Luis Mejia Ruiz
