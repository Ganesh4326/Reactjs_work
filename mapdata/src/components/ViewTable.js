import React,{Component} from "react";
class ViewTable extends Component
{
    data = [{
        "name":"Henry",
        "Gender":"male",
        "salary":10000
    },
    {
        "name":"Harry",
        "Gender":"male",
        "salary":16000
    },
    {
        "name":"gwen",
        "Gender":"female",
        "salary":25000
    },
    ]

    render()
    {
        return (
            <table>
                <tr>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Salary</td>
                </tr>
                {
                    this.data.map((item)=>
                    {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.Gender}</td>
                                <td>{item.salary}</td>
                            </tr>
                        )
                    })
                }
            </table>
        )
    }
}

export default ViewTable;