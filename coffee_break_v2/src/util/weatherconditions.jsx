import {
  BsSun,
  BsFillCloudSunFill,
  BsCloudFog2,
  BsCloudDrizzle,
  BsCloudRainHeavy,
  BsCloudSnow,
  BsCloudLightning,
  BsQuestionCircle,
} from "react-icons/bs";

export const weatherConditions = [
  {
    name: "Klart",
    icon: <BsSun />,
  },
  {
    name: "Delvis overskyet",
    icon: <BsFillCloudSunFill />,
  },
  {
    name: "Tåke",
    icon: <BsCloudFog2 />,
  },
  {
    name: "Småregner",
    icon: <BsCloudDrizzle />,
  },
  {
    name: "Regner",
    icon: <BsCloudRainHeavy />,
  },
  {
    name: "Snør",
    icon: <BsCloudSnow />,
  },
  {
    name: "Lyn og torden",
    icon: <BsCloudLightning />,
  },
];
export const getWeatherSymbol = (weathercode) => {
  let condition = {};

  switch (weathercode) {
    case 0:
      condition = weatherConditions[0];
      break;
    case 1:
    case 2:
    case 3:
      condition = weatherConditions[1];
      break;
    case 45:
    case 48:
      condition = weatherConditions[2];
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      condition = weatherConditions[3];
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      condition = weatherConditions[4];
      break;
    case 71:
    case 73:
    case 75:
    case 77:
      condition = weatherConditions[5];
      break;
    case 95:
    case 96:
    case 99:
      condition = weatherConditions[6];
      break;
    default:
      condition = {
        name: "Usikker fremtid",
        icon: <BsQuestionCircle />,
      };
      break;
  }
  return condition;
};
