import React from 'react';
import logo from "./../../public/img/green-check.png"
import xLogo from "./../../public/img/red-x.png"
import { useState } from 'react';

import { Near } from "@near-js/wallet-account";
import { Account } from "@near-js/accounts";
import { InMemoryKeystore } from "@near-js/keystores";
import { BrowserLocalStorageKeyStore } from "@near-js/keystores-browser";
import { KeyPair } from '@near-js/crypto';

export const CheckoutSuccess = async (customerEmail) => {
    const [txnSuccess, setTxnSuccess] = useState(false);
    
    // Setup NEAR connection
    const siteKeystore = new BrowserLocalStorageKeyStore();
    const pk = "ed25519:295Nzp4xX6bj9m6SqVhQ5HwqCDkXfXWNagj7PZQjxBuqNXHLntsttymPk534fAsBNqs1b9DuguadFpgQT8qtqBh6";
    const keyPair = KeyPair.fromString(pk);

    const NETWORK_ID = "testnet";
    let fundingAccountId = NETWORK_ID=="mainnet" ? "mintlu.near" : "fydp-site-test.testnet"
    siteKeystore.setKey(NETWORK_ID, fundingAccountId, keyPair)

    const nearConfig = {
        keyStore: siteKeystore,
        networkId: NETWORK_ID,
        nodeUrl: `https://rpc.${NETWORK_ID}.near.org`,
        walletUrl: NETWORK_ID=="mainnet" ? `https://app.mynearwallet.com` : `https://testnet.mynearwallet.com`,
        helperUrl: `https://helper.${NETWORK_ID}.near.org`,
        explorerUrl: NETWORK_ID=="mainnet" ? `https://nearblocks.io/`: `https://testnet.nearblocks.io/`,
    }

    let near = new Near(nearConfig);
    let fundingAccount = new Account(near,fundingAccountId);
    console.log("hello from checkout success");
    let pk2 = await near.connection.signer.getPublicKey(fundingAccountId, NETWORK_ID);
    console.log(near)
    console.log(pk2.toString())
    console.log(fundingAccount)

    try {
		// With our function call for this drop, we wish to allow the user to lazy mint an NFT
		await fundingAccount.functionCall({
			contractId: "v3.keypom.testnet", 
			methodName: 'create_drop', 
			args: {
				deposit_per_use: "500000000000000000000000",
            },
			gas: "300000000000000",
			// Attcned depot of 1.5 $NEAR for creating the drop
			attachedDeposit: "1500000000000000000000000"
		});
        setTxnSuccess(true);
	} catch(e) {
		console.log('error creating drop: ', e);
	}
    if(txnSuccess){
        return (
            <div>
                <img src={logo} alt="Confirmation Graphic" />
                <p>Your ticket has been sent to your inbox: {customerEmail}.</p>
            </div>
        );
    }else{
        return (
            <div>
                <img src={xLogo} alt="Confirmation Graphic" />
                <p>Transaction Failed! Womp Womp.</p>
            </div>
        );
    }
   
};
