import { makeStyles } from "@material-ui/core";
import { borders } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  modalCard: {
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

export function OkrModalComponent() {
  const {
    modalCard,
    principalText,
    rectangle,
    placeholder,
    recentMeeting,

    addBottom,
  } = useStyles();
  return (
    <div className={modalCard}>
      <h4 className={principalText}>
        Preencha os espaços para gerenciar suas reuniões de OKR
      </h4>
      <div className={rectangle} text>
        <input
          className={placeholder}
          type="text"
          placeholder="Tempo de  ciclo(só tem opção de 3 ou 6 meses)"
        />
        <input
          className={placeholder}
          type="text"
          placeholder="Data da primeira reunião de OKR"
        />
        <input
          className={recentMeeting}
          type="date"
          placeholder="Data da reunião de OKR mais recente"
        />

        <input className={addBottom} type="button" value="Adicionar" />
      </div>
    </div>
  );
}
