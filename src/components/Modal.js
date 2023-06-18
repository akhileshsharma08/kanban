import React from 'react'

const Modal = () => {
  return (
    <div>
          <div
        className={
          modal
            ? "fixed inset-0 backdrop-blur-sm bg-black flex justify-center items-center opacity-75 t-32 z-30 l-80 mx-auto  visible  "
            : "invisible"
        }
      >
        <div className="card m-2 p-2">
          <div className="tododata bg-blue-800 text-gray-900 rounded flex justify-center items-center">
            <form className="mx-auto px-4 py-2">
              <div className="div my-2 flex justify-between items-center">
               
                <div>
                  <label
                    htmlFor="worktype"
                    className="text-white mx-2 capitalize"
                  >
                    {" "}
                    type
                  </label>

                  <select
                    name="selecttype"
                    id="worktype"
                    className="my-2 bg-zinc-100 rounded p-1"
                  >
                    <option value="low">low</option>
                    <option value="high">high</option>
                  </select>
                </div>
                {/* close button */}
                <div className="text-white mr-2  font-bold cursor-pointer  " onClick={handleCloseModal}>X</div>
              </div>
              <div className="my-2">
                <label htmlFor="title" className="text-white mx-2 capitalize">
                  title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="enter title"
                  className="my-2 bg-zinc-100 rounded p-1"
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                />
              </div>
              <div className="my-2">
                <label htmlFor="work" className="text-white mx-2 capitalize">
                  work
                </label>

                <input
                  type="text"
                  name="work"
                  placeholder="enter description"
                  className="my-2 bg-zinc-100 rounded p-1"
                  onChange={(e) => {
                    setwork(e.target.value);
                  }}
                />
              </div>
              <div className="my-2 flex justify-center w-full">
                <button
                  className=" px-4 py-1 bg-green-500 text-white outline outline-1 hover:bg-green-600   rounded"
                  onClick={handletodo}
                >
                  save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal