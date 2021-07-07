
import { fade, makeStyles } from '@material-ui/core/styles';
import { CardOKR } from '../components/Card';
import { FeedbackCard } from '../components/Card';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Tooltip from 'react-tooltip'; 
import { openCard } from '../components/Card';
import { addNewFeedbackCardButton } from '../components/Card';
import { deleteFeedbackCardButton } from './Card';
import React from 'react';


//yarn add react-tooltip




const useMeetingBoxStyle = makeStyles ({
  meetingBox: {
    height: 181,
    width: 894,
    background: 'none',
    border: 6,
    borderRadius: 6,
    display: 'flex',
  },
  halfBox: {
    height: 181,
    width: 557,
    border: 6,
    display: 'column',
  },
  displayBox: {    
    maxHeight: 200,
    width: 402,
    border: 6,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'left',
    marginLeft:19,
  },

  titleDisplayBox: {
    height:'100%',
    maxHeight: 24,
    widht: '100%',
    MaxWidth: 258,
    marginTop:6,
    borderBottomWidth:3,
    borderBottomStyle: 'solid',
    borderBottomColor:'#3E3990',
  },
  textTitleDisplayBox: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: 0,
    textAlign: 'left',
    color:'#4D4D4D ' ,
    textDecoration: 'none',
    
  },
  cardBox: {
    height: 126,
    width: 402,
    background: '#FCF8FF',
    border: 6,
    borderRadius: 8,
    marginLeft:19,
    marginTop:10,
  },
  button:{
    background: 'none',
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
  AddBoxIcon: {
    height:'100%',
    maxHeight: 15.5,
    widht: '100%',
    MaxWidth: 15.5,
    marginLeft: 8.5,
    marginTop:11.25,
    color:'#4D4D4D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  //Não consegui fazer o icone INFO ter o max de tamanho desejado
  //ele está ultrapassando este tamanho, isso desconfigura 
  //a distancia do topo da caixa
  InfoOutlinedIcon: {
    height:'100%',
    maxHeight: 12.5,
    widht: '100%',
    MaxWidth: 12.5,
    marginLeft: 8.25,
    marginTop:12.25,
    color:'#D1C4E9',
    display: 'flex',
    alignItems: 'center',
                      
  },
  
});

export function MeetingBox() {
  const classes = useMeetingBoxStyle();

  return (
                  <div className={classes.meetingBox}>
                      <div className={classes.halfBox}>
                                  <div className={classes.displayBox}>
                                            <div className={classes.titleDisplayBox}>
                                                    <a className={classes.textTitleDisplayBox}>Reuniões Feedback Estruturado</a>
                                            </div>  

                                            <div className={classes.InfoOutlinedIcon}>
                                                                <p
                                                                data-tip="Feedback estruturado é o protocolo semestral de coletar feedback do seu desenvolvimento na empresa com outros crafters." 
                                                                data-trigger ="hover"
                                                                databondary="scrollParent"
                                                                data-place="left"
                                                                data-multiline="true"
                                                                data-border="true"
                                                                data-border-color="none"
                                                                data-text-color="black"
                                                                data-background-color="#FCF8FF"
                                                                >
                                                                <InfoOutlinedIcon />    
                                                                <Tooltip /> 
                                                                </p>                                                    
                                            </div>  
                                            
                                            <button  className={classes.button} onClick={()=> addNewFeedbackCardButton()}  >
                                            <AddBoxIcon />                                                      
                                            </button>
                                            <button  className={classes.button} onClick={()=> deleteFeedbackCardButton()}  >
                                            <DeleteOutlineOutlinedIcon />                                                      
                                            </button>
                                </div> 
                                <div className={classes.cardBox}>
                                    {/* Aqui vai chamar uma função verifica feedback e nao o card */}
                                <FeedbackCard />
                                </div>  
                      </div>            
                      <div className={classes.halfBox}>
                                  <div className={classes.displayBox}>
                                            <div className={classes.titleDisplayBox}>
                                                  <a className={classes.textTitleDisplayBox}>Reuniões OKR's</a>
                                            </div>  
                                            <div className={classes.InfoOutlinedIcon}>
                                                        <p
                                                        data-tip="Reuniões de OKR são as de definições e  acompanhamento para ver o desenvolvimento das suas OKRS de maestria." 
                                                        data-trigger ="hover"
                                                        databondary="scrollParent"
                                                        data-place="left"
                                                        data-multiline="true"
                                                        data-border="true"
                                                        data-border-color="none"
                                                        data-text-color="black"
                                                        data-background-color="#FCF8FF"
                                                        >
                                                        <InfoOutlinedIcon />    
                                                        <Tooltip /> 
                                                        </p>                                                    
                                            </div>  
                                            <button  className={classes.button} onclick=' '  >
                                            <AddBoxIcon />                                                      
                                            </button>
                                </div> 
                                
                                <div className={classes.cardBox}>
                                  {/* Aqui vai chamar uma função OKR que retornara o card okr ou empty card, similar a feedback já criada */}
                                  <CardOKR />
                                </div>  
                      </div>    
                  </div>   
  );
}




