### store

1. similar al contextapi en react, en redux importamos desde reduxjs toolkit configureStore, este se crea en un archivo aparte, en este caso en store.js y se usa para exportar una variable llamada store la cual invoca la función configureStore que tiene como argumento un objeto con un reducer: {}
2. en el index se importa el store y el Provider de react-redux para envolver App con Provider y pasarle a Provider a store como props
