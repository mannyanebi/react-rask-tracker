import {useState} from "react";

const AddTask = ({addTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()

        if (!text) {
            alert("Please enter a task")
            return
        }

        addTask({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form action="" className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder={'Add Task'} value={text}
                       onChange={(event => (setText(event.target.value)))}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder={'Day & Time'} value={day}
                       onChange={event => setDay(event.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder}
                       onChange={event => setReminder(event.currentTarget.checked)}/>
            </div>
            <input className={'btn btn-block'} type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask