import React, { useState } from 'react';

const Modal = ({ assetActive, setAssetActive, weenusBalance, rethBalance }) => {
    let assetAmount;
    console.log(weenusBalance);

    if(assetActive === 'WEENUS') {
        assetAmount = weenusBalance;
    } else {
        assetAmount = rethBalance;
    }

    const onAssetClick = (e) => {
		e.preventDefault();
		console.log('asset clicked. event: ', e);
	}

    return (
        <div className="sendModal divide-solid border-white text-white font-bold pt-6 w-96">
            <form className="flex flex-col justify-center">
                <h1 className="text-center pb-4">SEND</h1>
                <div className="py-4">
                    <label>Asset:</label>
                    <div className="flex justify-around assets">
                        <button 
                            className={`rEth font-semibold ${assetActive === 'rEth' ? "active" : ""}`}
                            onClick={onAssetClick}
                        >
                            rETH
                        </button>
                        <button 
                            className={`weenus font-semibold ${assetActive === 'Weenus' ? "active" : ""}`}
                            onClick={onAssetClick}
                        >
                            WEENUS
                        </button>
                    </div>
                    <span className="text-xs font-normal">Available Balance: {assetAmount} {assetActive}</span>
                </div>
                <div className="py-4">
                    <label className="">Amount:</label>
                    <input className="py-2 rounded-md"></input>
                    <div className="percentages py-3 text-sm">
                        <button>10%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <button>75%</button>
                        <button>100%</button>
                    </div>
                </div>
                <div className="pb-6">
                    <label>Send To:</label>
                    <input className="py-2 rounded-md text-center text-sm" placeholder="Type or Paste address"></input>
                </div>
                <button className="cta button mx-auto">SUBMIT</button>
            </form>
        </div>
    )
}

export default Modal;