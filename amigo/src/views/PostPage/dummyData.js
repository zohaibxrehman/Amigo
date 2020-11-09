import userPhoto from '../../assets/potrait4.png'
import housePhoto from '../../assets/interior-1.jpg'

const postData = 
    {
        profile: {
            profilePhoto: userPhoto,
            profileName: 'Vishnu Varma'
        },

        photo: housePhoto,

        header: {
            title: "Seeking a roomate for 2bd apartment",
            budget: "$1150"
        },

        description: {
            unit: 'One bedroom for rent in a 2 bedroom basement apartment in Harbord Village, starting November 1, 2020.',
            price: '$1150 (includes internet + utilities). First and last month’s rent required.',
            location: 'Bathurst and Harbord',
            leaseTerm: '12 months, preferably'
        },

        requirements: ['No Smoking', 'Male', 'Student', 'Less Parties']
    }

export default postData