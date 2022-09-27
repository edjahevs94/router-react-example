import {Link} from 'react-router-dom'


export default function List(){
    return (
        <div className="card mt-3">
            <div className="card-header">
                <Link to={"/create"}>
                    <button className="btn btn-success me-2">Add new project</button>
                </Link>
            </div>
            
            <div className="card-body">
                <h4> Project List</h4>
             
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Priority</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    
                    <tbody>  
                        <tr >
                            <td>1</td>
                            <td>Project 1</td>
                            <td>1</td>
                            <td>Front</td>
                        </tr>
                        <tr >
                            <td>2</td>
                            <td>Project 2</td>
                            <td>2</td>
                            <td>Back</td>
                        </tr>
                        <tr >
                            <td>3</td>
                            <td>Project 3</td>
                            <td>3</td>
                            <td>UX</td>
                        </tr>
                    </tbody>
                    
                </table>
                  </div> 
            <div className="card-footer text-muted">

            </div>
        </div>
    )
}