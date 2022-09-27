
export default function Create() {
    return (
        <div className="card">
            <div className="card-header">
               <h4>Project</h4> 
            </div>
           
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value=""
                            className="form-control"
                            placeholder="Project name" />
                       
                        <small id="helpId" className="text-muted">Whrite project name here</small>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="">Priority</label>
                        <input 
                            type="text" 
                            name="priority" 
                            value="" 
                            className="form-control" 
                            placeholder="Project priority" />
                        
                        <small id="helpId" className="text-muted">Whrite project priority here</small>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="">Description</label>
                        <textarea 
                            type="text" 
                            name="description" 
                            value=""
                            className="form-control" 
                            placeholder="Project description..." />
                        
                        <small id="helpId" className="text-muted">Whrite project description here</small>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-success">Add new project</button>
                        <button className="btn btn-primary ms-2">Cancel</button>
                    </div>
                </form>
            </div>
            <div className="card-footer text-muted"></div>
        </div>
    )
}