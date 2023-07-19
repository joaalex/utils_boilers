const generateOtp = (num)=>{
  const numCal = Math.pow(10, num-1)
  const otp = Math.floor(numCal + Math.random() * 9 * numCal );
  console.log(otp);
  return otp;
};

const otpValidity = (otpCreated) =>{
    const timeDiff = new Date() - new Date(otpCreated);
    const otpTimeDiff = Math.ceil(timeDiff / 60000);
    return otpTimeDiff;
};

const phoneValidation = (userPhone) => {
  if (!userPhone) return false;
  const phone = userPhone.trim();
  const firstChar = phone.charAt(0);
  if (firstChar === "+" && phone.length === 14) {
    return phone;
  } else if (firstChar === "0" && phone.length === 11) {
    return `+234${phone.slice(1)}`;
  } else if (firstChar === "2" && phone.length === 13) {
    return `+${phone}`;
  } else {
    return false;
  }
};