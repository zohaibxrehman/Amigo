import userPhoto from '../../assets/potrait4.png' 
import userPhoto1 from '../../assets/potrait3.jpg'
import userPhoto2 from '../../assets/potrait1.jpeg'

const dashboardData = 
    {
        profile: {
            profilePhoto: userPhoto,
            profileName: 'Vishnu Varma'
        },

        notifications: [
            [ {
                    profilePhoto: userPhoto1,
                    profileName: 'Vishnu Varma'
                    },
            {
                    msg: "I am interested in this place",
                    date: "November 1, 2020",
                    activity: "Post Activity"
            }
            ],
            [ {
                profilePhoto: userPhoto2,
                profileName: 'Anthony Jones'
                },
        {
                msg: "Are you interested in making this a FRAT house!",
                date: "October 29, 2020",
                activity: "Post Activity"
        }
        ]
        ]
    }

export default dashboardData