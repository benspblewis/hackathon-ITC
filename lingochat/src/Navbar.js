import { Flex ,Button} from "@chakra-ui/react";
import { useAppContext } from "./hooks/useAppContext";
import { useAuthContext } from "./hooks/useAuthContext";

function Navbar() {

    const { currentUser, handleCurrentUser } = useAuthContext();
    const {modalIsOpen,  openModal, closeModal,formToShow, setFormToShow} = useAppContext();


function handleLoginClick() {
    setFormToShow("login");
    openModal();
  }
  function handleSignupClick() {
    setFormToShow("signup");
    openModal();
  }
  function handleLogoutClick(){
    localStorage.clear('currentUser');
    handleCurrentUser(null)
  }
  
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      backgroundColor="green.100"
      justifyContent="center"
      flexWrap="wrap"
    >
      <div>
        <></>
        {!currentUser ? (
          <>
            <Button onClick={handleSignupClick} mr={2} mt={2} mb={2}>
              Sign Up
            </Button>
            <Button onClick={handleLoginClick} mt={2} mb={2}>
              Login
            </Button>
          </>
        ) : (
          <Button onClick={handleLogoutClick} mt={2} mb={2}>
            Logout
          </Button>
        )}
      </div>
    </Flex>
  );
}
export default Navbar;
