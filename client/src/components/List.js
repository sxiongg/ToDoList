import React from 'react';

const List = (props) => {
    return ( 
        <div id='list-container'>
                <div className='row'>
                    <div className='col-md-10'>
                        <span>To Do Item</span>
                    </div>
                    <div className='col-md-2'>
                        <span>Completed</span>
                    </div>
                </div>
                <div className='list-table'>
                    {props.listData.map((item, index) => {
                        return (
                            <div className='row' key={index}>
                                <div className='col-md-10'>
                                    <span>{item.text}</span>
                                </div>
                                <div className='col-md-2'>
                                    {item.completed 
                                    ? <input type='checkbox' checked onChange={(e) => {
                                        props.updateItem(item, { text: item.text, completed: false, details: '' })
                                    }}/> 
                                    : <input type='checkbox' onChange={(e) => {
                                        props.updateItem(item, { text: item.text, completed: true, details: '' })
                                    }}/>}
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
     );
}
 
export default List;