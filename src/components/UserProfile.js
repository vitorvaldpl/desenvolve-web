import { getTeste } from './Functions';
import { getTesteOkr } from './Functions';
import { getTesteCreateOkr } from './Functions';
import { createNewOkrCycle } from './Functions';
import { attCardOkrUser } from './Functions';
import { deleteOkrCycle } from './Functions';
import { attCardUser } from './Functions';
import { deleteFeedbackCycle } from './Functions';
import { createNewFeedbackCycle } from './Functions';

export function getUser(userPerfil) {
  //Função para receber o usuário
    const profileUserBancoDeDados = userPerfil;
    //Teste funcional para verificar a criação, edição e delete de cards. 
    //Cria e edita estão com estruturas iguais por enquanto, quando 
    // criar função de edição eles ficarão com estrutura diferente
    // 1 = cria    2 = edita   3= deleta
    const teste = getTeste();
    const testeOkr = getTesteOkr();
                                  if (teste == 1){
                                    const  attProfileUser = getTesteCreateOkr(profileUserBancoDeDados, testeOkr);
                                    const  attProfileUserSent = attCardUser(attProfileUser);
                                    return (attProfileUserSent);
                                  }
                                  else if (teste == 2){
                                    const deleteProfileUser = getTesteCreateOkr(profileUserBancoDeDados, testeOkr);
                                  const  deleteProfileUserSent = deleteFeedbackCycle(deleteProfileUser);
                                    return (deleteProfileUserSent);
                                  }
}

export function CreateUser(){
  //Função para criar o usuário
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
                                            totalCycles:'',
                                            status: '',  
                                            existCycle: '', 
                                          
                                      }  ,
  }
return(profileUserBancoDeDados);
}