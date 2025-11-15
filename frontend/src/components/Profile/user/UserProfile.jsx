import React, { useEffect, useState } from "react";
import profiePic from "../../../assets/human6.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import UserSidebar from "./UserSidebar";
import Swal from "sweetalert2";

function UserProfile() {
  const [userData, setuserData] = useState([]);
  const [userName, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
 
  const [state, setState] = useState("");
  const [dateOfBirth, setdateofBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchInfo = async (e) => {
      const user = JSON.parse(localStorage.getItem("user"));
      setuserData(user);
      setName(user.userName || "");
      setMobileNumber(user.phoneNumber || "");
      setAddress(user.address ? user.address.street || "" : "");
      setCity(user.address ? user.address.city || "" : "");
      setState(user.address ? user.address.state || "" : "");
      const formattedDateOfBirth = user.dateOfBirth
        ? user.dateOfBirth.split("T")[0]
        : "";
      setdateofBirth(formattedDateOfBirth);
      setGender(user.gender || "");
      setEmail(user.email || "");
    };

    fetchInfo();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      axios
        .put("https://healthcare-x8vk.onrender.com/user/profile-update", {
          userId: userData._id,
          updatedProfile: {
            email: email,
            userName: userName,
            phoneNumber: mobileNumber,
            address: {
              street: address,
              city: city,
              state: state,
            },
            gender: gender,
            dateOfBirth: dateOfBirth,
          },
        })
        .then((res) => {
          if (res.data.status === "Success") {
            Swal.fire({
              title: "Success",
              icon: "success",
              confirmButtonText: "Ok",
              text: "Profile Updated Successfully!",
            });
            const user = res.data.user;
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "/user-profile";
          }
        });
    } catch (err) {
      Swal.fire({
        title: "Error",
        icon: "error",
        confirmButtonText: "Ok",
        text: "Error Updating Profile! Please Try Again!",
      });
    }
  };

  return (
    <section className="bg-slate-300 flex justify-center items-center">
      <div className="h-[80%] w-[80%] bg-white shadow-xl p-2 flex">
        <UserSidebar profiePic={profiePic} userName={userData.userName} />
        <div className=" w-[70%] ms-24 p-4 flex flex-col justify-around ">
          <p className="text-green-700 font-semibold text-2xl">
        Click on Appointment to Book Appointment
      </p>
            
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
