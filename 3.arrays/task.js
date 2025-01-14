function compareArrays(arr1, arr2) {

    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((element, index) => element === arr2[index]);
  }

  function getUsersNamesInAgeRange(users, gender) {
  
    const filteredUsers = users.filter(user => user.gender === gender);
    if (!filteredUsers.length) return 0;

  
    const ages = filteredUsers.map(user => user.age);
  
    const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
    
    return averageAge;
  }