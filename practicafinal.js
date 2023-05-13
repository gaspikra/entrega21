let contador=3;
let acceso=0;
const usuarios= [
    {id:1, nombre:"gaspi",contrasena:"abc123",}
];
const trabajos=[
    {id:1, trabajo:"electricista",costo:570},
    {id:2, trabajo:"gasista",costo:680},
    {id:3, trabajo:"pintor",costo:520},
    {id:4,trabajo:"plomero",costo:490},
    {id:5,trabajo:"limpiadora",costo:550},
    {id:6,trabajo:"arquitecto",costo:700},
];
class login{
    constructor(nombre,contrasena,laburo,costos){
        this.nombre=" ";
        this.contrasena=" ";
        this.laburo=laburo;
        this.costos=costos;
    }
    logearse(){
        while(contador>0 && acceso!==1){ 
        let usuario=prompt("ingrese su usuario");
        this.nombre=usuario.toLocaleLowerCase();
        let pasw=prompt("ingrese su contrasena");
        this.contrasena=pasw.toLocaleLowerCase();
        let buscador=usuarios.find(item=>item.nombre===this.nombre);
        let buscador2=usuarios.find(item=>item.contrasena===this.contrasena);
        if (buscador && buscador2){
            acceso=1;
            alert(`hola ${this.nombre}`);
        }
        else{
            contador--;
            alert(`el usuario introducido es incorrecto, tiene ${contador} intentos restantes `)
        }
    }
}
    register(){
        let usuario=prompt("como desea que sea su nombre de perfil:");
        this.nombre=usuario.toLocaleLowerCase();
        let pasw=prompt("ponga una contrasena a su cuenta: ");
        this.contrasena=pasw.toLocaleLowerCase();
        let nv={
            id:usuarios.length+1,
            nombre:this.nombre,
            contrasena:this.contrasena,
        };
        usuarios.push(nv);
        let mensaje=
        `nombre de usuario: ${nv.nombre}
        contrasena: ${nv.contrasena}
        id: ${nv.id}`
        alert(`su usuario fue creado exitosamente :D y estos son sus datos=
         ${mensaje}`)
    }
    nuevotrabajo(){
        let insertar=prompt("ingrese el servicio que va a inscribir: ");
        this.laburo=insertar.toLowerCase();
        let precio=parseInt(prompt("ingrese cual es su precio por hora de trabajo: "));
        this.costos=precio;
        let nv={
            id:trabajos.length+1,
            trabajo:this.laburo,
            costo:this.costos,
        };
        trabajos.push(nv);
        let mensajerio=`
        su nuevo trabajo a sido inscirpto con exito, estos son sus datos:
        id: ${nv.id}
        trabajo: ${nv.trabajo}
        costo: ${nv.costo}
        `
        alert(mensajerio);
    }
}
alert("hola! bienvenido a laburARG :)");
let inicio= prompt(`si desea iniciar sesion, presione "l", si desea registrarse preisone "r" `).toLocaleLowerCase();
if(inicio==="l"){
    const lol= new login(this.nombre,this.contrasena);
    lol.logearse();
}
else if(inicio==="r"){
    const lols=new login(this.nombre,this.contrasena);
    lols.register();
    const lol= new login(this.nombre,this.contrasena);
    lol.logearse();
}
else{
    alert("introdujo un caracter invalido :(");
}  //HASTA ACA FUE EL INICIO DE SESION.
 while (acceso===1){
    let tarea=prompt(`si desea buscar un servicio, escriba "busco" y si desea inscribirse en la bolsa de trabajo, escriba "presento"`)
    if(tarea==="busco"){
        let buscador=prompt("ingrese que servicio esta buscando:");
        let seleccion= trabajos.find(item=>item.trabajo===buscador);
        if(seleccion){
            let info=`
            encontramos este servicio:
            trabajo: ${seleccion.trabajo}
            precio p/hora: ${seleccion.costo}
            `;
            let ideo=seleccion.id;
            alert(info);
let horario=prompt("cuantas horas va a necesitar el trabajo");
let precionuevo= trabajos.map(item=>{
    return{
        id:item.id,
        trabajo:item.trabajo,
        costo:item.costo*horario+item.costo*horario*0.21,
    }
})
let mapeofinal=precionuevo.find(item=>item.id===ideo) //en este find es para obtener el objeto del array mapeado, por lo que va a entrar si o si en el elemento seleccionado ya que puse una instruccion que asegura eso.
    let mensaje=`
    precio total por ${horario} horas trabajadas: ${mapeofinal.costo} (INCLUYE IVA)
    `;
    alert(mensaje);
        }
        else{
            alert("ese trabajo no esta disponible por el momento.")
        }  
        }
        else if(tarea==="presento"){
            const loles= new login(this.laburo,this.costos,this.id)
            loles.nuevotrabajo();
        }
        else{
            alert("puso un caracter no valido");
        }
        let continuidad=prompt("si desea seguir escriba `sigo`, si ya finalizo, presione enter").toLowerCase();
        if (continuidad!=="sigo")
        {
            break;
        }
    }
 alert("hasta la proxima :)");