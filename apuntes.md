### store

1. similar al contextapi en react, en redux importamos desde reduxjs toolkit configureStore, este se crea en un archivo aparte, en este caso en store.js y se usa para exportar una variable llamada store la cual invoca la función configureStore que tiene como argumento un objeto con un reducer: {}
2. en el index se importa el store y el Provider de react-redux para envolver App con Provider y pasarle a Provider a store como props

### first slice

1. entiéndase slice como una featured de la app (esto es en tierra de redux). Una featured en este caso sería el carro y otra featured sería el modal que se abre cuando se pagan los productos
2. con createSlice importado para crear el slice, este tiene un objeto como argumento con el nombre del slice y el estado inicial configurado como objeto aparte
3. se crea una carpeta features, subcarpeta de cart y archivo cartSlice para almacenar el slice
4. en cartSlice exportamos por default cartSlice.reducer que sería una propiedad (no el objeto que tiene cartSlice, revísa cartSlice con console.log)
5. en store.js se importa el cartSlice.reducer (con nombre de cartReducer, puede ser cualquier nombre) y luego en el reducer de configureStore se le asigna una nueva propiedad llamada cart con valor cartReducer

### redux devTools

1. por extensión del navegador (redux devTools) o click derecho inspeccionar y busca en las pestañas redux

### useSelector

1. para acceder a los estados iniciales de los componentes. el selector busca una función y tiene como parámetro el estado entero (en este caso de toda la store) la función pide acceder a un estado específico (store.cart por ejemplo)
