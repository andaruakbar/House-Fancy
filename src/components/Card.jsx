import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const CardHouse = (props) => {
  return (
    <div className="container flex flex-col bg-white shadow-zinc-700 shadow rounded-sm p-2 text-neutral-800">
      <img src={props.imageHouse ? props.imageHouse : "https://via.placeholder.com/400x200.jpg?text=No+Image"} alt={props.imageHouse} />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col mb-3 mx-2 lg:w-full">
          <p className="font-semibold text-lg mt-4 cursor-pointer" onClick={props.onClickDetailHouse}>
            {props.titleHouse}
          </p>
          <div className="flex my-1">
            <div className="self-center">
              <FaDollarSign />
            </div>
            <p className="font-normal text-sm ml-1">IDR {props.cost}</p>
          </div>
          <div className="flex mb-1">
            <div className="self-center">
              <FaMapMarker />
            </div>
            <p className="font-normal text-sm ml-1">{props.location}</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex">
              <FaHome />
              <p className="font-normal text-sm ml-1">
                Land Area: {props.landArea} m<sup>2</sup>
              </p>
            </div>
            <div className="flex">
              <FaHome />
              <p className="font-normal text-sm ml-1">
                Building Area: {props.buildingArea} m<sup>2</sup>
              </p>
            </div>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

const CardContractor = (props) => {
  return (
    <div className="container flex flex-col bg-white shadow-zinc-700 shadow rounded-sm p-2 text-neutral-800">
      <img src={props.imageContractor ? props.imageContractor : "https://via.placeholder.com/400x200.jpg?text=No+Image"} alt={props.imageContractor} />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col mb-3 mx-2 lg:w-full">
          <p className="font-semibold text-lg mt-4 cursor-pointer" onClick={props.onClickDetailContractor}>
            {props.nameContractor}
          </p>
          <div className="flex my-1">
            <div className="self-center">
              <FaMapMarker />
            </div>
            <p className="font-normal text-sm ml-1">{props.location}</p>
          </div>
          <div className="flex mb-1">
            <div className="self-center">
              <FaPhone />
            </div>
            <p className="font-normal text-sm ml-1">{props.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const CardPortfolio = (props) => {
  return (
    <div className="container flex flex-col bg-white shadow-zinc-700 shadow rounded-sm p-2 text-neutral-800">
      <img src={props.imagePortfolio ? props.imagePortfolio : "https://via.placeholder.com/400x200.jpg?text=No+Image"} alt={props.imagePortfolio} />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row justify-between mb-3 mx-2 mt-4 lg:w-full ">
          <div className="flex flex-col">
            <p className="font-semibold text-lg cursor-pointer" onClick={props.onClickDetailPortfolio}>
              Client:
              {props.nameClient}
            </p>
            <p className="font-normal text-md my-1">
              Cost: IDR
              {props.cost}
            </p>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export { CardHouse, CardContractor, CardPortfolio };