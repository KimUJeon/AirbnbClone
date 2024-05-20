import ProtectedPage from "../components/ProtectedPage";
import HostOnlyPage from "../components/HostOnlyPage";

export default function UploadRoom() {
  HostOnlyPage();
  return (
    <ProtectedPage>
      <h1> upload Room!!!!</h1>
    </ProtectedPage>
  );
}
