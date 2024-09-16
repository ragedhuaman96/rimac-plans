export function calculateAgeFromBirth(birthDay) {
    const birth = new Date(birthDay);
    
    const today = new Date();
  
    let age = today.getFullYear() - birth.getFullYear();
  
    const actualMonth = today.getMonth();
    const actualDay = today.getDate();
    const monthBirth = birth.getMonth();
    const dayBirth = birth.getDate();
  
    if (actualMonth < monthBirth || (actualMonth === monthBirth && actualDay < dayBirth)) {
      age--;
    }
  
    console.log('EDAD', age)
    return age;
  }