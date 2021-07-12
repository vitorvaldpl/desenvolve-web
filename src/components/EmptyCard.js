import { makeStyles } from '@material-ui/core/styles';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import { Modal } from "@material-ui/core";
import { OkrModalComponent } from "../components/okrmodal/okrmodalcomponent";
import { useState } from 'react';


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
                                     <AddBoxRoundedIcon /> 
                          </div>            
                  </div>   
                  


  );
}

export function EmptyCardOKR() {
  const classes = useEmptyCard();
  const [open, setOpen] = useState(false);
  const [meeting, setMeeting] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddMeeting = (meeting) => {
    setMeeting(meeting);
    handleClose();
  };
  return (
<>
                  <div className={classes.cardBox}>
                          <div className={classes.titleBox}>
                                    <a>Não há gerenciamento de feedback criado</a>
                          </div>  
                          <div className={classes.AddBoxIcon}>
                          <AddBoxRoundedIcon
                                                          onClick={handleOpen}
                                                        /*   className={addIcon} */
                                                          style={{ fill: "#4D4D4D" }}
                                                        />   
                          </div>          
                  </div>     
                                                                                <Modal
                                                                                open={open}
                                                                                onClose={handleClose}
                                                                                aria-labelledby="simple-modal-title"
                                                                                aria-describedby="simple-modal-description"
                                                                              >
                                                                                <OkrModalComponent handleAdd={handleAddMeeting} />
                                                                              </Modal>   
    </>  
                    );
}


