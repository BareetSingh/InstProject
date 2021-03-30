import React, { useEffect, useState, Component } from "react";
import { Container, Table } from "reactstrap";
import axios from "axios";
import base_url from "./BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./NavBar";

const ShowBranch = () => {
  useEffect(() => {
    document.title = "All Branches";
  }, []);

  const [branch, setBranch] = useState([]);
  // const [address, setAddress] = useState([]);

  //function to call server
  const getAllBranchesFromServer = () => {
    axios
      .get(`http://localhost:8080/branch`)
      .then((response) => {
        // console.log(response.data);
        setBranch(response.data);
        // settingAddress(response.data);
        // console.log(address);
        <NavBar />;
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  //calling loading branch details form server
  useEffect(() => {
    getAllBranchesFromServer();
  }, []);

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Branch_Id</th>
            <th>Branch_Name</th>
            <th>Created_On</th>
            <th>Updated_On</th>
            <th>City</th>
            <th>District</th>
            <th>Pincode</th>
            <th>State</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {branch.map((br) => (
                <tr>
                  <td>
                    <div id={br.id}>{br.id}</div>
                  </td>
                </tr>
              ))}
            </td>
            <td>
              {branch.map((br) => (
                <tr>
                  <td>
                    <div id={br.id}>{br.name}</div>
                  </td>
                </tr>
              ))}
            </td>
            <td>
              {branch.map((br) => (
                <tr>
                  <td>
                    <div id={br.id}>{br.createdOn}</div>
                  </td>
                </tr>
              ))}
            </td>
            <td>
              {branch.map((br) => (
                <tr>
                  <td>
                    <div id={br.id}>{br.updatedOn}</div>
                  </td>
                </tr>
              ))}
            </td>
            <td>
              {branch.map((br) => (
                <tr>
                  <td>
                    <div id={br.id}>
                      {br.address != null ? br.address.city : "Null"}
                    </div>
                  </td>
                </tr>
              ))}
            </td>
            <td>
              {branch.map((br) => (
                <tr>
                  <td>
                    <div id={br.id}>
                      {br.address != null ? br.address.district : "Null"}
                    </div>
                  </td>
                </tr>
              ))}
            </td>
            <td>
              {branch.map((br) => (
                <tr>
                  <td>
                    <div id={br.id}>
                      {br.address != null ? br.address.pincode : "Null"}
                    </div>
                  </td>
                </tr>
              ))}
            </td>
            <td>
              {branch.map((br) => (
                <tr>
                  <td>
                    <div id={br.id}>
                      {br.address != null ? br.address.state : "Null"}
                    </div>
                  </td>
                </tr>
              ))}
            </td>
            <td>
              {branch.map((br) => (
                <tr>
                  <td>
                    <div id={br.id}>
                      {br.address != null ? br.address.country : "Null"}
                    </div>
                  </td>
                </tr>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default ShowBranch;
