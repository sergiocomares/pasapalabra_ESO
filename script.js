const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const MEDALS = [
  "Maestro del Álgebra",
  "Maestro de la Geometría",
  "Maestro de la Estadística",
  "Maestro de la Proporcionalidad",
  "Rosco Perfecto"
];

const STORAGE_KEY = "pasapalabra2eso_stats_v1";
const MUSIC_MUTE_PREFERENCE_KEY = "pasapalabra_start_music_muted_v1";

const QUESTION_BANK_2ESO = {
  A: [
    { answer: "area", question: "Con la A: magnitud que mide la superficie de una figura plana.", concept: "Area", definition: "El area mide la extension de una superficie en unidades cuadradas.", example: "Rectangulo de 8 cm y 3 cm: area = 24 cm2.", application: "Sirve para calcular pintura, azulejos o terreno necesario.", procedure: "Identifica figura, aplica formula y expresa en unidades cuadradas.", mistakes: "Confundir area con perimetro.", hint: "Se expresa en cm2 o m2.", content: "Geometria" },
    { answer: "apotema", question: "Con la A: segmento desde el centro de un poligono regular al punto medio de un lado.", concept: "Apotema", definition: "La apotema es perpendicular al lado en poligonos regulares.", example: "Area de pentagono regular: (perimetro x apotema) / 2.", application: "Calculo de areas en poligonos regulares.", procedure: "Calcula perimetro, multiplica por apotema y divide entre 2.", mistakes: "Usar radio en lugar de apotema.", hint: "Se usa en formulas de area de poligonos regulares.", content: "Geometria" },
    { answer: "angulo", question: "Con la A: abertura formada por dos semirrectas con un mismo origen.", concept: "Angulo", definition: "Figura geometrica formada por dos lados que comparten un vertice.", example: "Un angulo recto mide 90 grados.", application: "Medir giros y clasificar figuras.", procedure: "Mide con transportador o compara con referencias conocidas.", mistakes: "Confundirlo con un segmento o con una recta.", hint: "Se mide en grados.", content: "Geometria" }
  ],
  B: [
    { answer: "bisectriz", question: "Con la B: semirrecta que divide un angulo en dos partes iguales.", concept: "Bisectriz", definition: "Divide un angulo en dos angulos de la misma medida.", example: "Si un angulo mide 70 grados, cada parte de la bisectriz mide 35 grados.", application: "Construcciones geometricas y triangulos.", procedure: "Con compas, marca arcos y une el vertice con su interseccion.", mistakes: "Confundir bisectriz con mediatriz.", hint: "Parte un angulo en dos.", content: "Geometria" },
    { answer: "base", question: "Con la B: lado de referencia de un triangulo o de un paralelogramo para calcular area.", concept: "Base", definition: "Lado elegido para relacionarlo con su altura correspondiente.", example: "Area triangulo = base x altura / 2.", application: "Calculo de superficies.", procedure: "Selecciona un lado y la altura perpendicular.", mistakes: "Tomar una altura no perpendicular.", hint: "Aparece en muchas formulas de area.", content: "Geometria" },
    { answer: "baricentro", question: "Con la B: punto donde se cortan las medianas de un triangulo.", concept: "Baricentro", definition: "Centro de gravedad del triangulo.", example: "Se encuentra a 2/3 de cada mediana desde el vertice.", application: "Estabilidad y centro de masas.", procedure: "Traza medianas y localiza su interseccion.", mistakes: "Mezclar medianas con alturas.", hint: "Tambien llamado centroide.", content: "Geometria" }
  ],
  C: [
    { answer: "coordenadas", question: "Con la C: par ordenado que localiza un punto en el plano cartesiano.", concept: "Coordenadas", definition: "Se escriben como (x, y).", example: "El punto (3, -2) esta 3 a la derecha y 2 hacia abajo.", application: "Representar funciones y datos.", procedure: "Lee eje X, luego eje Y.", mistakes: "Intercambiar el orden x e y.", hint: "Se usa en el plano cartesiano.", content: "Funciones" },
    { answer: "circunferencia", question: "Con la C: linea curva cerrada cuyos puntos estan a igual distancia del centro.", concept: "Circunferencia", definition: "Conjunto de puntos equidistantes de un punto fijo.", example: "Longitud: 2 x pi x radio.", application: "Ruedas, relojes, piezas circulares.", procedure: "Identifica radio y aplica formula.", mistakes: "Confundir circunferencia con circulo.", hint: "Solo es el borde.", content: "Geometria" },
    { answer: "cociente", question: "Con la C: resultado de una división.", concept: "Cociente", definition: "Número obtenido al dividir dividendo entre divisor.", example: "15 / 3 = 5.", application: "Repartos y tasas.", procedure: "Realiza división y comprueba con multiplicación.", mistakes: "Olvidar el resto en divisiones no exactas.", hint: "Sale al dividir.", content: "Numeros y calculo" }
  ],
  D: [
    { answer: "decimal", question: "Con la D: número que representa partes de la unidad mediante coma.", concept: "Decimal", definition: "Expresa décimas, centésimas y milésimas.", example: "0,75 equivale a 75/100.", application: "Precios, medidas y porcentajes.", procedure: "Ubica cifras en su valor posicional.", mistakes: "Mover mal la coma al multiplicar por 10.", hint: "Puede transformarse en fracción.", content: "Numeros y calculo" },
    { answer: "denominador", question: "Con la D: numero inferior de una fraccion que indica en cuantas partes se divide la unidad.", concept: "Denominador", definition: "Indica el numero de partes iguales.", example: "En 3/8, el denominador es 8.", application: "Comparar y operar fracciones.", procedure: "Para sumar fracciones, busca denominador comun.", mistakes: "Sumar denominadores directamente.", hint: "Va debajo en la fraccion.", content: "Fracciones" },
    { answer: "diagrama", question: "Con la D: representacion grafica de datos o relaciones.", concept: "Diagrama", definition: "Visualiza informacion estadistica o procesos.", example: "Diagrama de barras para frecuencias.", application: "Interpretar encuestas y experimentos.", procedure: "Elige escala, ejes y datos.", mistakes: "Escalas no uniformes.", hint: "Se usa en estadistica.", content: "Estadistica" }
  ],
  E: [
    { answer: "ecuacion", question: "Con la E: igualdad matematica con una o mas incognitas.", concept: "Ecuacion", definition: "Relaciona dos expresiones y se cumple para ciertos valores.", example: "x + 7 = 12 tiene solucion x = 5.", application: "Resolver problemas de edades y precios.", procedure: "Despeja la variable con operaciones inversas.", mistakes: "No hacer la misma operacion en ambos lados.", hint: "Se suele resolver despejando x.", content: "Algebra" },
    { answer: "estadistica", question: "Con la E: rama que recoge, organiza y analiza datos.", concept: "Estadistica", definition: "Permite extraer informacion de un conjunto de datos.", example: "Calculo de media, mediana y moda.", application: "Analizar resultados de clase o deportes.", procedure: "Recoge datos, ordena y calcula medidas.", mistakes: "No distinguir variable cualitativa y cuantitativa.", hint: "Trabaja con tablas y graficos.", content: "Estadistica" },
    { answer: "equivalente", question: "Con la E: que tiene el mismo valor aunque tenga forma distinta.", concept: "Equivalencia", definition: "Dos fracciones equivalentes representan la misma cantidad.", example: "1/2 y 2/4 son equivalentes.", application: "Simplificacion de fracciones.", procedure: "Multiplica o divide numerador y denominador por el mismo numero.", mistakes: "Cambiar solo numerador o denominador.", hint: "Mismo valor, distinta apariencia.", content: "Fracciones" }
  ],
  F: [
    { answer: "fraccion", question: "Con la F: numero que expresa una parte de la unidad.", concept: "Fraccion", definition: "Se representa como numerador/denominador.", example: "3/5 significa tres partes de cinco.", application: "Repartos, recetas, probabilidades.", procedure: "Identifica partes y unidad de referencia.", mistakes: "Comparar fracciones sin denominador comun.", hint: "Tiene numerador y denominador.", content: "Fracciones" },
    { answer: "frecuencia", question: "Con la F: numero de veces que aparece un dato.", concept: "Frecuencia", definition: "Cuenta repeticiones en una tabla estadistica.", example: "Si el 7 aparece 4 veces, su frecuencia es 4.", application: "Construir tablas y graficos.", procedure: "Cuenta, organiza y suma para total.", mistakes: "No comprobar que la suma coincide con total de datos.", hint: "Se usa en tablas de datos.", content: "Estadistica" },
    { answer: "funcion", question: "Con la F: relacion donde a cada valor de x le corresponde un unico valor de y.", concept: "Funcion", definition: "Asocia elementos de un conjunto de partida con uno de llegada.", example: "y = 2x + 1.", application: "Modelar crecimiento, costes y movimiento.", procedure: "Sustituye x para obtener y.", mistakes: "Asignar dos y distintas al mismo x.", hint: "Se representa en tabla o grafica.", content: "Funciones" }
  ],
  G: [
    { answer: "grafico", question: "Con la G: representacion visual de datos o de una funcion.", concept: "Grafico", definition: "Muestra informacion en ejes o diagramas.", example: "Grafica de y = x + 2 es una recta.", application: "Analizar tendencias.", procedure: "Marca puntos y une segun el tipo de grafico.", mistakes: "Escalas incorrectas en ejes.", hint: "Ayuda a interpretar datos.", content: "Funciones" },
    { answer: "grado", question: "Con la G: unidad de medida de angulos.", concept: "Grado", definition: "Una vuelta completa son 360 grados.", example: "Angulo recto = 90 grados.", application: "Diseño, arquitectura y orientacion.", procedure: "Mide con transportador.", mistakes: "Confundir angulo llano y recto.", hint: "Se simboliza con º.", content: "Geometria" },
    { answer: "geometria", question: "Con la G: rama que estudia formas, medidas y posiciones.", concept: "Geometria", definition: "Analiza figuras planas y cuerpos espaciales.", example: "Calculo de areas y volumenes.", application: "Construccion y diseno tecnico.", procedure: "Identifica propiedades y aplica formulas.", mistakes: "Usar formula de figura distinta.", hint: "Incluye perimetros y areas.", content: "Geometria" }
  ],
  H: [
    { answer: "hipotenusa", question: "Con la H: lado mayor de un triangulo rectangulo.", concept: "Hipotenusa", definition: "Es el lado opuesto al angulo recto.", example: "Si catetos son 3 y 4, hipotenusa es 5.", application: "Distancias y diagonales.", procedure: "Aplica teorema de Pitagoras.", mistakes: "Tomar como hipotenusa un cateto.", hint: "Se calcula con raiz cuadrada en Pitagoras.", content: "Geometria" },
    { answer: "histograma", question: "Con la H: grafico de barras contiguas para datos agrupados.", concept: "Histograma", definition: "Representa distribuciones de frecuencias en intervalos.", example: "Alturas agrupadas por intervalos.", application: "Analizar dispersion de datos.", procedure: "Define intervalos y frecuencias.", mistakes: "Dejar separacion entre barras.", hint: "Barras pegadas.", content: "Estadistica" },
    { answer: "hectarea", question: "Con la H: unidad de superficie equivalente a 10 000 m2.", concept: "Hectarea", definition: "Unidad frecuente en terrenos agrarios.", example: "2 hectareas = 20 000 m2.", application: "Medir fincas y parcelas.", procedure: "Convierte entre m2 y ha.", mistakes: "Confundir con hectometro.", hint: "Se abrevia ha.", content: "Geometria" }
  ],
  I: [
    { answer: "incognita", question: "Con la I: valor desconocido que se representa con una letra.", concept: "Incognita", definition: "Numero que debemos hallar en una ecuacion.", example: "En 3x = 15, la incognita es x.", application: "Problemas de reparto y edades.", procedure: "Aisla la variable.", mistakes: "Mover terminos sin cambiar signo.", hint: "Suele ser x.", content: "Algebra" },
    { answer: "intervalo", question: "Con la I: conjunto de numeros comprendidos entre dos extremos.", concept: "Intervalo", definition: "Puede ser abierto, cerrado o semiabierto.", example: "[2,5] incluye 2 y 5.", application: "Dominio de funciones y datos agrupados.", procedure: "Identifica limites y notacion.", mistakes: "No distinguir parentesis y corchetes.", hint: "Tiene dos limites.", content: "Funciones" },
    { answer: "inversa", question: "Con la I: tipo de proporcionalidad en la que al aumentar una magnitud la otra disminuye.", concept: "Proporcionalidad inversa", definition: "El producto de magnitudes es constante.", example: "Mas obreros, menos tiempo para acabar una obra.", application: "Tareas, velocidad-tiempo.", procedure: "Comprueba producto constante.", mistakes: "Aplicar regla de tres directa cuando no toca.", hint: "Si una sube, la otra baja.", content: "Proporcionalidad" }
  ],
  J: [
    { answer: "jerarquia", question: "Con la J: orden en que se realizan operaciones en una expresion.", concept: "Jerarquia de operaciones", definition: "Primero parentesis, luego potencias, despues multiplicacion/division y por ultimo suma/resta.", example: "2 + 3 x 4 = 14.", application: "Evita errores de calculo.", procedure: "Resuelve por niveles.", mistakes: "Sumar antes de multiplicar.", hint: "Primero parentesis.", content: "Numeros y calculo" },
    { answer: "julio", question: "Con la J: mes del ano usado en problemas de calendarios y sucesiones temporales.", concept: "Secuencias temporales", definition: "Los meses se pueden modelar como sucesiones periodicas.", example: "Si enero es n=1, julio es n=7.", application: "Modelar patrones periodicos.", procedure: "Asigna indice y calcula posicion.", mistakes: "Perder la referencia inicial.", hint: "Es el mes numero 7.", content: "Sucesiones" },
    { answer: "justificar", question: "Con la J: explicar matematicamente por que un resultado es correcto.", concept: "Justificacion", definition: "Argumentar con propiedades y pasos validos.", example: "Demostrar igualdad usando distributiva.", application: "Mejora razonamiento matematico.", procedure: "Escribe pasos claros y propiedades usadas.", mistakes: "Dar solo resultado sin razonamiento.", hint: "No basta con acertar, hay que explicar.", content: "Algebra" }
  ],
  K: [
    { answer: "kilometro", question: "Con la K: unidad de longitud equivalente a 1000 metros.", concept: "Kilometro", definition: "Unidad del sistema metrico para distancias largas.", example: "5 km = 5000 m.", application: "Mapas y trayectos.", procedure: "Multiplica o divide por 1000.", mistakes: "Mover mal la coma.", hint: "Su abreviatura es km.", content: "Numeros y calculo" },
    { answer: "kilogramo", question: "Con la K: unidad basica de masa del SI.", concept: "Kilogramo", definition: "Mide cantidad de materia.", example: "1,5 kg = 1500 g.", application: "Compras y laboratorio.", procedure: "Convierte entre g y kg por potencias de 10.", mistakes: "Confundir masa con peso.", hint: "Se abrevia kg.", content: "Numeros y calculo" },
    { answer: "kilo", question: "Con la K: prefijo que indica mil unidades.", concept: "Prefijo kilo", definition: "En sistema metrico, kilo = 1000.", example: "1 kilolitro = 1000 litros.", application: "Conversiones de unidades.", procedure: "Multiplica por 10^3.", mistakes: "No aplicar potencia de 10 correcta.", hint: "Representa mil.", content: "Potencias y raices" }
  ],
  L: [
    { answer: "lineal", question: "Con la L: funcion cuya grafica es una recta.", concept: "Funcion lineal", definition: "Tiene forma y = mx + b.", example: "y = 2x + 1.", application: "Costes fijos y variables.", procedure: "Calcula pendiente m y ordenada b.", mistakes: "Confundir lineal con proporcional.", hint: "Su grafica es una recta.", content: "Funciones" },
    { answer: "longitud", question: "Con la L: magnitud que mide distancia entre dos puntos.", concept: "Longitud", definition: "Se mide en metros y sus multiplos/submultiplos.", example: "Segmento de 12 cm.", application: "Mediciones cotidianas.", procedure: "Elige unidad adecuada.", mistakes: "Mezclar unidades sin convertir.", hint: "Se mide en metros.", content: "Numeros y calculo" },
    { answer: "literal", question: "Con la L: parte con letras de una expresion algebraica.", concept: "Parte literal", definition: "Incluye variables y sus exponentes.", example: "En 5x2y, la parte literal es x2y.", application: "Simplificar monomios.", procedure: "Separa coeficiente y parte literal.", mistakes: "Operar coeficientes sin respetar letras.", hint: "Va junto al coeficiente.", content: "Algebra" }
  ],
  M: [
    { answer: "media", question: "Con la M: medida de centralizacion que se obtiene sumando datos y dividiendo entre su cantidad.", concept: "Media aritmetica", definition: "Promedio de un conjunto de valores.", example: "(4 + 6 + 8) / 3 = 6.", application: "Notas, temperaturas, resultados.", procedure: "Suma todos los datos y divide por n.", mistakes: "Olvidar incluir todos los datos.", hint: "Tambien se llama promedio.", content: "Estadistica" },
    { answer: "mediana", question: "Con la M: valor central de un conjunto ordenado de datos.", concept: "Mediana", definition: "Divide los datos en dos partes iguales.", example: "Datos 2, 4, 9: mediana 4.", application: "Analizar sueldos o datos con extremos.", procedure: "Ordena y toma valor central.", mistakes: "No ordenar antes.", hint: "Es el dato del medio.", content: "Estadistica" },
    { answer: "moda", question: "Con la M: dato que mas se repite en una distribucion.", concept: "Moda", definition: "Valor de mayor frecuencia.", example: "En 2,2,3,5 la moda es 2.", application: "Preferencias en encuestas.", procedure: "Cuenta repeticiones.", mistakes: "Confundir con media.", hint: "El valor mas repetido.", content: "Estadistica" }
  ],
  N: [
    { answer: "numero", question: "Con la N: objeto matematico para contar, medir y ordenar.", concept: "Numero", definition: "Puede ser natural, entero, racional, etc.", example: "-3 es entero; 0,5 es racional.", application: "Todo calculo matematico.", procedure: "Clasifica segun conjunto numerico.", mistakes: "Creer que todos los decimales son enteros.", hint: "Hay naturales, enteros y racionales.", content: "Numeros y calculo" },
    { answer: "numerador", question: "Con la N: numero superior de una fraccion.", concept: "Numerador", definition: "Indica cuantas partes se toman.", example: "En 3/7, el numerador es 3.", application: "Operaciones con fracciones.", procedure: "Identifica parte tomada.", mistakes: "Intercambiar numerador y denominador.", hint: "Va arriba.", content: "Fracciones" },
    { answer: "negativo", question: "Con la N: numero menor que cero.", concept: "Numero negativo", definition: "Se representa con signo menos.", example: "-8 es menor que -3.", application: "Temperaturas bajo cero, deudas.", procedure: "Ubica en recta numerica.", mistakes: "Comparar sin usar recta.", hint: "Tiene signo menos.", content: "Numeros enteros" }
  ],
  "Ñ": [
    { answer: "señal", question: "Contiene la Ñ: indicacion en una grafica que ayuda a interpretar una tendencia.", concept: "Señal en grafica", definition: "Marca visual que destaca un dato relevante.", example: "Una flecha señala un maximo en una funcion.", application: "Lectura de graficos estadisticos.", procedure: "Observa eje y leyenda antes de interpretar la señal.", mistakes: "Sacar conclusiones sin contexto.", hint: "Es una pista visual en una grafica.", content: "Interpretacion de datos" },
    { answer: "tamaño", question: "Contiene la Ñ: magnitud de una figura o muestra de datos.", concept: "Tamaño", definition: "Puede referirse a dimension geometrica o numero de datos de una muestra.", example: "Muestra de tamaño 30.", application: "Estadistica y geometria.", procedure: "Define unidad o cantidad de elementos.", mistakes: "No especificar unidad.", hint: "Puede ser numero de elementos.", content: "Estadistica" },
    { answer: "año", question: "Contiene la Ñ: unidad temporal usada en problemas de crecimiento y sucesiones.", concept: "Año", definition: "Periodo de 12 meses usado para modelar cambios.", example: "Si una cantidad crece 5% anual.", application: "Interes, poblacion y series temporales.", procedure: "Establece valor inicial y tasa por año.", mistakes: "No distinguir crecimiento simple y compuesto.", hint: "Tiene 12 meses.", content: "Sucesiones" }
  ],
  O: [
    { answer: "operacion", question: "Con la O: accion matematica como sumar, restar, multiplicar o dividir.", concept: "Operacion", definition: "Transforma numeros siguiendo reglas.", example: "7 x 6 = 42.", application: "Resolucion de problemas.", procedure: "Aplica jerarquia de operaciones.", mistakes: "Cambiar orden sin parentesis.", hint: "Hay cuatro basicas.", content: "Numeros y calculo" },
    { answer: "ordenada", question: "Con la O: coordenada vertical de un punto en el plano.", concept: "Ordenada", definition: "Es el valor y en (x, y).", example: "En (2, -4), la ordenada es -4.", application: "Lectura de graficas.", procedure: "Mira segundo numero del par ordenado.", mistakes: "Confundir con abscisa.", hint: "Es la y.", content: "Funciones" },
    { answer: "opuesto", question: "Con la O: numero que sumado con otro da cero.", concept: "Numero opuesto", definition: "Tiene mismo valor absoluto y signo contrario.", example: "Opuesto de -9 es 9.", application: "Resolucion de ecuaciones.", procedure: "Cambia el signo.", mistakes: "Cambiar tambien valor absoluto.", hint: "Suman cero.", content: "Numeros enteros" }
  ],
  P: [
    { answer: "proporcionalidad", question: "Con la P: relacion entre magnitudes que mantienen una razon constante.", concept: "Proporcionalidad", definition: "Puede ser directa o inversa.", example: "Si duplicas kilos, duplicas precio.", application: "Regla de tres y escalas.", procedure: "Comprueba cociente o producto constante.", mistakes: "No identificar tipo de proporcionalidad.", hint: "Directa o inversa.", content: "Proporcionalidad" },
    { answer: "porcentaje", question: "Con la P: forma de expresar una parte de cada cien.", concept: "Porcentaje", definition: "Relaciona una cantidad con base 100.", example: "25% = 25/100 = 0,25.", application: "Descuentos y subidas.", procedure: "Multiplica por porcentaje en decimal.", mistakes: "No dividir entre 100.", hint: "Se escribe con %.", content: "Proporcionalidad" },
    { answer: "pitagoras", question: "Con la P: teorema que relaciona catetos e hipotenusa en triangulo rectangulo.", concept: "Teorema de Pitagoras", definition: "a2 + b2 = c2.", example: "Catetos 6 y 8: c=10.", application: "Distancias y diagonales.", procedure: "Eleva catetos al cuadrado, suma y saca raiz.", mistakes: "Aplicarlo en triangulos no rectangulos.", hint: "a2 + b2 = c2.", content: "Geometria" }
  ],
  Q: [
    { answer: "quebrado", question: "Contiene la Q: forma antigua de llamar a una fraccion.", concept: "Numero quebrado", definition: "Nombre tradicional para una fraccion o numero racional escrito en forma de cociente.", example: "3/4 es un numero quebrado.", application: "Relacionar lenguaje cotidiano con fracciones.", procedure: "Identifica numerador y denominador.", mistakes: "Confundirlo con un numero entero.", hint: "Es otro nombre para una fraccion.", content: "Fracciones" },
    { answer: "equivalente", question: "Contiene la Q: que tiene el mismo valor aunque tenga forma distinta.", concept: "Equivalencia", definition: "Dos fracciones equivalentes representan la misma cantidad.", example: "1/2 y 2/4 son equivalentes.", application: "Simplificacion de fracciones.", procedure: "Multiplica o divide numerador y denominador por el mismo numero.", mistakes: "Cambiar solo numerador o denominador.", hint: "Mismo valor, forma diferente.", content: "Fracciones" },
    { answer: "equilatero", question: "Contiene la Q: triangulo con los tres lados iguales.", concept: "Triangulo equilatero", definition: "Es un triangulo con tres lados y tres angulos iguales.", example: "Si un lado mide 6 cm, su perimetro es 18 cm.", application: "Clasificacion de triangulos y calculo de perimetros.", procedure: "Comprueba que los tres lados tengan la misma longitud.", mistakes: "Confundirlo con un triangulo isosceles.", hint: "Sus tres lados son iguales.", content: "Geometria" }
  ],
  R: [
    { answer: "razon", question: "Con la R: cociente entre dos cantidades comparables.", concept: "Razon", definition: "Compara dos magnitudes mediante division.", example: "Si hay 8 chicas y 12 chicos, razon 8:12 = 2:3.", application: "Escalas, mezclas y proporcionalidad.", procedure: "Escribe cociente y simplifica.", mistakes: "No simplificar la razon.", hint: "Se expresa como a:b.", content: "Proporcionalidad" },
    { answer: "raiz", question: "Con la R: operacion inversa de elevar al cuadrado.", concept: "Raiz cuadrada", definition: "Numero que multiplicado por si mismo da el radicando.", example: "raiz de 49 es 7.", application: "Pitagoras y medidas.", procedure: "Busca cuadrados perfectos o aproxima.", mistakes: "Confundir raiz de 36 con 18.", hint: "Inversa de potencia de 2.", content: "Potencias y raices" },
    { answer: "recta", question: "Con la R: linea infinita sin curvatura.", concept: "Recta", definition: "Se extiende indefinidamente en ambos sentidos.", example: "En y = 3x - 1 la grafica es una recta.", application: "Modelos lineales.", procedure: "Calcula dos puntos y une.", mistakes: "Usar escala distinta en ejes sin avisar.", hint: "No tiene principio ni fin.", content: "Funciones" }
  ],
  S: [
    { answer: "sistema", question: "Con la S: conjunto de dos ecuaciones con mismas incognitas.", concept: "Sistema de ecuaciones", definition: "Se busca el valor que cumple ambas ecuaciones.", example: "x + y = 5 y x - y = 1.", application: "Problemas con dos condiciones.", procedure: "Usa sustitucion, igualacion o reduccion.", mistakes: "Resolver ecuaciones por separado sin combinar.", hint: "Dos ecuaciones, dos incognitas.", content: "Algebra" },
    { answer: "sucesion", question: "Con la S: conjunto ordenado de numeros que siguen una regla.", concept: "Sucesion", definition: "Cada termino depende de su posicion.", example: "2, 5, 8, 11 es aritmetica de diferencia 3.", application: "Patrones y predicciones.", procedure: "Encuentra regla y calcula terminos.", mistakes: "Confundir termino general con diferencia.", hint: "Serie ordenada por una ley.", content: "Sucesiones" },
    { answer: "simetria", question: "Con la S: propiedad por la que una figura coincide consigo misma al reflejarse.", concept: "Simetria", definition: "Existe un eje o centro simetrico.", example: "Un cuadrado tiene 4 ejes de simetria.", application: "Diseño y geometria.", procedure: "Busca ejes que dividan en partes especulares.", mistakes: "Contar diagonales como ejes en rectangulos no cuadrados.", hint: "Reflejo en espejo.", content: "Geometria" }
  ],
  T: [
    { answer: "teorema", question: "Con la T: proposicion matematica demostrada logicamente.", concept: "Teorema", definition: "Afirmacion valida tras demostracion.", example: "Teorema de Pitagoras.", application: "Fundamentar resoluciones.", procedure: "Aplicar condiciones del teorema.", mistakes: "Usarlo fuera de sus hipotesis.", hint: "Necesita demostracion.", content: "Geometria" },
    { answer: "tabla", question: "Con la T: organizacion de datos en filas y columnas.", concept: "Tabla de valores", definition: "Relaciona pares de datos de una funcion o estudio.", example: "x: 0,1,2; y: 1,3,5.", application: "Representar funciones y frecuencias.", procedure: "Define variables y completa datos.", mistakes: "No mantener unidades.", hint: "Filas y columnas.", content: "Interpretacion de datos" },
    { answer: "triangulo", question: "Con la T: poligono de tres lados.", concept: "Triangulo", definition: "Figura plana con tres vertices y tres angulos.", example: "Suma de angulos interiores: 180 grados.", application: "Arquitectura y diseno.", procedure: "Clasifica por lados y angulos.", mistakes: "Olvidar condicion de desigualdad triangular.", hint: "Tiene 3 lados.", content: "Geometria" }
  ],
  U: [
    { answer: "unidad", question: "Con la U: cantidad de referencia para medir.", concept: "Unidad", definition: "Patron con el que se expresan magnitudes.", example: "Metro para longitud, litro para capacidad.", application: "Mediciones correctas.", procedure: "Elige unidad adecuada al contexto.", mistakes: "No indicar unidad final.", hint: "Sin unidad, el numero esta incompleto.", content: "Numeros y calculo" },
    { answer: "uniforme", question: "Con la U: distribucion donde todos los resultados tienen la misma probabilidad.", concept: "Probabilidad uniforme", definition: "Cada suceso elemental es equiprobable.", example: "Dado equilibrado.", application: "Calculo de probabilidades simples.", procedure: "Casos favorables entre casos posibles.", mistakes: "Suponer equiprobabilidad sin justificar.", hint: "Todos los casos valen lo mismo.", content: "Probabilidad" },
    { answer: "ultimo", question: "Con la U: termino final conocido en una sucesion o intervalo.", concept: "Extremo final", definition: "Marca donde termina un listado o tramo.", example: "En 3,6,9,12 el ultimo es 12.", application: "Calculo de numero de terminos.", procedure: "Usa formula de sucesion aritmetica.", mistakes: "Confundir ultimo con mayor en secuencias no ordenadas.", hint: "Es el termino final.", content: "Sucesiones" }
  ],
  V: [
    { answer: "variable", question: "Con la V: simbolo que puede tomar distintos valores.", concept: "Variable", definition: "Representa cantidades cambiantes.", example: "En y = 2x, x es variable independiente.", application: "Modelar situaciones reales.", procedure: "Define que representa cada variable.", mistakes: "No especificar dominio.", hint: "Suele representarse con letras.", content: "Algebra" },
    { answer: "volumen", question: "Con la V: medida del espacio que ocupa un cuerpo.", concept: "Volumen", definition: "Se expresa en unidades cubicas.", example: "Prisma rectangular: largo x ancho x alto.", application: "Capacidad de recipientes y cuerpos.", procedure: "Selecciona formula segun solido.", mistakes: "Usar unidades cuadradas en vez de cubicas.", hint: "Se mide en m3 o cm3.", content: "Geometria" },
    { answer: "vertice", question: "Con la V: punto donde se unen dos lados o aristas.", concept: "Vertice", definition: "Esquina de figuras planas o cuerpos.", example: "Un cubo tiene 8 vertices.", application: "Identificacion de poliedros.", procedure: "Cuenta vertices, aristas y caras.", mistakes: "Confundir vertice con lado.", hint: "Es una esquina.", content: "Geometria" }
  ],
  W: [
    { answer: "web", question: "Contiene la W: medio digital donde se publican tablas y graficos para interpretar datos.", concept: "Web", definition: "Entorno digital donde se consulta informacion y datos.", example: "Consultar una grafica de temperaturas en una web educativa.", application: "Lectura critica de datos reales.", procedure: "Revisa fuente, ejes y unidades antes de interpretar.", mistakes: "Confiar en datos sin verificar origen.", hint: "Internet.", content: "Interpretacion de datos" },
    { answer: "wifi", question: "Contiene la W: tecnologia de conexion usada para acceder a plataformas con recursos matematicos.", concept: "Conectividad digital", definition: "Permite acceder a contenido y actividades en linea.", example: "Resolver ejercicios interactivos en clase virtual.", application: "Aprendizaje digital y consulta de recursos.", procedure: "Conecta, verifica fuente y analiza informacion.", mistakes: "Usar fuentes no fiables.", hint: "Conexion inalambrica.", content: "Interpretacion de datos" }
  ],
  X: [
    { answer: "expresion", question: "Contiene la X: combinacion de numeros, letras y operaciones.", concept: "Expresion algebraica", definition: "Representa relaciones matematicas sin signo igual.", example: "3x + 2.", application: "Plantear y simplificar calculos.", procedure: "Agrupa terminos semejantes y respeta jerarquia.", mistakes: "Sumar terminos no semejantes.", hint: "No lleva igual.", content: "Algebra" },
    { answer: "exponente", question: "Contiene la X: numero que indica cuantas veces se multiplica una base por si misma.", concept: "Exponente", definition: "En una potencia, indica repeticiones de la base.", example: "2^3 = 8, el exponente es 3.", application: "Potencias y notacion cientifica.", procedure: "Identifica base y exponente.", mistakes: "Confundir exponente con resultado.", hint: "Aparece en las potencias.", content: "Potencias y raices" },
    { answer: "maximo", question: "Contiene la X: valor mas alto que alcanza una funcion o un conjunto de datos.", concept: "Maximo", definition: "Mayor valor observado en una situacion matematica.", example: "En los datos 3, 7, 2, 9 el maximo es 9.", application: "Analizar graficos y estadisticas.", procedure: "Compara valores y localiza el mayor.", mistakes: "Confundir maximo con media.", hint: "Es el valor mas alto.", content: "Estadistica" }
  ],
  Y: [
    { answer: "mayor", question: "Contiene la Y: palabra que indica que un numero es superior a otro.", concept: "Desigualdad", definition: "Comparacion entre dos cantidades usando > o <.", example: "8 es mayor que 5.", application: "Ordenar numeros y resolver problemas.", procedure: "Compara valor posicional o recta numerica.", mistakes: "Invertir el signo de desigualdad.", hint: "Lo contrario de menor.", content: "Numeros y calculo" },
    { answer: "eje y", question: "Contiene la Y: eje vertical del plano cartesiano.", concept: "Eje Y", definition: "Tambien llamado eje de ordenadas.", example: "Punto (1,5) tiene ordenada 5.", application: "Representacion de funciones.", procedure: "Ubica segundo valor del par ordenado.", mistakes: "Invertir coordenadas.", hint: "Es vertical.", content: "Funciones" },
    { answer: "proyeccion", question: "Contiene la Y: representacion de una figura sobre un plano.", concept: "Proyeccion", definition: "Traslada puntos de una figura a una recta o plano de referencia.", example: "Proyeccion ortogonal de un segmento.", application: "Geometria y dibujo tecnico.", procedure: "Traza perpendiculares al plano de proyeccion.", mistakes: "No respetar perpendicularidad.", hint: "Se usa en dibujo tecnico.", content: "Geometria" }
  ],
  Z: [
    { answer: "razon", question: "Contiene la Z: cociente entre dos cantidades comparables.", concept: "Razon", definition: "Compara dos magnitudes mediante division.", example: "8:12 = 2:3.", application: "Escalas, mezclas y proporcionalidad.", procedure: "Escribe cociente y simplifica.", mistakes: "No simplificar la razon.", hint: "Se expresa como a:b.", content: "Proporcionalidad" },
    { answer: "azar", question: "Contiene la Z: idea clave en probabilidad cuando el resultado no se puede predecir con certeza.", concept: "Azar", definition: "Situacion en la que interviene la aleatoriedad.", example: "Lanzar una moneda.", application: "Probabilidad simple.", procedure: "Calcula casos favorables entre posibles.", mistakes: "Confundir azar con imposibilidad.", hint: "Relacionada con probabilidad.", content: "Probabilidad" },
    { answer: "trapezoide", question: "Contiene la Z: cuadrilatero que no tiene lados paralelos.", concept: "Trapezoide", definition: "Poligono de cuatro lados sin lados paralelos.", example: "No es trapecio ni paralelogramo.", application: "Clasificacion de cuadrilateros.", procedure: "Observa paralelismo entre lados.", mistakes: "Confundir trapezoide con trapecio.", hint: "Es un tipo de cuadrilatero.", content: "Geometria" }
  ]
};

const QUESTION_BANK_4ESO_B = {
  A: [
    { answer: "asintota", question: "Con la A: recta a la que una curva se aproxima indefinidamente.", concept: "Asintota", definition: "Linea limite que la funcion se acerca sin llegar a tocar en ciertos casos.", example: "f(x)=1/x tiene asintota vertical x=0 y horizontal y=0.", application: "Estudio de funciones racionales.", procedure: "Analiza denominadores y limites.", mistakes: "Confundir corte con asintota.", hint: "Puede ser vertical u horizontal.", content: "Funciones" },
    { answer: "argumento", question: "Con la A: razonamiento matematico que justifica una conclusion.", concept: "Argumento", definition: "Cadena logica de ideas que sustenta una afirmacion matematica.", example: "Usar propiedades algebraicas para demostrar una igualdad.", application: "Demostraciones y resolucion de problemas.", procedure: "Expone premisas, aplica propiedades y concluye con claridad.", mistakes: "Afirmar sin justificar pasos intermedios.", hint: "Es la base de una buena demostracion.", content: "Algebra" }
  ],
  B: [
    { answer: "binomio", question: "Con la B: expresion algebraica con dos terminos.", concept: "Binomio", definition: "Polinomio formado por la suma o resta de dos monomios.", example: "(x + 3)^2 es cuadrado de un binomio.", application: "Productos notables y factorizacion.", procedure: "Identifica terminos y aplica identidades.", mistakes: "Olvidar termino doble.", hint: "Tiene exactamente dos terminos.", content: "Algebra" },
    { answer: "biyeccion", question: "Con la B: correspondencia uno a uno entre dos conjuntos.", concept: "Biyeccion", definition: "Funcion que es inyectiva y sobreyectiva al mismo tiempo.", example: "f(x)=x+1 en enteros define una biyeccion.", application: "Estudio formal de funciones y cardinalidad.", procedure: "Comprueba unicidad de imagen y cobertura del codominio.", mistakes: "Confundir inyectiva con biyectiva.", hint: "Empareja todos los elementos sin repetir.", content: "Funciones" }
  ],
  C: [
    { answer: "cociente", question: "Con la C: resultado de una division.", concept: "Cociente", definition: "Numero obtenido al dividir el dividendo entre el divisor.", example: "18 / 6 = 3.", application: "Resolucion de operaciones y proporcionalidad.", procedure: "Realiza la division y verifica multiplicando cociente por divisor.", mistakes: "Confundir cociente con resto en divisiones no exactas.", hint: "Es el resultado principal de dividir.", content: "Numeros y calculo" }
  ],
  D: [
    { answer: "derivada", question: "Con la D: tasa de variacion instantanea de una funcion.", concept: "Derivada", definition: "Mide la pendiente de la recta tangente en un punto.", example: "Si f(x)=x^2, entonces f'(x)=2x.", application: "Maximos, minimos y crecimiento.", procedure: "Aplica reglas de derivacion.", mistakes: "Derivar constantes como si fueran variables.", hint: "Relacionada con la pendiente.", content: "Funciones" }
  ],
  E: [
    { answer: "exponente", question: "Con la E: numero que indica cuantas veces se multiplica una base por si misma.", concept: "Exponente", definition: "En una potencia determina la repeticion de la base.", example: "2^5 = 32, exponente 5.", application: "Potencias, notacion cientifica y funciones.", procedure: "Identifica base y exponente.", mistakes: "Confundir exponente con resultado.", hint: "Aparece en las potencias.", content: "Potencias y raices" }
  ],
  F: [
    { answer: "factorizacion", question: "Con la F: proceso de escribir un polinomio como producto de factores.", concept: "Factorizacion", definition: "Descomponer para simplificar o resolver ecuaciones.", example: "x^2-9=(x-3)(x+3).", application: "Ecuaciones y fracciones algebraicas.", procedure: "Extrae factor comun o usa identidades.", mistakes: "No comprobar el producto final.", hint: "Convierte sumas/restas en producto.", content: "Algebra" }
  ],
  G: [
    { answer: "geometria analitica", question: "Con la G: rama que estudia figuras mediante coordenadas y ecuaciones.", concept: "Geometria analitica", definition: "Relaciona algebra y geometria en el plano cartesiano.", example: "Recta: y=mx+n.", application: "Distancia, pendiente y posiciones relativas.", procedure: "Modela con ecuaciones y representa.", mistakes: "Intercambiar coordenadas.", hint: "Une algebra y plano cartesiano.", content: "Geometria" }
  ],
  H: [
    { answer: "hiperbola", question: "Con la H: curva con dos ramas obtenida como seccion conica.", concept: "Hiperbola", definition: "Conjunto de puntos con diferencia de distancias a focos constante.", example: "x^2/a^2 - y^2/b^2 = 1.", application: "Modelos fisicos y geometria avanzada.", procedure: "Identifica centro, ejes y focos.", mistakes: "Confundirla con parabola.", hint: "Tiene dos ramas.", content: "Funciones" }
  ],
  I: [
    { answer: "inecuacion", question: "Con la I: desigualdad algebraica con una o varias incognitas.", concept: "Inecuacion", definition: "Expresa relaciones con <, >, <= o >=.", example: "2x-1>5.", application: "Intervalos solucion y modelizacion.", procedure: "Despeja y representa en recta.", mistakes: "No invertir signo al multiplicar por negativo.", hint: "No lleva igual.", content: "Algebra" }
  ],
  J: [
    { answer: "justificacion", question: "Con la J: explicacion matematica de por que un resultado es correcto.", concept: "Justificacion", definition: "Argumentacion con propiedades y pasos validos que respaldan una conclusion.", example: "Demostrar una igualdad paso a paso.", application: "Razonamiento matematico y demostraciones.", procedure: "Explica cada paso con una propiedad.", mistakes: "Dar solo el resultado final.", hint: "No basta con acertar, hay que explicar.", content: "Algebra" }
  ],
  K: [
    { answer: "kilovatio", question: "Contiene la K: unidad de potencia equivalente a mil vatios.", concept: "Kilovatio", definition: "Se usa para potencia electrica en contextos reales.", example: "2 kW = 2000 W.", application: "Consumo energetico y conversiones.", procedure: "Convierte entre kW y W.", mistakes: "Confundir potencia con energia.", hint: "Se abrevia kW.", content: "Numeros y calculo" }
  ],
  L: [
    { answer: "logaritmo", question: "Con la L: exponente al que hay que elevar una base para obtener un numero.", concept: "Logaritmo", definition: "Operacion inversa de la potenciacion.", example: "log10(100)=2.", application: "Escalas y funciones logaritmicas.", procedure: "Transforma entre forma exponencial y logaritmica.", mistakes: "No respetar la base.", hint: "Inversa de potencia.", content: "Funciones" }
  ],
  M: [
    { answer: "matriz", question: "Con la M: arreglo rectangular de numeros en filas y columnas.", concept: "Matriz", definition: "Objeto algebraico para organizar y operar datos.", example: "A=[[1,2],[3,4]].", application: "Sistemas y transformaciones.", procedure: "Identifica orden y elementos.", mistakes: "Sumar matrices de distinto orden.", hint: "Filas y columnas.", content: "Algebra" }
  ],
  N: [
    { answer: "notacion cientifica", question: "Con la N: forma de escribir numeros muy grandes o pequenos como a x 10^n.", concept: "Notacion cientifica", definition: "Representa cantidades de forma compacta.", example: "0,00034 = 3,4 x 10^-4.", application: "Calculo cientifico y tecnologia.", procedure: "Mueve coma y ajusta exponente.", mistakes: "Signo incorrecto del exponente.", hint: "Usa potencias de 10.", content: "Potencias y raices" }
  ],
  "Ñ": [
    { answer: "año", question: "Contiene la Ñ: unidad temporal usada en modelos de crecimiento exponencial.", concept: "Modelizacion temporal", definition: "Permite analizar evolucion anual de magnitudes.", example: "P(t)=P0(1+r)^t.", application: "Interes compuesto y poblacion.", procedure: "Define valor inicial, tasa y tiempo.", mistakes: "Confundir crecimiento lineal y exponencial.", hint: "Unidad temporal de 12 meses.", content: "Funciones" }
  ],
  O: [
    { answer: "polinomio", question: "Contiene la O: suma de monomios con exponentes enteros no negativos.", concept: "Polinomio", definition: "Expresion algebraica formada por terminos.", example: "x^3 - 2x + 1.", application: "Modelos algebraicos y ecuaciones.", procedure: "Ordena por grado y simplifica.", mistakes: "Mezclar terminos no semejantes.", hint: "Puede tener varios terminos.", content: "Algebra" }
  ],
  P: [
    { answer: "parabola", question: "Con la P: grafica tipica de una funcion cuadratica.", concept: "Parabola", definition: "Curva de segundo grado con eje de simetria.", example: "y = x^2 - 4x + 3.", application: "Maximos, minimos y trayectorias.", procedure: "Analiza vertice y cortes.", mistakes: "Confundir concavidad.", hint: "Relacionada con x^2.", content: "Funciones" }
  ],
  Q: [
    { answer: "ecuacion", question: "Contiene la Q: igualdad algebraica que se verifica para ciertos valores.", concept: "Ecuacion", definition: "Relacion entre expresiones con incognitas.", example: "x^2 - 5x + 6 = 0.", application: "Problemas y modelizacion.", procedure: "Resuelve por factorizacion o formula.", mistakes: "No comprobar soluciones.", hint: "Tiene signo igual.", content: "Algebra" }
  ],
  R: [
    { answer: "radical", question: "Con la R: expresion que contiene una raiz.", concept: "Radical", definition: "Representa raices n-esimas.", example: "√(x^2+1).", application: "Simplificacion y ecuaciones.", procedure: "Opera usando propiedades de raices.", mistakes: "Sumar radicales no semejantes.", hint: "Incluye simbolo de raiz.", content: "Potencias y raices" }
  ],
  S: [
    { answer: "sucesion", question: "Con la S: conjunto ordenado de terminos que siguen una regla.", concept: "Sucesion", definition: "Puede ser aritmetica o geometrica.", example: "2, 6, 18,... es geometrica.", application: "Modelos recurrentes.", procedure: "Determina razon o diferencia.", mistakes: "Confundir tipo de sucesion.", hint: "Serie ordenada.", content: "Sucesiones" }
  ],
  T: [
    { answer: "trigonometria", question: "Con la T: estudio de relaciones entre angulos y lados.", concept: "Trigonometria", definition: "Incluye seno, coseno y tangente.", example: "sin(30°)=1/2.", application: "Alturas, distancias y fisica.", procedure: "Identifica triangulo y razon trigonometrica.", mistakes: "Intercambiar catetos.", hint: "Seno, coseno y tangente.", content: "Geometria" }
  ],
  U: [
    { answer: "cuadratica", question: "Contiene la U: funcion de segundo grado cuya grafica es una parabola.", concept: "Funcion cuadratica", definition: "Tiene forma ax^2+bx+c.", example: "y = 2x^2 - 3x + 1.", application: "Modelos de optimizacion.", procedure: "Calcula vertice y raices.", mistakes: "Tomar b^2-4ac con signo erróneo.", hint: "Depende de x^2.", content: "Funciones" }
  ],
  V: [
    { answer: "vector", question: "Con la V: magnitud con modulo, direccion y sentido.", concept: "Vector", definition: "Se representa mediante segmento orientado.", example: "v=(3, -1).", application: "Geometria analitica y fisica.", procedure: "Opera por componentes.", mistakes: "Confundir modulo con coordenadas.", hint: "Tiene direccion.", content: "Geometria" }
  ],
  W: [
    { answer: "web", question: "Contiene la W: medio digital donde se publican tablas y graficos para interpretar datos.", concept: "Web", definition: "Entorno digital donde se consulta informacion y datos.", example: "Consultar una grafica de temperaturas en una web educativa.", application: "Lectura critica de datos reales.", procedure: "Revisa fuente, ejes y unidades antes de interpretar.", mistakes: "Confiar en datos sin verificar origen.", hint: "Internet.", content: "Interpretacion de datos" }
  ],
  X: [
    { answer: "exponencial", question: "Contiene la X: tipo de funcion de la forma a·b^x.", concept: "Funcion exponencial", definition: "La variable aparece en el exponente.", example: "f(x)=2^x.", application: "Crecimiento y decrecimiento rapido.", procedure: "Analiza base y comportamiento.", mistakes: "Confundirla con potencia.", hint: "La x esta en el exponente.", content: "Funciones" }
  ],
  Y: [
    { answer: "proyeccion", question: "Contiene la Y: representacion de una figura sobre una recta o plano.", concept: "Proyeccion", definition: "Traslada puntos manteniendo una regla geometrica.", example: "Proyeccion ortogonal sobre un eje.", application: "Geometria y dibujo tecnico.", procedure: "Traza perpendiculares al soporte.", mistakes: "No respetar perpendicularidad.", hint: "Se usa en geometria analitica.", content: "Geometria" }
  ],
  Z: [
    { answer: "azar", question: "Contiene la Z: fenomeno en el que el resultado no es determinista.", concept: "Azar", definition: "Base conceptual de la probabilidad.", example: "Lanzar un dado equilibrado.", application: "Probabilidad simple y compuesta.", procedure: "Cuenta casos posibles y favorables.", mistakes: "Confundir azar con imposibilidad.", hint: "Relacionado con probabilidad.", content: "Probabilidad" }
  ]
};

const QUESTION_BANK_1ESO = {
  A: [
    { answer: "area", question: "Con la A: magnitud que mide la superficie de una figura plana." },
    { answer: "angulo", question: "Con la A: abertura formada por dos semirrectas con un mismo origen." },
    { answer: "azar", question: "Con la A: situacion en la que el resultado no puede predecirse con seguridad." }
  ],
  B: [
    { answer: "base", question: "Con la B: lado de referencia de una figura para calcular su area." },
    { answer: "bisectriz", question: "Con la B: semirrecta que divide un angulo en dos partes iguales." },
    { answer: "barra", question: "Con la B: tipo de grafico usado para representar datos." }
  ],
  C: [
    { answer: "coordenadas", question: "Con la C: par de numeros que localiza un punto en el plano." },
    { answer: "circunferencia", question: "Con la C: linea curva cerrada cuyos puntos estan a la misma distancia del centro." },
    { answer: "cociente", question: "Con la C: resultado de una division." }
  ],
  D: [
    { answer: "decimal", question: "Con la D: numero que representa partes de la unidad mediante una coma." },
    { answer: "denominador", question: "Con la D: numero inferior de una fraccion que indica en cuantas partes se divide la unidad." },
    { answer: "diagrama", question: "Con la D: representacion grafica de datos o relaciones." }
  ],
  E: [
    { answer: "ecuacion", question: "Con la E: igualdad matematica con una incognita." },
    { answer: "equivalente", question: "Con la E: que tiene el mismo valor aunque tenga distinta forma." },
    { answer: "exponente", question: "Con la E: numero que indica cuantas veces se multiplica una base por si misma." }
  ],
  F: [
    { answer: "fraccion", question: "Con la F: numero que expresa una parte de la unidad." },
    { answer: "frecuencia", question: "Con la F: numero de veces que aparece un dato." },
    { answer: "figura", question: "Con la F: forma geometrica formada por puntos, lineas o superficies." }
  ],
  G: [
    { answer: "grafico", question: "Con la G: representacion visual de datos." },
    { answer: "grado", question: "Con la G: unidad de medida de angulos." },
    { answer: "geometria", question: "Con la G: rama de las matematicas que estudia formas, medidas y posiciones." }
  ],
  H: [
    { answer: "hectarea", question: "Con la H: unidad de superficie equivalente a 10 000 metros cuadrados." },
    { answer: "hexagono", question: "Con la H: poligono de seis lados." },
    { answer: "horizontal", question: "Contiene la H: direccion de una linea paralela al suelo." }
  ],
  I: [
    { answer: "incognita", question: "Con la I: valor desconocido que se representa normalmente con una letra." },
    { answer: "igualdad", question: "Con la I: relacion que indica que dos expresiones tienen el mismo valor." },
    { answer: "intervalo", question: "Con la I: conjunto de numeros comprendidos entre dos extremos." }
  ],
  J: [
    { answer: "jerarquia", question: "Con la J: orden en que se realizan las operaciones en una expresion." },
    { answer: "justificar", question: "Con la J: explicar matematicamente por que un resultado es correcto." },
    { answer: "eje", question: "Contiene la J: recta de referencia en el plano cartesiano." }
  ],
  K: [
    { answer: "kilometro", question: "Con la K: unidad de longitud equivalente a 1000 metros." },
    { answer: "kilogramo", question: "Con la K: unidad de masa equivalente a 1000 gramos." },
    { answer: "kilo", question: "Con la K: prefijo que indica mil unidades." }
  ],
  L: [
    { answer: "longitud", question: "Con la L: magnitud que mide la distancia entre dos puntos." },
    { answer: "lado", question: "Con la L: cada uno de los segmentos que forman un poligono." },
    { answer: "literal", question: "Con la L: parte formada por letras en una expresion algebraica." }
  ],
  M: [
    { answer: "media", question: "Con la M: medida que se obtiene sumando los datos y dividiendo entre su cantidad." },
    { answer: "mediana", question: "Con la M: valor central de un conjunto de datos ordenados." },
    { answer: "moda", question: "Con la M: dato que mas se repite en una distribucion." }
  ],
  N: [
    { answer: "numero", question: "Con la N: objeto matematico que sirve para contar, medir u ordenar." },
    { answer: "numerador", question: "Con la N: numero superior de una fraccion." },
    { answer: "negativo", question: "Con la N: numero menor que cero." }
  ],
  "Ñ": [
    { answer: "señal", question: "Contiene la Ñ: indicacion o marca que ayuda a interpretar una grafica." },
    { answer: "tamaño", question: "Contiene la Ñ: medida o dimension de una figura u objeto." },
    { answer: "año", question: "Contiene la Ñ: unidad de tiempo usada en problemas matematicos." }
  ],
  O: [
    { answer: "operacion", question: "Con la O: accion matematica como sumar, restar, multiplicar o dividir." },
    { answer: "ordenada", question: "Con la O: coordenada vertical de un punto en el plano." },
    { answer: "opuesto", question: "Con la O: numero que sumado con otro da cero." }
  ],
  P: [
    { answer: "porcentaje", question: "Con la P: forma de expresar una parte de cada cien." },
    { answer: "proporcionalidad", question: "Con la P: relacion entre magnitudes que mantienen una misma razon." },
    { answer: "perimetro", question: "Con la P: suma de las longitudes de los lados de una figura." }
  ],
  Q: [
    { answer: "quebrado", question: "Contiene la Q: forma antigua de llamar a una fraccion." },
    { answer: "equivalente", question: "Contiene la Q: que tiene el mismo valor aunque tenga distinta forma." },
    { answer: "equilatero", question: "Contiene la Q: triangulo que tiene sus tres lados iguales." }
  ],
  R: [
    { answer: "recta", question: "Con la R: linea infinita que no tiene curvatura." },
    { answer: "razon", question: "Con la R: cociente entre dos cantidades comparables." },
    { answer: "raiz", question: "Con la R: operacion que permite encontrar un numero que, multiplicado por si mismo, da otro." }
  ],
  S: [
    { answer: "simetria", question: "Con la S: propiedad por la que una figura coincide consigo misma al reflejarse." },
    { answer: "segmento", question: "Con la S: parte de una recta limitada por dos puntos." },
    { answer: "sucesion", question: "Con la S: conjunto ordenado de numeros que siguen una regla." }
  ],
  T: [
    { answer: "tabla", question: "Con la T: organizacion de datos en filas y columnas." },
    { answer: "triangulo", question: "Con la T: poligono de tres lados." },
    { answer: "termino", question: "Con la T: cada uno de los elementos de una sucesion o de una expresion." }
  ],
  U: [
    { answer: "unidad", question: "Con la U: cantidad de referencia que se usa para medir." },
    { answer: "unico", question: "Con la U: que tiene una sola solucion o posibilidad." },
    { answer: "ultimo", question: "Con la U: termino final conocido en una sucesion o lista." }
  ],
  V: [
    { answer: "variable", question: "Con la V: simbolo que puede tomar distintos valores." },
    { answer: "vertice", question: "Con la V: punto donde se unen dos lados o aristas." },
    { answer: "volumen", question: "Con la V: medida del espacio que ocupa un cuerpo." }
  ],
  W: [
    { answer: "web", question: "Contiene la W: pagina digital donde pueden aparecer tablas, graficos o actividades matematicas." },
    { answer: "wiki", question: "Contiene la W: sitio colaborativo donde se puede consultar informacion." },
    { answer: "software", question: "Contiene la W: conjunto de programas que permite usar herramientas matematicas digitales." }
  ],
  X: [
    { answer: "exponente", question: "Contiene la X: numero que indica cuantas veces se multiplica una base por si misma." },
    { answer: "expresion", question: "Contiene la X: combinacion de numeros, letras y operaciones." },
    { answer: "eje x", question: "Contiene la X: eje horizontal del plano cartesiano." }
  ],
  Y: [
    { answer: "eje y", question: "Contiene la Y: eje vertical del plano cartesiano." },
    { answer: "mayor", question: "Contiene la Y: numero que tiene mas valor que otro." },
    { answer: "leyenda", question: "Contiene la Y: explicacion que ayuda a interpretar un grafico." }
  ],
  Z: [
    { answer: "azar", question: "Contiene la Z: situacion en la que no se puede saber con seguridad el resultado." },
    { answer: "razon", question: "Contiene la Z: cociente entre dos cantidades comparables." },
    { answer: "raiz", question: "Contiene la Z: operacion inversa de elevar al cuadrado." }
  ]
};

const QUESTION_BANK_3ESO = {
  A: [QUESTION_BANK_2ESO.A[1], QUESTION_BANK_2ESO.A[0]],
  B: [QUESTION_BANK_4ESO_B.B[0], QUESTION_BANK_2ESO.B[0]],
  C: [QUESTION_BANK_2ESO.C[0]],
  D: [
    { answer: "desigualdad", question: "Con la D: relacion matematica que compara dos expresiones con signos como >, <, <= o >=.", concept: "Desigualdad", definition: "Indica que dos cantidades no son iguales y establece un orden entre ellas.", example: "x + 2 > 7 implica x > 5.", application: "Resolver inecuaciones y comparar intervalos.", procedure: "Opera como en una ecuacion y cambia el signo si multiplicas o divides por un numero negativo.", mistakes: "Olvidar invertir el signo al multiplicar o dividir por un numero negativo.", hint: "Se representa con > o <.", content: "Algebra" }
  ],
  E: [QUESTION_BANK_2ESO.E[0]],
  F: [QUESTION_BANK_2ESO.F[2]],
  G: [QUESTION_BANK_2ESO.G[0]],
  H: [QUESTION_BANK_2ESO.H[1]],
  Q: [
    { answer: "quebrado", question: "Contiene la Q: forma antigua de llamar a una fraccion.", concept: "Numero quebrado", definition: "Nombre tradicional para una fraccion o numero racional escrito en forma de cociente.", example: "3/4 es un numero quebrado.", application: "Relacionar lenguaje cotidiano con fracciones.", procedure: "Identifica numerador y denominador.", mistakes: "Confundirlo con un numero entero.", hint: "Es otro nombre para una fraccion.", content: "Fracciones" },
    QUESTION_BANK_2ESO.Q[1],
    QUESTION_BANK_2ESO.Q[2]
  ],
  J: [QUESTION_BANK_2ESO.J[2]],
  K: [QUESTION_BANK_2ESO.K[2]],
  L: [QUESTION_BANK_2ESO.L[0]],
  M: [QUESTION_BANK_2ESO.M[0]],
  N: [QUESTION_BANK_4ESO_B.N[0]],
  W: [
    { answer: "web", question: "Contiene la W: medio digital donde se publican tablas y graficos para interpretar datos.", concept: "Web", definition: "Entorno digital donde se consulta informacion y datos.", example: "Consultar una grafica de temperaturas en una web educativa.", application: "Lectura critica de datos reales.", procedure: "Revisa fuente, ejes y unidades antes de interpretar.", mistakes: "Confiar en datos sin verificar origen.", hint: "Internet.", content: "Interpretacion de datos" },
    { answer: "wifi", question: "Contiene la W: tecnologia de conexion usada para acceder a plataformas con recursos matematicos.", concept: "Conectividad digital", definition: "Permite acceder a contenido y actividades en linea.", example: "Resolver ejercicios interactivos en clase virtual.", application: "Aprendizaje digital y consulta de recursos.", procedure: "Conecta, verifica fuente y analiza informacion.", mistakes: "Usar fuentes no fiables.", hint: "Conexion inalambrica.", content: "Interpretacion de datos" }
  ],
  O: [QUESTION_BANK_2ESO.O[1]],
  P: [QUESTION_BANK_4ESO_B.P[0]],
  Q: [QUESTION_BANK_4ESO_B.Q[0]],
  R: [QUESTION_BANK_2ESO.R[1]],
  S: [QUESTION_BANK_2ESO.S[0]],
  T: [QUESTION_BANK_4ESO_B.T[0]],
  U: [QUESTION_BANK_2ESO.U[1]],
  V: [QUESTION_BANK_2ESO.V[0]],
  W: [QUESTION_BANK_2ESO.W[0]],
  X: [QUESTION_BANK_2ESO.X[0]],
  Y: [QUESTION_BANK_2ESO.Y[1]],
  Z: [QUESTION_BANK_2ESO.Z[1]]
};

const LEVEL_LABELS = {
  "1ESO": "1º ESO",
  "2ESO": "2º ESO",
  "3ESO": "3º ESO",
  "4ESO": "4º ESO",
  "4ESO_B": "4º ESO"
};

const PASAPALABRA_MATEMATICAS = {
  "1ESO": {
    "A": ["area", "angulo", "azar"],
    "B": ["base", "bisectriz", "bloque"],
    "C": ["coordenadas", "circunferencia", "cociente"],
    "D": ["decimal", "denominador", "diagrama"],
    "E": ["ecuacion", "equivalente", "exponente"],
    "F": ["fraccion", "frecuencia", "figura"],
    "G": ["grafico", "grado", "geometria"],
    "H": ["hipotenusa", "hectarea", "histograma"],
    "I": ["incognita", "intervalo", "igualdad"],
    "J": ["jerarquia", "justificar", "juego"],
    "K": ["kilometro", "kilogramo", "kilo"],
    "L": ["longitud", "lineal", "literal"],
    "M": ["media", "mediana", "moda"],
    "N": ["numero", "numerador", "negativo"],
    "Ñ": ["senal", "tamano", "ano"],
    "O": ["operacion", "ordenada", "opuesto"],
    "P": ["porcentaje", "proporcionalidad", "pitagoras"],
    "Q": ["quebrado", "equivalente", "equilatero"],
    "R": ["recta", "razon", "raiz"],
    "S": ["simetria", "sistema", "sucesion"],
    "T": ["tabla", "triangulo", "teorema"],
    "U": ["unidad", "uniforme", "ultimo"],
    "V": ["variable", "vertice", "volumen"],
    "W": ["web", "wiki", "software"],
    "X": ["exponente", "expresion", "eje_x"],
    "Y": ["eje_y", "coordenada_y", "valor_y"],
    "Z": ["azar", "razon", "trapezoide"]
  },
  "2ESO": {
    "A": ["apotema", "area", "altura"],
    "B": ["base", "bisectriz", "binomio"],
    "C": ["circunferencia", "coordenadas", "cociente"],
    "D": ["desigualdad", "decimal", "diagrama"],
    "E": ["ecuacion", "expresion", "equivalente"],
    "F": ["funcion", "fraccion", "frecuencia"],
    "G": ["grafica", "geometria", "grado"],
    "H": ["histograma", "hipotenusa", "hectarea"],
    "I": ["intervalo", "incognita", "inversa"],
    "J": ["jerarquia", "justificar", "justificacion"],
    "K": ["kilometro", "kilogramo", "kilo"],
    "L": ["lineal", "longitud", "literal"],
    "M": ["mediana", "media", "moda"],
    "N": ["negativo", "numerador", "numero"],
    "Ñ": ["senal", "tamano_muestral", "ano"],
    "O": ["ordenada", "operacion", "opuesto"],
    "P": ["proporcionalidad", "porcentaje", "pitagoras"],
    "Q": ["quebrado", "equivalente", "equilatero"],
    "R": ["razon", "raiz", "recta"],
    "S": ["sistema", "simetria", "semejanza"],
    "T": ["teorema", "tabla", "triangulo"],
    "U": ["unidad", "uniforme", "ultimo"],
    "V": ["volumen", "variable", "vertice"],
    "W": ["web", "wiki", "software"],
    "X": ["expresion", "exponente", "maximo"],
    "Y": ["mayor", "adyacente", "inyectiva"],
    "Z": ["azar", "razon", "trapezoide"]
  },
  "3ESO": {
    "A": ["algebra", "azar", "area"],
    "B": ["binomio", "bisectriz", "base"],
    "C": ["coordenadas", "cuadratica", "cociente"],
    "D": ["desigualdad", "distribucion", "decimal"],
    "E": ["ecuacion", "expresion", "exponente"],
    "F": ["funcion", { answer: "factorizacion", question: "Con la F: proceso de escribir una expresion algebraica como producto de factores." }, "frecuencia"],
    "G": ["grafica", "geometria", "grado"],
    "H": ["histograma", "hipotenusa", { answer: "homologos", question: "Con la H: elementos que ocupan la misma posicion en figuras semejantes." }],
    "I": ["inecuacion", "intervalo", "incognita"],
    "J": ["justificacion", "jerarquia", "justificar"],
    "K": ["kilometro", "kilogramo", "kilo"],
    "L": ["lineal", "literal", "longitud"],
    "M": [
      { answer: "monomio", question: "Con la M: expresion algebraica formada por un solo termino." },
      "media",
      "mediana"
    ],
    "N": ["notacion_cientifica", "numero", "negativo"],
    "Ñ": ["senal", "tamano_muestral", "ano"],
    "O": ["ordenada", "opuesto", "operacion"],
    "P": ["parabola", "proporcionalidad", "polinomio"],
    "Q": ["quebrado", "equivalente", "equilatero"],
    "R": ["raiz", "razon", "recta"],
    "S": ["sistema", "sucesion", "simetria"],
    "T": ["tabla", "teorema", "triangulo"],
    "U": [
      { answer: "union", question: "Con la U: conjunto formado por los elementos que pertenecen a uno u otro conjunto." },
      "unidad",
      "ultimo"
    ],
    "V": ["variable", "vertice", "volumen"],
    "W": ["web", "wiki", "software"],
    "X": ["exponente", "expresion", "eje_x"],
    "Y": [
      { answer: "eje_y", question: "Con la Y: eje vertical del plano cartesiano." },
      { answer: "coordenada_y", question: "Contiene la Y: valor vertical de un punto en el plano cartesiano." },
      { answer: "variable_y", question: "Contiene la Y: variable que suele representar el valor de salida de una funcion." }
    ],
    "Z": ["azar", "razon", "trapezoide"]
  },
  "4ESO": {
    "A": ["asintota", "argumento", "angulo"],
    "B": ["binomio", { answer: "bicuadrada", question: "Con la B: ecuacion en la que aparecen potencias pares de la incognita, como x^4 y x^2." }, "base"],
    "C": ["cociente", "cuadratica", "coordenadas"],
    "D": ["dominio", "distancia", "discriminante"],
    "E": ["exponencial", "ecuacion", "exponente"],
    "F": ["factorizacion", "funcion", "fraccion"],
    "G": ["geometria_analitica", "grafica", "grado"],
    "H": ["hiperbola", "hipotenusa", "histograma"],
    "I": ["inecuacion", "intervalo", { answer: "irracional", question: "Con la I: numero que no puede expresarse como fraccion de dos enteros." }],
    "J": ["justificacion", "jerarquia", "justificar"],
    "K": ["kilovatio", "kilometro", "kilo"],
    "L": ["logaritmo", "limite", "lineal"],
    "M": [
      { answer: "modulo", question: "Con la M: valor absoluto de un numero o longitud de un vector." },
      { answer: "monomio", question: "Con la M: expresion algebraica formada por un solo termino." },
      "media"
    ],
    "N": ["notacion_cientifica", "numero_real", "negativo"],
    "Ñ": ["senal", "tamano_muestral", "ano"],
    "O": ["ordenada", "operacion", "opuesto"],
    "P": ["polinomio", "parabola", "probabilidad"],
    "Q": ["quebrado", "equivalente", "equilatero"],
    "R": ["radical", "razon", "raiz"],
    "S": ["sucesion", "sistema", { answer: "seno", question: "Con la S: razon trigonometrica que relaciona el cateto opuesto con la hipotenusa." }],
    "T": ["trigonometria", "tangente", "teorema"],
    "U": ["unidad", "uniforme", "ultimo"],
    "V": ["vector", "variable", "vertice"],
    "W": ["web", "wiki", "software"],
    "X": ["exponente", "expresion", "eje_x"],
    "Y": ["eje_y", "coordenada_y", "valor_y"],
    "Z": ["azar", "razon", "trapezoide"]
  }
};

function normalizeListadoWord(word) {
  return String(word || "").replace(/_/g, " ").trim();
}

function termToConcept(term) {
  return normalizeListadoWord(term)
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeTermKey(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9ñ ]/g, "")
    .trim();
}

function extractPromptLetter(question) {
  const match = String(question || "").match(/(?:Con|Contiene) la\s+([A-ZÑ])/i);
  return match ? match[1].toUpperCase() : "";
}

function buildLegacyQuestionCatalog() {
  const catalog = {};
  const sourceBanks = [QUESTION_BANK_1ESO, QUESTION_BANK_2ESO, QUESTION_BANK_3ESO, QUESTION_BANK_4ESO_B];

  sourceBanks.forEach((bank) => {
    LETTERS.forEach((letter) => {
      const pool = Array.isArray(bank?.[letter]) ? bank[letter] : [];
      pool.forEach((q) => {
        if (!q || !q.answer || !q.question) return;
        const key = normalizeTermKey(q.answer);
        if (!catalog[key]) catalog[key] = [];
        catalog[key].push(q);
      });
    });
  });

  return catalog;
}

const LEGACY_QUESTION_CATALOG = buildLegacyQuestionCatalog();

const TERM_CLUES = {
  azar: {
    prompt: "situacion en la que el resultado no puede predecirse con certeza",
    definition: "Concepto base de probabilidad, donde interviene la aleatoriedad.",
    content: "Probabilidad"
  },
  expresion: {
    prompt: "combinacion de numeros, letras y operaciones sin signo igual",
    definition: "Representa relaciones matematicas y se simplifica operando terminos semejantes.",
    content: "Algebra"
  },
  polinomio: {
    prompt: "expresion algebraica formada por suma o resta de monomios",
    definition: "Sus terminos tienen exponentes enteros no negativos y puede ordenarse por grado.",
    content: "Algebra"
  },
  algebra: {
    prompt: "rama de las matematicas que usa letras y simbolos para generalizar operaciones",
    definition: "Estudia expresiones, ecuaciones e inecuaciones con variables.",
    content: "Algebra"
  },
  altura: {
    prompt: "segmento perpendicular desde un vertice a la base o su prolongacion",
    definition: "Se usa para calcular areas de triangulos y otras figuras.",
    content: "Geometria"
  },
  bloque: {
    prompt: "cuerpo geometrico de caras planas, como un prisma rectangular",
    definition: "En contextos escolares suele referirse a un solido tipo prisma.",
    content: "Geometria"
  },
  "coordenada y": {
    prompt: "valor vertical de un punto en el plano cartesiano",
    definition: "Es la segunda componente del par ordenado (x, y).",
    content: "Funciones"
  },
  cuadrado: {
    prompt: "poligono de cuatro lados iguales y cuatro angulos rectos",
    definition: "Es un caso particular de rectangulo y de rombo.",
    content: "Geometria"
  },
  cuerpo: {
    prompt: "figura geometrica tridimensional con volumen",
    definition: "Incluye prismas, piramides, cilindros, conos y esferas.",
    content: "Geometria"
  },
  discriminante: {
    prompt: "expresion b^2 - 4ac de una ecuacion cuadratica",
    definition: "Permite conocer el numero de soluciones reales.",
    content: "Algebra"
  },
  distancia: {
    prompt: "longitud del segmento que une dos puntos",
    definition: "En el plano puede calcularse con la formula de distancia.",
    content: "Geometria"
  },
  distribucion: {
    prompt: "forma en que se reparten los datos en una muestra",
    definition: "Describe concentracion, dispersion y frecuencia de valores.",
    content: "Estadistica"
  },
  dominio: {
    prompt: "conjunto de valores de entrada para los que una funcion esta definida",
    definition: "Suele expresarse mediante intervalos o condiciones.",
    content: "Funciones"
  },
  "eje x": {
    prompt: "eje horizontal del plano cartesiano",
    definition: "Tambien se llama eje de abscisas.",
    content: "Funciones"
  },
  figura: {
    prompt: "forma geometrica definida por puntos, lineas o superficies",
    definition: "Puede ser plana o espacial.",
    content: "Geometria"
  },
  grafica: {
    prompt: "representacion visual de datos o de una funcion",
    definition: "Ayuda a interpretar tendencias y relaciones.",
    content: "Funciones"
  },
  igualdad: {
    prompt: "relacion que indica que dos expresiones tienen el mismo valor",
    definition: "Se representa con el signo =.",
    content: "Algebra"
  },
  juego: {
    prompt: "actividad con reglas usada para aprender y practicar contenidos",
    definition: "Favorece la motivacion y la consolidacion de conceptos.",
    content: "Metodologia"
  },
  limite: {
    prompt: "valor al que se aproxima una funcion cuando la variable se acerca a un punto",
    definition: "Concepto central del analisis matematico.",
    content: "Funciones"
  },
  modulo: {
    prompt: "valor absoluto de un numero o magnitud de un vector",
    definition: "Representa distancia al cero o longitud de un vector.",
    content: "Numeros y calculo"
  },
  "numero real": {
    prompt: "numero que puede representarse en la recta numerica",
    definition: "Incluye racionales e irracionales.",
    content: "Numeros y calculo"
  },
  probabilidad: {
    prompt: "medida de la posibilidad de que ocurra un suceso",
    definition: "Toma valores entre 0 y 1, o entre 0% y 100%.",
    content: "Probabilidad"
  },
  semejanza: {
    prompt: "relacion entre figuras con misma forma y distinta escala",
    definition: "Conserva angulos y proporcionalidad entre lados.",
    content: "Geometria"
  },
  software: {
    prompt: "conjunto de programas que permite realizar tareas en un dispositivo",
    definition: "En clase puede usarse para calcular, graficar o simular.",
    content: "Interpretacion de datos"
  },
  "tamano muestral": {
    prompt: "numero de datos u observaciones que tiene una muestra",
    definition: "Suele representarse con n en estadistica.",
    content: "Estadistica"
  },
  tangente: {
    prompt: "razon trigonometrica entre cateto opuesto y cateto adyacente",
    definition: "Tambien es la recta que toca una curva en un punto.",
    content: "Geometria"
  },
  "valor y": {
    prompt: "resultado vertical asociado a un valor de x en una funcion",
    definition: "Es la salida o imagen de la funcion.",
    content: "Funciones"
  },
  wiki: {
    prompt: "sitio colaborativo donde se crea y edita informacion",
    definition: "Puede emplearse para consultar conceptos y ejemplos.",
    content: "Interpretacion de datos"
  }
};

function findLegacyQuestionForLetter(letter, answer) {
  const key = normalizeTermKey(answer);
  const candidates = LEGACY_QUESTION_CATALOG[key] || [];
  if (!candidates.length) return null;

  return (
    candidates.find((q) => extractPromptLetter(q.question) === letter) ||
    null
  );
}

function buildQuestionFromTerm(letter, rawTerm) {
  const termSpec = rawTerm && typeof rawTerm === "object" ? rawTerm : null;
  const answer = normalizeListadoWord(termSpec ? termSpec.answer : rawTerm);
  const legacyQuestion = findLegacyQuestionForLetter(letter, answer);
  const explicitQuestion = termSpec?.question ? String(termSpec.question) : "";

  if (explicitQuestion) {
    return {
      ...(legacyQuestion || {}),
      answer,
      question: explicitQuestion,
      concept: termSpec?.concept || legacyQuestion?.concept || termToConcept(rawTerm),
      definition: termSpec?.definition || legacyQuestion?.definition || `Concepto clave del vocabulario matematico: ${answer}.`,
      example: termSpec?.example || legacyQuestion?.example || `Ejemplo de uso: ${answer}.`,
      application: termSpec?.application || legacyQuestion?.application || "Aplicacion en ejercicios y resolucion de problemas.",
      procedure: termSpec?.procedure || legacyQuestion?.procedure || "Relaciona el termino con su definicion y contexto matematico.",
      mistakes: termSpec?.mistakes || legacyQuestion?.mistakes || "No confundir el termino con otros conceptos similares.",
      hint: termSpec?.hint || legacyQuestion?.hint || `Empieza con ${letter}.`,
      content: termSpec?.content || legacyQuestion?.content || "Vocabulario"
    };
  }

  if (legacyQuestion) {
    return {
      ...legacyQuestion,
      answer,
      concept: legacyQuestion.concept || termToConcept(rawTerm)
    };
  }

  const concept = termToConcept(rawTerm);
  const startsWithLetter = answer.charAt(0).toUpperCase() === letter;
  const lead = startsWithLetter ? `Con la ${letter}` : `Contiene la ${letter}`;
  const clue = TERM_CLUES[normalizeTermKey(answer)];

  return {
    answer,
    question: clue ? `${lead}: ${clue.prompt}.` : `${lead}: termino matematico "${answer}".`,
    concept,
    definition: clue?.definition || `Concepto clave del vocabulario matematico: ${answer}.`,
    example: `Ejemplo de uso: ${answer}.`,
    application: "Aplicacion en ejercicios y resolucion de problemas.",
    procedure: "Relaciona el termino con su definicion y contexto matematico.",
    mistakes: "No confundir el termino con otros conceptos similares.",
    hint: `Empieza con ${letter}.`,
    content: clue?.content || "Vocabulario"
  };
}

function buildQuestionBanksFromList(listado) {
  const levelMap = {
    "1ESO": "1ESO",
    "2ESO": "2ESO",
    "3ESO": "3ESO",
    "4ESO": "4ESO_B"
  };

  const banks = {};

  Object.entries(levelMap).forEach(([sourceLevel, gameLevel]) => {
    const source = sourceLevel === "1ESO" ? QUESTION_BANK_1ESO : (listado[sourceLevel] || {});
    const bank = {};
    LETTERS.forEach((letter) => {
      const terms = Array.isArray(source[letter]) ? source[letter] : [];
      bank[letter] = terms.map((term) => buildQuestionFromTerm(letter, term));
    });
    banks[gameLevel] = bank;
  });

  return banks;
}

const QUESTION_BANKS = buildQuestionBanksFromList(PASAPALABRA_MATEMATICAS);
QUESTION_BANKS["4ESO"] = QUESTION_BANKS["4ESO_B"];

const state = {
  mode: "normal",
  academicLevel: "2ESO",
  timerSetting: 150,
  timerLeft: 150,
  timerId: null,
  questions: [],
  statuses: {},
  currentIndex: 0,
  startedAt: 0,
  correct: 0,
  wrong: 0,
  passed: 0,
  finished: false,
  contentRound: {},
  totalXPThisGame: 0,
  premioPlayed: false
};

function getDefaultStats() {
  return {
    gamesPlayed: 0,
    bestScore: 0,
    totalCorrect: 0,
    bestTime: null,
    wrongLetters: {},
    content: {},
    xp: 0,
    medals: {},
    history: []
  };
}

function saveStats() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(globalStats));
}

let globalStats = loadStats();
let isStartMusicMuted = loadMusicMutePreference();

function loadStats() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed ? { ...getDefaultStats(), ...parsed } : getDefaultStats();
  } catch {
    return getDefaultStats();
  }
}

function loadMusicMutePreference() {
  const savedPreference = localStorage.getItem(MUSIC_MUTE_PREFERENCE_KEY);
  if (savedPreference === null) {
    return false;
  }
  return savedPreference === "true";
}

function saveMusicMutePreference() {
  localStorage.setItem(MUSIC_MUTE_PREFERENCE_KEY, String(isStartMusicMuted));
}

const els = {
  appMain: document.getElementById("appMain"),
  startScreen: document.getElementById("startScreen"),
  gameScreen: document.getElementById("gameScreen"),
  instructionsScreen: document.getElementById("instructionsScreen"),
  statsScreen: document.getElementById("statsScreen"),
  finalScreen: document.getElementById("finalScreen"),

  bestScore: document.getElementById("bestScore"),
  gamesPlayed: document.getElementById("gamesPlayed"),
  totalCorrect: document.getElementById("totalCorrect"),

  levelSelect: document.getElementById("levelSelect"),
  timeSelect: document.getElementById("timeSelect"),

  btnToggleMusic: document.getElementById("btnToggleMusic"),

  startMusic: document.getElementById("startMusic"),
  sfxCorrect: document.getElementById("sfxCorrect"),
  sfxWrong: document.getElementById("sfxWrong"),
  sfxPremio: document.getElementById("sfxPremio"),

  hudTime: document.getElementById("hudTime"),
  hudCorrect: document.getElementById("hudCorrect"),
  hudWrong: document.getElementById("hudWrong"),
  hudPending: document.getElementById("hudPending"),

  modeTitle: document.getElementById("modeTitle"),
  rosco: document.getElementById("rosco"),
  letterPrompt: document.getElementById("letterPrompt"),
  questionText: document.getElementById("questionText"),
  answerForm: document.getElementById("answerForm"),
  answerInput: document.getElementById("answerInput"),
  btnAnswer: document.getElementById("btnAnswer"),
  btnPass: document.getElementById("btnPass"),
  feedback: document.getElementById("feedback"),

  explanationCard: document.getElementById("explanationCard"),
  expConcept: document.getElementById("expConcept"),
  expDefinition: document.getElementById("expDefinition"),
  expExample: document.getElementById("expExample"),
  expApplication: document.getElementById("expApplication"),
  expProcedure: document.getElementById("expProcedure"),
  expMistakes: document.getElementById("expMistakes"),

  finalStats: document.getElementById("finalStats"),
  finalReport: document.getElementById("finalReport"),
  finalRecommendations: document.getElementById("finalRecommendations"),

  playerLevel: document.getElementById("playerLevel"),
  playerXP: document.getElementById("playerXP"),
  xpBar: document.getElementById("xpBar"),

  statGames: document.getElementById("statGames"),
  statBest: document.getElementById("statBest"),
  statBestTime: document.getElementById("statBestTime"),
  statXP: document.getElementById("statXP"),
  statLevel: document.getElementById("statLevel"),

  medalsBox: document.getElementById("medalsBox"),
  lettersChart: document.getElementById("lettersChart"),
  contentChart: document.getElementById("contentChart")
};

const buttons = {
  play: document.getElementById("btnPlay"),
  instructions: document.getElementById("btnInstructions"),
  stats: document.getElementById("btnStats"),
  reset: document.getElementById("btnReset"),
  closeInstructions: document.getElementById("btnCloseInstructions"),
  closeStats: document.getElementById("btnCloseStats"),
  finishGame: document.getElementById("btnFinishGame"),
  backHome: document.getElementById("btnBackHome"),
  playAgain: document.getElementById("btnPlayAgain"),
  accessibility: document.getElementById("btnAccessibility")
};

function validateQuestionBank() {
  Object.entries(QUESTION_BANKS).forEach(([level, bank]) => {
    LETTERS.forEach((letter) => {
      if (!Array.isArray(bank[letter]) || bank[letter].length === 0) {
        console.warn(`La letra ${letter} no tiene preguntas definidas para ${level}.`);
      }
    });
  });
}

function init() {
  validateQuestionBank();
  applyStartMusicPreference();
  bindEvents();
  renderStaticLatex();
  updateStartStats();
  updateXPUI();
  renderRosco();
  startCabeceraMusic();
}

function startCabeceraMusic() {
  const playPromise = updateStartScreenMusic("start");
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      const retryStartMusic = () => {
        updateStartScreenMusic("start");
        window.removeEventListener("pointerdown", retryStartMusic);
        window.removeEventListener("touchstart", retryStartMusic);
        window.removeEventListener("keydown", retryStartMusic);
      };
      window.addEventListener("pointerdown", retryStartMusic);
      window.addEventListener("touchstart", retryStartMusic);
      window.addEventListener("keydown", retryStartMusic);
    });
  }
}

function applyStartMusicPreference() {
  if (els.startMusic) {
    els.startMusic.muted = isStartMusicMuted;
  }
  if (els.btnToggleMusic) {
    els.btnToggleMusic.textContent = isStartMusicMuted ? "Activar música" : "Silenciar música";
    els.btnToggleMusic.setAttribute("aria-pressed", String(isStartMusicMuted));
  }
}

function renderStaticLatex() {
  document.querySelectorAll(".latex-chip").forEach((element) => {
    element.innerHTML = renderLatexLike(element.textContent || "");
  });
}

function showScreen(screenName) {
  const screens = {
    start: els.startScreen,
    game: els.gameScreen,
    instructions: els.instructionsScreen,
    stats: els.statsScreen,
    final: els.finalScreen
  };

  Object.entries(screens).forEach(([name, element]) => {
    if (!element) return;
    element.classList.toggle("active", name === screenName);
  });

  if (screenName === "start") {
    updateStartStats();
    updateXPUI();
    applyStartMusicPreference();
    updateStartScreenMusic("start");
    return;
  }

  if (els.startMusic) {
    els.startMusic.pause();
    els.startMusic.currentTime = 0;
  }

  if (screenName === "stats") {
    drawStats();
  }
}

function startGame() {
  // Juego fijado al banco de contenidos principal.
  state.academicLevel = "2ESO";
  state.timerSetting = Number(els.timeSelect.value);
  state.timerLeft = state.timerSetting;
  state.questions = buildRoundQuestions();
  state.statuses = Object.fromEntries(LETTERS.map((l) => [l, "pending"]));
  state.currentIndex = 0;
  state.correct = 0;
  state.wrong = 0;
  state.passed = 0;
  state.finished = false;
  state.contentRound = {};
  state.totalXPThisGame = 0;
  state.premioPlayed = false;
  state.startedAt = Date.now();

  els.modeTitle.textContent = modeLabel();
  els.answerInput.value = "";
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.explanationCard.classList.add("hidden");
  setupModeControls();

  renderRosco();
  updateHUD();
  showScreen("game");

  if (state.timerLeft > 0) {
    startTimer();
  } else {
    stopTimer();
  }

  renderCurrentQuestion();
  els.answerInput.focus();
}

function toggleStartMusic() {
  isStartMusicMuted = !isStartMusicMuted;
  saveMusicMutePreference();
  applyStartMusicPreference();

  if (!els.startMusic) return;

  if (isStartMusicMuted) {
    els.startMusic.pause();
    els.startMusic.currentTime = 0;
    return;
  }

  if (els.startScreen && els.startScreen.classList.contains("active")) {
    updateStartScreenMusic("start");
  }
}

function toggleAccessibilityMode() {
  document.body.classList.toggle("high-contrast");
  if (els.btnAccessibility) {
    const enabled = document.body.classList.contains("high-contrast");
    els.btnAccessibility.textContent = enabled ? "Desactivar contraste" : "Alto contraste";
    els.btnAccessibility.setAttribute("aria-pressed", String(enabled));
  }
}

function resetProgress() {
  if (!window.confirm("Se borrarán las estadísticas guardadas. ¿Quieres continuar?")) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(MUSIC_MUTE_PREFERENCE_KEY);
  globalStats = getDefaultStats();
  isStartMusicMuted = false;
  applyStartMusicPreference();
  updateStartStats();
  updateXPUI();
  if (els.startMusic) {
    updateStartScreenMusic("start");
  }
}

function bindEvents() {
  buttons.play?.addEventListener("click", startGame);
  buttons.instructions?.addEventListener("click", () => showScreen("instructions"));
  buttons.stats?.addEventListener("click", () => showScreen("stats"));
  buttons.reset?.addEventListener("click", resetProgress);
  buttons.closeInstructions?.addEventListener("click", () => showScreen("start"));
  buttons.closeStats?.addEventListener("click", () => showScreen("start"));
  buttons.finishGame?.addEventListener("click", () => finishGame("Has finalizado la partida manualmente."));
  buttons.backHome?.addEventListener("click", () => showScreen("start"));
  buttons.playAgain?.addEventListener("click", startGame);
  buttons.accessibility?.addEventListener("click", toggleAccessibilityMode);

  els.btnToggleMusic?.addEventListener("click", toggleStartMusic);
  els.answerForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    checkAnswer(els.answerInput.value);
  });
  els.btnPass?.addEventListener("click", passLetter);
  document.addEventListener("keydown", (event) => {
    if (!els.gameScreen?.classList.contains("active") || state.finished) return;
    const pressedKey = String(event.key || "").toLowerCase();
    const target = event.target;
    const isTypingField =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      target?.isContentEditable;

    if (pressedKey === "p") {
      if (isTypingField) return;
      event.preventDefault();
      passLetter();
    }
  });
}

function updateStartScreenMusic(screenName) {
  if (!els.startMusic) return null;

  if (screenName !== "start") {
    els.startMusic.pause();
    els.startMusic.currentTime = 0;
    return null;
  }

  els.startMusic.load();
  const playPromise = els.startMusic.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      // El navegador puede bloquear el autoplay con sonido hasta una interacción del usuario.
    });
  }
  return playPromise;
}

function playResultSound(type) {
  const audio = type === "ok" ? els.sfxCorrect : els.sfxWrong;
  if (!audio) return;

  audio.currentTime = 0;
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      // Evita errores visibles si el navegador bloquea audio automático.
    });
  }
}

function playPremioSound() {
  if (!els.sfxPremio) return;

  els.sfxPremio.currentTime = 0;
  const playPromise = els.sfxPremio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      // Evita errores visibles si el navegador bloquea audio automático.
    });
  }
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const ACCENT_FIXES = [
  [/\bnotacion cientifica\b/gi, "notación científica"],
  [/\bgeometria analitica\b/gi, "geometría analítica"],
  [/\bfuncion cuadratica\b/gi, "función cuadrática"],
  [/\bfuncion lineal\b/gi, "función lineal"],
  [/\bfuncion exponencial\b/gi, "función exponencial"],
  [/\bnumero complejo\b/gi, "número complejo"],
  [/\binterpretacion de datos\b/gi, "interpretación de datos"],
  [/\bnumeros y calculo\b/gi, "números y cálculo"],
  [/\bpotencias y raices\b/gi, "potencias y raíces"],
  [/\barea\b/gi, "área"],
  [/\bacademico\b/gi, "académico"],
  [/\bacademica\b/gi, "académica"],
  [/\balgebra\b/gi, "álgebra"],
  [/\banalitica\b/gi, "analítica"],
  [/\banalitico\b/gi, "analítico"],
  [/\bangulo\b/gi, "ángulo"],
  [/\bangulos\b/gi, "ángulos"],
  [/\bano\b/gi, "año"],
  [/\baritmetica\b/gi, "aritmética"],
  [/\basintota\b/gi, "asíntota"],
  [/\bbasica\b/gi, "básica"],
  [/\bbasicas\b/gi, "básicas"],
  [/\bcalculo\b/gi, "cálculo"],
  [/\bcientifica\b/gi, "científica"],
  [/\bclasificacion\b/gi, "clasificación"],
  [/\bcombinacion\b/gi, "combinación"],
  [/\bcomparacion\b/gi, "comparación"],
  [/\bconexion\b/gi, "conexión"],
  [/\bconica\b/gi, "cónica"],
  [/\bcritica\b/gi, "crítica"],
  [/\bcuadratica\b/gi, "cuadrática"],
  [/\bcuadrilatero\b/gi, "cuadrilátero"],
  [/\bdireccion\b/gi, "dirección"],
  [/\bdimension\b/gi, "dimensión"],
  [/\bdistribucion\b/gi, "distribución"],
  [/\bdivision\b/gi, "división"],
  [/\becuacion\b/gi, "ecuación"],
  [/\belectrico\b/gi, "eléctrico"],
  [/\benergia\b/gi, "energía"],
  [/\bestadistica\b/gi, "estadística"],
  [/\bexpresion\b/gi, "expresión"],
  [/\bextension\b/gi, "extensión"],
  [/\bfactorizacion\b/gi, "factorización"],
  [/\bfisica\b/gi, "física"],
  [/\bfraccion\b/gi, "fracción"],
  [/\bfuncion\b/gi, "función"],
  [/\bgeometria\b/gi, "geometría"],
  [/\bgeometrica\b/gi, "geométrica"],
  [/\bgrafica\b/gi, "gráfica"],
  [/\bgraficas\b/gi, "gráficas"],
  [/\bgrafico\b/gi, "gráfico"],
  [/\bgraficos\b/gi, "gráficos"],
  [/\bhectarea\b/gi, "hectárea"],
  [/\bhectareas\b/gi, "hectáreas"],
  [/\bhiperbola\b/gi, "hipérbola"],
  [/\bhipotesis\b/gi, "hipótesis"],
  [/\bincognita\b/gi, "incógnita"],
  [/\binalambrica\b/gi, "inalámbrica"],
  [/\binformacion\b/gi, "información"],
  [/\binteres\b/gi, "interés"],
  [/\binterpretacion\b/gi, "interpretación"],
  [/\bjerarquia\b/gi, "jerarquía"],
  [/\bkilometro\b/gi, "kilómetro"],
  [/\blinea\b/gi, "línea"],
  [/\blineas\b/gi, "líneas"],
  [/\blimite\b/gi, "límite"],
  [/\blimites\b/gi, "límites"],
  [/\blogaritmica\b/gi, "logarítmica"],
  [/\bmatematica\b/gi, "matemática"],
  [/\bmatematicas\b/gi, "matemáticas"],
  [/\bmatematicamente\b/gi, "matemáticamente"],
  [/\bmatematico\b/gi, "matemático"],
  [/\bmaximo\b/gi, "máximo"],
  [/\bmedicion\b/gi, "medición"],
  [/\bminimo\b/gi, "mínimo"],
  [/\bmodelizacion\b/gi, "modelización"],
  [/\bmodulo\b/gi, "módulo"],
  [/\bmultiplos\b/gi, "múltiplos"],
  [/\bmultiplicacion\b/gi, "multiplicación"],
  [/\bnumero\b/gi, "número"],
  [/\bnumeros\b/gi, "números"],
  [/\bnumericas\b/gi, "numéricas"],
  [/\boperacion\b/gi, "operación"],
  [/\borientacion\b/gi, "orientación"],
  [/\bparentesis\b/gi, "paréntesis"],
  [/\bperiodica\b/gi, "periódica"],
  [/\bperiodicas\b/gi, "periódicas"],
  [/\bperiodico\b/gi, "periódico"],
  [/\bperimetro\b/gi, "perímetro"],
  [/\bperimetros\b/gi, "perímetros"],
  [/\bpitagoras\b/gi, "pitágoras"],
  [/\bpoligono\b/gi, "polígono"],
  [/\bpoligonos\b/gi, "polígonos"],
  [/\bposicion\b/gi, "posición"],
  [/\bpotenciacion\b/gi, "potenciación"],
  [/\bpractica\b/gi, "práctica"],
  [/\bpractico\b/gi, "práctico"],
  [/\bproposicion\b/gi, "proposición"],
  [/\bproyeccion\b/gi, "proyección"],
  [/\brapido\b/gi, "rápido"],
  [/\brazon\b/gi, "razón"],
  [/\braices\b/gi, "raíces"],
  [/\braiz\b/gi, "raíz"],
  [/\brectangulo\b/gi, "rectángulo"],
  [/\brectangulos\b/gi, "rectángulos"],
  [/\brelacion\b/gi, "relación"],
  [/\brepresentacion\b/gi, "representación"],
  [/\bresolucion\b/gi, "resolución"],
  [/\bseccion\b/gi, "sección"],
  [/\bsimbolo\b/gi, "símbolo"],
  [/\bsimbolos\b/gi, "símbolos"],
  [/\bsimetria\b/gi, "simetría"],
  [/\bsolucion\b/gi, "solución"],
  [/\bsubmultiplos\b/gi, "submúltiplos"],
  [/\bsucesion\b/gi, "sucesión"],
  [/\bsustitucion\b/gi, "sustitución"],
  [/\btecnologia\b/gi, "tecnología"],
  [/\btecnologias\b/gi, "tecnologías"],
  [/\btecnica\b/gi, "técnica"],
  [/\btecnicas\b/gi, "técnicas"],
  [/\btecnico\b/gi, "técnico"],
  [/\btecnicos\b/gi, "técnicos"],
  [/\btermino\b/gi, "término"],
  [/\bterminos\b/gi, "términos"],
  [/\btriangulo\b/gi, "triángulo"],
  [/\btriangulos\b/gi, "triángulos"],
  [/\bunico\b/gi, "único"],
  [/\bultimo\b/gi, "último"],
  [/\bvariacion\b/gi, "variación"],
  [/\bvertice\b/gi, "vértice"],
  [/\bvertices\b/gi, "vértices"],
  [/\baccion\b/gi, "acción"],
  [/\bafirmacion\b/gi, "afirmación"],
  [/\banual\b/gi, "anual"],
  [/\bcompas\b/gi, "compás"],
  [/\bconexion\b/gi, "conexión"],
  [/\bconstruccion\b/gi, "construcción"],
  [/\bcontenia\b/gi, "contenía"],
  [/\bcuantitativa\b/gi, "cuantitativa"],
  [/\bdecima\b/gi, "décima"],
  [/\bdecimas\b/gi, "décimas"],
  [/\bdemostracion\b/gi, "demostración"],
  [/\bdespues\b/gi, "después"],
  [/\bdiseno\b/gi, "diseño"],
  [/\belectrica\b/gi, "eléctrica"],
  [/\belectrico\b/gi, "eléctrico"],
  [/\bestadistico\b/gi, "estadístico"],
  [/\bestadisticos\b/gi, "estadísticos"],
  [/\bestadisticas\b/gi, "estadísticas"],
  [/\bformula\b/gi, "fórmula"],
  [/\bformulas\b/gi, "fórmulas"],
  [/\bfracciones\b/gi, "fracciones"],
  [/\bgraficamente\b/gi, "gráficamente"],
  [/\bindice\b/gi, "índice"],
  [/\bindices\b/gi, "índices"],
  [/\binterseccion\b/gi, "intersección"],
  [/\blogicamente\b/gi, "lógicamente"],
  [/\bmas\b/gi, "más"],
  [/\bmatematico\b/gi, "matemático"],
  [/\bmatematicos\b/gi, "matemáticos"],
  [/\bmetr[io]co\b/gi, "métrico"],
  [/\bmilesima\b/gi, "milésima"],
  [/\bmilesimas\b/gi, "milésimas"],
  [/\bnumero\b/gi, "número"],
  [/\bnumeros\b/gi, "números"],
  [/\bpoblacion\b/gi, "población"],
  [/\bposiciones\b/gi, "posiciones"],
  [/\brectangulo\b/gi, "rectángulo"],
  [/\bsegun\b/gi, "según"],
  [/\bsolido\b/gi, "sólido"],
  [/\bsolidos\b/gi, "sólidos"],
  [/\btrigonometria\b/gi, "trigonometría"],
  [/\bvalida\b/gi, "válida"],
  [/\bvalidos\b/gi, "válidos"],
  [/\bvolumenes\b/gi, "volúmenes"]
];

function preserveReplacementCase(source, replacement) {
  if (source === source.toUpperCase()) return replacement.toUpperCase();
  if (source[0] === source[0].toUpperCase()) return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  return replacement;
}

function restoreAccents(text) {
  return ACCENT_FIXES.reduce((result, [pattern, replacement]) => {
    return result.replace(pattern, (match) => preserveReplacementCase(match, replacement));
  }, String(text || ""));
}

function applyMathTokens(expr) {
  return expr
    .replace(/\\times/g, "×")
    .replace(/\\cdot/g, "·")
    .replace(/\\pi/g, "π")
    .replace(/\\leq/g, "≤")
    .replace(/\\geq/g, "≥")
    .replace(/\\neq/g, "≠")
    .replace(/\\approx/g, "≈")
    .replace(/\\%/g, "%")
    .replace(/([a-zA-Z0-9)\]])\^\{?(-?[a-zA-Z0-9]+)\}?/g, "$1<sup>$2</sup>")
    .replace(/([a-zA-Z0-9)\]])_\{?([a-zA-Z0-9]+)\}?/g, "$1<sub>$2</sub>");
}

function formatMath(exprRaw) {
  let expr = escapeHtml(exprRaw.trim()).replace(/\\\\/g, "\\");
  expr = expr.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, (_, top, bottom) => {
    return `<span class="frac"><span class="top">${applyMathTokens(top)}</span><span class="bottom">${applyMathTokens(bottom)}</span></span>`;
  });
  expr = expr.replace(/\\sqrt\{([^{}]+)\}/g, (_, body) => {
    return `√<span class="sqrt-body">${applyMathTokens(body)}</span>`;
  });
  expr = applyMathTokens(expr);
  return `<span class="math-inline">${expr}</span>`;
}

function renderLatexLike(text) {
  const content = restoreAccents(text);
  const chunks = content.split(/(\$[^$]+\$)/g);
  return chunks.map((chunk) => {
    if (chunk.startsWith("$") && chunk.endsWith("$") && chunk.length > 2) {
      return formatMath(chunk.slice(1, -1));
    }
    return escapeHtml(chunk);
  }).join("");
}

function setLatexText(element, text) {
  if (!element) return;
  element.innerHTML = renderLatexLike(text);
}

const EXTRA_LEVEL_QUESTIONS = {
  desigualdad: { answer: "desigualdad", question: "Con la D: relacion matematica que compara dos expresiones con signos como >, <, <= o >=.", concept: "Desigualdad", definition: "Indica que dos cantidades no son iguales y establece un orden entre ellas.", example: "x + 2 > 7 implica x > 5.", application: "Resolver inecuaciones y comparar intervalos.", procedure: "Opera como en una ecuacion y cambia el signo si multiplicas o divides por un numero negativo.", mistakes: "Olvidar invertir el signo al multiplicar o dividir por un numero negativo.", hint: "Se representa con > o <.", content: "Algebra" },
  justificacion: { answer: "justificacion", question: "Con la J: explicacion matematica de por que un resultado es correcto.", concept: "Justificacion", definition: "Argumentacion con propiedades y pasos validos que respaldan una conclusion.", example: "Demostrar una igualdad paso a paso.", application: "Razonamiento matematico y demostraciones.", procedure: "Explica cada paso con una propiedad.", mistakes: "Dar solo el resultado final.", hint: "No basta con acertar, hay que explicar.", content: "Algebra" },
  quebrado: { answer: "quebrado", question: "Contiene la Q: forma antigua de llamar a una fraccion.", concept: "Numero quebrado", definition: "Nombre tradicional para una fraccion o numero racional escrito en forma de cociente.", example: "3/4 es un numero quebrado.", application: "Relacionar lenguaje cotidiano con fracciones.", procedure: "Identifica numerador y denominador.", mistakes: "Confundirlo con un numero entero.", hint: "Es otro nombre para una fraccion.", content: "Fracciones" },
  wiki: { answer: "wiki", question: "Contiene la W: sitio colaborativo donde se consulta y edita informacion.", concept: "Wiki", definition: "Recurso digital para organizar conocimiento y datos.", example: "Consultar una explicacion de estadistica en una wiki educativa.", application: "Búsqueda guiada de informacion.", procedure: "Comprueba fuentes y fecha antes de usarla.", mistakes: "Confiar sin verificar.", hint: "Se edita entre varios usuarios.", content: "Interpretacion de datos" }
};

function getAcademicLevelLabel(level) {
  return LEVEL_LABELS[level] || level;
}

function modeLabel() {
  return "Pregunta actual";
}

function setupModeControls() {
  els.answerInput.disabled = false;
  els.btnAnswer.classList.remove("hidden");
  els.btnPass.classList.remove("hidden");
  els.btnPass.disabled = false;
}

function buildRoundQuestions() {
  const activeBank = QUESTION_BANKS[state.academicLevel] || QUESTION_BANKS["2ESO"];

  return LETTERS.map((letter) => {
    const pool = activeBank[letter] || [];
    if (!pool.length) {
      return buildQuestionFromTerm(letter, letter.toLowerCase());
    }
    const randomIndex = Math.floor(Math.random() * pool.length);

    return { ...pool[randomIndex], letter };
  });
}

function renderRosco() {
  els.rosco.innerHTML = "";
  const radius = 46;
  const center = 50;

  const logo = document.createElement("img");
  logo.src = "assets/logo/logo.png";
  logo.alt = "Logo del centro";
  logo.className = "rosco-logo";
  logo.id = "roscoLogo";
  logo.loading = "eager";
  els.rosco.appendChild(logo);

  LETTERS.forEach((letter, i) => {
    const angle = (i / LETTERS.length) * Math.PI * 2 - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);

    const node = document.createElement("button");
    node.type = "button";
    node.className = `rosco-letter ${state.statuses[letter] || "pending"}`;
    node.style.left = `calc(${x}% - 22px)`;
    node.style.top = `calc(${y}% - 22px)`;
    node.textContent = letter;
    node.setAttribute("aria-label", `Letra ${letter}`);

    if (LETTERS[state.currentIndex] === letter) node.classList.add("active");

    node.addEventListener("click", () => {
      if (!["pending", "passed"].includes(state.statuses[letter])) {
        showFeedback("Esa letra ya está cerrada.", "info");
        return;
      }
      state.currentIndex = i;
      renderCurrentQuestion();
      renderRosco();
    });

    els.rosco.appendChild(node);
  });
}

function renderCurrentQuestion() {
  const current = state.questions[state.currentIndex];
  if (!current) return;
  els.letterPrompt.textContent = `Letra activa: ${current.letter}`;
  setLatexText(els.questionText, current.question);
  renderRosco();
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/_/g, " ")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9ñ ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function singularizeWord(word) {
  if (word.length > 4 && word.endsWith("es")) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s")) return word.slice(0, -1);
  return word;
}

function answerForms(text) {
  const normalized = normalizeText(text);
  const forms = new Set([normalized]);
  const singularPhrase = normalized
    .split(/\s+/)
    .map((w) => singularizeWord(w))
    .join(" ")
    .trim();
  forms.add(singularPhrase);
  return forms;
}

const ANSWER_ALIASES = {
  "tamano muestral": ["tamano"]
};

function answersMatch(expected, given) {
  const expectedForms = answerForms(expected);
  const expectedKey = normalizeText(expected);
  (ANSWER_ALIASES[expectedKey] || []).forEach((alias) => {
    answerForms(alias).forEach((form) => expectedForms.add(form));
  });
  const givenForms = answerForms(given);
  for (const form of expectedForms) {
    if (givenForms.has(form)) return true;
  }
  return false;
}

function checkAnswer(rawAnswer) {
  if (state.finished) return;
  const current = state.questions[state.currentIndex];
  if (!current) return;

  const letter = current.letter;
  const letterStatus = state.statuses[letter];
  if (!["pending", "passed"].includes(letterStatus)) {
    showFeedback("Esa letra ya está cerrada. Continúa con otra pendiente.", "info");
    moveToNextPlayableLetter();
    return;
  }

  const expected = current.answer;
  const given = rawAnswer;

  if (!normalizeText(given)) {
    showFeedback("Escribe una respuesta antes de enviar.", "info");
    return;
  }

  const isCorrect = answersMatch(expected, given);

  if (isCorrect) {
    state.statuses[letter] = "correct";
    state.correct += 1;
    addXP(10);
    updateContentProgress(current.content, true);
    playResultSound("ok");
    showFeedback("✔ Correcto", "ok");
    flashRoscoLogo();
  } else {
    state.statuses[letter] = "wrong";
    state.wrong += 1;
    updateContentProgress(current.content, false);
    globalStats.wrongLetters[letter] = (globalStats.wrongLetters[letter] || 0) + 1;
    playResultSound("bad");
    showFeedback(`✖ Incorrecto. Respuesta correcta: ${current.answer}`, "bad");
  }

  showExplanation(current);
  els.answerInput.value = "";
  updateHUD();

  if (!hasPendingLetters()) {
    finishGame("Has completado todas las letras del rosco.");
    return;
  }

  moveToNextPlayableLetter();
}

function passLetter() {
  if (state.finished) return;
  const letter = LETTERS[state.currentIndex];
  if (state.statuses[letter] === "pending") {
    state.statuses[letter] = "passed";
    state.passed += 1;
  }
  showFeedback("Letra pasada. Volverás a ella más adelante.", "info");
  updateHUD();
  moveToNextPlayableLetter();
}

function moveToNextPlayableLetter() {
  const unresolved = ["pending", "passed"];

  for (let lap = 0; lap < 2; lap += 1) {
    for (let step = 1; step <= LETTERS.length; step += 1) {
      const nextIdx = (state.currentIndex + step) % LETTERS.length;
      const st = state.statuses[LETTERS[nextIdx]];
      if (lap === 0 && st === "pending") {
        state.currentIndex = nextIdx;
        renderCurrentQuestion();
        return;
      }
      if (lap === 1 && unresolved.includes(st)) {
        state.currentIndex = nextIdx;
        renderCurrentQuestion();
        return;
      }
    }
  }

  finishGame("No quedan letras por resolver.");
}

function startTimer() {
  stopTimer();

  if (state.timerSetting <= 0) {
    updateHUD();
    return;
  }

  state.timerId = setInterval(() => {
    state.timerLeft -= 1;
    updateHUD();

    if (state.timerLeft <= 0) {
      stopTimer();
      finishGame("Se ha agotado el tiempo.");
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function hasPendingLetters() {
  return LETTERS.some((l) => ["pending", "passed"].includes(state.statuses[l]));
}

function flashRoscoLogo() {
  const logo = document.getElementById("roscoLogo");
  if (!logo) return;
  logo.classList.remove("flash");
  void logo.offsetWidth;
  logo.classList.add("flash");
}

function showFeedback(text, kind) {
  els.feedback.textContent = restoreAccents(text);
  els.feedback.className = `feedback show ${kind}`;
}

function updateHUD() {
  const pendingCount = LETTERS.filter((l) => ["pending", "passed"].includes(state.statuses[l])).length;

  els.hudCorrect.textContent = String(state.correct);
  els.hudWrong.textContent = String(state.wrong);
  els.hudPending.textContent = String(pendingCount);

  if (state.timerSetting > 0) {
    els.hudTime.textContent = `${Math.max(0, state.timerLeft)}s`;
  } else {
    els.hudTime.textContent = "∞";
  }
}

function showExplanation(q) {
  setLatexText(els.expConcept, q.concept);
  setLatexText(els.expDefinition, q.definition);
  setLatexText(els.expExample, q.example);
  setLatexText(els.expApplication, q.application);
  setLatexText(els.expProcedure, q.procedure);
  setLatexText(els.expMistakes, q.mistakes);
  els.explanationCard.classList.remove("hidden");
}

function finishGame(reason) {
  if (state.finished) return;
  state.finished = true;
  stopTimer();

  const elapsed = Math.round((Date.now() - state.startedAt) / 1000);

  const note = Math.max(0, Math.min(10, Number(((state.correct / LETTERS.length) * 10).toFixed(2))));
  const accuracy = LETTERS.length ? (state.correct / LETTERS.length) * 100 : 0;
  const levelName = getPerformanceLevel(accuracy);
  const completedPerfectRosco = state.correct === LETTERS.length;

  if (completedPerfectRosco && !state.premioPlayed) {
    playPremioSound();
    state.premioPlayed = true;
  }

  globalStats.gamesPlayed += 1;
  globalStats.totalCorrect += state.correct;
  globalStats.bestScore = Math.max(globalStats.bestScore, note);
  if (state.timerSetting > 0) {
    if (globalStats.bestTime === null || elapsed < globalStats.bestTime) {
      globalStats.bestTime = elapsed;
    }
  }

  Object.entries(state.contentRound).forEach(([content, data]) => {
    if (!globalStats.content[content]) globalStats.content[content] = { correct: 0, total: 0 };
    globalStats.content[content].correct += data.correct;
    globalStats.content[content].total += data.total;
  });

  globalStats.history.push({ mode: state.mode, note, elapsed, correct: state.correct, wrong: state.wrong, date: new Date().toISOString() });
  assignMedals();
  saveStats();

  const strengths = getTopContents(state.contentRound, true).join(", ");
  const weaknesses = getTopContents(state.contentRound, false).join(", ");

  els.finalStats.innerHTML = `
    <p><strong>Resultado:</strong> ${reason}</p>
    <p><strong>Juego:</strong> Rosco matemático</p>
    <p><strong>Nota sobre 10:</strong> ${note}</p>
    <p><strong>Tiempo empleado:</strong> ${elapsed} segundos</p>
    <p><strong>Aciertos:</strong> ${state.correct}</p>
    <p><strong>Fallos:</strong> ${state.wrong}</p>
    <p><strong>Letras pasadas:</strong> ${state.passed}</p>
    <p><strong>Porcentaje de aciertos:</strong> ${accuracy.toFixed(1)}%</p>
    <p><strong>Nivel alcanzado:</strong> ${levelName}</p>
    ${completedPerfectRosco ? "<p><strong>Logro especial:</strong> Rosco perfecto</p>" : ""}
  `;

  els.finalReport.textContent = completedPerfectRosco
    ? `Informe personalizado: Rosco perfecto. Excelente dominio del contenido.`
    : `Informe personalizado: Dominas mejor ${strengths || "varios bloques"}, pero debes reforzar ${weaknesses || "las letras que has pasado o fallado"}.`;
  els.finalRecommendations.textContent = "Recomendaciones: repasa 15 minutos diarios ecuaciones, practica problemas de proporcionalidad y analiza una gráfica real al día para mejorar la interpretación de datos.";

  updateStartStats();
  updateXPUI();
  showScreen("final");
}

function getTopContents(roundData, strongest) {
  const arr = Object.entries(roundData).map(([name, d]) => {
    const pct = d.total ? (d.correct / d.total) * 100 : 0;
    return { name, pct };
  });
  arr.sort((a, b) => strongest ? b.pct - a.pct : a.pct - b.pct);
  return arr.slice(0, 2).map((x) => restoreAccents(x.name));
}

function getPerformanceLevel(accuracy) {
  if (accuracy < 40) return "Principiante";
  if (accuracy < 55) return "Aprendiz";
  if (accuracy < 70) return "Competente";
  if (accuracy < 85) return "Avanzado";
  return "Experto Matemático";
}

function updateContentProgress(content, isCorrect) {
  if (!state.contentRound[content]) {
    state.contentRound[content] = { correct: 0, total: 0 };
  }
  state.contentRound[content].total += 1;
  if (isCorrect) state.contentRound[content].correct += 1;
}

function addXP(amount) {
  state.totalXPThisGame += amount;
  globalStats.xp += amount;
}

function assignMedals() {
  const coverage = globalStats.content;
  const algebraPct = getPct(coverage.Algebra);
  const geometryPct = getPct(coverage.Geometria);
  const statsPct = getPct(coverage.Estadistica);
  const propPct = getPct(coverage.Proporcionalidad);

  if (algebraPct >= 80) globalStats.medals["Maestro del Álgebra"] = true;
  if (geometryPct >= 80) globalStats.medals["Maestro de la Geometría"] = true;
  if (statsPct >= 80) globalStats.medals["Maestro de la Estadística"] = true;
  if (propPct >= 80) globalStats.medals["Maestro de la Proporcionalidad"] = true;
  if (state.correct === LETTERS.length) globalStats.medals["Rosco Perfecto"] = true;
}

function getPct(block) {
  if (!block || !block.total) return 0;
  return (block.correct / block.total) * 100;
}

function getLevelFromXP(xp) {
  return Math.floor(xp / 100) + 1;
}

function updateXPUI() {
  const level = getLevelFromXP(globalStats.xp);
  const inLevelXP = globalStats.xp % 100;
  els.playerLevel.textContent = level;
  els.playerXP.textContent = globalStats.xp;
  els.xpBar.style.width = `${inLevelXP}%`;
}

function updateStartStats() {
  els.bestScore.textContent = Number(globalStats.bestScore || 0).toFixed(2);
  els.gamesPlayed.textContent = globalStats.gamesPlayed || 0;
  els.totalCorrect.textContent = globalStats.totalCorrect || 0;
}

function drawStats() {
  els.statGames.textContent = globalStats.gamesPlayed || 0;
  els.statBest.textContent = Number(globalStats.bestScore || 0).toFixed(2);
  els.statBestTime.textContent = globalStats.bestTime ? `${globalStats.bestTime}s` : "--";
  els.statXP.textContent = globalStats.xp || 0;
  els.statLevel.textContent = getLevelFromXP(globalStats.xp || 0);

  drawLetterFailures();
  drawContentAccuracy();
  drawMedals();
}

function drawMedals() {
  els.medalsBox.innerHTML = "";
  MEDALS.forEach((m) => {
    const item = document.createElement("div");
    item.className = "medal-item";
    item.textContent = globalStats.medals[m] ? `🏅 ${m}` : `🔒 ${m}`;
    els.medalsBox.appendChild(item);
  });
}

function drawLetterFailures() {
  const ctx = els.lettersChart.getContext("2d");
  const width = els.lettersChart.width;
  const height = els.lettersChart.height;
  ctx.clearRect(0, 0, width, height);

  const entries = Object.entries(globalStats.wrongLetters)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  if (!entries.length) {
    drawPlaceholder(ctx, width, height, "Aún no hay fallos registrados.");
    return;
  }

  const maxVal = Math.max(...entries.map((e) => e[1]));
  const barWidth = width / (entries.length * 1.5);

  entries.forEach(([letter, val], i) => {
    const h = (val / maxVal) * (height - 60);
    const x = 40 + i * (barWidth + 26);
    const y = height - h - 30;
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(x, y, barWidth, h);
    ctx.fillStyle = "#1f2937";
    ctx.fillText(letter, x + barWidth / 3, height - 10);
    ctx.fillText(String(val), x + barWidth / 4, y - 6);
  });
}

function drawContentAccuracy() {
  const ctx = els.contentChart.getContext("2d");
  const width = els.contentChart.width;
  const height = els.contentChart.height;
  ctx.clearRect(0, 0, width, height);

  const entries = Object.entries(globalStats.content).map(([name, d]) => ({
    name,
    pct: d.total ? (d.correct / d.total) * 100 : 0
  }));

  if (!entries.length) {
    drawPlaceholder(ctx, width, height, "Juega para generar estadísticas por contenido.");
    return;
  }

  const barWidth = width / (entries.length * 1.35);
  entries.forEach((entry, i) => {
    const h = (entry.pct / 100) * (height - 60);
    const x = 25 + i * (barWidth + 18);
    const y = height - h - 30;
    ctx.fillStyle = "#0ea5e9";
    ctx.fillRect(x, y, barWidth, h);
    ctx.fillStyle = "#1f2937";
    ctx.fillText(`${Math.round(entry.pct)}%`, x, y - 8);
    const short = restoreAccents(entry.name).slice(0, 10);
    ctx.fillText(short, x, height - 10);
  });
}

function drawPlaceholder(ctx, w, h, text) {
  ctx.fillStyle = "#6b7280";
  ctx.font = "16px Trebuchet MS";
  ctx.fillText(text, w / 2 - 140, h / 2);
}

init();
