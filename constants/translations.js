import {Text} from "react-native";
import * as React from "react";

export const translations = {
    en: {
        services: {
            list: {
                title: 'Services',
                item: {
                    bellOn: 'On',
                    bellOff: 'Off',
                    yearlySpend: 'Yearly spend',
                    nextPayment: 'Next payment',
                }

            }

        },
        users: {
            list: {
                title: 'Users',
                item: {
                    yearlySpend: 'Yearly spend',
                    serviceCount: (serviceCount) => `User of ${serviceCount} services`
                }
            }
        }

    }
};

