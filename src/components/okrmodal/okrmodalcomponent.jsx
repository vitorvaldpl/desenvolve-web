import { makeStyles } from "@material-ui/core";
import { borders } from "@material-ui/system";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  modalCard: {
    position: "absolute",
    padding: theme.spacing(1.5),
    alignItems: "center",
    width: 474,
    height: 231,
    backgroundColor: "#F5F5F5",
  },
  principalText: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 15,
    lineHeight: "16px",
    color: "#673AB7",
  },
  rectangle: {
    padding: theme.spacing(1),
    width: 445,
    height: 140,
    backgroundColor: "#FFFFFF",
  },
  placeholder: {
    width: 430,
    height: 33,
    borderRadius: 3,
    border: borders,
    borderColor: "#C4C4C4",
    marginBottom: theme.spacing(1),
  },
  recentMeeting: {
    width: 250,
    height: 33,
    borderRadius: 3,
    borderColor: "#C4C4C4",
  },
  addBottom: {
    marginLeft: theme.spacing(6),
    width: 101,
    height: 30,
    borderRadius: 17,
    backgroundColor: "#673AB7",
    border: "none",
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",
    color: "#FFF",
  },
}));

const modalStyle = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export function OkrModalComponent(props) {
  const [cycleDuration, setCycleDuration] = useState("");
  const [firstMeeting, setFirstMeeting] = useState("");
  const [lastMeeting, setLastMeeting] = useState("");

  const {
    modalCard,
    principalText,
    rectangle,
    placeholder,
    recentMeeting,

    addBottom,
  } = useStyles();

  const handleAdd = () => {
    props.handleAdd({ cycleDuration, firstMeeting, lastMeeting });
  };
  
  
  return (
    <div className={modalCard} style={modalStyle}>
      <h4 className={principalText}>
        Preencha os espaços para gerenciar suas reuniões de OKR
      </h4>
      <div className={rectangle} text>
{/*         <input
          className={placeholder}
          type="text"
          placeholder="Tempo de  ciclo(só tem opção de 3 ou 6 meses)"
          onChange={(event) => setCycleDuration(event.target.value)}
          id = 'TargetCycleOkr'          
        /> */}
                              <select
                              className={placeholder}
                              options = {3,6}
                              type="text"
                              placeholder="Tempo de  ciclo(só tem opção de 3 ou 6 meses)"
                              onChange={(event) => setCycleDuration(event.target.value)}
                              id = 'TargetCycleOkr' 
                              onfocus="(this.type='date')"  >
                                <option value="" disabled selected >Tempo de  ciclo</option>
                              <option value="3">3 meses</option>
                              <option value="6">6 meses</option>         
                              </select>
          <input
          className={placeholder}
          type="text"
          placeholder="Data da primeira reunião de OKR"
          onChange={(event) => setFirstMeeting(event.target.value)}
        />
        <input
          className={recentMeeting}
          type="date"
          placeholder="Data da reunião de OKR mais recente"
          onChange={(event) => setLastMeeting(event.target.value)}
          id = 'TargetLastMeeting'
        />

        <input
          className={addBottom}
          type="button"
          value="Adicionar"
          onClick={handleAdd}          
        />
      </div>
    </div>
  );
}
