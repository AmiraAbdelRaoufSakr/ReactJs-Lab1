import React from 'react';

class DisplayData extends React.Component{
        constructor(){
            super();
            this.data = {
                id: 1,
                jobTitleName: "Developer",
                firstName: "Amira",
                lastName: "Sakr",
                preferredFullName: "Amira Sakr",
                employeeCode: "El",
                region: "CA",
                phoneNumber: "408-1234567",
                emalAddress: "amira.sakr@gmail.com"
            }
        }
        
        
    
    render(){
        return(
            <div className="mt-5"><table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">jobTitleName</th>
                <th scope="col">firstName</th>
                <th scope="col">lastName</th>
                <th scope="col">preferredFullName</th>
                <th scope="col">employeeCode</th>
                <th scope="col">region</th>
                <th scope="col">phoneNumber</th>
                <th scope="col">emalAddress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{ this.data.id }</th>
                <td>{ this.data.jobTitleName }</td>
                <td>{ this.data.firstName }</td>
                <td>{ this.data.lastName }</td>
                <td>{ this.data.preferredFullName }</td>
                <td>{ this.data.employeeCode }</td>
                <td>{ this.data.region }</td>
                <td>{ this.data.phoneNumber }</td>
                <td>{ this.data.emalAddress }</td>
               

              </tr>
              
            </tbody>
          </table></div>
        )
    }
}
export default DisplayData;