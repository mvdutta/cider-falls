import { getGuests } from "./database.js";
//get copy of guests database that is stored in the guests array
const guests = getGuests();

//start with an empty string and then loop through guests and create a string of <li></li> for each guest

export const makeGuestHTML = () => {
  let listString = "";
  for (let guest of guests) {
    listString += `<li id="guest--${guest.id}">${guest.firstName} ${guest.lastName}</li>`;
  }
  return listString
};

