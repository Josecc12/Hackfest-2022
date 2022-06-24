function changeTxt(idDpt,Name) {
    var fronTxt = document.getElementById('txtf');
    var Txtp = document.getElementById('txtp');
    var backTitl=document.getElementById('BCKTL');
    fronTxt.innerHTML=Name;
    backTitl.innerHTML=Name;
    Txtp.innerHTML=Dept[idDpt];
 }
 const Dept={
    DPT1:"Baja Verapaz",
    DPT2:"Huehuetenango",
    DPT3:"Petén11",
    DPT4:"Quezaltenango",
    DPT5:"Retalhuleu",
    DPT6:"San Marcos",
    DPT7:"Alta Verapaz",
    DPT8:"Chimaltenango",
    DPT9:"Escuintla",
    DPT10:"Guatemala",
    DPT11:"Suchitepéquez",
    DPT12:"Sacatepéquez",
    DPT13:"Sololá",
    DPT14:"Totonicapán",
    DPT15:"El Progreso",
    DPT16:"Santa Rosa",
    DPT17:"Izabal",
    DPT18:"Chiquimula",
    DPT19:"Jalapa",
    DPT20:"Jutiapa",
    DPT21:"Zacapa",
    DPT22:"Quiché"
};