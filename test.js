function importantPerson() {
  console.log(this.name);
}

const name = "Sunny";

//importantPerson();

const talk = () => {
  console.log(this);
};

talk();
