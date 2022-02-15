# Finance

Este es un proyecto creado con Typescript, React y Tailwind utilizando el empaquetador vite.

La aplicacion web consiste en un sitio en el cual puedes agregar tus gastos e ingresos y obtener un balance en cuanto a estos.

Para comenzar a usar el proyecto solo debes clonar el repositorio y ejecutar en tu terminal el siguiente comando:

`npm install`

Y para ejecutarlo en desarrollo solamente necesitas ejecutar en la terminal:

`npm run dev`

### Componentes

La aplicacion contiene todos los componentes en el directorio src/components. Una breve descripcion de los componentes es:

- **FinanceSection**: contiene la seccion donde se muestran los datos de finanzas, se utiliza en en el componente App.tsx y se encarga de renderizar dos veces el componente financeTable.

- **FinanceTable**: Componente que muestra los datos obtenidos. Se renderiza dos veces para mostrar los datos de gastos e ingresos. Contiene un sub componente que renderiza cada uno de los datos.

- **Form**: Componente que obtiene los datos de un nuevo gasto o ingreso mediante un formulario con componentes controlados.

- **Header**: Componente que se muestra al inicio de la aplicacion con un texto de una bienvenida

- **Notification**: Componente que muestra una pequeña notificacion en la parte inferior de la pantalla.

#### Componente App

Este componente es el mas importante y es el que se encarga de manejar el estado de los datos y los componentes asi como de su renderizacion. En el se renderizan los componentes Header, FinanceSection, Form y Notification.
