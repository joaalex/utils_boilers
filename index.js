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