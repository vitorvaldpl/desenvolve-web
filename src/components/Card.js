import { fade, makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

import { getTeste } from './Functions';
import { getTesteOkr } from './Functions';
import { getTesteCreateOkr } from './Functions';
import { createNewFeedbackCycle } from './Functions';
import { createNewOkrCycle } from './Functions';
import { attCardOkrUser } from './Functions';
import { deleteOkrCycle } from './Functions';
import { attCardUser } from './Functions';
import { deleteFeedbackCycle } from './Functions';
import { CreateUser } from './UserProfile';
import { getUser } from './UserProfile';

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
    background: 'none',


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
  const userPerfil = CreateUser();
  const perfil = getUser(userPerfil);  

                                        if (perfil.feedback.existCycle === true){  

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
                                                                                                                          <div className={classes.boxDisplayAdd}>
                                                                                                                          <a className={classes.textDisplayBold}>Último Feedback</a>
                                                                                                                                        <button className={classes.buttonNew} onClick={()=> attCardButton()} >
                                                                                                                                        <MoreVertOutlinedIcon />                                                    
                                                                                                                                        </button>                                                                                                                                        
                                                                                                                        </div>    
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

                                        if (perfil.feedback.existCycle === false)  {
                                          
                                          return (
                                            <div className={classes.cardBox}>
                                                    <div className={classes.titleBox} >
                                                              <a>Não há gerenciamento de feedback criado</a>
                                                    </div>  
                                                
                                                   <div className={classes.AddBoxIcon} >
                                                   <button   className={classes.buttonNew} onClick={()=> addNewFeedbackCardButton()}  >
                                                                      <AddBoxIcon />                                                      
                                                                      </button>          
                                                                      
                                                    </div>       
                                              </div>   
                                          
                            );
                                 }
}

 export function CardOKR() {
  const classes = useCard();  
  const userPerfil = CreateUser();
  const perfil = getUser(userPerfil); 
                                        if (perfil.okr.existCycle === true){  

                                        return (
                                                        <div className={classes.cardBox}>
                                                                    <div className={classes.DivBox}>
                                                                                    <div className={classes.FeedbackHalfBox}>
                                                                                    
                                                                                                            <div className={classes.displayStatusLine}>
                                                                                                                        <a className={classes.textDisplayNormal}>Status: </a>
                                                                                                                        <a className={classes.textDisplayStatus} style={

                                                                                                                                              ({color:perfil.okr.status === 'atrasado' ? '#E82F58' : '#00B4C5'})
                                                                                                                                                                                                                                              
                                                                                                                          } >{perfil.okr.status}</a>
                                                                                                            </div>  
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                                        <a className={classes.textDisplayBold}>Próxima reunião</a>
                                                                                                                        <a className={classes.textDisplayNormal}>{perfil.okr.nextMeeting}</a>
                                                                                                            </div>
                                                                                                            <div className={classes.displayStatusColumn}>
                                                                                                                        <div className={classes.boxDisplayAdd}>
                                                                                                                                        <a className={classes.textDisplayBold}>Última reunião de Okr</a>
                                                                                                                                        <button className={classes.buttonNew} onClick={()=> alertFunction()}>
                                                                                                                                        <MoreVertOutlinedIcon />       
                                                                                                                                                                                     
                                                                                                                                        </button>                                                                                                                                                                                                                                                                            
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

                                        if (perfil.okr.existCycle === false)  {
                                            
                                        return (
                                                        <div className={classes.cardBox}>
                                                                <div className={classes.titleBox}>
                                                                          <a>Não há gerenciamento de feedback criado</a>
                                                                </div>  
                                                                <div className={classes.AddBoxIcon}>
                                                                                  <button  className={classes.buttonNew}onClick={()=> alertFunction()} >
                                                                                  <AddBoxIcon />                                                    
                                                                                  </button>
                                                                  </div>    
                                                        </div>   
                                        );
                                        }
} 

function alertFunction() {
  alert("I am an alert box!");
}
export function getAddLastFeedback(userPerfil){
const perfil = getUser(userPerfil); 
perfil.feedback.LastMeeting = '20/06/2021';
console.log(perfil.feedback.LastMeeting);
alert(perfil.feedback.LastMeeting);

  return(perfil);
  }
  export function addNewFeedbackCardButton(){
    const perfil2 = CreateUser();   // O mais correto aqui é buscar no banco de daodos o usuário e retornar o perfil para mudar as infirmações desejadas 
    const perfil =  createNewFeedbackCycle(perfil2);    
    console.log(perfil);
    alert(perfil.feedback.lastMeeting);
  return(perfil);  
  }
  export function deleteFeedbackCardButton(){
    const perfil2 = CreateUser();  // O mais correto aqui é buscar no banco de daodos o usuário e retornar o perfil para mudar as infirmações desejadas
    const perfil =  deleteFeedbackCycle(perfil2);    
    console.log(perfil);
    alert(perfil.feedback.existCycle);
  return(perfil);  
  }
  export function attCardButton(){
    const perfil2 = CreateUser();  // O mais correto aqui é buscar no banco de daodos o usuário e retornar o perfil para mudar as infirmações desejadas
    const perfil =  attCardUser(perfil2);    
    console.log(perfil);
    alert(perfil.feedback.lastMeeting);
  return(perfil);  
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

