import React, { useState } from 'react';
import logo from './assets/sovryn-logo-white.svg';
import EngageBtn from './components/EngageBtn';
import RenderModal from './components/RenderModal';

const App = () => {
	const [walletEngaged, setWalletEngaged] = useState(false);
	const [weenusBalance, setWeenusBalance] = useState(20000.00);
	const [rethBalance, setRethBalance] = useState(32.00);
	const [assetActive, setAssetActive] = useState('WEENUS');
	const [transactionStep, setTransactionStep] = useState('Send');
	// const []

	const onWalletClick = () => {
		setWalletEngaged(!walletEngaged);
		console.log(walletEngaged);
	}


	return (
		<div className="App">
			<header>
				<div className="container flex justify-between items-center py-2 px-4 mx-auto text-white">
					<img src={logo} alt="logo" />
					{/* <button className="engage button" walletengaged={walletEngaged} onClick={onWalletClick}>Engage Wallet</button> */}
					<EngageBtn engaged={walletEngaged} onWalletClick={onWalletClick} />
				</div>
			</header>
			<div className="walletApp mx-auto flex justify-center items-start">
				<div className={`${!walletEngaged ? "backdrop" : ""}`}></div>
				<RenderModal 
					assetActive={assetActive} 
					setAssetActive={setAssetActive} 
					weenusBalance={weenusBalance} 
					rethBalance={rethBalance}
					walletEngaged={walletEngaged}
					transactionStep={transactionStep}
					setTransactionStep={setTransactionStep}
					setWeenusBalance={setWeenusBalance}
					setRethBalance={setRethBalance}
				/>
			</div>
		</div>
	);
}

export default App;
