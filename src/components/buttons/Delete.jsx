import React from 'react'

export const Delete = () => {
  
    return (
    <>
    <div className="cellAction">
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
    
              </div>
    </>
  )
}
