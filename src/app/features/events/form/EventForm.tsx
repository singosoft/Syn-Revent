type Props = {
    setFormOpen: (open: boolean) => void;
}

export default function EventForm({setFormOpen}:Props) {
  return (
    <div className="card bg-base-100 p-4 flex-col gap-3 w-full">
        <h3 className="text-2xl font-semibold text-center text-primary">Create new event</h3>
        <form className="flex flex-col gap-3 w-full">
            <input type="text" className="input input-lg w-full" placeholder="Event title" />
            <input type="text" className="input input-lg w-full" placeholder="Category" />
            <textarea className="textarea textarea-lg w-full" placeholder="Description" />
            <input type="text" className="input input-lg w-full" placeholder="Date" />
            <input type="text" className="input input-lg w-full" placeholder="City" />
            <input type="text" className="input input-lg w-full" placeholder="venue" />            
            <div className="flex justify-end w-full gap-3">
                <button onClick={() => setFormOpen(false)} className="btn btn-neutral">Cancel</button>
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>        
    </div>
  )
}