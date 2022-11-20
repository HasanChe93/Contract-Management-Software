
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {useEffect,useState} from 'react'
import {useContext} from 'react'
import axios from 'axios';
import {UserContext} from '../context/UserContext';
import './Dash.css'
import {Link } from "react-router-dom";

function Dashboard() {
   const {user, logout} = useContext(UserContext);
  useEffect( () => { 

    window.scrollTo(0, 0);
    alluser();
  }, []); 
  // http://localhost/bor/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/apicrud/users.php
  const [isuser, setuser] = useState([{}]);
  const alluser = async (ids) => {
    try {
      axios.get(`http://localhost/borCopy/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/dashusers.php`)
      .then(res => {
         console.log(res.data.userlist.userdata)
        setuser(res.data.userlist.userdata);
        
      })
    } catch (error) { throw error;}    
  }
  console.log(isuser)




  const editConfirm = async (id) => {
    try {
      axios.post(`http://localhost/borCopy/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/editusers.php`, { 
        userids: id,
      })
      .then(res => {
        setuser([]);
        alluser();
        return;
       })
    } catch (error) { throw error;}    
  }


  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };
  const deleteUser = async (id) => {
    try {
      axios.post(`http://localhost/borCopy/React-CRUD-operations-using-PHP-API-and-MySQLi-main/apicrud/deleteusers.php`, { 
        userids: id,
      })
      .then(res => {
        setuser([]);
        alluser();
        return;
       })
    } catch (error) { throw error;}    
  }


  return (
    <div className="page">
        
    <div className="sidebar"> 
        
        <a href="/"> <i class="fa-solid fa-house"></i>&emsp;  <p className="two"> Home Page </p>  </a>
        <a href="/contracts"> <i class="fa-solid fa-sheet-plastic"></i>&emsp;   <p clas="one">Contracts </p> &nbsp; &nbsp;</a>
    
        
    </div>
        
    <div class="buttons">
        <button  class="logout" className="button-71" style={{backgroundColor:"red"}} onClick={logout}>  Log Out </button>
        <button class="button-71" > Profile  </button> 
    


   
    </div>
    
    <table id="customers">
    <tr>
    <th>contract name</th>
    <th>signing date</th>
    <th>expiration date</th>
    <th>total cost</th>
    <th>legal office name</th>
    <th>employee number</th>
    <th>service items</th>
    <th>amount</th>
    <th>warranty start date</th>
    <th>warranty end date</th>
    <th>company name</th>
    <th>location</th>
    <th>phone</th>
    <th>is_approved</th>



     </tr>
    {isuser.map((item)=>
    
    <tr>
    <td>{item.contract_name}</td>
    <td>{item.signing_date}</td>
    <td>{item.expiration_date}</td>
    <td>{item.total_cost}</td>
    <td>{item.legal_office_name}</td>
    <td>{item.employee_number}</td>
    <td>{item.service_items}</td>
    <td>{item.amount}</td>
    <td>{item.warranty_start_date}</td>
    <td>{item.warranty_end_date}</td>
    <td>{item.company_name}</td>
    <td>{item.location}</td>
    <td>{item.phone}</td>
    <td> <a onClick={() => editConfirm(item.id)} className="button-44"> Approve </a>
    <a onClick={() => deleteConfirm(item.id)} className="button-44"> Delete </a></td>


   </tr>

)}
</table>

   
  
 
    </div>

    
  )
}

export default Dashboard




