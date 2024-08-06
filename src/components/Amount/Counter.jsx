import { useState, useEffect } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

import { orderDetails } from "../../utils/orders";
import { numberFormat } from "../../utils/helper";

export default function Counter() {
    const [orderData, setOrderData] = useState({
        orders: 0,
        delivered: 0,
        cancelled: 0,
        revenue: 0,
    });

    const getOrderData = (obj) => {
        let deliveredCount = 0;
        let cancelledCount = 0;
        let revenueCount = 0;

        obj.forEach((orderDetail) => {
        const { status, amount } = orderDetail;

        if (status === "cancelled") {
            cancelledCount += 1;
        } else if (status === "delivered") {
            deliveredCount += 1;
            revenueCount += Number(amount);
        }
        });

        const formatCount = (count) => (count < 10 ? `0${count}` : `${count}`);

        setOrderData((prev) => ({
        ...prev,
        orders: formatCount(obj.length),
        delivered: formatCount(deliveredCount),
        cancelled: formatCount(cancelledCount),
        revenue: formatCount(revenueCount),
        }));
    };

    useEffect(() => {
        getOrderData(orderDetails);
    }, []);

    const { orders, delivered, cancelled, revenue } = orderData;
    return (
        <>
        <div className="flex-dark">
            <section className="text-[#4560FC] bg-[#28346A] p-3 rounded-md max-w-fit relative">
            <BsBasket2Fill size={30} />
            <span className="absolute bg-[#7680EE] rounded-full right-3 bottom-2">
                <IoMdAdd size={16} className="text-white p-0.5" />
            </span>
            </section>
            <p className="capitalize font-semibold ">total orders</p>
            <section className="flex items-end justify-between">
            <p className="text-3xl font-bold">{orders}</p>
            <span className="text-[#00CA8C]">
                <FaCaretUp size={20} className="inline-block mx-1" />
                3%
            </span>
            </section>
        </div>
        <div className="flex-dark">
            <section className="text-[#00CA8C] bg-[#1A5248] p-3 rounded-md max-w-fit relative">
            <BsFillBagFill size={30} />
            <span className="absolute bg-[#74DFC2] rounded-full right-3 bottom-2">
                <TiTick size={16} className="text-white p-0.5" />
            </span>
            </section>
            <p className="capitalize font-semibold">total delivered</p>
            <section className="flex items-end justify-between">
            <p className="text-3xl font-bold">{delivered}</p>
            <span className="text-[#F45C5B]">
                <FaCaretDown size={20} className="inline-block mx-1" />
                12%
            </span>
            </section>
        </div>
        <div className="flex-dark">
            <section className="text-[#F45C5B] bg-[#633239] p-3 rounded-md max-w-fit relative">
            <BsFillBagFill size={30} />
            <span className="absolute bg-[#FA8F99] rounded-full right-3 bottom-2">
                <RxCross2 size={16} className="text-white p-0.5" />
            </span>
            </section>
            <p className="capitalize font-semibold">total cancelled</p>
            <section className="flex items-end justify-between">
            <p className="text-3xl font-bold">{cancelled}</p>
            <span className="text-[#00CA8C]">
                <FaCaretUp size={20} className="inline-block mx-1" />
                8%
            </span>
            </section>
        </div>
        <div className="flex-dark ">
            <section className="text-[#E444A1] bg-[#5C2C4C] p-3 rounded-md max-w-fit relative">
            <BiSolidDollarCircle size={30} />
            </section>
            <p className="capitalize font-semibold">total revenue</p>
            <section className="flex items-end justify-between">
            <p className="text-3xl font-bold">{numberFormat(revenue, true)}</p>
            <span className="text-[#F45C5B]">
                <FaCaretDown size={20} className="inline-block mx-1" />
                13%
            </span>
            </section>
        </div>
        </>
    );
}
