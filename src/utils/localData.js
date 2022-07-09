import image_1 from '../assets/characters.jpg';
import image_2 from '../assets/characters_2.jpg';
import image_3 from '../assets/characters_3.jpg';
import image_4 from '../assets/characters_4.jpg';
import image_5 from '../assets/spider.jpg';

const images = [
    {
        id: 1,
        image: image_1,
    },
    {
        id: 2,
        image: image_2,
    },
    {
        id: 3,
        image: image_3,
    },
    {
        id: 4,
        image: image_4,
    },
    {
        id: 5,
        image: image_5,
    },
];

const navLinks = [
    {
        id: 1,
        title: 'home',
        path: '/',
    },
    {
        id: 2,
        title: 'heroes',
        path: '/characters',
    },
    {
        id: 3,
        title: 'comics',
        path: '/comics',
    },
    {
        id: 4,
        title: 'creators',
        path: '/creators',
    },
    {
        id: 5,
        title: 'favorites',
        path: '/favorites',
    },
];

const faqData = [
    {
        title: 'What is this app about?',
        article:
            '<p>This application is based on the MARVEL database and provides a large amount of data related to the MARVEL universe. Characters, comics, latest releases - all this can be found here with a detailed description. You can get up to 100 items in one request.</p>',
    },
    {
        title: 'What can i do in the heroes area?',
        article:
            '<p>In the heroes area you can find any character from the MARVEL universe and get information about him. You can also watch comics related to this character and use filters if you want to find a specific comic.</p><p>Not all characters have a detailed description and image, but this is because these data are missing in the MARVEL database.</p>',
    },
    {
        title: 'What can i do in the comics area?',
        article:
            '<p>In the comics area you can watch various comics published by MARVEL. You can search for a specific comic using special filters and get information about it.</p><p>As with the characters, not all comics have a detailed description and image due to the lack of this data in the MARVEL database.</p>',
    },
    {
        title: 'What are the favorites?',
        article:
            "<p>If you liked some comic and don't want to search for it again, you can add it to your favorites. The comic will be stored there until you delete it from your favorites. You can also delete all favorites by clicking on the corresponding button on the favorites page.</p>",
    },
];

export { images, navLinks, faqData };
