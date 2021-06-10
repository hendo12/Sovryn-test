import React, { useState } from 'react';
import SendModal from './SendModal';
import ReviewModal from './ReviewModal';
import DetailsModal from './DetailsModal';

const RenderModal = ({ assetActive, setAssetActive, weenusBalance, rethBalance, walletEngaged, transactionStep, setWeenusBalance, setRethBalance }) => {
    const [assetAmountToSend, setAssetAmountToSend] = useState(0);

    return (
        <div className="Modal text-white font-bold pt-8 w-96">
            { transactionStep === 'Send' ? 
                <SendModal 
                    assetActive={assetActive} 
                    setAssetActive={setAssetActive} 
                    weenusBalance={weenusBalance} 
                    rethBalance={rethBalance}
                    walletEngaged={walletEngaged}
                    setAssetAmountToSend={setAssetAmountToSend}
                    assetAmountToSend={assetAmountToSend}
                    transactionStep={transactionStep}
					setWeenusBalance={setWeenusBalance}
					setRethBalance={setRethBalance}
                />
                : null
            }
            { transactionStep === 'Review' ? 
                <ReviewModal
                    assetActive={assetActive}

                />
                : null
            }
            { transactionStep === 'Details' ? 
                <DetailsModal 
                    
                />
                : null
            }
        </div>
    )
}

export default RenderModal;