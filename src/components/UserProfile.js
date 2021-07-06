
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