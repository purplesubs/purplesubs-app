export const translations = {
    en: {
        bottomTabs:{
            services: {
                headerTitle: 'Services',
                tabTitle: 'SERVICES'
            },
            users: {
                headerTitle: 'Users',
                tabTitle: 'USERS'
            },
            dashboard: {
                headerTitle: 'Dashboard',
                tabTitle: 'STATS'
            },
            events: {
                headerTitle: 'Events',
                tabTitle: 'EVENTS'
            },
            account: {
                headerTitle: 'Account',
                tabTitle: 'ACCOUNT'
            }
        },
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

