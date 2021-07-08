import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "./components/Header";
import { MeetingsComponent } from "./components/meetings/meetingscomponent";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <MeetingsComponent />
    </>
  );
}

export default App;
