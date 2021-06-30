import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { EmptyCard } from '../components/Card';
import { EmptyCardOKR } from '../components/Card';
import { FeedbackCard } from '../components/Card';
import { blue } from 'chalk';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


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
                                                    <a className={classes.textTitleDisplayBox}>Reuniões Feedback Estruturado</a>
                                            </div>  
                                            <div className={classes.InfoOutlinedIcon}>
                                                  <InfoOutlinedIcon />                                                      
                                            </div>  
                                            <div className={classes.AddBoxIcon}>
                                                  <AddBoxIcon />                                                      
                                            </div>  
                                </div> 
                                <div className={classes.cardBox}>
                                <FeedbackCard />
                                </div>  
                      </div>            
                      <div className={classes.halfBox}>
                                  <div className={classes.displayBox}>
                                            <div className={classes.titleDisplayBox}>
                                                  <a className={classes.textTitleDisplayBox}>Reuniões OKR's</a>
                                            </div>  
                                            <div className={classes.InfoOutlinedIcon}>
                                                  <InfoOutlinedIcon />                                                      
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


