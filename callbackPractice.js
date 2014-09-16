/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(arr, cb){
  var firstName = arr[0];
  cb(firstName);
};

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});
//___________________________________________________________________

var last = function (arr, cb){
  var lastName = arr[arr.length - 1]
  cb(lastName);
};

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});
//___________________________________________________________________

var multiply = function (num1, num2, cb){
  var answer = num1 * num2;
  cb(answer);
};

var num1 = 13;
var num2 = 28;
multiply(num1, num2, function(answer){
  console.log('The answer is ', answer);
})
//___________________________________________________________________

var contains = function (arr, name, cb){
  var yes = false;
  for (var i = 0; i < arr.length; i++){
    if (name === arr[i]){
      yes = true;
      break;
    }
  }
  cb(yes);
};

contains(names, 'Colt', function(yes){
  if(yes === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});
//___________________________________________________________________

var uniq = function(arr, cb){
  var uniqArr = [];
  for(var i = 0; i < arr.length; i++){
    uniqArr.push(arr[i])
  }
  for (var i = 0; i < uniqArr.length; i++) {
    for (var j = 0; j < uniqArr.length; j++) {
      if(i !== j){
        if (uniqArr[i] === uniqArr[j]) {
          uniqArr.splice(j, 1);
        };
      }
    };
  };
  cb(uniqArr);
};

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});
//___________________________________________________________________

var each = function (arr, cb){
  for (var i = 0; i < arr.length; i++) {
    item = arr[i];
    indice = i;
    cb(item, indice);
  };
};

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});
//___________________________________________________________________

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function (id, cb){
  for (var i = 0; i < users.length; i++) {
    if (id === users[i].id) {
      cb(users[i]);
    };
  };
};

getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});







