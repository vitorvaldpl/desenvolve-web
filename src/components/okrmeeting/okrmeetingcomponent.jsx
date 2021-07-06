import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";

const useStyles = makeStyles(() => ({
  card: {
    width: 406,
    height: 126,
    backgroundColor: "#FCF8FF",
  },
  flexCard: {
    width: 406,
    height: 126,
    backgroundColor: "#FCF8FF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    display: "inline",
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "24px",
    margin: 0,
  },
  meetingInfo: {
    display: "flex",
    margin: 0,
  },
  late: {
    display: "inline",

    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "24px",
    color: "#ba000d",
    margin: 0,
  },
  infoTitle: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "24px",
    margin: 0,
  },
  dates: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "24px",
    margin: 0,
  },

  noInformation: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "24px",
    margin: 0,
  },
  addIcon: {
    height: 15,
    width: 15,
  },
}));

export function OkrMeetingComponent() {
  const {
    card,
    flexCard,
    status,
    meetingInfo,
    late,
    infoTitle,
    dates,
    noInformation,
    addIcon,
  } = useStyles();
  const [meeting, setMeeting] = useState(null);

  return (
    <div className={!meeting ? card : flexCard}>
      {!meeting ? (
        <>
          <h4 className={status}>Status:</h4> <p className={late}>atrasado</p>
          <div className={meetingInfo}>
            <div>
              <h4 className={infoTitle}>Próxima reunião</h4>{" "}
              <p className={dates}>25/04/2021</p>
              <h4 className={infoTitle}>Última reunião de Okr:</h4>{" "}
              <p className={dates}>25/03/2021</p>{" "}
            </div>
            <div>
              <h4 className={infoTitle}>Duração do ciclo</h4>{" "}
              <p className={dates}>3 meses</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h4 className={noInformation}>
            Não há gerenciamento de feedback criado
          </h4>
          <AddBoxRoundedIcon className={addIcon} />
        </>
      )}
    </div>
  );
}
