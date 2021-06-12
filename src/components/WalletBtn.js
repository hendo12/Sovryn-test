import React from 'react';

const WalletBtn = ({ engaged, onWalletClick, userWalletAddress }) => {
    if(engaged) {
        return (
            <button className="button engaged flex items-center" onClick={onWalletClick}>
                <div className="user flex justify-evenly items-center rounded-l-lg">
                    <div className="walletAddress self-center text-sm font-semibold truncate">{userWalletAddress}</div>
                    <div className="userImg"></div>
                </div>
                <div className="exit flex items-center justify-center rounded-r-lg">
                    <div className="px-3 arrow font-bold text-xl">&gt;</div>
                </div>
            </button>
        );
    } else {
        return (
            <button className="engage button" onClick={onWalletClick}>Engage Wallet</button>
        );
    }
};

export default WalletBtn;