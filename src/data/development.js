import save_switch_screen_1 from './images/development/save_switcher/screen-1.png';
import save_switch_screen_2 from './images/development/save_switcher/screen-2.png';
import save_switch_screen_3 from './images/development/save_switcher/screen-3.gif';

import ozone_screen_1 from './images/development/ozone_site/screen-1.jpg';
import ozone_screen_2 from './images/development/ozone_site/screen-2.jpg';
import ozone_screen_3 from './images/development/ozone_site/screen-3.jpg';

const items = [
    {
        images: [save_switch_screen_1, save_switch_screen_2, save_switch_screen_3],
        title: "Save Switcher 2.0",
        text: "A simple application, made with electron, to switch between different sets of saves for games, as well as displaying a name, description, and image for each set.\n\n" +
                "This application was created to help manage my saves for games where I have multiple playthroughs going at once, as I have a tendency to create new saves anytime anything interesting happens, " +
                "effectively creating a timeline of saves that lead back to the beginning of the playthrough, in case for whatever reason I have to go back to a certain point. " +
                "Because of this, it's a real hassle using most ingame save browsers when multiple different playthroughs are in the mix. Also useful for games that have limited save slots.\n\n" +
                "Note: Only tested on Windows; has some Windows specific functionality"
                ,
        statusText: "Unfinished (missing functionality)",
        tech: [
            'node',
            'html',
            'css',
            'js',
        ],
        gitURL: "https://github.com/ezekielz1/save-switcher",
    },
    {
        images: [ozone_screen_1, ozone_screen_2, ozone_screen_3],
        title: "Ozone Website",
        text: "A website developed in 2016 to display any news and information regarding the Ozone e-sports team, as well as player profiles.\n\n" +
                "Thie site once showed up to date player information, links to their social media profile, and their online status on steam. Due to the Steam Web API no longer working as it used to " +
                "I have disabled that functionality of the site. I have also removed social media links, and player name & age information for their privacy. The social feeds used for the news section have also been disabled.",
        statusText: "Defunct",
        tech: [
            'php',
            'html',
            'css',
            'js',
        ],
        // gitURL: "https://example.com",
    },
    {
        title: "This Site",
        text: "This site was developed in December 2021, to show some of my previous projects and designs.\n\n" +
                "Whilst looking through my local drives to find projects I had worked on, I realized that I had almost no web projects that I had worked on in the last 2-3 years (they are on a server that I do not currently have access to). " + 
                "Due to this, I had no projects that made use of modern frameworks/libraries. So I decided to make this site.",
        tech: [
            'react',
            'html',
            'css',
            'js'
        ],
        statusText: "Under Construction",
        gitURL: "https://github.com/ezekielz1/profile-site"
    }
]

export default items;