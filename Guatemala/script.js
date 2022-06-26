function changeTxt(idDpt,Name) {
    var Txtp = document.getElementById('txtp');
    var backTitl=document.getElementById('BCKTL');
    backTitl.innerHTML=Name;
    Txtp.innerHTML=Dept[idDpt];
 }
 const Dept={
    DPT1:"Baja Verapaz se ubica en la Región Norte del país, está conformado de ocho municipios. El departamento tiene altitudes que varían desde 940 a 1570 m.s.n.m. La economía de Baja Verapaz está basada en el cultivo de caña, vegetales, granos y cerealesEn el año 2020 presento 1194 decesos por desnutrición crónica en niños menores a 5 años",
    DPT2:"Está ubicado en la región Noroccidente, es uno de los departamentos más grandes de Guatemala, es el departamento con más municipios del país, siendo 32. Su cabecera es Huehuetenango, más de la mitad de los habitantes del departamento hablan Mam, y como segundo idioma el castellano. En el año 2020 presento 30463 decesos por desnutrición crónica en niños menores a 5 años",
    DPT3:"Petén11",
    DPT4:"Quezaltenango",
    DPT5:"Retalhuleu",
    DPT6:"San Marcos",
    DPT7:"Pertenece a la región Norte. Cuenta con 17 municipios. La cabecera departamento es Cobán. gran parte de la población es indígena, el q’eqchi’ y el pocomchí’ son los idiomas predominantes. En el año 2020 presento 21401 decesos por desnutrición crónica en niños menores a 5 años",
    DPT8:"Este departamento se ubica en la Región Central. Esta formado de dieciséis municipios, siendo la cabecera departamental el municipio Chimaltenango. La mayor parte de la población es indígena hablante del kaqchikel. En el año 2020 presento 12868 decesos por desnutrición crónica en niños menores a 5 años",
    DPT9:"Forma parte de la región central. Esta formado de 12 municipios, su población en su mayoría habla el castellano, aun así, en un municipio la población tiene un numero considerable de hablantes del poqomam. En el año 2020 presento 2947 decesos por desnutrición crónica en niños menores a 5 años",
    DPT10:"Es el único departamento que forma la región metropolitana del país, Cuenta con 17 municipios. Con un clima templado siendo el predominante, El castellano es el idioma predominante de la región, aun así, en algunos municipios suele hablarse el kaqchikel y poqomam En el año 2020 presento 9354 decesos por desnutrición crónica en niños menores a 5 años",
    DPT11:"Suchitepéquez",
    DPT12:"Sacatepéquez",
    DPT13:"Sololá",
    DPT14:"Totonicapán",
    DPT15:"Pertenece a la Región Nororiente, tiene 8 municipios y su cabecera es Guastatoya, es una región mestiza y su idioma principal es el castellano. En el año 2020 presento 2495 decesos por desnutrición crónica en niños menores a 5 años",
    DPT16:"Santa Rosa",
    DPT17:"Izabal se ubica en la Región 3 o Nororiente. Cuenta con 5 municipios, siendo Puerto Barrios la cabecera, La mayor parte de sus habitantes son mestizos hablantes del castellano, aun así, en algunos municipios predomina el q’eqchi’ y en una región hay comunidad garífuna. En el año 2020 presento 2096 decesos por desnutrición crónica en niños menores a 5 años",
    DPT18:"Ubicado en la región Nororiente, Chiquimula posee once municipios. La mayor parte de su población es mestiza, aun así, todavía en algunos de sus municipios la población predominante es la maya ch’orti’.En el año 2020 presento 1 deceso por desnutrición crónica en niños menores a 5 años",
    DPT19:"Se ubica en la Región Suroriente. Su cabecera es Jalapa. Tiene 7 municipios los cuales en su mayoría cuentan con clima cálido. El castellano es el idioma predominante, ya que la mayor parte de los habitantes son mestizos, en algunos municipios se habla el poqomam. En el año 2020 presento 4399 decesos por desnutrición crónica en niños menores a 5 años",
    DPT20:"Forma parte de la región Suroccidente, tiene 17 municipios y su cabecera es Jutiapa, La población en su mayoría es mestiza por lo que hablan castellano, también existen pequeñas comunidades xinka. En el año 2020 presento 2734 decesos por desnutrición crónica en niños menores a 5 años",
    DPT21:"Zacapa",
    DPT22:"Quiché"
};