
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const SocialMediaLogin = () => {
  const {googleLogin} = useContext(AuthContext)
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="text-center mb-5">
      <button onClick={handleGoogleLogin} className="btn btn-outline outline-[#FD7800] hover:bg-[#FD7800]">Continue with Google</button>
    </div>
  );
};

export default SocialMediaLogin;
