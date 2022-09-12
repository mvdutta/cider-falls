import { getAreas, getGuests } from "./database.js";

const areas = getAreas();
const guests = getGuests();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("area")) {
    console.log(itemClicked.id);
    const [, areaId] = itemClicked.id.split("--");

    const guestsInThisArea = [];

    for (const guest of guests) {
      if (guest.areaId === +areaId) {// + is the same as putting parseInt
        guestsInThisArea.push(guest);
      }
    }
    window.alert(`There are ${guestsInThisArea.length} in this area`)
  }
});
