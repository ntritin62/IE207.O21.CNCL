import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  ADMIN,
  ADMIN_COUPON,
  ADMIN_ORDERS,
  ADMIN_PRODUCTS,
  HOME,
} from '../../../../constants/routes';

const Sidebar = () => {
  return (
    <>
      <div className="bg-white mx-auto fixed top-0 left-0 bottom-0 w-[230px] shadow">
        <Link to={HOME}>
          <figure className="w-[124px] pt-[16px] mx-auto">
            <img src="/images/logo.png" alt="" className="w-full " />
          </figure>
        </Link>
        <ul className="mt-[30px] flex flex-col gap-[15px]">
          <li className=" p-[20px]">
            <NavLink to={ADMIN} end className="flex items-center gap-[20px]">
              {({ isActive }) => (
                <>
                  <img
                    src="/icons/home.svg"
                    alt=""
                    className={isActive ? 'action-icon' : 'sidebar-icon'}
                  />
                  <p className={isActive ? 'text-primary' : 'text-text'}>
                    Trang chủ
                  </p>
                </>
              )}
            </NavLink>
          </li>
          <li className="p-[20px]">
            <NavLink
              to={ADMIN_PRODUCTS}
              className="flex items-center gap-[20px]"
            >
              {({ isActive }) => (
                <>
                  <img
                    src="/icons/products.svg"
                    alt=""
                    className={`${
                      isActive ? 'action-icon' : 'sidebar-icon'
                    } w-[24px]`}
                  />
                  <p className={isActive ? 'text-primary' : 'text-text'}>
                    Sản phẩm
                  </p>
                </>
              )}
            </NavLink>
          </li>
          <li className=" p-[20px]">
            <NavLink to={ADMIN_ORDERS} className="flex items-center gap-[20px]">
              {({ isActive }) => (
                <>
                  <img
                    src="/icons/orders.svg"
                    alt=""
                    className={`${
                      isActive ? 'action-icon' : 'sidebar-icon'
                    } w-[24px]`}
                  />
                  <p className={isActive ? 'text-primary' : 'text-text'}>
                    Đơn hàng
                  </p>
                </>
              )}
            </NavLink>
          </li>
          <li className=" p-[20px]">
            <NavLink to={ADMIN_COUPON} className="flex items-center gap-[20px]">
              {({ isActive }) => (
                <>
                  <img
                    src="/icons/coupon.svg"
                    alt=""
                    className={`${
                      isActive ? 'action-icon' : 'sidebar-icon'
                    } w-[24px]`}
                  />
                  <p className={isActive ? 'text-primary' : 'text-text'}>
                    Mã khuyến mãi
                  </p>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
