export default {
    namespaced: true,
    state: {
        notificationsList: [{
            title: 'Report',
            description:'Lorem ipsum dolor sit amet, consectetur',
            withAction:true,
            date:'03.January 2021',
            progress:false,
            isActive: true
        },
            {
            title: 'Offer request',
            description:'Lorem ipsum dolor sit amet, consectetur',
            withAction:true,
            date:'03.January 2021',
            progress:false,
            isActive: true
        },
            {
            title: 'Process update | Elisa Esti AS',
            description:'Lorem ipsum dolor sit amet, consectetur',
            withAction:false,
            date:'03.January 2021',
            progress:true,
            isActive: false
        },
            {
            title: 'Subscription | Will and soon',
            description:'Lorem ipsum dolor sit amet, consectetur',
            withAction:false,
            date:'03.January 2021',
            progress:false,
            isActive: false
        }


        ],
    },
    mutations: {
        // SET_BOARD(state, board) {
        //     state.board = board;
        // },

    },
    actions: {
        // fetchFolders({rootState, state, commit, dispatch}) {
        //
        // },

    },
    getters: {
        // getCurrentBoard: state => {
        //     return state.board;
        // },


    }
};