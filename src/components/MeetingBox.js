import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { EmptyCard } from '../components/EmptyCard';
import { EmptyCardOKR } from '../components/EmptyCard';
import { blue } from 'chalk';


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
    height: 24,
    width: 402,
    border: 6,
    borderRadius: 6,
    padding:3,
    marginLeft:19,
    marginTop:6,
    display: 'flex',
  },

  titleFeedbackDisplayBox: {
    height: 24,
    width: 258,
    background: 'none',
    borderRadius: 6,
    padding: 0.1,

    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: 0,
    textAlign: 'left',
    color:'#4D4D4D ' ,
    textDecoration: 'underline',
  },
  titleOkrDisplayBox: {
    height: 24,
    width: 124,
    background: 'none',
    borderRadius: 6,
    padding: 0.1,

    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: 0,
    textAlign: 'left',
    color:'#4D4D4D ' ,
    textDecoration: 'underline',
  },
  infoDisplayBox: {
    height: 12.5,
    width: 12.5,
    background:  'gray',
    padding:3,
    borderRadius: 2,
    marginLeft:8.25,
    marginTop:6.25,

  },
  buttonDisplayBox: {
    height: 15.5,
    width: 15.5,
    background: 'black',
    border: 6,
    borderRadius: 4,
    padding:3,
    marginLeft:8.5,
    marginTop:5.25,
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

});

export function MeetingBox() {
  const classes = useMeetingBox();

  return (

                  <div className={classes.meetingBox}>
                      <div className={classes.halfBox}>
                                  <div className={classes.displayBox}>
                                            <div className={classes.titleFeedbackDisplayBox}>
                                                  Reuniões Feedback Estruturado
                                          </div>  
                                          <div className={classes.infoDisplayBox}>
                                          </div>  
                                          <div className={classes.buttonDisplayBox}>
                                          </div>  
                                </div> 
                                <div className={classes.cardBox}>
                                <EmptyCard />
                                </div>  
                      </div>            
                      <div className={classes.halfBox}>
                                  <div className={classes.displayBox}>
                                            <div className={classes.titleOkrDisplayBox}>
                                                  Reuniões OKR's
                                          </div>  
                                          <div className={classes.infoDisplayBox}>
                                          </div>  
                                          <div className={classes.buttonDisplayBox}>
                                          </div>  
                                </div> 
                                <div className={classes.cardBox}>
                                  <EmptyCardOKR />
                                </div>  
                      </div>    
                  </div>   
                  


  );
}


