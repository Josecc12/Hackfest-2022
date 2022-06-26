addEventListener("DOMContentLoaded",()=>{

    const btn_menu=document.querySelector(".menu-btn")
    if(btn_menu){
        btn_menu.addEventListener("click",()=>{
            const menu_items=document.querySelector(".menu-items")
            menu_items.classList.toggle("display")
        })
    }

})

function changeTxt(idDpt,Name) {
    var Txtp = document.getElementById('txtp');
    var backTitl=document.getElementById('BCKTL');
    backTitl.innerHTML=Name;
    Txtp.innerHTML=Dept[idDpt];
 }
 const Dept={
    DPT1:"Baja Verapaz se ubica en la Región Norte del país y está conformado de ocho municipios. El departamento tiene altitudes que varían desde 940 a 1570 m.s.n.m. La economía de Baja Verapaz está basada en el cultivo de caña, vegetales, granos y cereales. En el año 2,020 presentó 1,194 decesos por desnutrición crónica en niños menores a 5 años",
    DPT2:"Está ubicado en la región Noroccidente y es uno de los departamentos más grandes de Guatemala. Es el departamento con más municipios del país, contando con 32 de ellos. Su cabecera es Huehuetenango. Más de la mitad de los habitantes del departamento hablan Mam, y como segundo idioma el castellano. En el año 2,020 presentó 30,463 decesos por desnutrición crónica en niños menores a 5 años",
    DPT3:"El Petén es el departamento más grande de Guatemala. Es un vasto territorio de sabanas, pantanos y selvas tropicales. Es una de las regiones guatemaltecas con menor porcentaje de desnutrición con un 25.3% con mas de 64,000 personas en situación de pobreza extrema. Además, cuenta con tazas de educación de diversificado o superior muy bajas. Es un departamento con mucha tendencia a descuidar la salud y el bienestar",
    DPT4:"Este departamento se localiza en el suroeste del país. Es famoso porque en él se encuentran las construcciones coloniales más antiguas ya que fue donde primero se asentaron los conquistadores españoles. Además, es un departamento que tiene una taza de desnutrición en aumento con menos de un 80% de personas alfabetas en el departamento y con más de 50,000 personas en el departamento sin agua potable disponible en su casa. La salud de los quetzaltecos es un tema muy delicado que corre peligro cada año",
    DPT5:"Éste departamento se ubica en la Región Suroccidental del país. Posee 9 municipios y su cabecera es la ciudad de Retalhuleu conocida como “la Capital del Mundo”. Con más de la mitad de la población sin agua potable en su vivienda  y con una taza de alfabetización de menos del 80%. Este municipio tiene un bienestar al que las personas podrían acudir muy escasamente o con mucha dificultad ",
    DPT6:"Pertenece a la Región Región Suroccidente del país. Cuenta con 29 municipios, siendo San Marcos su cabecera, la cual se ubica a 252 kilómetros de la ciudad capital. San Marcos es parte de los departamentos con mas desnutrición en el país por lo que las personas de este departamento carecen de una buena salud y bienestar en general ",
    DPT7:"Pertenece a la región Norte. Cuenta con 17 municipios y su cabecera es Cobán. Gran parte de la población es indígena, el q’eqchi’ y el pocomchí’ son los idiomas predominantes. En el año 2,020 presento 21,401 decesos por desnutrición crónica en niños menores a 5 años",
    DPT8:"Este departamento se ubica en la Región Central. Está conformado por 16 municipios, siendo la cabecera departamental el municipio Chimaltenango. La mayor parte de la población es indígena hablante del kaqchikel. En el año 2,020 presentó 12,868 decesos por desnutrición crónica en niños menores a 5 años",
    DPT9:"Forma parte de la Región Central. Esta formado de 12 municipios, su población en su mayoría habla el castellano. Aun así, en un municipio la población tiene un numero considerable de hablantes del poqomam. En el año 2,020 presentó 2,947 decesos por desnutrición crónica en niños menores a 5 años",
    DPT10:"Es el único departamento que forma la región metropolitana del país. Cuenta con 17 municipios, con un clima templado siendo el predominante. El castellano es el idioma predominante de la región. Aún así, en algunos municipios suele hablarse el kaqchikel y poqomam En el año 2,020 presentó 9,354 decesos por desnutrición crónica en niños menores a 5 años",
    DPT11:"Colinda al sur con el océano pacífico; al norte con Quetzaltenango, Sololá y Chimaltenango; al este con Escuintla y al oeste con Retalhuleu. Posee 21 municipios y la cabecera departamental es la ciudad de Mazatenango, distante 168 kilómetros de la ciudad de Guatemala. Este departamento con mas de 100,000 niños que sufren desnutrición",
    DPT12:"Forma parte de la Región Central. Cuenta con 16 municipios, siendo La Antigua Guatemala su cabecera, la cual dista 45 kilómetros de la capital. Además, es un clima templado, pero es un poco mas frío. Cuenta con un buen porcentaje de personas con agua potable en sus viviendas. Además, más del 88% de las personas es alfabeta",
    DPT13:"Departamento localizado en el occidente del país. Es la tierra de los Tzutuhiles, Quichés y Cackchiqueles, etnias descendientes de raíces mayas. Lastimosamente, este departamento está sufriendo de un aumento en los casos de desnutrición en niños menores en el departamento. Esto nos puede indicar que la salud social es decadente",
    DPT14:"Es uno de los departamentos ubicados a mayor altitud en el país y por ende uno de los más fríos. Además, un tercio de sus habitantes no posee agua potable en su casa, por lo que las condiciones sanitarias están muy difíciles y con una de las tazas de alfabetización mas bajas de el país ",
    DPT15:"Pertenece a la Región Nororiente. Tiene 8 municipios y su cabecera es Guastatoya. Es una región mestiza y su idioma principal es el castellano. En el año 2,020 presentó 2,495 decesos por desnutrición crónica en niños menores a 5 años",
    DPT16:"Es otro de los departamentos de la Región Suroriente. Está integrado por 14 municipios, siendo Cuilapa su cabecera departamental. Además, cuenta con un clima cálido generalmente y su población es generalmente mestiza aunque todavía quedan algunas comunidades xincas. Las personas de este municipio tienen un buen nivel de alfabetización superando el 81% de sus habitantes",
    DPT17:"Izabal se ubica en la Región Nororiente. Cuenta con 5 municipios, siendo Puerto Barrios la cabecera. La mayor parte de sus habitantes son mestizos hablantes del castellano. Aún así, en algunos municipios predomina el q’eqchi’ y en una región hay comunidad garífuna. En el año 2,020 presentó 2,096 decesos por desnutrición crónica en niños menores a 5 años",
    DPT18:"Ubicado en la Región Nororiente, Chiquimula posee 11 municipios. La mayor parte de su población es mestiza. Aún así, todavía en algunos de sus municipios la población predominante es la maya ch’orti’. En el año 2,020 presentó 1 deceso por desnutrición crónica en niños menores a 5 años",
    DPT19:"Se ubica en la Región Suroriente. Su cabecera es Jalapa. Tiene 7 municipios los cuales en su mayoría cuentan con clima cálido. El castellano es el idioma predominante, ya que la mayor parte de los habitantes son mestizos. En algunos municipios se habla el poqomam. En el año 2,020 presentó 4,399 decesos por desnutrición crónica en niños menores a 5 años",
    DPT20:"Forma parte de la región Suroccidente. Tiene 17 municipios y su cabecera es Jutiapa. La población en su mayoría es mestiza por lo que hablan castellano. También existen pequeñas comunidades xinka. En el año 2,020 presentó 2,734 decesos por desnutrición crónica en niños menores a 5 años",
    DPT21:"Ubicado en la Región Nororiente, Zacapa posee 10 municipios y un clima cálido. La cabecera, Zacapa, dista 156 kilómetros de la capital. Un departamento enfocado la ganadería",
    DPT22:"El departamento de Quiché, por su tamaño, es el tercer departamento de la república. Sus tierras exhiben una amplia gama de paisajes y ecosistemas. La mayor parte de su población es de descendencia Maya-Quiché. Pero, siendo quiche uno de los departamentos con mayor taza de desnutrición  y también con una de las mayores tazas de analfabetismo de el país es un departamento con una gran cantidad de problemas sanitarios "
};