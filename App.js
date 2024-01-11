import Navigation from "./src/navigatin/Navigation";
import { EventProvider } from "react-native-outside-press";

export default function App() {
  return (
    <EventProvider>
      <Navigation />
    </EventProvider>
  );
}
