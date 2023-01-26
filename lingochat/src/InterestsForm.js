import React, { useState } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import axios from "axios";


function InterestsForm() {
    const [interestsArray, setInterestsArray] = useState([]);
    const { currentUser} = useAuthContext()

const handleSubmit = async() => {
    console.log(currentUser.userId)
console.log("hello")
try{
    const res = await axios.post(
      `http://localhost:8080/user/add-interests`, interestsArray);
}
catch(err){
    console.log(err)

}
}


const handleClick = async(e, userId) => {
e.preventDefault();
if(interestsArray.length < 5){
    e.target.style = styles.buttonDisabled;
    e.target.style.backgroundColor = '#fff'
    e.target.disabled = true
    setInterestsArray([...interestsArray, {userId: userId, interestId: e.target.id}])
} 
else{
    alert("Please only select 5")
}
// interestIds.push(interest)
}
console.log(interestsArray)

  return (
    <>
    <form className="interestform">
        <div className="grid">
    <button id="1" onClick={handleClick} style={styles.button} className="interests">History</button>
    <button id="2" onClick={handleClick} style={styles.button} className="interests">Psychology</button>
    <button id="3" onClick={handleClick} style={styles.button} className="interests">Politics</button>
    <button id="4" onClick={handleClick} style={styles.button} className="interests">Mathematics</button>
    <button id="5" onClick={handleClick} style={styles.button} className="interests">Physics</button>
    <button id="6" onClick={handleClick} style={styles.button} className="interests">Internet</button>
    <button id="7" onClick={handleClick} style={styles.button} className="interests">PC</button>
    <button id="8" onClick={handleClick} style={styles.button} className="interests">Economy management</button>
    <button id="9" onClick={handleClick} style={styles.button} className="interests">Biology</button>
    <button id="10" onClick={handleClick} style={styles.button} className="interests">Chemistry</button>
    <button id="11" onClick={handleClick} style={styles.button} className="interests">Reading</button>
    <button id="12" onClick={handleClick} style={styles.button} className="interests">Geography</button>
    <button id="13" onClick={handleClick} style={styles.button} className="interests">Foreign languages</button>
    <button id="14" onClick={handleClick} style={styles.button} className="interests">Medicine</button>
    <button id="15" onClick={handleClick} style={styles.button} className="interests">Law</button>
    <button id="16" onClick={handleClick} style={styles.button} className="interests">Cars</button>
    <button id="17" onClick={handleClick} style={styles.button} className="interests">Art exhibitions</button>
    <button id="18" onClick={handleClick} style={styles.button} className="interests">Religion</button>
    <button id="19" onClick={handleClick} style={styles.button} className="interests">Countryside, outdoors</button>
    <button id="20" onClick={handleClick} style={styles.button} className="interests">Dancing</button>
    <button id="21" onClick={handleClick} style={styles.button} className="interests">Musical instruments</button>
    <button id="22" onClick={handleClick} style={styles.button} className="interests">Writing</button>
    <button id="23" onClick={handleClick} style={styles.button} className="interests">Passive sport</button>
    <button id="24" onClick={handleClick} style={styles.button} className="interests">Active sport</button>
    <button id="25" onClick={handleClick} style={styles.button} className="interests">Gardening</button>
    <button id="26" onClick={handleClick} style={styles.button} className="interests">Celebrities</button>
    <button id="27" onClick={handleClick} style={styles.button} className="interests">Shopping</button>
    <button id="28" onClick={handleClick} style={styles.button} className="interests">Science and technology</button>
    <button id="29" onClick={handleClick} style={styles.button} className="interests">Theatre</button>
    <button id="30" onClick={handleClick} style={styles.button} className="interests">Fun with friends</button>
    <button id="31" onClick={handleClick} style={styles.button} className="interests">Adrenaline sports</button>
    <button id="32" onClick={handleClick} style={styles.button} className="interests">Pets</button>
    </div>
    <span><button type="submit" onClick={handleSubmit} className="submitinterests">Submit Interests</button></span>
    </form>
    
</>
  )
}

const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      padding: '10px 30px',
      cursor: 'pointer',
    },
    buttonDisabled: {
      padding: '10px 30px',
      cursor: 'not-allowed',
    },
  };

  
export default InterestsForm

