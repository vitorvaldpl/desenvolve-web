import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "./components/Header";
import { MeetingsComponent } from "./components/meetings/meetingscomponent";
import { OkrModalComponent } from "./components/okrmodal/okrmodalcomponent";
function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <MeetingsComponent />
      <OkrModalComponent />
    </>
  );
}

export default App;
