const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <lalel>Task</lalel>
                <input type='text' placeholder='Add' />
            </div>

            <div className='form-control'>
                <lalel>Day/time</lalel>
                <input type='text' placeholder='Day/time' />
            </div>

            <div className='form-control form-control-check'>
                <lalel>Set reminder</lalel>
                <input type='checkbox' />
            </div>
            <input type='submit' value='Save' className='btn btn-block'/>

        </form>
    )
}

export default AddTask
