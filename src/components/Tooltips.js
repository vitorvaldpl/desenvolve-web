import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import EmptyCardStyle from '../Styles/EmptyCardStyle';
import { blue } from 'chalk';
import AddBoxIcon from '@material-ui/icons/AddBox';


const useTooltips = makeStyles ({

  tooltipBox: {
    border:5,
    height: 60,
    width: 232,
    background: '#E5E5E5', 
  
    padding: 0.1,
  },

  displayText: {
    height:'100%',
    maxHeight: 60,
    widht: '100%',
    MaxWidth: 232,

    borderRadius: 6,
  },

  tooltipText: {
    fontFamily: 'Poppins',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 600,
    letterSpacing: 0,
    textAlign: 'left',
    color:'#000000' ,
  },
});
export function TooltipsOkr() {
  const classes = useTooltips();
  return (
                  <div className={classes.tooltipBox}>                    
                          <div className={classes.displayText}>
                                    <a className={classes.  tooltipText}> Reuniões de OKR são as de definições e acompanhamento para ver o desenvolvimento das suas OKRS de maestria </a>
                          </div>          
                  </div>   
  );
}

export function TooltipsFeedback() {
  const classes = useTooltips();
  return (
                  <div className={classes.tooltipBox}>                    
                          <div className={classes.displayText}>
                                    <a className={classes.  tooltipText}> Feddback estruturado é o protocolo semestral de coletar feedback do seu desenvolvimento na empresa com outros crafters. </a>
                          </div>          
                  </div>   
  );
}




