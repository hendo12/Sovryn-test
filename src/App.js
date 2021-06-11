import React, { useState } from 'react';
import logo from './assets/sovryn-logo-white.svg';
import WalletBtn from './components/WalletBtn';
import RenderStep from './components/RenderStep';

const Web3 = require('web3');

const App = () => {
	const [walletEngaged, setWalletEngaged] = useState(false);
	const [weenusBalance, setWeenusBalance] = useState(0);
	const [rethBalance, setRethBalance] = useState(0);
	const [assetActive, setAssetActive] = useState('WEENUS');
	const [transactionStep, setTransactionStep] = useState('Send');
	const [walletAddress, setWalletAddress] = useState('');
	// let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

	const ethEnabled = async () => {
		if (window.ethereum) {
		  await window.ethereum.send('eth_requestAccounts');
		  window.web3 = new Web3(window.ethereum);

		  window.web3.eth.getAccounts()
		  .then((res) => {
			  console.log(res[0]);
			  
			  setWalletAddress(res[0]);
			  console.log('user wallet address: ', walletAddress);
			  setWalletEngaged(true);
		  });




		  return true;
		}
		return false;
	}

	const onWalletBtnClick = async () => {
		if(!walletEngaged) {
			ethEnabled();

		} else {
			setWalletEngaged(false);
			//sign user out
		}
	}

	return (
		<div className="App">
			<header>
				<div className="container flex justify-between items-center py-1 px-4 mx-auto text-white">
					<img src={logo} alt="sovryn logo" className="logo" />
					<WalletBtn 
						engaged={walletEngaged} 
						onWalletClick={onWalletBtnClick} 
						userWalletAddress={walletAddress}
					/>
				</div>
			</header>
			<div className="walletApp mx-auto flex justify-center items-start">
				<div className={`${!walletEngaged ? "backdrop" : ""} bd-1`}></div>
				<RenderStep 
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
