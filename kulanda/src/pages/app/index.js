//import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppRouteName } from "../../routes/AppRouteName";
import { appMessages } from "../../utils/messages";

export const useApp = () => {
  //const appSate = useSelector((state) => state);

  //const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateGoBack = () => {
    navigate(-1);
  };

  const navigateGoForward = () => {
    navigate(1);
  };

  return {
    navigateGoForward,
    navigateGoBack,
    navigate,
    //dispatch,
    AppRouteName,
    appMessages,
    //appSate,
  };
};