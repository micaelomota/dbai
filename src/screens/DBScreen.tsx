import { useParams } from "react-router-dom";
import { TextEditor } from "../components/TextEditor";

export const DBScreen = () => {
  const { db } = useParams<{ db: string }>();

  return (
    <div className="h-screen w-full flex flex-col">
      <TextEditor />
    </div>
  );
};
