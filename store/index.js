import React from "react";
import {Transaction} from "./transactions.store";

const providers = [<Transaction.Provider/>];

const Store = ({children: initial}) => providers.reduce((children, parent) => React.cloneElement(parent, {children}), initial);

export {Store, Transaction};