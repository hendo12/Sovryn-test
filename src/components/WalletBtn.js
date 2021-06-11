import React from 'react';

const walletAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';

const WalletBtn = ({ engaged, onWalletClick }) => {
    if(engaged) {
        return (
            <button className="button engaged flex items-center" onClick={onWalletClick}>
                <div className="user flex justify-evenly items-center rounded-l-lg">
                    <div className="walletAddress self-center text-sm font-semibold truncate">{walletAddress}</div>
                    <div className="userImg"></div>
                    {/* <img src={} alt="userImg" /> */}
                </div>
                <div className="exit flex items-center justify-center rounded-r-lg">
                    <div className="px-2">Ex</div>
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