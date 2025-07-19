
const validator = (user) => {
    const { firstname, lastname, email, contact, password } = user

    const isFirstname = /^[A-Za-z0-9 ]{3,14}$/.test(firstname)
    const isLastname = /^[A-Za-z0-9 ]{3,14}$/.test(lastname)
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isContact = /^\d{10}$/.test(contact)
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&])[A-Za-z\d!@#$%&]{1,14}$/.test(password)

    if (!isFirstname) return "Firstname is not valid."
    if (!isLastname) return "Lastname is not valid."
    if (!isEmail) return "Invalid Email."
    if (!isContact) return "Contact should be 10 digit."
    if (!isPassword) return "Password should have atleast one[a-z,A-Z,0-9,!@#$%&] Maximum 14 char"

    return null;

}

export default validator 