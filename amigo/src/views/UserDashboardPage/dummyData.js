import adminPhoto from '../../assets/ProfilePhoto.jpeg' 
import userPhoto1 from '../../assets/potrait4.png'
import userPhoto2 from '../../assets/potrait1.jpeg'

const dashboardData = 
    {
        profile: {
            profilePhoto: userPhoto1,
            profileName: 'Vishnu Varma'
        },

        notifications: [
            [ {
                    profilePhoto: userPhoto1,
                    profileName: 'Vishnu Varma'
                    },
            {
                    msg: "Seeking a roommate for 2bd apartment",
                    date: "November 3, 2020",
                    activity: "Post Activity"
            }
            ],
            [ {
                profilePhoto: userPhoto2,
                profileName: 'Anthony Jones'
                },
        {
                msg: "Looking for four roommates to start a FRAT house!",
                date: "October 23, 2020",
                activity: "Post Activity"
        }
        ]
        ]
    }

export default dashboardData