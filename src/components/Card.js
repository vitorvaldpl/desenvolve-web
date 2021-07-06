import { fade, makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';


const useCard = makeStyles ({

  cardBox: {
    height: 126,
    width: 402,
    background: '#FCF8FF',
    border: 6,
    borderRadius: 8,
    padding: 0.1,

  },

  titleBox: {
    height: 24,
    width: 346,
    background: 'none',
    borderRadius: 6,
    marginLeft:28,
    marginTop:53,

    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 300,
    letterSpacing: 0,
    textAlign: 'center',
    color:'#4D4D4D ' ,

  },
  AddBoxIcon: {
    width: '100%',    
        marginLeft:193.25,
    marginTop:15.25,
    color:'#4D4D4D',

  },
  DivBox: {
    height:'100%',
    maxHeight: 217,
    widht: '100%',
    MaxWidth: 202,
    border: 6,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent:  'left',   
  },

  FeedbackHalfBox: {
    height:'100%',
    maxHeight: 217,
    widht: '100%',
    MaxWidth: 202,
    border: 6,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    justifyContent:  'left',
  },

  OkrHalfBox: {
    height:'100%',
    maxHeight: 217,
    widht: '100%',
    MaxWidth: 202,
    border: 6,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent:  'center',
  },

  displayStatusColumn: {
    height: 217,
    width: 202,
    borderRadius: 6,
    border: 6,
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    justifyContent:  'left',
  },
  displayStatusLine: {
    height: 217,
    width: 202,
    borderRadius: 6,
    border: 6,
    display: 'flex',
    alignItems: 'left',
    justifyContent:  'left',  
  },

  displayTextLine: {
    height: 57,
    width: 102,
    borderRadius: 6,
    background: 'yellow',
    border: 6,
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    justifyContent:  'left',  

  },
  displayTextColumn: {
    height: 57,
    width: 102,
    borderRadius: 6,
    background: 'blue',
    border: 6,
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    justifyContent:  'left', 

  },
  textDisplayNormal: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 300,
    letterSpacing: 0,
    textAlign: 'left',  
    
    marginLeft:4,
  },
  textDisplayBold: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0,
    textAlign: 'left', 
    
    marginLeft:4,
  },
  textDisplayStatus: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 300,
    letterSpacing: 0,
    textAlign: 'left',
    
    marginLeft:4,
  },
  button:{
    border:'none',
    height:'100%',
    maxHeight: 15.5,
    widht: '100%',
    MaxWidth: 15.5,
    marginTop:11.25,
    color:'#4D4D4D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    cursor: 'pointer',

    background: 'yellow',
  },
  buttonNew:{

    border:'none',
    height:'100%',
    maxHeight: 15.5,
    widht: '100%',
    MaxWidth: 15.5,
    color:'#4D4D4D',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    cursor: 'pointer',


  },
  input:{
    border:'none',
    height:'100%',
    maxHeight: 15.5,
    widht: '100%',
    MaxWidth: 15.5,
    marginTop:11.25,
    color:'#4D4D4D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    cursor: 'pointer',

    
    background: 'yellow',
  },

  boxDisplayAdd: {
    height:'100%',
    maxHeight: 217,
    widht: '100%',
    MaxWidth: 202,
    borderRadius: 6,
    border: 6,
    display: 'flex',
    alignItems: 'left',    
    justifyContent:  'left',
  },

});



export function FeedbackCard() {
  // coloquei inicialmente td aqui dentro dessa função, posteriormente vai sair e ir pra uma verificar status, card etc e que vai chamar essa aqui
  const classes = useCard();
  const perfil = getUser();
  let statusColor = { 'em dia': {
                                          color:'red',
                                    },
                                'atrasado': {
                                      color:'blue',
                                },
  };
  const status = perfil.feedback.status;
  console.log(status);
  console.log('to olhando o status');
  console.log(statusColor);
  
  const existCycle = perfil.feedback.existCycle;
  

                                        if (existCycle == 'true'){  

                                        return (
                                                        <div className={classes.cardBox}>
                                                                    <div className={classes.DivBox}>
                                                                                    <div className={classes.FeedbackHalfBox}>
                                                                                    
                                                                                                            <div className={classes.displayStatusLine}>
                                                                                                                        <a className={classes.textDisplayNormal}>Status: </a>
                                                                                                                        <a className={classes.textDisplayStatus} style={{color:perfil.feedback.status === 'em dia' ? '#00B4C5' : '#E82F58'}} >{perfil.feedback.status}</a>                                                                                                          
                                                                                                            </div>  
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                                        <a className={classes.textDisplayBold}>Próximo Ciclo</a>
                                                                                                                        <a className={classes.textDisplayNormal}>{perfil.feedback.nextCycle}</a>
                                                                                                            </div>
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                                        <a className={classes.textDisplayBold}>Último Feedback</a>
                                                                                                                        <a className={classes.textDisplayNormal}>{perfil.feedback.lastMeeting}</a>
                                                                                                            </div>  
                                                                                    </div>
                                                                                  


                                                                                    <div className={classes.FeedbackHalfBox}>
                                                                                                            <div className={classes.displayStatusLine}>
                                                                                                                        <a className={classes.textDisplayBold}>Tempo:</a>
                                                                                                                        <a className={classes.textDisplayNormal}>{perfil.feedback.cycle} meses </a>
                                                                                                            </div>  
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                                        <a className={classes.textDisplayBold}>Ciclos totais</a>
                                                                                                                        <a className={classes.textDisplayNormal}>{perfil.feedback.totalCycles}</a>
                                                                                                            </div>
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                                        <a className={classes.textDisplayBold}>Primeiro Feedback</a>
                                                                                                                        <a className={classes.textDisplayNormal}>{perfil.feedback.firstMeeting}</a>
                                                                                                            </div>  
                                                                                    </div>  
                                                                    </div>      
                                                        </div>   
                                        );
                                      
                                      }

                                        if (existCycle == 'false')  {
                                          
                                          return (
                                            <div className={classes.cardBox}>
                                                    <div className={classes.titleBox} >
                                                              <a>Não há gerenciamento de feedback criado</a>
                                                    </div>  
                                                
                                                   <div className={classes.AddBoxIcon} >
                                                   <button   className={classes.button} onclick='' >
                                                                      <AddBoxIcon />                                                      
                                                                      </button>          
                                                                      
                                                    </div>       
                                              </div>   
                                          
                            );
                                 }
}

 export function EmptyCardOKR() {
  const classes = useCard();  
  const perfil = getUser();
  const existCycle = perfil.okr.existCycle;
  
                                        if (existCycle == 'true'){  

                                        return (
                                                        <div className={classes.cardBox}>
                                                                    <div className={classes.DivBox}>
                                                                                    <div className={classes.FeedbackHalfBox}>
                                                                                    
                                                                                                            <div className={classes.displayStatusLine}>
                                                                                                                        <a className={classes.textDisplayNormal}>Status: </a>
                                                                                                                        <a className={classes.textDisplayStatus} style={{color:perfil.okr.status === 'em dia' ? '#00B4C5' : '#E82F58'}} >{perfil.okr.status}</a>
                                                                                                            </div>  
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                                        <a className={classes.textDisplayBold}>Próxima reunião</a>
                                                                                                                        <a className={classes.textDisplayNormal}>{perfil.okr.nextMeeting}</a>
                                                                                                            </div>
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                                        <div className={classes.boxDisplayAdd}>
                                                                                                                                        <a className={classes.textDisplayBold}>Última reunião de Okr</a>
                                                                                                                                        <a className={classes.buttonNew} >
                                                                                                                                        <MoreVertOutlinedIcon />                                                    
                                                                                                                                        </a>                                                                                                                                        
                                                                                                                        </div>      
                                                                                                                        <a className={classes.textDisplayNormal}>{perfil.okr.lastMeeting}</a>       
                                                                                                            </div>  
                                                                                    </div>
                                                                                  


                                                                                    <div className={classes.OkrHalfBox}>
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                            </div>
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                                        <a className={classes.textDisplayBold}>Duração do ciclo</a>
                                                                                                                        <a className={classes.textDisplayNormal}>{perfil.okr.cycleDuration} meses</a>
                                                                                                            </div>
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                              </div>

                                                                                    </div>  
                                                                    </div>      
                                                        </div>   
                                        );
                                      
                                      }

                                        if (existCycle == 'false')  {
                                            
                                        return (
                                                        <div className={classes.cardBox}>
                                                                <div className={classes.titleBox}>
                                                                          <a>Não há gerenciamento de feedback criado</a>
                                                                </div>  
                                                                <div className={classes.AddBoxIcon}>
                                                                                  <button  className={classes.button} >
                                                                                  <AddBoxIcon />                                                    
                                                                                  </button>
                                                                  </div>    
                                                        </div>   
                                        );
                                        }
} 



export function getTeste(){
  var teste = 2;
  return(teste);
  }

export function getUser() {
  //Função para receber o usuário
    const profileUserBancoDeDados = 
  {        
                                      user: "Usuário 1",
                                      username: 'User1',
                                      email: 'user1@dtidesenvolve.proj',
                                      feedback:{
                                              lastMeeting: '',    
                                              cycle: '',
                                              nextCycle: '',
                                              firstMeeting: '',
                                              totalCycles: '',
                                              status: '',
                                              existCycle: '', // essa variavel é pra controle
                                              },
                                      okr:{
                                              lastMeeting: '',
                                              cycleDuration: '',
                                              nextMeeting: '',
                                              status: '',  
                                              existCycle: 'true', 
                                            
                                        }  ,
    }
    //Teste funcional para verificar a criação, edição e delete de cards. 
    //Cria e edita estão com estruturas iguais por enquanto, quando 
    // criar função de edição eles ficarão com estrutura diferente
    // 1 = cria    2 = edita   3= deleta
    const teste = getTeste();
    

                                  if (teste == 1){
                                    const  createProfileUser = createNewFeedbackCycle(profileUserBancoDeDados);
                                    return (createProfileUser);
                                  }
                                  else if  (teste == 2){
                                    const  attProfileUser = attCardUser(profileUserBancoDeDados);
                                    return (attProfileUser);
                                  }
                                  if (teste == 3){
                                    const  deleteProfileUser = deleteFeedbackCycle(profileUserBancoDeDados);
                                    return (deleteProfileUser);
                                  }
}

//NEssa função devo receber o onclick da tela adicionar reuniao com os parametros depois salvar no usuario
// attCardUser(profileUser, var1, var2, var3, var4) sendo var 1,2,3 os parametros que vem da tela 
// createcard funcionará na mesma lógica
//cretenew att card e delete feedback fazem parte do teste funcional pra 
//visualizar o card e fazer as contas
//possivelmente deletcard sera criado no botao lixeira para "limpar" o gerenciador de card
//attcard ou createnewfeedcycle poderão ser usados como função ponte do calculo status
//cujo se pegará as info do banco de dados e realizar o calculo da função
// tem a possibilidade dessa conta ser feita direto no backend(verificar possibilidade)

export function createNewFeedbackCycle(profileUser){
  //Função que vem do botão que vai add nova função ou novo ciclo, ela pega o usuario e atualiza os dados do profile
    const perfil = profileUser;
  perfil.feedback.lastMeeting = '12/02/2021' ;
  //perfil.feedback.lastMeeting = var1 ;
  perfil.feedback.cycle = 3;
  //perfil.feedback.cycle = var2;
  perfil.feedback.firstMeeting = '12/01/2021';
  //perfil.feedback.firstMeeting = var3  ;
  perfil.feedback.totalCycles = '';   //Aqui vai sair pois buscara direto dentro da função e tera registro no banco dados do usuário
  perfil.feedback.totalCycles = contTotalCycles(perfil);
  perfil.feedback.existCycle = 'true';
  perfil.feedback.nextCycle = calculateFeedbackNextCycle(profileUser);
  perfil.feedback.status = CalculateStatus(profileUser);
  
   createNewOkrCycle(profileUser);


return(perfil);
}

export function attCardUser(profileUser){
    const perfil = profileUser;
  perfil.feedback.lastMeeting = '02/05/2021' ;
  //perfil.feedback.lastMeeting = var1 ;
  perfil.feedback.cycle = 6;
  //perfil.feedback.cycle = var2;
  perfil.feedback.firstMeeting = '12/01/2021';
  //perfil.feedback.firstMeeting = var3  ;
  perfil.feedback.totalCycles = 2;   //Aqui vai sair pois buscara direto dentro da função e tera registro no banco dados do usuário
  perfil.feedback.totalCycles = contTotalCycles(perfil);
  perfil.feedback.existCycle = 'true';
  perfil.feedback.nextCycle = calculateFeedbackNextCycle(profileUser);
  perfil.feedback.status = CalculateStatus(profileUser);

  attCardOkrUser(profileUser);

return(perfil);
}

export function deleteFeedbackCycle(profileUser){
  //Função que vem do botão que vai add nova função ou novo ciclo, ela pega o usuario e atualiza os dados do profile
    const perfil = profileUser;
  perfil.feedback.lastMeeting = '' ;
  perfil.feedback.cycle = '';
  perfil.feedback.firstMeeting = '';
  perfil.feedback.totalCycles = 0;
  perfil.feedback.existCycle = 'false';
  perfil.feedback.nextCycle = '' ;
  perfil.feedback.status = '' ;
  
  deleteOkrCycle(profileUser);
return(perfil);
}

export function createNewOkrCycle(profileUser){
  //Função que vem do botão que vai add nova função ou novo ciclo, ela pega o usuario e atualiza os dados do profile
    const perfil = profileUser;
  perfil.okr.lastMeeting = '12/02/2021' ;
  //perfil.okr.lastMeeting = var1 ;
  perfil.okr.cycleDuration = 3;
  //perfil.okr.cycleDuration = var2;
  perfil.okr.existCycle = 'true';
  //aqui vai mudar, vai ser uma função de calcular em OKR
  perfil.okr.nextMeeting = calculateFeedbackNextCycle(profileUser);
  perfil.okr.status = CalculateStatus(profileUser);
  
return(perfil);
}

export function attCardOkrUser(profileUser){
    const perfil = profileUser;
    perfil.okr.lastMeeting = '12/02/2021' ;
    //perfil.okr.lastMeeting = var1 ;
    perfil.okr.cycleDuration = 6;
    //perfil.okr.cycleDuration = var2;
    perfil.okr.existCycle = 'true';
    //aqui vai mudar, vai ser uma função de calcular em OKR
    perfil.okr.nextMeeting = calculateFeedbackNextCycle(profileUser);
    perfil.okr.status = CalculateStatus(profileUser);


return(perfil);
}

export function deleteOkrCycle(profileUser){
  //Função que vem do botão que vai add nova função ou novo ciclo, ela pega o usuario e atualiza os dados do profile
    const perfil = profileUser;
    perfil.okr.lastMeeting = '' ;
    //perfil.okr.lastMeeting = var1 ;
    perfil.okr.cycleDuration = '' ;
    //perfil.okr.cycleDuration = var2;
    perfil.okr.existCycle = 'false';
    //aqui vai mudar, vai ser uma função de calcular em OKR
    perfil.okr.nextMeeting = '' ;
    perfil.okr.status = '' ;

  
return(perfil);
}



export function contTotalCycles(profileUser){
  const perfil = profileUser;
  perfil.feedback.totalCycles += 1; 
  return(perfil.feedback.totalCycles);
}
export function verifyFeedbackCycle(profileUser){
  const perfil = profileUser;
  const verifyFeedbackCycle = perfil.feedback.existCycle; 
  return(verifyFeedbackCycle);
}
export function verifyOkrCycle(profileUser){
  const perfil = profileUser;
  const verifyOkrCycle = perfil.okr.existCycle; 
  return(verifyOkrCycle);
}

export function MultiplierMonthDays(TimeCycle){
  var Days = 30 ;  
  var Mult = TimeCycle * Days;
  return(Mult);
}

export function CalculateStatus(profileUser){
  const perfil = profileUser;
  const LastMeeting = perfil.feedback.lastMeeting;
  const TimeCycle = MultiplierMonthDays(perfil.feedback.cycle) ; 
  const CalculateStatus = CalculateDiffDate(LastMeeting) ;
                    if (CalculateStatus <=TimeCycle ){
                     const status = 'em dia';
                      return (status);

                    }
                   if  (CalculateStatus > TimeCycle ){
                    const status = 'atrasado';
                    return (status);
                    
                    }

                    else{
                      var teste = null;
                      return(teste);
                          }
}

export function CalculateDiffDate(LastMeeting ){
  var lastDate = TransformDate(LastMeeting) ; 
  var currentData = new Date();
  var timeDiff = Math.abs(currentData.getTime() - lastDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return(diffDays);
}

export function TransformDate(stringDate){
let date = stringDate;
// Precisamos quebrar a string para retornar cada parte
const dateSplit = date.split('/');
const day = dateSplit[0]; 
const month = dateSplit[1]; 
const year = dateSplit[2]; 
// Agora podemos inicializar o objeto Date, lembrando que o mês começa em 0, então fazemos -1.
date = new Date(year, month - 1, day);
return(date);
}

export function calculateFeedbackNextCycle(profileUser){
  const perfil = profileUser;
  //é valido Salvar as reuniões em um vetor? total de ciclos ficaria função lenght
  const LastMeeting = perfil.feedback.lastMeeting;
  const TimeCycle = MultiplierMonthDays(perfil.feedback.cycle) ; 
  const NextCycle = CalculateNextCycle(LastMeeting , TimeCycle);
  return (NextCycle);
  }

export function CalculateNextCycle(LastMeeting , TimeCycle){
  var lastDate = TransformDate(LastMeeting) ;  
  var timeDiff = Math.abs((TimeCycle*(1000 * 3600 * 24) + lastDate.getTime()));
  var DateTransformed = formatDateToString(timeDiff);
return(DateTransformed);  
}

function formatDateToString(getDate){
  var date =  new Date(getDate);
    var day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  var month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    var year = date.getFullYear();
 var DateTransformed = day +"/"+ month +"/"+ year;
  return (DateTransformed);
}

