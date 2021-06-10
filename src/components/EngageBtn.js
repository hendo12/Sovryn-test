import React from 'react';

const walletAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';

const EngageBtn = ({ engaged, onWalletClick }) => {
    if(engaged) {
        return (
            <button className="button engaged flex items-center rounded-lg" onClick={onWalletClick}>
                <div className="user flex justify-evenly items-center">
                    <div className="walletAddress self-center text-sm font-semibold truncate">{walletAddress}</div>
                    <div>Lo</div>
                    {/* <img src={} alt="userImg" /> */}
                </div>
                <div className="exit flex items-center justify-center">
                    <div>Ex</div>
                </div>
            </button>
        );
    } else {
        return (
            <button className="engage button" onClick={onWalletClick}>Engage Wallet</button>
        );
    }
};

export default EngageBtn;