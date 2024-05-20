import { IProtectedPageProps } from "../type";
import useUser from "../lib/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({ children }: IProtectedPageProps) {
  const { user, isLoggedIn, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!isLoggedIn) {
        navigate("/");
      }
    }
  }, [userLoading, isLoggedIn]);
  return <>{children}</>;
}
