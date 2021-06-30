import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import EmptyCardStyle from '../Styles/EmptyCardStyle';
import { blue } from 'chalk';
import AddBoxIcon from '@material-ui/icons/AddBox';


const useEmptyCard = makeStyles ({

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


});

export function EmptyCard() {
  const classes = useEmptyCard();

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
  const classes = useEmptyCard();

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


