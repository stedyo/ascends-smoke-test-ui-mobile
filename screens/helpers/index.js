/**
 * Created by ggoma on 12/17/16.
 */
const profile = [
    {
        source: 'https://images.unsplash.com/photo-1518725522904-4b3939358342?fit=crop&w=210&q=80',
        name: 'Bob the Builder',
        online: false,
    },
    {
        source: 'https://images.unsplash.com/photo-1518725522904-4b3939358342?fit=crop&w=210&q=80',
        name: 'Cookie Monster',
        online: true,
    },
    {
        source:'https://images.unsplash.com/photo-1518725522904-4b3939358342?fit=crop&w=210&q=80',
        name: 'Elmo',
        online: false,
    }
];

const images = {
    '1': 'https://images.unsplash.com/photo-1518725522904-4b3939358342?fit=crop&w=210&q=80',
    '2':'https://images.unsplash.com/photo-1518725522904-4b3939358342?fit=crop&w=210&q=80',
    '3': 'https://images.unsplash.com/photo-1518725522904-4b3939358342?fit=crop&w=210&q=80',
    '4': 'https://images.unsplash.com/photo-1518725522904-4b3939358342?fit=crop&w=210&q=80',
    '5': 'https://images.unsplash.com/photo-1518725522904-4b3939358342?fit=crop&w=210&q=80'
};

export function randomProfile() {
    var random = Math.floor((Math.random() * profile.length));

    return profile[random];
}

export function getImage(index) {
    return images[index];
}