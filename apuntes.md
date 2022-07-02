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

### Hero icons

1. desde heroicons.com se puede obtener íconos svg y configurarlos como componentes (ver icons.js), agrégale estilo css a svg para que no se vean en modo gigante

### cart items local data

1. en cartItems.js están los productos como información a mostrar de prueba.
2. configura carItems en el slice de redux igual a la data de cartItems

### cart container

1. app tendrá un componente que será el contenedor del carro, a su vez este contenedor tendrá cada producto que será otro componente
2. CartContainer tendrá destructurado la data, total y amount desde store.cart con useSelector (el cual extrae los datos desde el slice creado). Tendrá un render que dependerá del amount si es menor a 1 para decir que el carro está vacío o de lo contrario despliega los items de cart con un footer que resume el total y un botón para vaciar el carro

### cart item

1. se rescatan las props que se pasan desde CartContainer que son id, img, title, price, amount y se usan en el render de cart item. Cada item tendrá botones para aumentar o disminuir la cantidad del producto

### reducers - clear cart

1. con los reducers no es necesario mutar el estado (como se hacía en react en los reducers al devolver una nueva acción). redux toma la librería de Immer para hacer el trabajo mas liviano. Se puede usar la función que cambia el estado directamente usando el hook de react-redux llamado useDispatch
2. cartSlice condenrá reducers (a diferencia de store que usa reducer)
3. cartSlice tendrá guardado una propiedad de acciones en donde una de ellas será clearCart por lo que para acceder a clearCart se destructará a cartSlice.actions

### reducers - return state

1. si se usa return igual a un objeto vacío en clearCart, se modificará todo el initialState en un objeto vacío. o si se retorna {cartItems: []}, se cambiará cartItems pero el resto de las propiedades del estado inicial desaparecerán
2. es útil retornar un objeto vacío cuando quiero limpiar todas las entradas de un form

### reducers - remove item

1. un reducer recibe como argumento el state que vimos antes y action como segundo argument. action es un objeto que contiene type y payload, si por ejemplo un botón invoca un reducer onClick y le pasa como argumento el id, entonces action.payload contendrá ese id

### reducers - increase and decrease

1. action como segundo parámetro se puede destructurar directamente para acceder al payload como {payload}

### reducers - calculate totals

1. se necesita en app un useEffect para que cada vez que cambie la cantidad de items, cambie también el precio total en donde se le irá sumando la cantidad por precio de ese item (manejado en el reducer)
