import React from 'react';

const List = (props) => {
    return ( 
        <div id='list-container' className='col-md-6'>
                <div className='row'>
                    <div className='col-md-10'>
                        <span>To Do Item</span>
                    </div>
                    <div className='col-md-2'>
                        <span>Completed?</span>
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
                                    <span>???</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
     );
}
 
export default List;