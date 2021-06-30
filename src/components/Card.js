import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import EmptyCardStyle from '../Styles/EmptyCardStyle';
import { blue } from 'chalk';
import AddBoxIcon from '@material-ui/icons/AddBox';


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


});

export function FeedbackCard() {
  const classes = useCard();

  return (

                  <div className={classes.cardBox}>
                              <div className={classes.DivBox}>
                                              <div className={classes.FeedbackHalfBox}>
                                              
                                                                      <div className={classes.displayStatusLine}>
                                                                                  <a className={classes.textDisplayNormal}>Status:</a>
                                                                                  <a className={classes.textDisplayStatus}>(Get status)</a>
                                                                      </div>  
                                                                      <div className={classes.displayStatusColumn}>
                                                                                  <a className={classes.textDisplayBold}>Próximo Ciclo:</a>
                                                                                  <a className={classes.textDisplayNormal}>(Get Data prox ciclo)</a>
                                                                      </div>
                                                                      <div className={classes.displayStatusColumn}>
                                                                                  <a className={classes.textDisplayBold}>Último Feedback:</a>
                                                                                  <a className={classes.textDisplayNormal}>(Get Data Feedback))</a>
                                                                      </div>  
                                              </div>
                                            


                                              <div className={classes.FeedbackHalfBox}>
                                                                      <div className={classes.displayStatusLine}>
                                                                                  <a className={classes.textDisplayNormal}>Tempo:</a>
                                                                                  <a className={classes.textDisplayStatus}>(Get tempo)</a>
                                                                      </div>  
                                                                      <div className={classes.displayStatusColumn}>
                                                                                  <a className={classes.textDisplayBold}>Ciclos totais:</a>
                                                                                  <a className={classes.textDisplayNormal}>(Get cont ciclo)</a>
                                                                      </div>
                                                                      <div className={classes.displayStatusColumn}>
                                                                                  <a className={classes.textDisplayBold}>Primeiro Feedback:</a>
                                                                                  <a className={classes.textDisplayNormal}>(Get Data 1° Feedback))</a>
                                                                      </div>  
                                              </div>  
                              </div>      
                  </div>   
  );
}

export function EmptyCard() {
  const classes = useCard();

  return (

                  <div className={classes.cardBox}>
                          <div className={classes.titleBox}>
                                    <a>Não há gerenciamento de feedback criado</a>
                          </div>  
                      
                         <div className={classes.AddBoxIcon}>
                                        <AddBoxIcon />  
                          </div>            
                  </div>   
                  


  );
}

export function EmptyCardOKR() {
  const classes = useCard();

  return (

                  <div className={classes.cardBox}>
                    
                          <div className={classes.titleBox}>
                                    <a>Não há gerenciamento de feedback criado</a>
                          </div>  
                          <div className={classes.AddBoxIcon}>
                                        <AddBoxIcon />  
                          </div>          
                  </div>   
                  


  );
}




