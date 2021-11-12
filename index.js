function saturdayFun(activity = "roller-skate") {
  return(`This Saturday, I want to ${activity}!`);
}

saturdayFun("have a shoot!");

const fn = function () {
  console.log("super!");
};

fn();

function mondayWork(activity = "go to the office") {
  return(`This Monday, I will ${activity}.`);
}
 
mondayWork();

(function (baseNumber) {
  return baseNumber + 3;
})

(17);

function outer(greeting, msg = "It's a fine day to learn") {
  const innerFunction = function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
  return innerFunction;
}

outer("Hello")("student", "JavaScript");

function demoChain(name) {
  const part1 = "hello"
  return function () {
    const part2 = "there";
    return function () {
      console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    };
  };
}

demoChain("Dr. Stephen Strange")()();

let wrapAdjective = function(value="*") {
  return function(adjective="special") {
    return `You are ${value}${adjective}${value}!`
  }
}


const encouragingPromptFunction = wrapAdjective ("!!!")

wrapAdjective("%")("a dedicated programmer");