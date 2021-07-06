import { fade, makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

export function getTeste(){
  var teste= 1;
  return(teste);
  }
  export function getTesteOkr(){
    var teste= 2;
    return(teste);
    }

  export function getTesteCreateOkr(profileUserBancoDeDados, testeOkr){
        if (testeOkr == 1){
      const  createProfileUser = createNewOkrCycle(profileUserBancoDeDados);
      return (createProfileUser);
    }
    else if  (testeOkr == 2){
      const  attProfileUser = attCardOkrUser(profileUserBancoDeDados);
      return (attProfileUser);
    }
    if (testeOkr == 3){
      const  deleteProfileUser = deleteOkrCycle(profileUserBancoDeDados);
      return (deleteProfileUser);
    }
    return(testeOkr);
    }

    
export function createNewOkrCycle(profileUser){
  //Função que vem do botão que vai add nova função ou novo ciclo, ela pega o usuario e atualiza os dados do profile
    const perfil = profileUser;
  perfil.okr.lastMeeting = '12/02/2021' ;
  //perfil.okr.lastMeeting = var1 ;
  perfil.okr.cycleDuration = 3;
  //perfil.okr.cycleDuration = var2;
  perfil.okr.totalCycles = '';   //Aqui vai sair pois buscara direto dentro da função e tera registro no banco dados do usuário
  perfil.okr.totalCycles = contTotalOkrCycles(perfil);
  perfil.okr.existCycle = true;
  //aqui vai mudar, vai ser uma função de calcular em OKR
  perfil.okr.nextMeeting = calculateOkrNextCycle(profileUser);
  perfil.okr.status = CalculateOkrStatus(profileUser);
  
return(perfil);
}

export function attCardOkrUser(profileUser){
    const perfil = profileUser;
    perfil.okr.lastMeeting = '22/01/2021' ;
    //perfil.okr.lastMeeting = var1 ;
    perfil.okr.cycleDuration = 6;
    //perfil.okr.cycleDuration = var2;
    perfil.okr.totalCycles = 4;   //Aqui vai sair pois buscara direto dentro da função e tera registro no banco dados do usuário
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
  perfil.feedback.lastMeeting = '12/02/2021' ;
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
  perfil.feedback.lastMeeting = '02/05/2021' ;
  //perfil.feedback.lastMeeting = var1 ;
  perfil.feedback.cycle = 6;
  //perfil.feedback.cycle = var2;
  perfil.feedback.firstMeeting = '12/01/2021';
  //perfil.feedback.firstMeeting = var3  ;
  perfil.feedback.totalCycles = 2;   //Aqui vai sair pois buscara direto dentro da função e tera registro no banco dados do usuário
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
  const perfil = profileUser;
  const LastMeeting = perfil.okr.lastMeeting;
  const TimeCycle = MultiplierMonthDays(perfil.okr.cycleDuration) ; 
  const CalculateStatus = CalculateDiffDate(LastMeeting) ;
  const Finished =  CalculateFinished(TimeCycle, perfil.okr.totalCycles);

                if(Finished < 35){
                                        return (perfil.okr.status = 'finalizado')
                }
              else if(Finished >= 35){
  //primeiro verificar condição de finalizado (if else) depois vai entrar isso que já tem de em dia/atrasado
                                        if (CalculateStatus <=TimeCycle ){
                                          return (perfil.okr.status = 'em dia');
                                        }
                                      else if  (CalculateStatus > TimeCycle ){
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

    