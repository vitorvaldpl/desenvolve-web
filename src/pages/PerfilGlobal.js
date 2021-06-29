import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import EmptyCardStyle from '../Styles/EmptyCardStyle';
import { MeetingBox } from '../components/MeetingBox';
import { blue } from 'chalk';


const usePerfil = makeStyles ({
    globalBox: {
    height: 1084,
    width: '100%',
    background: '#E5E5E5',
    border: 2,
    borderRadius: 3,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  upperBox: {
    display: 'flex',
    height: 210,
    width: '100%',
    background: 'none',
    border: 2,
    borderRadius: 3,
    },
  bottomBox: {
    display: 'flex',
    height: 568,
    width: '100%',
    background: 'none',
    border: 2,
    borderRadius: 3,
    },
  perfilBox: {
    height: 181,
    width: 397,
    minWidth:397,
    background: '#FFFFFF',
    border: 2,
    borderRadius: 6,
    padding:3,
    marginLeft:20,
    marginTop:29,
  },
  knowledgeBox: {
    height: 568,
    width: 399,
    minWidth:399,
    background: '#FFFFFF',
    border: 2,
    borderRadius: 6,
    padding:3,
    marginLeft:20,
    marginTop:20,
  },
  okrControlBox: {
    height: 733,
    width: 903,
    minWidth:903,
    background: '#FFFFFF',
    border: 2,
    borderRadius: 6,
    padding:3,
    marginLeft:24,
    marginTop:20,
  },

  meetingBox: {
    height: 181,
    width: 894,
    minWidth:894,
    background: '#FFFFFF',
    border: 2,
    borderRadius: 6,
    padding:3,
    marginLeft:25,
    marginTop:29,
  },


});

export function Perfil() {
  const classes = usePerfil();

  return (
    <div className={classes.globalBox}>
          <div className={classes.upperBox}>
                  <div className={classes.perfilBox}>
                    <p>Perfil</p>
                  </div>
                  <div className={classes.meetingBox}>
                        <MeetingBox />
                  </div>   
          </div>  

          <div className={classes.bottomBox}>
                  <div className={classes.knowledgeBox}>
                    <p>Gestão do conhecimento</p>
                  </div>
                  <div className={classes.okrControlBox}>
                  <p>OKR</p>
                  </div>   
          </div>  
    </div>
    


  );
}


