import './books.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import { logDOM } from '@testing-library/react';

function Books() {
    let access = localStorage.getItem("accessToken")
    console.log(access);
    const [cartId, setCartId] = useState()
    const [bookId, setBookId] = useState()
    const [accessToken, setAccessToken] = useState(access)
    const [data, setData] = useState([])

    useEffect(() => {
        getallbooks()

    }, [])




    console.log(accessToken);

    const getallbooks = () => {
        axios.get('https://www.aditya-node.ga/api/v1/book/list/allAvailableBooks',
            {
                headers: {
                    "accessToken": accessToken,
                    "authorization": "Basic Ym9vay1kaXJlY3Rvcnk6Ym9vay1kaXJlY3Rvcnk="

                }
            }).then(res => {
                console.log(res)
                setData(res.data.responseData)
            }).catch(error => { console.log(error); })
    }
    // const removeBookFromStore = () => {
    //     axios.delete('https://www.aditya-node.ga/api/v1/book/deleteBookFromStore', { bookId: bookId },
    //         {
    //             headers: {
    //                 "accessToken": localStorage.getItem('accessToken'),
    //                 "authorization": "Basic Ym9vay1kaXJlY3Rvcnk6Ym9vay1kaXJlY3Rvcnk="
    //             }
    //         }).then(res => {
    //             console.log(res)
    //             setData(res.data.responseData)
    //         }).catch(error => { console.log(error); })
    // }
    // console.log(data);
    // const addToCart = () => {
    //     axios.post('https://www.aditya-node.ga/api/v1/cart/addToCart', { bookId: bookId },
    //         {
    //             headers: {
    //                 "accessToken": localStorage.getItem('accessToken'),
    //                 "authorization": "Basic Ym9vay1kaXJlY3Rvcnk6Ym9vay1kaXJlY3Rvcnk="
    //             }
    //         }).then(res => {
    //             console.log(res)
    //             setData(res.data.responseData)
    //         }).catch(error => { console.log(error); })
    // }
    // const placeOrder = () => {
    //     axios.post('https://www.aditya-node.ga/api/v1/order/placeOrder', { cartId: cartId, bookId: bookId },
    //         {
    //             headers: {
    //                 "accessToken": localStorage.getItem('accessToken'),
    //                 "authorization": "Basic Ym9vay1kaXJlY3Rvcnk6Ym9vay1kaXJlY3Rvcnk="
    //             }
    //         }).then(res => {
    //             console.log(res)
    //             setData(res.data.responseData)
    //         }).catch(error => { console.log(error); })
    // }
    return (
        <div className='bookContainer'>
            {
                data?.map((item, index) => <div className='bookContainer1'>
                    <div >
                        <Button variant='danger' className='deleteIcon'><RiDeleteBinLine /></Button></div>
                    <Image className='imageitem' src={item.bookImage}></Image>
                    {item.bookName} by {item.authorName} <br />
                    Rs {item.costPrice}
                    <Button className='button' variant='success' >Add to Cart</Button>
                    <Button className='button' variant='warning' >Place Order</Button>
                </div>
                )
            }
        </div>

    );
}


export default Books;