import './order.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';

function Order() {

    useEffect(() => {
        getParticularUserOrders()
    }, [])
    const [data, setData] = useState([])
    const getParticularUserOrders = () => {
        axios.get('https://www.aditya-node.ga/api/v1/order/list/getParticularUserOrders',
            {
                headers: {
                    "accessToken": "vXkmLIDReR10AHFoCNAcWRgNScC4c5ptcqTmfBNknLkAoB6KGswE51LZlcj0ie60",
                    "authorization": "Basic Ym9vay1kaXJlY3Rvcnk6Ym9vay1kaXJlY3Rvcnk=",
                }
            }).then(res => {
                console.log("11111", res)
                setData(res?.data?.responseData?.result)
            }).catch(error => { console.log(error); })
    }
    console.log(data);
    return (
        <div className='container1'>
            {
                data?.map((item, index) => {
                    return (<div className='container2' key={index}>
                        <Image className='imageitem1' src={item?.bookImage}></Image>
                        {item?.bookId} by {item?.authorName} <br />
                        Quantity {item?.quantity}
                        Rs {item?.costPrice}
                        <Button variant='success'>Click Me</Button>
                    </div>)
                }
                )
            }
        </div>

    );
}


export default Order;