import { BiCar, BiCycling } from "react-icons/bi";
import { BsDoorOpen } from "react-icons/bs";
import { MdOutlineSpa, MdPool } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { Atm } from "../components/SVGComponents/property/Atm";
import { Browser } from "../components/SVGComponents/property/Browser";
import { Court } from "../components/SVGComponents/property/Court";
import { Flower } from "../components/SVGComponents/property/Flower";
import { Ground } from "../components/SVGComponents/property/Ground";
import { Gym } from "../components/SVGComponents/property/Gym";
import { Scooter } from "../components/SVGComponents/property/Scooter";
import { Skarting } from "../components/SVGComponents/property/Skarting";
import { Solar } from "../components/SVGComponents/property/Solar";
import { Store } from "../components/SVGComponents/property/Store";
import { Yoga } from "../components/SVGComponents/property/Yoga";

export const amenities = [
  {
    icon: <BiCar className="w-8 h-8 text-primaryColor" />,
    value: "carParking",
    title: "Car Parking",
  },
  {
    icon: <Scooter width="2rem" height="2rem" color="#FDB813" />,
    value: "bikeParking",
    title: "Two-Wheeler Parking",
  },
  {
    icon: <Ground width="2rem" height="2rem" color="#FDB813" />,
    value: "playArea",
    title: "Kid's Play Ground",
  },
  {
    icon: <Gym width="2rem" height="2rem" color="#FDB813" />,
    value: "indoorGym",
    title: "Gym",
  },
  {
    icon: <BiCycling className="w-8 h-8 text-primaryColor" />,
    value: "cyclingTrack",
    title: "Cycling Track",
  },
  {
    icon: <Yoga width="2rem" height="2rem" color="#FDB813" />,
    value: "yogaRoom",
    title: "Yoga Room",
  },
  {
    icon: <Court width="2rem" height="2rem" color="#FDB813" />,
    value: "multipurposeCourt",
    title: "Multi-purpose Court",
  },
  {
    icon: <MdPool className="w-8 h-8 text-primaryColor" />,
    value: "kidsPool",
    title: "Kids Pool",
  },
  {
    icon: <MdPool className="w-8 h-8 text-primaryColor" />,
    value: "swimmingPool",
    title: "Swimming Pool",
  },
  {
    icon: <MdOutlineSpa className="w-8 h-8 text-primaryColor" />,
    value: "aerobicsStudio",
    title: "Aerobics Studio",
  },
  {
    icon: <MdOutlineSpa className="w-8 h-8 text-primaryColor" />,
    value: "spa",
    title: "Spa",
  },
  {
    icon: <Skarting width="2rem" height="2rem" color="#FDB813" />,
    value: "skatingRink",
    title: "Skating Rink",
  },
  {
    icon: <VscLibrary className="w-8 h-8 text-primaryColor" />,
    value: "library",
    title: "Library",
  },
  {
    icon: <BsDoorOpen className="w-8 h-8 text-primaryColor" />,
    value: "banquetHall",
    title: "Banquet Hall",
  },
  {
    icon: <Flower width="2rem" height="2rem" color="#FDB813" />,
    value: "terraceGarden",
    title: "Terrace Garden",
  },
  {
    icon: <Browser width="2rem" height="2rem" color="#FDB813" />,
    value: "internet",
    title: "Internet Service Provider",
  },
  {
    icon: <BiCar className="w-8 h-8 text-primaryColor" />,
    value: "visitorParking",
    title: "Visitor Parking",
  },
  {
    icon: <Store width="2rem" height="2rem" color="#FDB813" />,
    value: "convenienceStore",
    title: "Convenience Store",
  },
  {
    icon: <BiCycling className="w-8 h-8 text-primaryColor" />,
    value: "powerBackup",
    title: "Power Backup",
  },
  {
    icon: <Atm width="2rem" height="2rem" color="#FDB813" />,
    value: "atm",
    title: "Atm",
  },
  {
    icon: <Solar width="2rem" height="2rem" color="#FDB813" />,
    value: "solarHeater",
    title: "Solar Heater",
  },
];

export const reviews = [
  {
    name: "User 1",
    comment:
      "Comment 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste similique, repellat eum laboriosam, harum consequatur atque nihil ducimus reiciendis dolore animi molestias id distinctio dicta voluptatum itaque et possimus!",
    role: "User",
  },
  {
    name: "User 2",
    comment:
      "Comment 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste similique, repellat eum laboriosam, harum consequatur atque nihil ducimus reiciendis dolore animi molestias id distinctio dicta voluptatum itaque et possimus!",
    role: "Agent",
  },
  {
    name: "User 3",
    comment:
      "Comment 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste similique, repellat eum laboriosam, harum consequatur atque nihil ducimus reiciendis dolore animi molestias id distinctio dicta voluptatum itaque et possimus!",
    role: "User",
  },
  {
    name: "User 4",
    comment:
      "Comment 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste similique, repellat eum laboriosam, harum consequatur atque nihil ducimus reiciendis dolore animi molestias id distinctio dicta voluptatum itaque et possimus!",
    role: "Agent",
  },
];
