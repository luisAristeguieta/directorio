# Lumina Motors - Directorio y Componentes Core

Aplicación móvil desarrollada con **React Native**, **Expo** y **TypeScript**

Para la realización de este proyecto se usa la marca automotriz **Lumina Motors** donde se muestra el equipo de trabajo actual, demostrando el uso de Flexbox, composición de componentes y la reutilización mediante la gestión de zonas seguras como lo es: `SafeAreaProvider` / `SafeAreaView`, agregando temas adaptativos claro y oscuro.


## 🚗 Descripción del Proyecto
Se muestran dos áreas, estas dividen la interfaz de forma proporcional mediante el uso de Flexbox, distribuyéndose de la seguiente manera: 
- **30% Superior (`CompanyHeader`):** Nombre empresarial **Lumina**, mostrando el logo corporativos y eslogan:*"Engineered for Power and Motion"*.
- **70% Inferior (`EmployeeList`):** Directorio de los empleados de ventas y operaciones de la concesionaria (Asesores Comerciales, Especialistas Financieros, Gerentes de Flota), renderizado con `FlatList` y tarjetas modulares (`ProfileCard`).

## 🕹️ Tecnologías Implementadas: 

- React Native
- Expo (SDK 57)
- TypeScript
- react-native-safe-area-context

## 🔧 Instalación y Uso

Para poder ejecutar el proyecto, sigue los siguientes pasos:

1. Clona el repositorio desde la terminal:
```bash
git clone [https://github.com/luisAristeguieta/directorio](https://github.com/luisAristeguieta/directorio)
cd mi-primera-app
```

2. Instala las dependencias en la terminal del editor:
```bash
npm install
```

3. Inicia el servidor Expo:
```bash
npx expo start --tunnel
```

4. Ejecuta en tu móvil con la app Expo Go:
Escanea el código QR resultante o abre el enlace generado desde la aplicación Expo Go en Android o iOS.

## 📱 Vista Previa de la Aplicación

| Modo Oscuro | Modo Claro |
| :---: | :---: |
| <img src="./Entregables/Capture%20%23%201%20Diseño%20en%20Expo%20Go.PNG" width="280" alt="Modo Oscuro" /> | <img src="./Entregables/Capture%20%23%201a%20Diseño%20en%20Expo%20Go%20Tema%20Claro.PNG" width="280" alt="Modo Claro" /> |