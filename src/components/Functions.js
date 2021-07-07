import { fade, makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { CreateUser } from './UserProfile';
export function getDateFeedbackTest(){ //Data manual que será enviada para o card Feedback
  const getDate = '28/05/2021';
  return(getDate);
  }
  export function getDateOkrTest(){ //Data manual que será enviada para o card  Okr
  const getDate = '09/06/2021';
  return(getDate);
  }
  export function getDateFirstFeedback(){ //Data manual do 1° Feedback que será enviada para o card Feedback
  const getDate = '28/05/2021';
  return(getDate);
  }
  export function getFinishedOkrTest(){    //Conferir ciclo Finalizado, será o numero de reuniões que ja houve no periodo
    // Exemplo se tiver 5, incrementara e irá pra 6 lá na função attOkrcard e ficara finalizado 
    const getCycles = 4;
  return(getCycles);
  }
export function getTeste(){  // 1 = card  2 = card vazio
  var teste= 1;
  return(teste);
  }
  export function getTesteOkr(){ // 1 = card  2 = card vazio    
    var teste= 1;
    return(teste);
    }
    export function getCycleFeedback(){  // 3 = ciclo 3 meses   6= ciclo de 6 meses
      var cycle= 3;
      return(cycle);
      }
      export function getCycleOkr(){  // 3= ciclo 3 meses   6 = ciclo de 6 meses
        var cycle= 6;
        return(cycle);
        }

  export function getTesteCreateOkr(profileUserBancoDeDados, testeOkr){
        if (testeOkr == 1){
      const  attProfileUser = attCardOkrUser(profileUserBancoDeDados);
      return (attProfileUser);
    }
    if (testeOkr == 2){
      const  deleteProfileUser = deleteOkrCycle(profileUserBancoDeDados);
      return (deleteProfileUser);
    }
    return(testeOkr);
    }

    
export function createNewOkrCycle(profileUser){
  //Função que vem do botão que vai add nova função ou novo ciclo, ela pega o usuario e atualiza os dados do profile
  const perfil = profileUser;  
  const getDate = getDateOkrTest();
      perfil.okr.lastMeeting = getDate ; 
  //perfil.okr.lastMeeting = var1 ;
  const cycle= getCycleOkr();
  perfil.okr.cycleDuration = cycle;
  //perfil.okr.cycleDuration = var2;
  const getFinished = getFinishedOkrTest();
  perfil.okr.totalCycles = getFinished;   //Aqui vai sair pois buscara direto dentro da função e tera registro no banco dados do usuário
  perfil.okr.totalCycles = contTotalOkrCycles(perfil);
  perfil.okr.existCycle = true;
  //aqui vai mudar, vai ser uma função de calcular em OKR
  perfil.okr.nextMeeting = calculateOkrNextCycle(profileUser);
  perfil.okr.status = CalculateOkrStatus(profileUser);
  
return(perfil);
}

export function attCardOkrUser(profileUser){
    const perfil = profileUser;  
    const getDate = getDateOkrTest();
        perfil.okr.lastMeeting = getDate ; 
    //perfil.okr.lastMeeting = var1 ;
    const cycle= getCycleOkr();
    perfil.okr.cycleDuration = cycle;
    //perfil.okr.cycleDuration = var2;
    const getFinished = getFinishedOkrTest();
    perfil.okr.totalCycles = getFinished;   //Aqui vai sair pois buscara direto dentro da função e tera registro no banco dados do usuário
    perfil.okr.totalCycles = contTotalOkrCycles(perfil);
    perfil.okr.existCycle = true;
    //aqui vai mudar, vai ser uma função de calcular em OKR
    perfil.okr.nextMeeting = calculateOkrNextCycle(profileUser);
    perfil.okr.status = CalculateOkrStatus(profileUser);


return(perfil);
}

export function deleteOkrCycle(profileUser){
  //Função que vem do botão que vai add nova função ou novo ciclo, ela pega o usuario e atualiza os dados do profile
    const perfil = profileUser;
    perfil.okr.lastMeeting = '' ;
    //perfil.okr.lastMeeting = var1 ;
    perfil.okr.cycleDuration = '' ;
    //perfil.okr.cycleDuration = var2;
    perfil.okr.totalCycles = '';   //Aqui vai sair pois buscara direto dentro da função e tera registro no banco dados do usuário
    perfil.okr.existCycle = false;
    //aqui vai mudar, vai ser uma função de calcular em OKR
    perfil.okr.nextMeeting = '' ;
    perfil.okr.status = '' ;

  
return(perfil);
}

export function createNewFeedbackCycle(profileUser){
  //Função que vem do botão que vai add nova função ou novo ciclo, ela pega o usuario e atualiza os dados do profile
  const perfil = profileUser;
  const getDate = getDateFeedbackTest();
  perfil.feedback.lastMeeting = getDate ;
  //perfil.feedback.lastMeeting = var1 ;
  perfil.feedback.cycle = 3;
  //perfil.feedback.cycle = var2;
  perfil.feedback.firstMeeting = '12/01/2021';
  //perfil.feedback.firstMeeting = var3  ;
  perfil.feedback.totalCycles = contTotalCycles(perfil);
  perfil.feedback.existCycle = true;
  perfil.feedback.nextCycle = calculateFeedbackNextCycle(profileUser);
  perfil.feedback.status = CalculateStatus(profileUser);
  
return(perfil);
}

export function attCardUser(profileUser){
    const perfil = profileUser; 
    const getDate = getDateFeedbackTest();
    perfil.feedback.lastMeeting = getDate ;
    const cycle= getCycleFeedback();
  perfil.feedback.cycle = cycle;  
  const getFirstFeedback = getDateFirstFeedback();
  perfil.feedback.firstMeeting = getFirstFeedback;
  perfil.feedback.totalCycles = contTotalCycles(perfil);
  perfil.feedback.existCycle = true;
  perfil.feedback.nextCycle = calculateFeedbackNextCycle(profileUser);
  perfil.feedback.status = CalculateStatus(profileUser);



return(perfil);
}

export function deleteFeedbackCycle(profileUser){
  //Função que vem do botão que vai add nova função ou novo ciclo, ela pega o usuario e atualiza os dados do profile
    const perfil = profileUser;
  perfil.feedback.lastMeeting = '' ;
  perfil.feedback.cycle = '';
  perfil.feedback.firstMeeting = '';
  perfil.feedback.totalCycles = 0;
  perfil.feedback.existCycle = false;
  perfil.feedback.nextCycle = '' ;
  perfil.feedback.status = '' ;
  
return(perfil);
}

export function contTotalCycles(profileUser){
  const perfil = profileUser;
  perfil.feedback.totalCycles += 1; 
  return(perfil.feedback.totalCycles);
}
export function contTotalOkrCycles(profileUser){
  const perfil = profileUser;
  perfil.okr.totalCycles += 1; 
  return(perfil.okr.totalCycles);
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
                      perfil.feedback.status = 'em dia';
                      return (perfil.feedback.status);
                    }
                   else if  (CalculateStatus > TimeCycle ){
                    perfil.feedback.status = 'atrasado';
                    return (perfil.feedback.status);
                          }
}

export function CalculateOkrStatus(profileUser){
  const days =30;
  const perfil = profileUser;
  const LastMeeting = perfil.okr.lastMeeting;
  const TimeCycle = MultiplierMonthDays(perfil.okr.cycleDuration) ; 
  console.log(TimeCycle);
  const CalculateStatus = CalculateDiffDate(LastMeeting) ;
  console.log(CalculateStatus);
  const Finished =  CalculateFinished(TimeCycle, perfil.okr.totalCycles);
  console.log(Finished);

                if(Finished <=  days ){
                                        return (perfil.okr.status = 'finalizado')
                }
              else if(Finished > days ){
  //primeiro verificar condição de finalizado (if else) depois vai entrar isso que já tem de em dia/atrasado
                                        if (CalculateStatus <= days){
                                          return (perfil.okr.status = 'em dia');
                                        }
                                      else if  (CalculateStatus > days){
                                        return (perfil.okr.status = 'atrasado');                    
                                        }
                }


}
export function CalculateFinished(TimeCycle, totalCycles){
//  var finish = 0;
  var finish = TimeCycle/totalCycles;
  return(finish)
}

export function CalculateDiffDate(LastMeeting ){
  var lastDate = TransformDate(LastMeeting) ; 
  var currentData = new Date();
  var timeDiff = Math.abs(currentData.getTime() - lastDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return(diffDays);
}

export function TransformDate(stringDate){
  //Transforma a String Data em um formato universal do sistema, facilita para realizar contas com data.
let date = stringDate;
//  Quebra a string para retornar cada parte
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

  export function calculateOkrNextCycle(profileUser){
    const perfil = profileUser;
    //é valido Salvar as reuniões em um vetor? total de ciclos ficaria função lenght
    const LastMeeting = perfil.okr.lastMeeting;
    const TimeCycle = MultiplierMonthDays(perfil.okr.cycleDuration) ; 
    const NextCycle = CalculateNextOkrCycle(LastMeeting);
    return (NextCycle);
    }

    export function CalculateNextCycle(LastMeeting , TimeCycle){
      var lastDate = TransformDate(LastMeeting) ;  
      var timeDiff = Math.abs((TimeCycle*(1000 * 3600 * 24) + lastDate.getTime()));
      var DateTransformed = formatDateToString(timeDiff);
    return(DateTransformed);  
    }

    export function CalculateNextOkrCycle(LastMeeting ){
      var lastDate = TransformDate(LastMeeting) ;  
      var days = 30;
      var timeDiff = Math.abs((days*(1000 * 3600 * 24) + lastDate.getTime()));
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

    