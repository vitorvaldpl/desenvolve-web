import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { EmptyCard } from '../components/EmptyCard';
import { EmptyCardOKR } from '../components/EmptyCard';
import { blue } from 'chalk';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InfoIcon from '@material-ui/icons/Info';


const useMeetingBox = makeStyles ({
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
    

    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: 0,
    textAlign: 'left',
    color:'#4D4D4D ' ,
    textDecoration: 'underline',
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
  InfoIcon: {
    height:'100%',
    maxHeight: 12.5,
    widht: '100%',
    MaxWidth: 12.5,
    marginLeft: 8.25,
    marginTop:12.25,
    color:'#4D4D4D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export function MeetingBox() {
  const classes = useMeetingBox();

  return (

                  <div className={classes.meetingBox}>
                      <div className={classes.halfBox}>
                                  <div className={classes.displayBox}>
                                            <div className={classes.titleDisplayBox}>
                                                  Reuniões Feedback Estruturado
                                          </div>  
                                          <div className={classes.InfoIcon}>
                                                  <InfoIcon />                                                      
                                          </div>  
                                          <div className={classes.AddBoxIcon}>
                                                  <AddBoxIcon />                                                      
                                          </div>  
                                </div> 
                                <div className={classes.cardBox}>
                                <EmptyCard />
                                </div>  
                      </div>            
                      <div className={classes.halfBox}>
                                  <div className={classes.displayBox}>
                                            <div className={classes.titleDisplayBox}>
                                                  Reuniões OKR's
                                          </div>  
                                          <div className={classes.InfoIcon}>
                                                  <InfoIcon />                                                      
                                          </div>  
                                          <div className={classes.AddBoxIcon}>
                                                  <AddBoxIcon />                                                      
                                          </div>  
                                </div> 
                                <div className={classes.cardBox}>
                                  <EmptyCardOKR />
                                </div>  
                      </div>    
                  </div>   
                  


  );
}


