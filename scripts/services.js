import { getAreas, getServices } from "./database.js";

const areas = getAreas()

const services = getServices()

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("service")) {
      console.log(itemClicked.id);
      const [, serviceId] = itemClicked.id.split("--");

      const service = services.find(el => el.id === +serviceId)
      let areaString = ''
      
      for (let areaId of service.areaIds){//looping through the areaIds array in services
        const area = areas.find(el => el.id === areaId)
        areaString += area.areaName +  ", "
      }
      areaString = areaString.slice(0, -2)
  
      window.alert(`${service.service} is available in ${areaString}`)
    }
  });