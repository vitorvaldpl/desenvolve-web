import { makeStyles, Modal } from "@material-ui/core";
import { OkrMeetingComponent } from "../okrmeeting/okrmeetingcomponent";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { OkrModalComponent } from "../okrmodal/okrmodalcomponent";
import { DragHandle } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  base: {
    display: "flex",
    width: 894,
    height: 181,
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: 10,
    justifyContent: "space-evenly",
  },
  mockBox: {
    width: 402,
    height: 126,
    backgroundColor: "#FCF8FF",
  },
  cardTitle: {
    display: "inline",
    height: 24,
    width: 124,
    left: 238,
    top: 139,
    fontFamily: "Poppins",
    fontStyle: "Normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "24px",
    borderBottomColor: "#3E3990",
  },
  infoIcon: {
    height: 12.5,
    width: 12.5,
  },
  addIcon: {
    height: 15,
    width: 15,
  },
}));

export function MeetingsComponent() {
  const [open, setOpen] = useState(false);
  const { base, mockBox, cardTitle, infoIcon, addIcon } = useStyles();
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
      <div className={base}>
        <div>
          <h4 className={cardTitle}>Reuniões Feedback Estruturado</h4>{" "}
          <InfoOutlinedIcon className={infoIcon} style={{ fill: "#D1C4E9" }} />{" "}
          <AddBoxRoundedIcon className={addIcon} style={{ fill: "#4D4D4D" }} />
          <div className={mockBox}></div>
        </div>
        <div>
          <h4 className={cardTitle}>Reuniões OKR's</h4>{" "}
          <InfoOutlinedIcon className={infoIcon} style={{ fill: "#D1C4E9" }} />{" "}
          <AddBoxRoundedIcon
            onClick={handleOpen}
            className={addIcon}
            style={{ fill: "#4D4D4D" }}
          />
          <OkrMeetingComponent meeting={meeting} />
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
